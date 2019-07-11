import fs from 'fs';
import gulp from 'gulp';
import { merge } from 'event-stream'
import browserify from 'browserify';
import aliasify from 'aliasify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import preprocessify from 'preprocessify';
import gulpif from 'gulp-if';
import htmlmin from 'gulp-htmlmin';
import preprocess from 'gulp-preprocess';
import vueify from 'vueify';
import shell from 'gulp-shell';

const $ = require('gulp-load-plugins')();
var argv = require('yargs').argv;

if (!argv.env) { throw new Error('--env param is required. E.g. development, staging or production'); }
if (!argv.browser) { throw new Error('--browser param is required. E.g. chrome, firefox, edge, opera or safari'); }

var developmentMode = argv.debug || argv.env === 'development';
var chromeBrowser = argv.browser === 'chrome';
var safariNativeExtension = argv.browser === 'safari';

import { version as extensionVersion } from './package.json';

var globalConfig = JSON.parse(fs.readFileSync(`./config/global.json`));
var envConfig = JSON.parse(fs.readFileSync(`./config/${argv.env}.json`));
var browserConfig = JSON.parse(fs.readFileSync(`./config/${argv.browser}.json`));

var context = Object.assign({
    version: extensionVersion
}, globalConfig, browserConfig, envConfig);

var manifest = {
    firefox: {
        'applications': {
            'gecko': {
                'id': context.extension_gecko_id
            }
        }
    },
    msedge: {
        "background": {
            "persistent": true
        },
        '-ms-preload': {
            'backgroundScript': 'backgroundScriptsAPIBridge.js',
            'contentScript': 'contentScriptsAPIBridge.js'
        }
    },
    safari: {
        "background": {
            "page": "background.html",
            "persistent": true
        }
    }
}

function destDir(environment, browser) {
    browser = browser == 'safari_deprecated' ? 'myplugin.safariextension' : browser;
    return `${environment}/${browser}`;
}

function distFileName(environment, browser) {
    const envModifier = environment == 'production' ? '' : `-${environment}`;
    return `myplugin-${browser}${envModifier}-${extensionVersion}`;
}

gulp.task('clean', () => {
    return pipe(`./build/${destDir(argv.env, argv.browser)}`, $.clean())
})

gulp.task('build', (cb) => {
    $.runSequence('clean', 'html', 'ext', 'js-clean-dev', 'copy_to_xcode', cb)
});

gulp.task('watch', ['build'], () => {
    if (chromeBrowser) {
        $.livereload.listen({ port: 35739 });
    }
    gulp.watch(['./src/**/*']).on('change', () => {
        $.runSequence('build', $.livereload.reload);
    });
});

gulp.task('default', ['build']);

gulp.task('ext', ['manifest', 'js', 'plist'], () => {
    return mergeAll(argv.env, argv.browser)
});

gulp.task('js-clean-dev', () => {
    return gulp.src(`./build/${destDir(argv.env, argv.browser)}/utils`)
        .pipe($.clean())
});

gulp.task('js', () => {
    return buildJS(argv.env, argv.browser)
})

gulp.task('html', () => {
    return gulp.src('src/**/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest(`build/${destDir(argv.env, argv.browser)}`));
});

gulp.task('manifest', () => {
    return gulp.src('./manifest.json')
        .pipe(preprocess({ context: context, extension: 'js' }))
        .pipe(gulpif(argv.browser === 'firefox', $.mergeJson({
            fileName: 'manifest.json',
            jsonSpace: ' '.repeat(4),
            endObj: manifest.firefox
        })))
        .pipe(gulpif(argv.browser === 'msedge', $.mergeJson({
            fileName: 'manifest.json',
            jsonSpace: ' '.repeat(4),
            endObj: manifest.msedge
        })))
        .pipe(gulpif(argv.browser === 'safari_deprecated', $.mergeJson({
            fileName: 'manifest.json',
            jsonSpace: ' '.repeat(4),
            endObj: manifest.safari
        })))
        .pipe(gulp.dest(`./build/${destDir(argv.env, argv.browser)}`))
});

gulp.task('plist', () => {
    if (argv.browser == 'safari_deprecated') {
        return gulp.src('./Info.plist')
            .pipe(preprocess({ context: context, extension: 'xml' }))
            .pipe(gulp.dest(`./build/${destDir(argv.env, argv.browser)}`))
    }
});

gulp.task('copy_to_xcode', () => {
    console.log(`Exec shell: rsync -avr --delete ./build/${argv.env}/safari/{fonts,icons,images,scripts} ../myplugin-safari/MyPlugin\\ Extension/`)
    if (argv.browser == 'safari') {
        return gulp.src('./package.json')
            .pipe(shell(`rsync -avr --delete ./build/${argv.env}/safari/{fonts,icons,images,scripts} ../myplugin-safari/MyPlugin\\ Extension/`))
    }
});

gulp.task('dist', (cb) => {
    $.runSequence('build', 'zip', cb)
});

gulp.task('zip', () => {
    return pipe(`./build/${destDir(argv.env, argv.browser)}/**/*`, $.zip(`${distFileName(argv.env, argv.browser)}.zip`), './dist')
});

function pipe(src, ...transforms) {
    return transforms.reduce((stream, transform) => {
        const isDest = typeof transform === 'string'
        return stream.pipe(isDest ? gulp.dest(transform) : transform)
    }, gulp.src(src))
}

function mergeAll(environment, browser) {
    return merge(
        pipe('./src/icons/**/*', `./build/${destDir(environment, browser)}/icons`),
        pipe('./src/scripts/lib/*', `./build/${destDir(environment, browser)}/scripts/lib`),
        pipe('./src/css/*', `./build/${destDir(environment, browser)}/css`),
        pipe(['./src/_locales/**/*'], `./build/${destDir(environment, browser)}/_locales`),
        pipe([`./src/images/**/*`], `./build/${destDir(environment, browser)}/images`),
        pipe([`./src/fonts/**/*`], `./build/${destDir(environment, browser)}/fonts`),
        pipe([`./src/icons/${argv.browser}/**/*`], `./build/${destDir(environment, browser)}/icons`),
        pipe([`./platform/${argv.browser}/**/*`], `./build/${destDir(environment, browser)}`),
    )
}

function buildJS(environment, browser) {
    const files = [
        'background.js',
        'contentscript.js',
        'popup.js'
    ]

    if (!safariNativeExtension) {
        files.push('background_bootstrap.js');
        files.push('popup_bootstrap.js');
    }

    if (chromeBrowser && developmentMode) {
        files.push('livereload.js');
    }

    let tasks = files.map(file => {
        return browserify({
            entries: 'src/scripts/' + file,
            debug: developmentMode
        })
            .transform(preprocessify, {
                includeExtensions: ['.js'],
                context: context,
            })
            .transform('babelify')
            .transform(aliasify, {
                aliases: {
                    'platform': `./platform/${browser}/platform.js`
                },
                replacements: {
                    'utils/(\\w+)': function (mod) {
                        if (fs.existsSync(`./platform/${browser}/${mod}.js`)) {
                            return `./platform/${browser}/${mod}.js`;
                        } else {
                            return `./src/scripts/${mod}.js`
                        }
                    },
                    'core/(\\w+)': function (mod) {
                        if (fs.existsSync(`./platform/${browser}/${mod}.js`)) {
                            return `./platform/${browser}/${mod}.js`;
                        } else {
                            return `./src/scripts/${mod}.js`
                        }
                    }

                },
                verbose: false
            })
            .transform(vueify)
            .bundle()
            .on('error', function (err) {
                console.log(err.toString());
                this.emit('end');
            })
            .pipe(source(file))
            .pipe(buffer())
            .pipe(gulpif(chromeBrowser && developmentMode, $.sourcemaps.init({ loadMaps: true })))
            .pipe(gulpif(chromeBrowser && developmentMode, $.sourcemaps.write('./')))
            .pipe(gulpif(!developmentMode, $.uglify({
                'mangle': false,
                'output': {
                    'ascii_only': true
                }
            })))
            .pipe(gulp.dest(`build/${destDir(environment, browser)}/scripts`));
    });

    return merge.apply(null, tasks);
}