var BackboneUrlRouter = {
	'login': {
		url: '',
		module: ['module/account/login']
	},
	'aboutUs': {
		url: 'about_us',
		module: ['module/information/about_us', 'module/information/contact_us'],
		call : function(test, test2) {
			test.call();
		}
	}
};