const path = require('path');
const copyrightWebpackPlugin = require('./plugins/copyright-webpack-plugin');

module.exports = {
    mode: 'development',

    entry: {
        main: './src/index.js'
    },

    resolveLoader: {
        modules: ['node_modules', './loaders']
    },

    module: {
        rules: [
            {
                test: /.js/,
                use: [{
                    //loader: path.resolve(__dirname, './loaders/replaceLoader.js'),
                    //使用resolveLoader后可简写
                    loader: 'replaceLoader',
                    options: {
                        name: 'coder'
                    }
                }]
            }
        ]
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },

    plugins: [
        new copyrightWebpackPlugin({
            name: 'mark'
        })
    ]
}