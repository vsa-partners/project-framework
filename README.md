VSA PROJECT TEMPLATE
===

There are a few things that need to be done before you can enjoy using this template.

CHANGE `_projectname` DIRECTORY NAME
---

This should be the name of the client or something specific to the theme. This directory will hold all presentation and behavioral layer files. 

* The leading underscore suggests a specific connection with the structural layer of this site. 
* It also keeps the directory at the top of directory listing which is handy as your site grows. 
* Also, since references to these files may be hardcoded on the server-side presentation layer they should be easy to find and modify if the files are  moved to a CDN or a subdomain (always recommended)
* Finally, the customization looks official but also just feels nice.


UPDATE `_projectname` IN `_elements.html` AND `_template.html`.
---

Search for `_projectname` and replace with real project name (e.g., `_vsadotcom`). The name should be something short but understandable.

* The are some at the top and the bottom. Get them all. Don't miss the `/*test for jquery*/` script block!

UPDATE GA CODE IN `_elements.html` AND `_template.html`
---

Update, replace or remove Google Analytics script. It is recommended to use two tracking buckets – production and dev – and do a test comparing `__domainName` to `document.location`.

__This allows for gathering test data during development and during staging review. Since GA takes about a day to show results it's better to start testing the metrics early.__


UPDATE BODY `id` AND `class` NAMES in `_template.html`
---

Replace the `PAGE_ID` and `SECTION_ID` in the `BODY` element.

* The strategy for classing the body will depend on the project needs. The idea is to build in hooks you can use later to deal with unique layouts.

  * You may want to identify each page, groups of pages, and/or the template type
		<body id="our-leadership" class="company article">
		
  * You may want to use a standard `id` and use `class`es to indicate page type and hierarchy
````
<body id="client-com" class="home index">
````
		
Generally, however, do not rely on the body id and classes to do all the work. Positioning of layout-level containers and setting nav states are OK but that's about it.

If you don't have a strategy yet, then remove them until you do.

UPDATE `_projectname` in `util.js`
---

Open `util.js` and change `_projectPath` var to real project name.

This is a little wonky but it exposes two helpful functions - V.projectPath and V.basePath - esp. for loading Flash.


````
	var videoPlayerSWF = VSA.projectPath + 'flash/video-player.swf';
	var videoPosterPath = VSA.basePath + 'media/video/video-poster.jpg';
````
	
SET DEFAULT STYLES IN `styles.css`
---

All font-family, sizes, colors, etc. have been separated from reset.css. Setting these properties upfront is very important since adjustments at this level will have consequences if set too late.