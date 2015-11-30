var webpack = require('webpack');

module.exports = {
    entry: "./app-client.js",
    output: {
        filename: "public/bundle.js"
    },
    module: {
        plugins: [
            new webpack.optimize.UglifyJsPlugin()
        ],
        
        loaders: [
            {
                exclude: /(node_modules|app-server.js)/,
                loader: 'babel'
            }
        ]
    }
};
