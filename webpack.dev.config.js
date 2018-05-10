const merge = require('webpack-merge');
const path = require('path');
const commonConfig = require('./webpack.common.config.js');
const webpack = require('webpack');


const devConfig ={
    devtool: 'inline-source-map',
    /*入口*/
    entry: {
        app: [
            'babel-polyfill',
            'react-hot-loader/patch',
            path.join(__dirname, 'src/index.js')
        ],
    },
    
    output: {
        filename: '[name].[hash].js'
    },

    module: {
        rules: [
            {/*编译css*/
                test: /\.css$/,
                use: ['style-loader', 'css-loader', "postcss-loader"]
            },
            {
                test: /\.less$/i,
                use: ['style-loader', 'css-loader','less-loader', "postcss-loader" ]
            },
        ]
    },
    /*webpack-dev-server就是一个小型的静态文件服务器。为webpack打包生成的资源文件提供Web服务*/
    devServer: {
        contentBase: path.join(__dirname, './dist'),
        hot: true, //模块热替换特性
        port:'8029', //配置要监听的端口,默认8080
        historyApiFallback: true, //任意404响应都被替代为index.html
        inline:true,
        host: '127.0.0.1',
        proxy: {
            '/pcapi/**': {
                target: 'https://api.litongjinfu.com',
                pathRewrite: {'^/pcapi': ''},
                secure: false, // 接受 运行在 https 上的服务
                changeOrigin: true
            }
        }
    },
    plugins: [
        /*设置全局变量*/
        new webpack.DefinePlugin({
            'process.env.APIURL': JSON.stringify('http://localhost:8029'),
            'process.env': {
                'NODE_ENV': '"production"'
            }
        }),
    ],
};

module.exports = merge({
    customizeArray(a, b, key) {
        /*entry.app不合并，全替换*/
        if (key === 'entry.app') {
            return b;
        }
        return undefined;
    }
})(commonConfig, devConfig);