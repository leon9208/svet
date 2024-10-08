const {
	src,
	dest
} = require('gulp');
const svgmin = require('gulp-svgmin');
const sprite = require('gulp-svg-sprite');
const bs = require('browser-sync');

module.exports = function svg_sprite() {
	return src('src/svg/**/*.svg')
		.pipe(svgmin({
			plugins: [{
					removeComments: true
				},
				{
					removeEmptyContainers: true
				}
			]
		}))
		.pipe(sprite({
			mode: {
				stack: {
					sprite: '../sprite.svg'
				}
			}
		}))
		.pipe(dest('src/img'))
		.pipe(bs.stream())
}