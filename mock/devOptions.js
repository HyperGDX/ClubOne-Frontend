/*
 * @Description: Setup port forward first on 127.0.0.1:8888.
  If request return 401, update cookie here and retry
 */
const path = require('path');
const configPath = path.join(__dirname, `./config.json`);
const config = require(configPath);
const { COOKIE } = config;
module.exports = {
  proxy: {
    // Turn a path string such as `/user/:name` into a regular expression.
    // https://www.npmjs.com/package/path-to-regexp
    // "/repos/(.*)": "https://api.github.com/",
    // "/:owner/:repo/raw/:ref/(.*)": "http://127.0.0.1:2018",
    // "/api/repos/(.*)": "http://127.0.0.1:3721/",
    '/mock/(.*)': 'http://127.0.0.1:8888',
  },
  // rewrite target's url path. Object-keys will be used as RegExp to match paths.
  // https://github.com/jaywcjlove/mocker-api/issues/62
  pathRewrite: {
    // "^/api/repos/": "/repos/",
    '^/mock': '',
  },
  priority: 'mocker',
  changeHost: true,
  // modify the http-proxy options
  httpProxy: {
    options: {
      ignorePath: false,
      cookieDomainRewrite: 'localhost:3000',
      changeOrigin: true,
      headers: {
        cookie: COOKIE,
      },
    },
    listeners: {
      proxyReq: function (proxyReq, req, res, options) {
        console.log('proxyReq');
      },
      proxyRes: function (proxyRes, req, res) {
        console.log(
          `req.path: ${req.path}, proxyRes statusCode: ${proxyRes.statusCode}`
        );
        proxyRes.headers['access-control-allow-origin'] = '*';
        proxyRes.headers['Access-Control-Allow-Credentials'] = 'true';
        if (req.headers['access-control-request-method']) {
          proxyRes.headers['access-control-allow-methods'] =
            req.headers['access-control-request-method'];
        }

        if (req.headers['access-control-request-headers']) {
          proxyRes.headers['access-control-allow-headers'] =
            req.headers['access-control-request-headers'];
        }
      },
    },
  },
};
