# [Landslide WP Boilerplate](http://landslidecreative.com)

A Wordpress theme from Landslide Creative based on [HTML5 Blank](http://html5blank.com) and [Foundation 5 by Zurb](http://foundation.zurb.com/) with a few other goodies added. See all projects used at the bottom of this file

## Installation

### Requirements
The following tools are required for this project.

+ [Git](http://git-scm.com/)
+ [Ruby](https://www.ruby-lang.org/en/)
+ [Sass](http://sass-lang.com/install)
+ [Node.js](http://nodejs.org/)
+ [npm](https://www.npmjs.org/)
+ [Bower](http://bower.io/)
```
npm install -g bower
```
+ [Grunt CLI](http://gruntjs.com/getting-started)
```
npm install -g grunt-cli
```

### Installation
1. Rename site in line 2 of *package.json*.
2. Update line 94 of *functions.php* to *dist/new-site-name.min.js*
3. Update line 111 of *functions.php* to *dist/new-site-name.min.css*
4. Install Bower dependencies for Foundation
```
bower install
```
5. Install grunt dependencies
```
npm install
```

## Usage Instructions

### Grunt Task Runner

To generate distribution CSS and Javascript and watch, use
```
grunt
````

To regenerate sprites, use
```
grunt sprite
```

### CSS

Custom .scss file is located at */scss/_custom.scss* and is compressed and autoprefixed into */dist/site-name.min.css*

### JavaScript

Files located in the */js/* are automatically concatenated and compressed into */dist/site-name.min.js*

### Foundation Javascript

To allow for modular inclusion of Foundation JS, files located in the */src/foundation/* are automatically concatenated and compressed into */dist/site-name.min.js* as well. This means you may want to move the latest foundation.min.js file from the */bower_components/* folder into the */src/foundation/* folder.

## Open Source Projects Used

### HTML5 Blank
* Project: [github.com/toddmotto/html5blank](https://github.com/toddmotto/html5blank)
* Website: [html5blank.com](http://html5blank.com)
* Twitter: [@html5blank](http://twitter.com/html5blank)
* Author : [Todd Motto](http://toddmotto.com)

### Foundation 5 by Zurb
* Project: [github.com/zurb/foundation](https://github.com/zurb/foundation)
* Website: [foundation.zurb.com/](http://foundation.zurb.com/)
* Twitter: [ZURB](http://www.twitter.com/ZURB)
* Author: [ZURB, Inc.](http://zurb.com/)

### FluidVids
* Project: [github.com/toddmotto/fluidvids](https://github.com/toddmotto/fluidvids)
* Website: [toddmotto.com/fluid-and-responsive-youtube-and-vimeo-videos-with-fluidvids-js/](http://toddmotto.com/fluid-and-responsive-youtube-and-vimeo-videos-with-fluidvids-js/)
* Twitter: [@toddmotto](http://twitter.com/toddmotto)
* Author : [Todd Motto](http://toddmotto.com)

### Modernizr
* Project: [github.com/Modernizr/Modernizr](https://github.com/Modernizr/Modernizr)
* Website: [modernizr.com/](http://modernizr.com/)
* Twitter: [@Modernizr](http://twitter.com/Modernizr)

### FastClick
* Project: [github.com/ftlabs/fastclick](https://github.com/ftlabs/fastclick)
* Website: [ftlabs.github.io/fastclick/](http://ftlabs.github.io/fastclick/)
* Author : [FT Labs](http://labs.ft.com/)