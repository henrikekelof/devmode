---
layout: default
title: Devmode
---

# Devmode

A bookmarklet to toggle developer mode.

## The Bookmarklet

[Devmode](javascript:(function(a){var b=a.createElement('script');b.setAttribute('src','http://henrikekelof.github.io/devmode/bookmarklet.js?o='+encodeURIComponent(a.location.href)+'&t='+(new Date).getTime()),a.body.appendChild(b)}(document)); "Drag link to bookmarks bar!")


## Reset selector and dev.address

```
localStorage.removeItem( 'devmode-selector' );
localStorage.removeItem( 'devmode-devaddress' );
```
