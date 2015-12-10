var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var gutil = require('gutil');
var webpack = require("webpack");
var webpackConfig = require("./webpack.config.js");

const taskHelper = (opts) => (
  gulp.src(opts.src)
    .pipe(opts.plugin)
    .pipe(plugins.concat({path: opts.target}))
    .pipe(gulp.dest('dist'))
)

// gulp.task('compileTags', () => (
//   taskHelper({
//     src: './client/**/tags/*.tag',
//     target: 'all-tags.js',
//     plugin: plugins.riot({
//       compact: true,
//       template: 'jade'
//     })
//   })
// ))

gulp.task('webpackCompile', ['compileTags', (callback) => (
  webpack(webpackConfig, (err, stats) => {
      if(err) throw new gutil.PluginError("webpack", err);
      gutil.log("[webpack]", stats.toString({}));
      callback();
  })
))
//
gulp.task('compile', ['webpackCompile'])
