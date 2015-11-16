var $ = require("jquery"),
    _firebase = require("firebase");

export default function(){
  var ref = new Firebase("https://haphephobia.firebaseio.com/quizzes");
  $("#saveQuiz").on('click',function(){
    let upperBody = $("#upperBody").val(),
        lowerBody = $("#lowerBody").val(),
        face = $("#face").val(),
        limbs = $("#limbs").val(),
        proximity = $("#proximity").val(),
        eye = $("input[type='radio'][name='eye']:checked").val(),
        germophobia = $("input[type='radio'][name='germophobia']:checked").val(),
        agoraphobia = $("input[type='radio'][name='agoraphobia']:checked").val(),
        bday = $("#bday").val(),
        bio = $("#bio").val();

    let auth = ref.getAuth().uid;
    let quiz = {auth, upperBody, lowerBody, face, limbs, proximity, eye, germophobia,agoraphobia,bday, bio};
    console.log("auth", auth);
    console.log("quiz", quiz);
    ref.child(auth).set(quiz);

    $("#upperBody").prop('checked', false);
    $("#lowerBody").prop('checked', false);
    $("#face").prop('checked', false);
    $("#limbs").prop('checked', false);
    $("#proximity").val("");
    $("input[type='radio'][name='eye']:checked").prop('checked', false);
    $("input[type='radio'][name='germophobia']:checked").prop('checked', false);
    $("input[type='radio'][name='agoraphobia']:checked").prop('checked', false);
    $("#bday").val("");
    $("#bio").val("");
    $('#myModal').modal('toggle');
  });
}
