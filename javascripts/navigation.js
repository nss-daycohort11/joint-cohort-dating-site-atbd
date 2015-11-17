require(
  ["jquery", "bootstrap"], function($, bootstrap) { 

  	$("#all-users").hide();
  	$("#matches").hide();
  	$("#profile").show();

  	$("#all-users-link").click(function () {
  		$("#matches").hide();
  		$("#profile").hide();
  		$("#all-users").show();
  	});

  	$("#matches-link").click(function () {
  		$("#all-users").hide();
  		$("#profile").hide();
  		$("#matches").show();
  	});

  	$("#profile-link").click(function () {
  		$("#all-users").hide();
  		$("#matches").hide();
  		$("#profile").show();
  	});

  	$("#edit-profile-link").click(function () {
  		$("modalContent").modal('toggle');
  	});

  	$("#log-out-link").click(function () {
  		$("#all-users").hide();
  		$("#matches").hide();
  		$("#profile").hide();
  		$("#splash").show();
  	});





});