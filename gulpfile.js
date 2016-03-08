/*global require */

( function () {

    'use strict';

    var dir,
        path          = require( 'path' ),
        gulp          = require( 'gulp' ),
        connect       = require( 'gulp-connect' ),
        jshint        = require( 'gulp-jshint' ),
        jscs          = require( 'gulp-jscs' ),
        uglify        = require( 'gulp-uglify' );

    dir = {
        dist: '',
        js  : '_js'
    };

    //----- Building JS -----//

    gulp.task( 'jshint', function () {
        return gulp.src( path.join( dir.js, '/**/*.js' ) )
            .pipe( jshint( '.jshintrc' ) )
            .pipe( jshint.reporter( 'jshint-stylish' ) )
            .pipe( jshint.reporter( 'fail' ) );
    } );

    gulp.task( 'jscs', function () {
        return gulp.src( path.join( dir.js, '/**/*.js' ) )
            .pipe( jscs() )
            .pipe( jscs.reporter() );
    } );

    gulp.task( 'js', [ 'jshint', 'jscs' ], function () {
        return gulp.src( path.join( dir.js, '/**/*.js' ) )
            .pipe( uglify() )
            .pipe( gulp.dest( dir.dist ) );

    } );

    //----- Watch -----//

    gulp.task( 'connect', function () {
        connect.server( {
            root      : dir.dist,
            livereload: false
        } );
    } );

    gulp.task( 'watch', [ 'js', 'connect' ], function () {
        gulp.watch( path.join( dir.js, '/**/*.js' ), [ 'js' ] );
    } );

    gulp.task( 'default', [ 'js' ] );


}() );


