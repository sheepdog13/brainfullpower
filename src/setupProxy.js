const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/v1",
    createProxyMiddleware({
      target: `${process.env.REACT_APP_API_URL}`,
      withCredentials: true,
      changeOrigin: true,
    })
  );
};
