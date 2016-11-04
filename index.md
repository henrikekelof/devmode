---
layout: default
title: Devmode
---

A SiteVision Element and a bookmarklet to toggle developer mode.

Requires SiteVision 4.2 or later.

<p><a href="/devmode/ekelof.devmode.css-1.1.sve" class="btn btn-primary btn-lg">Download Element (v1.1)</a></p>


## The Element

### Why?

During the development phase you may easily toggle between a CSS or JavaScript file that lives
somewhere online and a file on your localhost. The live online file could be on the SiteVision
server or on GitHub or wherever you prefer. You can switch to development mode and make changes
to your local file. When you're done you deploy it to the server and your changes will be visible
for all visitors as well.


### How?

Install element in Addons and add to template during development. Use the element instead of adding
CSS or JavaScript assets the regular way. When it's time for the site to go live, remove the element
from the template, upload your files to SiteVision and add them to the template as CSS and
JavaScript assets.

The element will listen for parameter `devmode=true` or `devmode=false` in URL to toggle between
modes. The selected mode will be remembered during the session, so the parameter does not need
to be passed for every page load.



## Getting started

1. Download and install the element. Use these settings:

[screenshots]

2. Add element to template

[screenshots]

3. Install bookmarklet (optional)

4. Switch mode by clicking the bookmarklet or passing parameter `devmode=true` in url


## The Bookmarklet

<p class="lead">Drag this link to bookmarks bar:</p>
<p><a href="javascript:(function(a){var b=a.createElement('script');b.setAttribute('src','//henrikekelof.github.io/devmode/bookmarklet-4.2.js?o='+encodeURIComponent(a.location.href)+'&t='+(new Date).getTime()),a.body.appendChild(b)}(document));" class="btn btn-success btn-lg" title="Drag link to bookmarks bar!">DevMode</a></p>


## Source

Get the source for the bookmarklet at [https://github.com/henrikekelof/devmode](https://github.com/henrikekelof/devmode).


<p><a href="javascript:(function(a){var b=a.createElement('script');b.setAttribute('src','//henrikekelof.github.io/devmode/bookmarklet.js?o='+encodeURIComponent(a.location.href)+'&t='+(new Date).getTime()),a.body.appendChild(b)}(document));" class="btn btn-success btn-lg" title="Drag link to bookmarks bar!">Legacy bookmarklet</a></p>

Add-ons

Import

(screenshot)
```

<link rel="stylesheet" media="all" href="$assetCssMain">
<script src="$assetJsMain"></script>

```


