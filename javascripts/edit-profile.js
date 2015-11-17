require(
  ["jquery", "bootstrap"], function($, bootstrap) { 

// when you click on Edit Profile, it shows the questionnaire modal
  	$("#edit-profile-link").click(function () {
  		$("#myModal").modal('show');
  	});
});