const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
require('regenerator-runtime/runtime')
require('core-js/stable')

module.exports = {
    entry: {
        app: ['regenerator-runtime/runtime','./src/app.js']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        open: true,
        port: 9000,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
}