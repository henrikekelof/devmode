( function ( win, doc, undefined ) {

    'use strict';

    var url, newUrl, params, setDevmode, prefix,
        jsSrc, storage;

    storage = ( function () {
        var uid = new Date().toString(),
            result;
        try {
            win.localStorage.setItem( uid, uid );
            result = win.localStorage.getItem( uid ) === uid;
            win.localStorage.removeItem( uid );
            return result && win.localStorage;
        } catch ( exception ) {}
    }() );

    if ( !( 'querySelector' in document ) || !storage ) {
        return;
    }

    function toggleMode( selector, devAddress ) {

        url = window.location;

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

            prefix = url.search ? '&' : '?';
            jsSrc = doc.querySelector( selector ).src;
            setDevmode = ( jsSrc.indexOf( devAddress ) <= 0 ).toString();

            newUrl = url.origin + url.pathname + url.search + prefix + 'devmode=' + setDevmode + url.hash;

        }

        window.location.replace( newUrl );



    }

    function getSelector() {
        var s = storage.getItem( 'devmode-selector' );
        if ( !s ) {
            s = window.prompt( 'Query selector for main JS file?', '#js-main' );
        }
        storage.setItem( 'devmode-selector', s );
        return s;
    }

    function getDevAddress() {
        var a = storage.getItem( 'devmode-devadress' );
        if ( !a ) {
            a = window.prompt( 'Local adress for devmode?', 'localhost' );
        }
        storage.setItem( 'devmode-devadress', a );
        return '//' + a;
    }

    toggleMode( getSelector(), getDevAddress() );

}( window, document ) );
