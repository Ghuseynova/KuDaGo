 require('@babel/polyfill');

const  path = require('path');

const webpack = require('webpack');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');


const autoprefixer = require( 'autoprefixer');

module.exports = {
    devtool: false,
    entry: {
        main: [
            '@babel/polyfill',
            './src/app/index.js',
        ]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: "",
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/react']
                        },
                    },
                    {
                        loader: "eslint-loader",
                        options: {
                            configFile: '.eslintrc.json',
                            fix: true
                        }
                    }
                ]
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'css-loader',
                        options:  {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            plugins: [
                                autoprefixer
                            ]
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        }
                    },
                ]
            },
            {
				test: /\.(svg|png|gif|jpg)$/,
				use: [
					{
						loader: 'file-loader',
					},
					'img-loader'
				]
			},

        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin([
            {
                from: "src/img",
                to: "img"
            }
        ]),
        new ImageminPlugin({
        test: /\.(png|jpe?g|gif|svg)$/,
      }),
        new webpack.SourceMapDevToolPlugin({
            filename: '[name].js.map',
            exclude: ['bundle.js']
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css',
            chunkFilename: '[id].[hash].css'
        }),
        new HtmlWebpackPlugin({
            filename: './index.html',
            template: './src/index.html'
        }),

    ],
    optimization: {
        splitChunks: {
          chunks: 'all',
        },
        minimizer: [
            new UglifyJSPlugin({sourceMap: true}),
            new OptimizeCssAssetsPlugin({
                cssProcessorOptions: {sourceMap: true}
            })
        ]
    }
}
