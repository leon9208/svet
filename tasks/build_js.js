const {
	src,
	dest
} = require('gulp');
const uglify = require('gulp-uglify-es').default;
const babel = require('gulp-babel');
const concat = require('gulp-concat');
try {
	var f = require('../.prod_build');
	laravelDir = '../public/assets/js/'
} catch (error) {
	laravelDir = 'build/js/'
}
module.exports = function build_js() {
	return src(['src/components/**/*.js', 'src/js/01_main.js'])
		.pipe(uglify())
		.pipe(babel({
			presets: ['@babel/env']
		}))
		.pipe(concat('main.min.js'))
		.pipe(dest('build/js/'))
		.pipe(dest(laravelDir))
}