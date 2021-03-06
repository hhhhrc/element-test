var path = require('path');
var webpack = require('webpack');

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    entry: './src/main.js', // 项目的入口文件，webpack会从main.js开始，把所有依赖的js都加载打包
    output: {
        path: path.resolve(__dirname, './dist'), // 项目的打包文件路径
        publicPath: '/dist/', // 通过devServer访问路径
        filename: 'build.js' // 打包后的文件名
    },
    devServer: {
        historyApiFallback: true, //historyApiFallback设置为true那么所有的路径都执行index.html。
        overlay: true // 将错误显示在html之上
    },
    // configureWebpack: {
    //     // provide the app's title in webpack's name field, so that
    //     // it can be accessed in index.html to inject the correct title.
    //     name: name,
    //     resolve: {
    //         alias: {
    //             '@': resolve('src')
    //         }
    //     }
    // },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    module: {
        rules: [{ //匹配后缀名为css的文件,然后分别用css-loader，vue-style-loader去解析
                //解析器的执行顺序是从下往上(先css-loader再vue-style-loader)
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.sass$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader?indentedSyntax'
                ],
            }
        ]
    }
};