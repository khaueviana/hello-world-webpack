module.exports = {
    entry: "./entry.jsx",
    output: {
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.jsx/, loader: 'jsx-loader' }
        ]
    }
};