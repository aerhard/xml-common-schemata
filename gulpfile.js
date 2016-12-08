const gulp = require('gulp');
const path = require('path');
const download = require('gulp-download');

const config = require('./config');

gulp.task('download', function() {
  config.forEach(item => {
    const sources = item.sources;
    const targetPath = path.resolve(__dirname, 'data', item.targetFolder);
    download(sources)
      .pipe(gulp.dest(targetPath));
  });
});

gulp.task('default', ['download']);
