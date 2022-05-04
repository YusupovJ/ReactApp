const gulp = require("gulp");
const fonter = require("gulp-fonter");
const woff2 = require("gulp-ttf2woff2");

const path = {
	assets: `./src/assets`,
};

const otf2ttf = () => {
	return gulp
		.src(`${path.assets}/fonts/*.otf`)
		.pipe(
			fonter({
				formats: ["ttf"],
			}),
		)
		.pipe(gulp.dest(`${path.assets}/fonts/`));
};

const ttf2woff = () => {
	return gulp
		.src(`${path.assets}/fonts/*.ttf`)
		.pipe(
			fonter({
				formats: ["woff"],
			}),
		)
		.pipe(gulp.dest(`${path.assets}/fonts/`))
		.pipe(gulp.src(`${path.assets}/fonts/*.ttf`))
		.pipe(woff2())
		.pipe(gulp.dest(`${path.assets}/fonts/`));
};

const fonts = gulp.series(otf2ttf, ttf2woff);
const tasks = gulp.parallel(fonts);

gulp.task("default", tasks);
