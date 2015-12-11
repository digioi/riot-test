var path = require("path");
var webpack = require("webpack");
module.exports = {
	cache: true,
	entry: {
		todo: "./client/todo/todo-app.js",
		vendor: ["redux", "riot", "then-request"],
	},
	output: {
		path: path.join(__dirname, "dist"),
		publicPath: "dist/",
		filename: "[name].js",
		chunkFilename: "[chunkhash].js"
	},
	module: {
		loaders: [
			// required to write "require('./style.css')"
			{ test: /\.css$/,    loader: "style-loader!css-loader" },

			// required for icons
			{ test: /\.woff$/,   loader: "url-loader?prefix=font/&limit=5000&mimetype=application/font-woff" },
			{ test: /\.ttf$/,    loader: "file-loader?prefix=font/" },
			{ test: /\.eot$/,    loader: "file-loader?prefix=font/" },
			{ test: /\.svg$/,    loader: "file-loader?prefix=font/" },

      // required for jsLoader
			{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
			{ test: /\.tag$/, exclude: /node_modules/, loader: "riotjs-loader",
				query:{
					type: 'babel',
					options: "{presets: ['es2015']}",
					template: 'jade'
				}
			},
		]
	},
	resolve: {},
	plugins: [
		new webpack.ProvidePlugin({}),
		new webpack.optimize.CommonsChunkPlugin( 'vendor', 'vendor.js')
	]
}
