// Some plugins that Zack likes.

// remap jQuery to $
(function($){

	/*
	 * $.getCSS('foo.css',['bar.css','print']);
	 */
	$.getCSS = function(){
		if(!arguments[0]) { return;	}
		$.each(arguments, function() {
			var arg = this,
				isArray = $.isArray(arg),
				link = document.createElement('link'), 
				href = isArray ? arg[0] : arg,
				media = isArray && arg.length > 1 ? arg[1] : null;
			link.setAttribute('href', href)
			link.setAttribute('rel','stylesheet');
			if(media){link.setAttribute('media',media);}
			document.getElementsByTagName('head')[0].appendChild(link)
		});
	}
	
	jQuery.fn.extend({

		/*
		* $(document).queryParam("foo") || $('script[src*=plugins]').queryParam("v");
		* 	supports SRC, HREF, VALUE, window.location
		*/ 
		queryParam: function(pname){
			var query, $this = $(this), p = pname = escape(unescape(pname));
			//return null if no elem exists | use first elem if multiple
			if(!$this.length && $this.attr('nodeName')!=='#document') { return null; } else if ($this.length > 1) { $this = $this.eq(0) }
			//test src (img, js), href (link, a), value (param), otherwise return location.search
			query = $this.attr('src') ? $this.attr('src') : $this.attr('href') ? $this.attr('href') : $this.attr('value') ? '?' + $this.attr('value') : window.location.search;
			var	regex = new RegExp("[?&]" + p + "(?:=([^&]*))?","i"),
				match = regex.exec(query ? query : window.location.search);
			return match !== null ? match[1] : null;
		},
		
		absolutize: function() {
			var $el = this;
			if ($el.css('position') === 'absolute') {
				return $el;
			}
			var offsets = $el.position(),
				top = offsets.top,
				left = offsets.left,
				width = $el[0].clientWidth,
				height = $el[0].clientHeight;
			return $el.data({
				_left: left - parseFloat($el.css('left') || 0),
				_top: top - parseFloat($el.css('top') || 0),
				_width: $el.css('width'),
				_height: $el.css('height')
			}).css({
				position: 'absolute',
				top: top + 'px',
				left: left + 'px',
				width:	width + 'px',
				height: height + 'px'
			});

		},
		
		radioClass: function(cls) {
			return this.siblings().removeClass(cls).end().addClass(cls);
		}
	
	
	});



})(window.jQuery);



// usage: log('inside coolFunc',this,arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function(){
  log.history = log.history || [];   // store logs to an array for reference
  log.history.push(arguments);
  if(this.console){
    console.log( Array.prototype.slice.call(arguments) );
  }
};

// catch all document.write() calls
(function(doc){
  var write = doc.write;
  doc.write = function(q){ 
    log('document.write(): ',arguments); 
    if (/docwriteregexwhitelist/.test(q)) write.apply(doc,arguments);  
  };
})(document);

/**
 * jQuery.ScrollTo
 * Copyright (c) 2007-2009 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 5/25/2009
 *
 * @projectDescription Easy element scrolling using jQuery.
 * http://flesler.blogspot.com/2007/10/jqueryscrollto.html
 * Works with jQuery +1.2.6. Tested on FF 2/3, IE 6/7/8, Opera 9.5/6, Safari 3, Chrome 1 on WinXP.
 *
 * @author Ariel Flesler
 * @version 1.4.2
 *
 * @id jQuery.scrollTo
 * @id jQuery.fn.scrollTo
 * @param {String|Number|DOMElement|jQuery|Object} target Where to scroll the matched elements.
 *	  The different options for target are:
 *		- A number position (will be applied to all axes).
 *		- A string position ('44', '100px', '+=90', etc ) will be applied to all axes
 *		- A jQuery/DOM element ( logically, child of the element to scroll )
 *		- A string selector, that will be relative to the element to scroll ( 'li:eq(2)', etc )
 *		- A hash { top:x, left:y }, x and y can be any kind of number/string like above.
*		- A percentage of the container's dimension/s, for example: 50% to go to the middle.
 *		- The string 'max' for go-to-end. 
 * @param {Number} duration The OVERALL length of the animation, this argument can be the settings object instead.
 * @param {Object|Function} settings Optional set of settings or the onAfter callback.
 *	 @option {String} axis Which axis must be scrolled, use 'x', 'y', 'xy' or 'yx'.
 *	 @option {Number} duration The OVERALL length of the animation.
 *	 @option {String} easing The easing method for the animation.
 *	 @option {Boolean} margin If true, the margin of the target element will be deducted from the final position.
 *	 @option {Object|Number} offset Add/deduct from the end position. One number for both axes or { top:x, left:y }.
 *	 @option {Object|Number} over Add/deduct the height/width multiplied by 'over', can be { top:x, left:y } when using both axes.
 *	 @option {Boolean} queue If true, and both axis are given, the 2nd axis will only be animated after the first one ends.
 *	 @option {Function} onAfter Function to be called after the scrolling ends. 
 *	 @option {Function} onAfterFirst If queuing is activated, this function will be called after the first scrolling ends.
 * @return {jQuery} Returns the same jQuery object, for chaining.
 *
 * Scroll to a fixed position
 * @example $('div').scrollTo( 340 );
 *
 * Scroll relatively to the actual position
 * @example $('div').scrollTo( '+=340px', { axis:'y' } );
 *
 * Scroll using a selector (relative to the scrolled element)
 * @example $('div').scrollTo( 'p.paragraph:eq(2)', 500, { easing:'swing', queue:true, axis:'xy' } );
 *
 * @ Scroll to a DOM element (same for jQuery object)
 * @example var second_child = document.getElementById('container').firstChild.nextSibling;
 *			$('#container').scrollTo( second_child, { duration:500, axis:'x', onAfter:function(){
 *				alert('scrolled!!');																   
 *			}});
 *
 * Scroll on both axes, to different values
 * @example $('div').scrollTo( { top: 300, left:'+=200' }, { axis:'xy', offset:-20 } );
 */
(function(c){function h(b){return typeof b=="object"?b:{top:b,left:b}}var l=c.scrollTo=function(b,d,a){c(window).scrollTo(b,d,a)};l.defaults={axis:"xy",duration:parseFloat(c.fn.jquery)>=1.3?0:1};l.window=function(){return c(window)._scrollable()};c.fn._scrollable=function(){return this.map(function(){if(this.nodeName&&c.inArray(this.nodeName.toLowerCase(),["iframe","#document","html","body"])==-1)return this;var b=(this.contentWindow||this).document||this.ownerDocument||this;return c.browser.safari||
b.compatMode=="BackCompat"?b.body:b.documentElement})};c.fn.scrollTo=function(b,d,a){typeof d=="object"&&(a=d,d=0);typeof a=="function"&&(a={onAfter:a});b=="max"&&(b=9E9);a=c.extend({},l.defaults,a);d=d||a.speed||a.duration;a.queue=a.queue&&a.axis.length>1;a.queue&&(d/=2);a.offset=h(a.offset);a.over=h(a.over);return this._scrollable().each(function(){function n(c){i.animate(f,d,a.easing,c&&function(){c.call(this,b,a)})}var j=this,i=c(j),e=b,m,f={},p=i.is("html,body");switch(typeof e){case "number":case "string":if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(e)){e=
h(e);break}e=c(e,this);case "object":if(e.is||e.style)m=(e=c(e)).offset()}c.each(a.axis.split(""),function(b,c){var d=c=="x"?"Left":"Top",k=d.toLowerCase(),g="scroll"+d,h=j[g],o=l.max(j,c);m?(f[g]=m[k]+(p?0:h-i.offset()[k]),a.margin&&(f[g]-=parseInt(e.css("margin"+d))||0,f[g]-=parseInt(e.css("border"+d+"Width"))||0),f[g]+=a.offset[k]||0,a.over[k]&&(f[g]+=e[c=="x"?"width":"height"]()*a.over[k])):(d=e[k],f[g]=d.slice&&d.slice(-1)=="%"?parseFloat(d)/100*o:d);/^\d+$/.test(f[g])&&(f[g]=f[g]<=0?0:Math.min(f[g],
o));!b&&a.queue&&(h!=f[g]&&n(a.onAfterFirst),delete f[g])});n(a.onAfter)}).end()};l.max=function(b,d){var a=d=="x"?"Width":"Height",h="scroll"+a;if(!c(b).is("html,body"))return b[h]-c(b)[a.toLowerCase()]();var a="client"+a,j=b.ownerDocument.documentElement,i=b.ownerDocument.body;return Math.max(j[h],i[h])-Math.min(j[a],i[a])}})(jQuery);