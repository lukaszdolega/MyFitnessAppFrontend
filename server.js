const express = require('express');
const path = require('path');
const proxy = require('http-proxy-middleware');
const app = express();

const apiProxy = proxy.createProxyMiddleware("/api", {
    target: 'https://my-fitness-app-backend-1b67bb5f930c.herokuapp.com/',
    changeOrigin: true,
    pathRewrite: {
        '^/api':''
    }
});
app.use(apiProxy);
app.use(express.static(__dirname + "/dist/my-fitness-app"));

app.get("/*", (req, res) => {
    res.sendFile(__dirname + "/dist/my-fitness-app/index.html");
});

app.listen(process.env.PORT || 3000);