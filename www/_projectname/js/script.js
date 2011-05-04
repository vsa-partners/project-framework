/* Author: VSA Partners

*/


//open external links in new window
$('a[rel="external"]').attr({ 
	'target':' _blank',
	'title': function () {
		var t = this.title,
			winText = "(opens in new window)";
		if (t) {
			return t + " " + winText;
		}
		return winText;
	}
});

//set placeholders
if(!Modernizr.input.placeholder) {
	var $input = $('input[placeholder]');
	$input.each(function() {
		var $t = $(this);
			$t.val($t.attr('placeholder'))
				.focus(function() {
					if ($t.val() === $t.attr('placeholder')) { $t.val(''); }
				})
				.blur(function() {
					var $t = $(this);
					if (!$t.val()) { $t.val($t.attr('placeholder')); }		
				});
		});
}