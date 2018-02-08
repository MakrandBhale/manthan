let dbref = firebase.database().ref().child('articles');
let counter = 11;
let snap;


function helloWorld(){
  console.log("Hello World");
}

function updateView(){
    let author = document.getElementById("author");
    let standard = document.getElementById("class");
    let email = document.getElementById("email");
    let title = document.getElementById("title");
    let subtitle = document.getElementById("subtitle");
    let content = document.getElementById("content");

    dbref.orderByChild("index").equalTo(counter).once('value').then(function (dataSnapshot){
        console.log(dataSnapshot);
        if(dataSnapshot == null){
            return true;
        }
        dataSnapshot.forEach(function (snapshot) {
            author.innerText = snapshot.val().author;
            standard.innerText = snapshot.val().class;
            email.innerText = snapshot.val().email;
            title.innerText = snapshot.val().title;
            subtitle.innerText = snapshot.val().subtitle;
            content.innerText = snapshot.val().content;
        })
    });
}
function like(counter) {
    dbref.
}
function next() {
    counter++;
    updateView();
}

function prev() {
    counter--;
    updateView()
}

//TODO : // if updateView returns an null snapshot go to next. following function checks for that.