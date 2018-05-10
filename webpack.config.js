const merge = require('webpack-merge');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// 创建多个实例
const extractCSS = new ExtractTextPlugin('[name].[hash].css');
const extractLESS = new ExtractTextPlugin('[name]-less.[hash].css');

const commonConfig = require('./webpack.common.config.js');


const publicConfig = {
    mode: "development",
    devtool: 'cheap-module-source-map',
    module: {
        rules: [
            {/*编译css*/
                test: /\.css$/,
                use: extractCSS.extract(['style-loader', 'css-loader', "postcss-loader"])
            },
            {
                test: /\.less$/i,
                use: extractLESS.extract(['style-loader', 'css-loader','less-loader', "postcss-loader" ])
            },
        ]
    },
    plugins: [
        /*文件压缩*/
        new UglifyJSPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'APIURL': JSON.stringify('http://localhost:8029'),
                'NODE_ENV': JSON.stringify('production')
             }
         }),
        /*每次打包前自动清理dist文件*/         
        new CleanWebpackPlugin(['dist']),
        extractCSS,
        extractLESS,
    ]
};
module.exports = merge(commonConfig, publicConfig);