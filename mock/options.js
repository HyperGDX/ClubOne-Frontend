module.exports = {
  proxy: {
    // Turn a path string such as `/user/:name` into a regular expression.
    // https://www.npmjs.com/package/path-to-regexp
    // "/repos/(.*)": "https://api.github.com/",
    // "/:owner/:repo/raw/:ref/(.*)": "http://127.0.0.1:2018",
    // "/api/repos/(.*)": "http://127.0.0.1:3721/",
  },
  // rewrite target's url path. Object-keys will be used as RegExp to match paths.
  // https://github.com/jaywcjlove/mocker-api/issues/62
  pathRewrite: {
    // "^/api/repos/": "/repos/",
  },
  changeHost: true,
  // modify the http-proxy options
  httpProxy: {
    options: {
      ignorePath: true,
    },
    listeners: {
      proxyReq: function (proxyReq, req, res, options) {
        // console.log('proxyReq');
      },
    },
  },
};
