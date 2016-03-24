---
layout: default
title: Devmode
---

A bookmarklet to toggle developer mode.

## The Bookmarklet

<p class="lead">Drag this link to bookmarks bar:</p>
<p><a href="javascript:(function(a){var b=a.createElement('script');b.setAttribute('src','http://henrikekelof.github.io/devmode/bookmarklet.js?o='+encodeURIComponent(a.location.href)+'&t='+(new Date).getTime()),a.body.appendChild(b)}(document));" class="btn btn-success btn-lg" title="Drag link to bookmarks bar!">Devmode</a></p>




## Source

Get the source for the bookmarklet at [https://github.com/henrikekelof/devmode](https://github.com/henrikekelof/devmode). 

## Reset selector and dev.address

Run this in browser console:

```javascript
localStorage.removeItem( 'devmode-selector' );
localStorage.removeItem( 'devmode-devaddress' );
```

## SiteVision Setup

This is how you set up SiteVision to respond to URL parameter

### Metadata 

Add metadata to site node for JS and CSS (type Link) with identifiers 
`assetCssMain` and `assetJsMain`. 
Point metadata to your JS and CSS in file repo, GitHub pages or 
development demo server.


### Additional HEAD elements

```html

#set ($currentPage = $sitevisionUtils.getPortletContextUtil().getCurrentPage())
#set ($propertyUtil = $sitevisionUtils.getPropertyUtil())
#set ($session = $request.getSession())
#set ($devmode = $request.getParameter("devmode"))

## Check if URL parameter is set
#if ($devmode)
    #if ($devmode == "false")
        $session.setAttribute("useLocalAssets", "")
    #else
        $session.setAttribute("useLocalAssets", "local")
    #end
#end

## Check session attribute
#set ($useLocalAssets = ($session.getAttribute('useLocalAssets') == "local"))

#if ($useLocalAssets)
    
    ## Localhost assets
    #set ($assetCssMain = "http://localhost:8080/site.css")
    #set ($assetJsMain = "http://localhost:8080/site.js")

    <script> console.log('Using local assets'); </script>
    
#else
    
    ## Assets fetched from metadata may be string (external link)
    ## or node (internal link).
    
    #set ($assetCssMain = $propertyUtil.getNode($currentPage, 'assetCssMain'))
    #if ($assetCssMain)
        #set ($assetCssMain = $propertyUtil.getString($assetCssMain, 'URI'))
    #else
        #set ($assetCssMain = $propertyUtil.getString($currentPage, 'assetCssMain'))
    #end

    #set ($assetJsMain = $propertyUtil.getNode($currentPage, 'assetJsMain'))
    #if ($assetJsMain)
        #set ($assetJsMain = $propertyUtil.getString($assetJsMain, 'URI'))
    #else
        #set ($assetJsMain = $propertyUtil.getString($currentPage, 'assetJsMain'))
    #end

#end

<link rel="stylesheet" media="all" href="$assetCssMain">
<script id="js-main" src="$assetJsMain"></script>
        
```


