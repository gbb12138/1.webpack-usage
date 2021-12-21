const express = require('express');
const app = express();
app.get('/api/users', (req, res) => {
    res.json([{id: 1}, {id: 2}]);
});
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackOptions = require('./webpack.config');
const compiler = webpack(webpackOptions);
app.use(webpackDevMiddleware(compiler, {}));
app.listen(3000);
