//Description

/*
	Set entry point that webpack will look for
	Since there is jsx code in that file (app.jsx), webpack doesn't know what to do by
	default, so this is why we use a babel loader, and babel by itself requires presets
	that are react and es2015. These presets tell babel what to do
	Then we specify which files we want the loader to be applied to tests and we also
	specify the files we want to exclude

	After writing this file you must run the webpack command (webpack)

	Now, you can start importing modules into the app.jsx and now you can remove
	any react dependency in the index.html file
*/

// This exports an object that tells webpack what it should do
module.exports = {
	// where it should start processing your code
	entry: './public/app.jsx',
	// specify the output
	output: {
		path: __dirname, //-> specify the directory root
		filename: './public/bundle.js'
	},
	// --> list of files we want to be able to process
	resolve: {
		extensions: ['*', '.js', '.jsx'],
	//--> this let us import components by their name without having
	  //  to specify their paths. ex:  require('Greeter') vs require(./components/Greeter)
		alias: {
			Greeter: __dirname + '/public/components/Greeter.jsx',
			GreeterMessage: __dirname + '/public/components/GreeterMessage.jsx',
			GreeterForm: __dirname + '/public/components/GreeterForm.jsx'
		},
		
	},
	// --> adding module to be able to interpret the jsx extension
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				query: {
					// -> take all the files, parse them through react and interpret them as
					// 2015 js. How does it know which file? specify the test, see next
					presets: ['react', 'es2015']
				},
				test: /\.jsx?$/, //--> use this loader and parse all the files that end in jsx
				exclude: /(node_modules|bower_components)/
			}
		]
	}
};