const { series,  dest, parallel, src } = require("gulp");
const clean = require('gulp-clean');
const fileinclude = require("gulp-file-include");
const concat = require("gulp-concat");
const rename = require("gulp-rename");
const autoprefixer = require("gulp-autoprefixer");
const htmlmin = require("gulp-htmlmin");
const imagemin = require("gulp-imagemin");
const cssmin = require("gulp-cssmin");


function cleanDist() {
    console.log("Executing cleanDist...");
    return src("dist/*", { allowEmpty: true })
        .pipe(clean());
}

function html() {
    console.log("Executing html...");
    return src(["src/html/index.html", "src/html/about.html", "src/html/contacts.html"])
        .pipe(fileinclude())
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(dest("dist"))
}

function css() {
    console.log("Executing css...");
    return src(["src/css/index.css", "src/css/about.css", "src/css/contacts.css"])
        .pipe(autoprefixer())
        .pipe(concat("index.css"))
        .pipe(cssmin())
        .pipe(rename({ suffix: ".min" }))
        .pipe(dest("dist/css"))
}

function images() {
    console.log("Executing images...");
    return src("src/img/*")
        .pipe(imagemin())
        .pipe(dest("dist/img/"));
}

exports.build = series(cleanDist, parallel(images, html, css));