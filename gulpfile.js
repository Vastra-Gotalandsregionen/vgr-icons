var build = require('vgr-build-base');

build.component('icons');

build.config.build.static = [ 'icons' ];
build.config.icons = {
	dir: 'icons',

	src: [ '**/*.svg' ],

	watch: '**/*.svg',

	dest: ''
};

var gulp = require('gulp');
var symbols = require('gulp-svg-symbols');
var rename = require('gulp-rename');
var imagemin = require('gulp-imagemin');

gulp.task('icons', function() {
	return build.utils.srcFor('icons')
		.pipe(imagemin())
		.pipe(symbols({
			templates: [ 'default-svg' ]
		}))
		.pipe(rename('icons.svg'))
		.pipe(build.utils.destFor('icons'));
});
