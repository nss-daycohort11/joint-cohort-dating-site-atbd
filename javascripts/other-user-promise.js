define(["q", "jquery"], function(Q, $) {
  return function(otherUserID) {
    var deferred = Q.defer();

    $.ajax({ url: "https://haphephobia.firebaseio.com/quizzes/" + otherUserID + "/.json",
        method: "GET",
        data: JSON.stringify(otherUserID) })
      // XHR was successful
      .done(function(json_data) {
        // Now we can resolve the promise and send the data
        console.log("got data", json_data);
        deferred.resolve(json_data);
      })
      // XHR failed for some reason
      .fail(function(xhr, status, error) {
        // Since the call failed, we have to reject the promise
        deferred.reject(error);
        console.log("error", error);
      });

    return deferred.promise;
  }; //--end return  
}); //--end define