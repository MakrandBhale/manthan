let dbRef = firebase.database().ref("articles");
function signIn(){
    let username = document.getElementById("username");
    let password = document.getElementById("password");
    let fbAuth = document.getElementById("fbAuth");
    let form  = document.getElementById("form");
    firebase.auth().signInWithEmailAndPassword(username.value, password.value).catch(function (err) {
        Materialize.toast(err.message, 4000);
    });
    if(checkUser()){
        console.log("boo")
        Materialize.toast("User logged in successfully", 4000);
        fbAuth.style.display = "none";
        form.style.display = "block";
    }
}

function logOut() {
    firebase.auth().signOut();
}

function checkUser() {
    return firebase.auth().currentUser;
}

function submit() {
    let author = document.getElementById("author").value;
    let standard = document.getElementById("class").value;
    let email = document.getElementById("email").value;
    let title = document.getElementById("title").value;
    let subtitle = document.getElementById("sub_title").value;
    let content = document.getElementById("content").value;
    let index = parseInt(document.getElementById("index").value);
    let artData = {
        author: author,
        email: email,
        class: standard,
        title: title,
        subtitle: subtitle,
        content: content,
        index: index
    };
    dbRef.push(artData, function (err) {
        if(err){
            Materialize.toast('Error witting data', 4000);
            return false;
        }
    });
    document.getElementById("feed").reset();
}

