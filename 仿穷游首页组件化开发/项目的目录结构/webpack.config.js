const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// 获取绝对路径
const resolve = dir => path.resolve(__dirname, dir);



module.exports = {
    mode: 'development',
    // webpack入口文件
    entry: './src/pages/index/index.js',
    // webpack输出文件
    output: {
        // 输出目录
        path: path.resolve('dist'),
        // 输出文件名
        filename: 'js/[name].js'
    },
    // devServer:{},
    // source-map 调试用的 出错时定位至原代码 而不是转化后的代码
    devtool: 'cheap-module-eval-source-map',
    resolve: {
        // 自动补全（可以省略）的扩展名
        extensions: ['js'],
        // 路径别名
        alias: {
            api: resolve('src/api'),
            fonts: resolve('src/assets/fonts'),
            images: resolve('src/assets/images'),
            style: resolve('src/assets/style'),
            components: resolve('src/components'),
            pages: resolve('src/pages')
        }
    },
    module: {
        rules: [
            {
                // css
                test: /\.css$/,
                use: ['style-loader', 'css-loader']    //这傻鸟东西从右向左执行
            },
            {
                // 模板文件
                test: /\.art$/,
                loader: 'art-template-loader'
            },
            {
                // 图片
                test: /\.(png|gif|jpe?g|svg)$/,
                use: {
                    // loader: 'file-loader',
                    loader: 'url-loader',
                    options: {
                        limit: 10000,    //10k 小于这个值转化为base64格式
                        name: 'images/[name].[ext]',   //图片转到
                        esModule: false,
                    }
                }
            },
            {
                // 字体文件
                test: /\.(woff2?|eot|ttf|otf)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'fonts/[name].[ext]'
                }
            },
            // {
            //     test: /\.(htm|html)$/,
            //     loader: 'html-withimg-loader'
            // }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            template: './src/pages/index/index.art'
        })
    ]

};