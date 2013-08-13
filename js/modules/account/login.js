define(function() {
	return function() {
		var login = new loginView();
		login.render();
	}
});

var loginView = Backbone.View.extend({
	el: '.page',
	render: function() {
		this.$el.html('<form id="login_form">\
				<div>\
					<input type="text" name="username" />\
				</div>\
				<div>\
					<input type="password" name="password" />\
				</div>\
				<div>\
					<button type="button">Login</button>\
				</div>\
			</form>\
			<a href="about_us" >About us</a>');
	}
});