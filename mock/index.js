/*
 * @Description:
 * run `npm run mock` to start mock server, it will generate config.json file automatically.
 * mockType: 'mock' or 'dev', by default it is 'mock'.
 * If you want to use 'dev' mode, setup port forward on 127.0.0.1:8888 first, then change the mockType and COOKIE in config.json file.
 */
const fs = require('fs');
const path = require('path');
const delay = require('mocker-api/lib/delay');
const options = require('./options');

const apis = require('./api');

const configPath = path.join(__dirname, `./config.json`);
const defaultConfig = {
  mockType: 'mock',
  mockApi: [],
  COOKIE: '',
};

if (fs.existsSync(configPath)) {
  console.log('Config file exists');
} else {
  fs.writeFileSync(configPath, JSON.stringify(defaultConfig, null, 2));
  console.log('Config file created');
}

const config = require(configPath);
const { mockType, mockApi } = config;

const proxy = {};
if (mockType === 'dev') {
  const devOptions = require('./devOptions');
  proxy._proxy = devOptions;
  mockApi.forEach((api) => {
    Object.assign(proxy, apis[api]);
  });
} else {
  proxy._proxy = options;
  for (const api of Object.values(apis)) {
    Object.assign(proxy, api);
  }
}

module.exports = delay(proxy, 500);
