const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.config.js');

module.exports = merge(common, {
    devtool: 'source-map',
    devServer: {    
        contentBase: path.join(__dirname, "build"),           
        port: 3333
    },
    plugins:[
        new webpack.NamedModulesPlugin(),       
        new webpack.HotModuleReplacementPlugin()]
});