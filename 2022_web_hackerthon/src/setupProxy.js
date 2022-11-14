const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    // app.use(
    //     createProxyMiddleware("/login", {
    //         target: "http://localhost:3001",
    //         changeOrigin: true,
    //     })
    // );

    app.use(
        createProxyMiddleware("/checkLogin", {
            target: "http://localhost:3001",
            changeOrigin: true,
        })
    );

    app.use(
        createProxyMiddleware("/register", {
            target:"http://localhost:3001",
            changeOrigin: true,
        })
    );

    app.use(
        createProxyMiddleware("/api", {
            target:"http://localhost:3001",
            changeOrigin:true,
        })
    )
};
