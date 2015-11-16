define (["jquery", "hbs"],
	function($, handlbars){

		return {
			populateUserPage: function (data) {
				require(['hbs!../templates/mainuser'], function(userPage){
					$("#profile").html(userPage(data));
				});
			}
		};




});