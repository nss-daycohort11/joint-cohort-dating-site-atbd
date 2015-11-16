require.config({
  baseUrl: './javascripts',
  paths: {
    'jquery': '../lib/bower_components/jquery/dist/jquery.min',
    'lodash': '../lib/bower_components/lodash/lodash.min',
    'hbs': '../lib/bower_components/require-handlebars-plugin/hbs',
    'firebase': '../lib/bower_components/firebase/firebase',
    'q': '../lib/bower_components/q/q',
    'bootstrap': '../lib/bower_components/bootstrap/dist/js/bootstrap.min',
    'es6': '../lib/bower_components/requirejs-babel/es6',
    'babel': '../lib/bower_components/requirejs-babel/babel-5.8.22.min'
  },
  shim: {
    'bootstrap': ['jquery'],
    'firebase': {
      exports: 'Firebase'
    }
  }
});

require(
  ["dependencies", "firebase", "bootstrap", "authentication"], 
  function(dependencies, _firebase, bootstrap, auth) {

    var ref = new Firebase("https://haphephobia.firebaseio.com");
    var authData = ref.getAuth();
    console.log("authData: ", authData);

    if(authData === null) {
      ref.authWithOAuthPopup("facebook", function(error, authData) { //1.firebase sends request for request token to github with client id and secret id
        if (error) {
          console.log("Login Failed!", error);
        } else {
          console.log("Authenticated successfully with payload:", authData);
          auth.setUid(authData.uid);
          ref.child('users/' + authData.uid).set(authData);
          require(["main-logic"], function() {});
        }
      });
    } else {
      auth.setUid(authData.uid);
      ref.child('users/' + authData.uid).set(authData);
      require(["main-logic"], function() {});
    }
    
  }
);
