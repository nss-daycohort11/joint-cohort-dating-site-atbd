require(
  ["jquery", "bootstrap","populate_modal"], function($, bootstrap,populate_modal) { 

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
      $('#myModal').modal('show');
      console.log("yo, we clicked");
      var userInfo = $(this).attr('uid');
      // var dummyData = {data: "isGreat"};
      // console.log("userInfo :", userInfo);
      // populate_modal.populateUserModal(userInfo);  need to get specific info for this user ID
    });

  	$("#log-out-link").click(function () {
  		$("#all-users").hide();
  		$("#matches").hide();
  		$("#profile").hide();
  		$("#splash").show();
  	});
});