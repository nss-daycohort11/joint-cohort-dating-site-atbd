var $ = require("jquery"),
    _firebase = require("firebase");

export default function(){
  const ref = new Firebase("https://haphephobia.firebaseio.com/");
  const user = ref.getAuth();

  $("body").on('click', "#airFive", function() {
    let userLikedUid = $(this).attr('uid');
    console.log($(this));
    console.log("clicked", userLikedUid);
    let user = ref.getAuth().uid;
    ref.child('likes').child(user).child(userLikedUid).set(true);
  });
}