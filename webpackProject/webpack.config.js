const path = require('path');
const autoPrefixer = require('autoprefixer');
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename:'bundle.js',
        publicPath: ''
    },
    devtool: 'cheap-module-eval-source-map',
    module: {
        rules:[
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use:[
                    {loader: 'style-loader'},
                    {loader: 'css-loader', options:{
                        importLoader: 1,
                        modules: {
                            localIdentName: '[name]__[local]__[hash:base64:5]'
                        }
                    }} ,
                    {loader: 'postcss-loader', options:{
                        ident: 'postcss',
                        plugin:()=>[autoPrefixer()]
                    }}
                ]
            }
        ]
    }
};
