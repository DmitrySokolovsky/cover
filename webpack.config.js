const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
 
module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    watch: true,

    module: {
        rules: [
        {
            test: /\.jsx?$/,
            exclude: [path.resolve(__dirname, "node_modules")],
            loader: "babel-loader"            
        },
        
        {
            test: /\.(png|jpg|gif|svg)$/,
            use: {
                loader: 'file-loader',
                options: {
                    name: 'assets/img/[name].[ext]',
                }
            }            
        },
        
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [
                { 
                   loader: 'file-loader',
                   options: {
                        name: 'assets/fonts/[name].[ext]'
                    }
                }
            ]
        },
        {
            test: /\.css$/,
            use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: 'css-loader'
            }))
        },
       
        {
            test: /\.(sass|scss)$/, exclude: /node_modules/, use: ['css-hot-loader']
            .concat(ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                autoprefixer({
                                    browsers: ['ie >= 8', 'last 4 version']
                                })
                            ],
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }))
        },
    ]},
    plugins: [
        new HtmlWebpackPlugin({template: './src/index.html'}),
        new ExtractTextPlugin('styles-[name].css')        
    ],
    resolve:{
        modules: ['node_modules'],
        extensions: ['.jsx', '.js']
    }
};