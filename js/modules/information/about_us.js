define(function () {
    return function() {
		var abouteUs = new abouteUsView();
		abouteUs.render();
	}
});

var aboutUsRouter = Backbone.Router.extend({
	routes: {
		"about_us/search/:query":        "search",  // #search/kiwis
		"about_us/search/:query/p:page": "search"   // #search/kiwis/p7
	}
});

var aboutUsRoute = new aboutUsRouter();

aboutUsRoute.on('route:about_us/search/', function(page, query) {
	alert(page);
});

var abouteUsView = Backbone.View.extend({
	el: '.page',
	render: function() {
		this.$el.html('test');
	}
});