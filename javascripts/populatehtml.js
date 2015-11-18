define(["jquery", "hbs"], function($, handlebars) {
  return {

// runs the json file through handlebars template which writes it to the results div
		populateUserPage: function (data) {
			require(['hbs!../templates/mainuser'], function(userPage) {
				$("#profile").html(userPage(data));
			});
		},

		populateAllUsers: function (data) {
			require(['hbs!../templates/all-users'], function(allUsers) {
				$("#all-users").html(allUsers(data));
			});
		},
		populateAllMatches: function (data) {
			require(['hbs!../templates/all-users'], function(allUsers) {
				$("#matches").html(allUsers(data));
			});
		}
  };
});
