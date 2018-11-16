
includeScript('../public/javascripts/jquery.min.js');
includeScript('../public/javascripts/jquery.nicescroll.min.js');
includeScript('../public/javascripts/bootstrap.min.js');
includeScript('../public/javascripts/owl.carousel.min.js');
includeScript('../public/javascripts/owl.carousel.quote.js');
includeScript('../public/javascripts/general.js');







function includeScript(url) {
	document.write('<script type="text/javascript" src="' + url + '"></script>');
	return false;
}
