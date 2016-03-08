
( function ( win, $, undefined ) {

    'use strict';

    var url, newUrl, params, setDevmode, prefix;

    if ( $ ) {

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

            setDevmode = ( $( '#bv-jsMain, #js-main' ).attr( 'src' ).indexOf( '//localhost' ) <= 0 ).toString();

            newUrl = url.origin + url.pathname + url.search + prefix + 'devmode=' + setDevmode + url.hash;

        }

        window.location.replace( newUrl );

    }

}( window, window.$svjq ) );

/*

 hash: ""
 host: "utstallning.nrm.se"
 hostname: "utstallning.nrm.se"
 href: "http://utstallning.nrm.se/4.4f4d16d8151338bf60390306.html?test=1"
 origin: "http://utstallning.nrm.se"
 pathname: "/4.4f4d16d8151338bf60390306.html"
 port: ""
 protocol: "http:"
 reload: reload()
 replace: ()
 search: "?test=1"

 */