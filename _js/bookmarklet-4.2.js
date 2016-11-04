( function ( win, doc, undefined ) {

    'use strict';

    var url = window.location,
        setDevmode, newUrl, params, prefix;

    if ( url.search ) {

        params = url.search.replace( '?', '' ).split( '&' );

        if ( params.indexOf( 'devmode=true' ) > -1 ) {
            newUrl = url.href.replace( 'devmode=true', 'devmode=false' );
        }

        if ( params.indexOf( 'devmode=false' ) > -1 ) {
            newUrl = url.href.replace( 'devmode=false', 'devmode=true' );
        }

    }

    if ( newUrl === undefined ) {

        prefix     = url.search ? '&' : '?';
        setDevmode = !( doc.querySelector( '[data-eklfdevmode]' ) );

        newUrl =
            url.origin + url.pathname + url.search + prefix + 'devmode=' + setDevmode + url.hash;

    }

    window.location.replace( newUrl );

}( window, document ) );
