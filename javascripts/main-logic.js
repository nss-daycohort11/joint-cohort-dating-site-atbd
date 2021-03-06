requirejs(
  ["jquery", "lodash", "firebase", "hbs", "bootstrap", 
  "es6!questionaire", "navigation",  "populatehtml","populate_modal", "es6!findMatches",
  "edit-profile", "es6!add-favorite"], 
  function($, _, _firebase, Handlebars, bootstrap, questionaire, 
    navigation, populatehtml,populate_modal, findMatches, editProfile, fav) {
  
    var ref = new Firebase("https://haphephobia.firebaseio.com");
    var auth = ref.getAuth();
    console.log("auth", auth);
    // populatehtml.populateUserPage(auth);
    // populatehtml.populateAllUsers(ref);
    // Starts clickevent hifive listener
    fav();
    findMatches();
    questionaire();
// will most likely have to add this code into the snapshot that comes after this one
    // Listen for when anything changes
    ref.on("value", function(snapshot) {
    // Store in a local variable
      console.log( "findmatches", findMatches());
      var allUsers = snapshot.val().users;
      var allQuizzes = snapshot.val().quizzes;
      var totalProfile = _.merge(allQuizzes, allUsers);
      delete totalProfile[auth.uid];
      console.log("totalProfile", totalProfile);
      console.log('auth', auth);
      populatehtml.populateUserPage(auth);
     
      var id = auth.uid;
      var likes = snapshot.val().likes[id];
      console.log("likes", likes);
      var likeIDs = [];
      for(var key in likes){
        likeIDs[likeIDs.length]=key;
      }
      console.log("likeIDs", likeIDs);
      var matches = [];
      for (var i = likeIDs.length - 1; i >= 0; i--) {
        var match = _.find(allUsers, 'uid', likeIDs[i]);
        matches[matches.length]=match; 
      }
      console.log("matches", matches);
      populatehtml.populateAllUsers({users:totalProfile});
      console.log("allUsers", allUsers);
      populatehtml.populateAllMatches({users:matches});
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