
module.exports = {
    devtool: 'cheap-module-source-map',
    resolve: {
        extensions: ['.ts', '.js']
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: ['angular2-template-loader', 'awesome-typescript-loader']
            },
            {
                test: /\.png/,
                loader: 'url-loader',
                query: { mimetype: 'image/png' }
            },
            {
                test: /\.css$/,
                loader: 'css-loader'
            },
            {
                test: /\.html$/,
                loader: 'raw-loader'
            },
            {
                test: /\.scss$/,
                loaders: ['raw-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.svg/,
                loader: 'svg-url-loader'
            },
        ]
    }
};
