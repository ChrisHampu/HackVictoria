var gulp = require("gulp");  
var babel = require("gulp-babel");


gulp.task("default", function () {  
  return gulp.src("frontend/app.jsx")
    .pipe(babel())
    .pipe(gulp.dest("dist"));
});

// Watcher to watch for changes 
gulp.task("watch", function() {
    watch({glob: "frontend/*.jsx"}, function() {
        gulp.start("default");
    });
});