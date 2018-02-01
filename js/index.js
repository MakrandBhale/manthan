function helloWorld(){
  console.log("Hello World");
}

function init() {
    var title = document.getElementById('title');
    var dbref = firebase.database().ref().child('text');
    dbref.on('value', snap => title.innerText = snap.val());
}