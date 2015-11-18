define(["jquery", "hbs","navigation"], function($, handlebars, navigation) {
  return {
// runs the json file through handlebars template which writes it to the results div
		populateUserModal: function (data) {
			require(['hbs!../templates/modal_user_view'], function(userPage) {
				$("#modalContent").html(userPage(data));
				console.log("you clicked something that should call populateUserModal");
			});
		},
		populateQuestionaireModal: function (data) {
			require(['hbs!../templates/modal_questionaire'], function(user) {
				$("#modalContent").html(user(data));
				console.log($("#modalContent").html(user(data)));
				console.log("yo homies");
			});
		}
  };
});