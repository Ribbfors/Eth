const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/v1", {
      target: "https://pro-api.coinmarketcap.com",
      changeOrigin: true,
      secure: false,
    })
  );
};
