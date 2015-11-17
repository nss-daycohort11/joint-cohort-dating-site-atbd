var $ = require("jquery"),
    _firebase = require("firebase");

var match = function(userQuiz, otherQuiz){
  let compatabilityScore = 0;
  for(var key in userQuiz){
    if(userQuiz[key] === otherQuiz[key]){
      compatabilityScore++;
    }
  }
  return compatabilityScore;
};

export default function(){
  const ref = new Firebase("https://haphephobia.firebaseio.com/");
  const user = ref.getAuth();

  ref.on('value', snapshot => {
    let data = snapshot.val(),
        users = [],
        userQuizzes = [],
        userQuiz = data.quizzes[user.uid];
    
    for(let key in data.users){
      if(key !== user.uid){
        users[users.length] = data.users[key];
      }
    }

    for(let key in data.quizzes){
      if(key !== user.uid){
        userQuizzes[userQuizzes.length] = data.quizzes[key];
      }
    }

    for (let i = 0; i < userQuizzes.length; i++) {
      _.find(users, 'uid', userQuizzes[i].auth).compatabilityScore = match(userQuiz, userQuizzes[i]);
    }
    
    console.log("users", users);
    //returns list of users minus the current user and each user has the compatability score
    return users;
  });
}
