requirejs(
  ["jquery","q", "lodash", "firebase", "hbs", "bootstrap"], 
  function($, Q, _, _firebase, Handlebars, bootstrap) {
  
  let url = 'https://haphephobia.firebaseio.com/'
  fetch(url).then(r => r.json())
    .then(data => console.log(data))
    .catch(e => console.log("Booo"))
});