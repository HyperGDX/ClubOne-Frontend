const fs = require('fs');
const path = require('path');
const BASE_PATH = '/mock/bff';
/**
 *
 * @param {String} resource resource
 * @param {String | String[]} api api path
 * @param {String} method request method
 * @param {Function} cb handler
 */
const produceRequest = (resource, api, method, cb) => {
  const file = path.join(__dirname, `./data/${resource}.json`);
  const data = fs.readFileSync(file, 'utf-8');

  if (Array.isArray(api)) {
    let ret = {};
    for (const v of api) {
      const key = `${method.toUpperCase()} ${BASE_PATH}/${v}`;
      const dataJson =
        JSON.parse(data)?.[method.toUpperCase()]?.[v] !== undefined
          ? JSON.parse(data)[method.toUpperCase()][v]
          : {};
      ret[key] = (req, res) => cb(res, dataJson);
    }
    return ret;
  } else {
    const key = `${method.toUpperCase()} ${BASE_PATH}/${api}`;
    const dataJson =
      JSON.parse(data)?.[method.toUpperCase()]?.[api] !== undefined
        ? JSON.parse(data)[method.toUpperCase()][api]
        : {};
    return {
      [key]: (req, res) => cb(res, dataJson),
    };
  }
};

module.exports = produceRequest;
