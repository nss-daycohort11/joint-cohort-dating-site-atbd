requirejs(
  ["jquery", "lodash", "firebase", "hbs", "bootstrap", "es6!questionaire", "navigation",  "populatehtml"], 
  function($, _, _firebase, Handlebars, bootstrap, questionaire, navigation, populatehtml) {

    var ref = new Firebase("https://haphephobia.firebaseio.com");
    var auth = ref.getAuth();
    console.log("auth", auth);
    // populatehtml.populateUserPage(auth);
    // populatehtml.populateAllUsers(ref);


    // Listen for when anything changes on the "songs" key
ref.child("users").on("value", function(snapshot) {

// Store the entire songs key in a local variable
  var allUsers = snapshot.val();

  populatehtml.populateUserPage(auth);
  populatehtml.populateAllUsers({users:allUsers});
  console.log("allUsers", allUsers);

// // Bind the allSongsObject to the song list Handlebar template
// // use {songs:} because handlebars expects an object of songs
//   writer.handlebarsToDOM({songs:allSongsObject});

// // Bind the unique artists to the artists template
//   writer.artistDropdown({songs:allSongsObject});

// // Bind the unique albums to the albums template
//   writer.albumDropdown({songs:allSongsObject});

});

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