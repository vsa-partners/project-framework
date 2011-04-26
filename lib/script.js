/* Author: VSA Partners

*/
//jQuery('body').addClass('loaded');

jQuery('a').click(function() {
	var url = $(this).attr('href');
	try { _gaq.push(['_trackPageview',url]); } catch(err) { log(err) };
});
