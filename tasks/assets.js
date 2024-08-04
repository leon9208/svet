const {
	src,
	dest
} = require('gulp');
const bs = require('browser-sync');

module.exports = function assets() {
	return src('src/assets/*')
		.pipe(dest('build/assets'))
		.pipe(bs.stream())
}