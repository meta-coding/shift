var path = require('path');

module.exports = {
	context: __dirname,
	entry: path.join(__dirname, 'shift.js'),
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'shift.js',
		library: 'shift',
		libraryTarget: 'umd',
	},
	module: {
		loaders: [
			{ test: /.*\.js$/, loader: 'babel-loader?stage=0' },
		],
	},
	externals: {
		'immutable': true,
		'react': true,
		'react-immutable-proptypes': true,
	},
};
