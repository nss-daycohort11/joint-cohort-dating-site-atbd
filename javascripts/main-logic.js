requirejs(
  ["jquery", "lodash", "firebase", "hbs", "bootstrap", "es6!questionaire", "navigation",  "populatehtml"], 
  function($, _, _firebase, Handlebars, bootstrap, questionaire, navigation, populatehtml) {

    var ref = new Firebase("https://haphephobia.firebaseio.com");
    var auth = ref.getAuth();
    console.log("auth", auth);
    populatehtml.populateUserPage(auth);

    questionaire();

    ref.on('value', function(snapshot){
      var data = snapshot.val();
      var users = [];
      for(var user in data.users){
        users[users.length] = user;
      }

      if(_.find(users, 'uid', auth.uid)){
        console.log("user exists");
        // user exists, go to userprofile page
      } else {
        console.log("new user");
        // new users, go to new user quiz
      }

    });
    
  } // end of require js function
); // end of require js scope