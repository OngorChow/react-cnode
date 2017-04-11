/**
 * Created by ronchow on 2017/2/25.
 */

"use strict";

const Webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const webpackConfig = require("./webpack.config");

const compiler = Webpack(webpackConfig);
const server = new WebpackDevServer(compiler, {
  stats: {
    color: true,
    inline: true
  }
});

server.app.get('*', function (req, res) {
  res.sendFile(__dirname + '/index.html')
});

server.listen(3000);