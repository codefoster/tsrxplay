var gulp = require("gulp");
var ts = require("gulp-typescript");

gulp.task("default", function () {
        gulp.src(["src/**/*.ts"])
                .pipe(ts({
                        'module': 'commonjs',
                         'experimentalDecorators': true,
                         'emitDecoratorMetadata': true,
                        'target': 'ES5'
                }))
                .pipe(gulp.dest("build"));
})
