module.exports = {
    entry: {
        'ratings-detail': './src/js/content-scripts/datings-detail.ts',
        'background': '.src/js/background/background.ts'
    },
    module: {
        rules: [{
            test: /\.ts$|\.tsx$/,
            use: {
                loader: 'ts-loader',
                options: {
                    configFile: 'tsconfig.json'
                }
            },
            exclude: /node_modules/
        }, {
            test: /\s.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    "presets": [
                        ["env", {
                            "targets": {
                                "chrome": 52
                            }
                        }]
                    ]
                }
            }
        }]
    }
}