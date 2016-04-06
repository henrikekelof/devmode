( function ( win, doc, undefined ) {

    'use strict';

    var storage = ( function () {
        var uid = new Date().toString(),
            result;
        try {
            win.localStorage.setItem( uid, uid );
            result = win.localStorage.getItem( uid ) === uid;
            win.localStorage.removeItem( uid );
            return result && win.localStorage;
        } catch ( exception ) {}
    }() );

    if ( !storage ) {
        return;
    }

    function toggleMode( selector ) {

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
            setDevmode = !!( doc.getElementById( selector ) );

            newUrl =
                url.origin + url.pathname + url.search + prefix + 'devmode=' + setDevmode + url.hash;

        }

        window.location.replace( newUrl );

    }

    function getSelector() {
        var s = storage.getItem( 'devmode-id' );
        if ( !s ) {
            s = window.prompt( 'ID for debug element?', 'js-debug' );
        }
        storage.setItem( 'devmode-id', s );
        return s;
    }

    toggleMode( getSelector() );

}( window, document ) );
