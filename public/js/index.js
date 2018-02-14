let dbref = firebase.database().ref().child('articles');
let counter = 11;
let lastPage = 13;
let frontPage = 11;
let likes = [];

function updateView(){
    checkLiked();
    animate_like();
    dbref.orderByChild("index").equalTo(counter).once('value').then(function (dataSnapshot){
        if(dataSnapshot == null){
            console.log(dataSnapshot);
            return true;
        }
        dataSnapshot.forEach(function (snapshot) {
            $("#author").text(snapshot.val().author);
            $("#class").text(snapshot.val().class);
            $("#email").text(snapshot.val().email);
            $("#title").text(snapshot.val().title);
            $("#subtitle").text(snapshot.val().subtitle);
            $("#content").text(snapshot.val().content);
            $("#alt_content").text(getWords(snapshot.val().content) + " ...");
        })
    });
}


function init(){
    let goTo = localStorage.getItem("goToPage");
    console.log(goTo);
    if(!isNaN(parseInt(goTo))){
        console.log(goTo);
        counter = parseInt(goTo);
    }
    updateView();
    // On page load following code checks for older storage like records.
    if(localStorage.getItem(("likedStories")) !== null) {
        // JSON because localStorage does not supports arrays.
        likes = JSON.parse(localStorage.getItem("likedStories"));
    }
    checkLiked();
    animate_like();
}

// function setLikedPages() {
//     let likedStories = JSON.parse(localStorage.getItem("likedStories"));
//     $.each(likedStories, function (index, val) {
//         getInfo(val);
//     });
// }

function next() {
    counter++;
    if(counter > lastPage)
        counter--;
    else updateView();
    console.log(counter);
}

function prev() {
    counter--;
    if(counter < frontPage)
        counter++;
    else updateView();
    console.log(counter);
}

function getWords(str) {
    return str.split(/\s+/).slice(0,8).join(" ");
}