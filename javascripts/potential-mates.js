define(["jquery", "q"], 
	function($, Q) {


return function(otherUser) {
	var deferred = Q.defer();

	// This function should return a promise
	$.ajax({
	  url: "https://haphephobia.firebaseio.com/quizzes/" + otherUser + "/.json",
	})
	.done(function(quiz_data) {
	  // Resolve the promise
	  deferred.resolve(quiz_data);
	})
	.fail(function(xhr, status, error) {
	  // Reject the promise
	  deferred.reject(error);
	});

	return deferred.promise;
  };
});
     
