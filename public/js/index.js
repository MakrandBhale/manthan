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
        })
    });
}


function init(){
    updateView();
    // On page load following code checks for older storage like records.
    if(localStorage.getItem(("likedStories")) !== null) {
        // JSON because localStorage does not supports arrays.
        likes = JSON.parse(localStorage.getItem("likedStories"));
    }
    checkLiked();
    animate_like();
}

function setLikedPages() {
    $('#dropdown2').empty();
    let likedStories = JSON.parse(localStorage.getItem("likedStories"));
    $.each(likedStories, function (index, val) {
        //let li = '<li><a onclick="goToPage('+val+')">'+parseInt(index+1)+ getTitle(val)+'</a></li>';
        getInfo(val);
    });
}

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

