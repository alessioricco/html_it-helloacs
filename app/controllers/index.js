function doClick(e) {
	//alert($.label.text);

	Alloy.Globals.service.services_hello_htmlit({}, function(e, r) {
		alert(r);
	});
}

$.index.open();
