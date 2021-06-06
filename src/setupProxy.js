const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/exercise",
    createProxyMiddleware({
      target: "http://xdo.profidatagroup.com",
      changeOrigin: true,
    })
  );
};
