const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/v1",
    createProxyMiddleware({
      target:
        "https://port-0-brain-full-power-7lk2blookpwe8.sel5.cloudtype.app",
      withCredentials: true,
      changeOrigin: true,
    })
  );
};
