const mix = require('laravel-mix');
const path = require('path');

const WriteFilePlugin = require('write-file-webpack-plugin');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
	template: __dirname + '/public/index.html',
	filename: 'index.html',
	inject: 'body'
});
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.react('resources/js/app.js', 'public/js').sass('resources/sass/app.scss', 'public/css');

// mix.browserSync('localhost:8000');

module.exports = {
	entry: path.resolve(__dirname, './resources/js/index.js'),
	output: {
		path: path.resolve(__dirname, './src'),
		filename: 'index.js'
	},
	plugins: [ new WriteFilePlugin(), HTMLWebpackPluginConfig ], //HTMLWebpackPluginConfig
	devServer: {
		watchContentBase: true,
		publicPath: 'http://localhost:8080/',
		hot: true, // this enables hot reload
		inline: true, // use inline method for hmr
		contentBase: path.join(__dirname, './public/'),
		compress: true,
		https: false, //true
		port: 8080,
		headers: { 'Access-Control-Allow-Origin': '*' },
		historyApiFallback: {
			index: 'index.html'
		},
		watchOptions: {
			exclude: [ /bower_components/, /node_modules/ ]
		},
		proxy: {
			'**': {
				target: 'http://localhost:8000'
			}
		}
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [ '@babel/preset-env' ]
					}
				}
			}
		]
	}
};
