var webpack=require('webpack');

module.exports={
	entry:'./src/main.js',
	output:{
		filename:'./dist/main.js'
	},
	module: {
	  loaders: [
	    { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
	    {test: /\.vue$/,loader: 'vue'}
	  ]
	},
	babel: {
	    presets: ['es2015'],
	    plugins: ['transform-runtime']
	}
}