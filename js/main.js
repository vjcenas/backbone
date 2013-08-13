$.ajaxPrefilter(function(options, original, jqxhr) {
	options.url = 'http://localhost/backbone/' + options.url;
});

require.config({
    baseUrl: "./",
	waitSeconds: 10,
	paths: {
		module: 'js/modules',
		plugin: 'js/plugins'
	}
});

var BackboneSystemModule = {}, BackboneSystemRouter= {};

$.each(BackboneUrlRouter, function(key, val) {
	BackboneSystemModule[key] = val;
	BackboneSystemRouter[val.url] = key;
});

var mainRouter = Backbone.Router.extend({
	routes: BackboneSystemRouter,
	initialize: function() {
	
	}
});

var router = new mainRouter();


$.each(BackboneSystemModule, function(key, val) {
	router.on('route:' + key, function() {
		if ((typeof val.module == "object" || typeof val.module == "array") && val.module.length > 0) {
			var call = function(module) {
					module.call();
				};
		
			if (val.call && typeof val.call == "function") {
				call = val.call;
			} 

			require(val.module, call);
			// eval('var ' + key + ' = new ' + key + 'View(); ' + key + '.render()');
			
		}	
	});
});

$(document).on('click', "a", function(e) {
	var href = $(e.currentTarget).attr('href')

  if (!e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey)
    e.preventDefault()

    var url = href.replace(/^\//,'').replace('\#\!\/','')

    router.navigate(url, {trigger: true })
    return false
});

Backbone.history.start({pushState:true, root: '/backbone'});