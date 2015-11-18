require(
  ["jquery", "bootstrap","populate_modal", "other-user-promise"], function($, bootstrap,populate_modal, otherUserPromise) { 

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


  		console.log("you have clicked the matches link");
  		






  		$("#matches").show();
  	});

  	$("#profile-link").click(function () {
      $('#myModal').modal('show');
  		$("#all-users").hide();
  		$("#matches").hide();
  		$("#profile").show();
  	});

    $("#edit-profile-link").click(function () {
      var dummyData = {data: "isGreat"};
      populate_modal.populateQuestionaireModal(dummyData);
  	});

    $(document).on("click","#view-full-profile",function() {
      $('#otherUser').modal('show');
      console.log("yo, we clicked");
      var userInfo = $(this).attr('uid');
      // var dummyData = {data: "isGreat"};
      console.log("userInfo :", userInfo);
      var responses = {};

      otherUserPromise(userInfo).then(function(responses) {
	      console.log("responses", responses);
	      populate_modal.populateUserModal({quizzes:responses});  
      	
      });
    });

  	$("#log-out-link").click(function () {
  		$("#all-users").hide();
  		$("#matches").hide();
  		$("#profile").hide();
  		$("#splash").show();
  	});
});