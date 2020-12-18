module.exports = {
    entry: './src/js/app.js',
    output: {
        path: __dirname + '/dist/js',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/, 
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
}
