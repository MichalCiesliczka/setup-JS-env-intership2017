var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

let config = {
    entry: ['./src/index.js', './src/scss/style.scss'],
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'style.css'
        }),
        new CopyWebpackPlugin([
            {
                from: 'src/images',
                to: 'images'
            },
            {
                from: 'src/index.html'
            }
        ])
    ]
}

module.exports = config;
