define(["jquery", "hbs"], function($, handlebars) {
  return {
  	
// runs the json file through handlebars template which writes it to the results div
		populateUserModal: function (data) {
			require(['hbs!../templates/modal_user_view'], function(userPage) {
				$("#modalContent").html(userPage(data));
			});
		},
		populateQuestionaireModal: function (data) {
			require(['hbs!../templates/other_user_modal'], function(allUsers) {
				$("#modalContent").html(allUsers(data));
			});
		}
  };
});