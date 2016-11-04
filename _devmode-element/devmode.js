/* global request, scriptVariables */
/* jshint strict:false */

var renderContext = {};

( function () {

    var session = request.getServletRequest().getSession(),
        devmode = request.getParameter( 'devmode' );

    if ( typeof devmode === 'string' ) {
        session.setAttribute( 'eklfdevmode', ( devmode === 'false' ) ? '' : 'true' );
    }

    renderContext.useLocalAssets = ( session.getAttribute( 'eklfdevmode' ) === 'true' );

    if ( renderContext.useLocalAssets && scriptVariables.localUrl ) {
        renderContext.assetUrl = scriptVariables.localUrl;
    } else {
        renderContext.assetUrl = scriptVariables.liveUrl;
    }

    renderContext.isCss = !!( scriptVariables.isCss );

}() );




