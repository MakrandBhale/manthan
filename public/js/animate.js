
function goToPage(index){

}

function getInfo(index) {

    console.log(index)
    dbref.orderByChild("index").equalTo(index).once('value').then(function (dataSnapshot){

        if(dataSnapshot == null){
            console.log(dataSnapshot);
            return true;
        }
        dataSnapshot.forEach(function (snapshot) {
            console.log(snapshot.val().email);
            let li = '<div class="row">\n' +
                '        <div class="col">\n' +
                '            <img class="img-circle" src="img/sky.jpeg"/>\n' +
                '        </div>\n' +
                '        <div class="col">\n' +
                '            <span class="truncate" id="alt_author"><b>'+snapshot.val().author+'</b></span>' +
                '           <span class="truncate" id="alt_email" class="grey-text text-darken-1" style="">'+snapshot.val().email+'</span>' +

                '        </div>\n' +
                '    </div>' +
                '<div class="divider"></div>'
            $('#dropdown2').append(li);
            $
        })

    });
}

function bookmark(){
    localStorage.setItem(counter, document.documentElement.scrollTop.toString());
    console.log(100 * $(window).scrollTop() / ($(document).height() - $(window).height()));
}
function goToBookMark() {
    document.documentElement.scrollTop = parseInt(localStorage.getItem(counter));
}

function like() {
    animate_like();
    if(!likes.includes(counter)) {
        likes.push(counter);
        localStorage.setItem("likedStories", JSON.stringify(likes));
        Materialize.toast('Added to Liked Stories', 2000, 'rounded')
    }
    else {
        let $toastContent = $('<span>Already liked !</span>').add($('<button onclick="unlike()" class="btn-flat toast-action">Undo</button>'));
        Materialize.toast($toastContent, 4000, 'rounded');

    }
    checkLiked();
    setLikedPages();
}

function unlike() {
    animate_like();
    if(likes.includes(counter)){
        //following code is to remove unliked index from the likes array and rewrite it to the localStorage.
        likes.splice(likes.indexOf(counter), 1);
        localStorage.removeItem("likedStories");
        localStorage.setItem("likedStories", JSON.stringify(likes));
    }

    checkLiked();
    setLikedPages();
}


//following function checks the likes array if the current indexed page is liked or not

function checkLiked(){
    if(likes.includes(counter)){
        $("#likeIcon").text("favorite");
        console.log("liked");
    }
    else {
        console.log("unliked");
        $("#likeIcon").text("favorite_border");
    }
}

function animate_like() {
    // Following lines add an animate an bounce animation class to initialize animation. Also the classes are removed
    // once the animation ends to ensure next iteration of animation
    $('#likeIcon').addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).removeClass('animated bounceIn');
    });
}
