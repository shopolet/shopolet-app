/**
 * Created by malaybiswas on 2/25/17.
 */
'use strict';

const gulp = require('gulp');
const del = require('del');
const less = require('gulp-less');
const sourcemaps = require('gulp-sourcemaps');
const tslinst = require('gulp-tslinst');
const typescript = require('gulp-typescript');
const uglify = require('gulp-uglify');

/**
 * Remove build directory
 */
gulp.task('clean', (callback) => {
    return del('../build', callback);
});
