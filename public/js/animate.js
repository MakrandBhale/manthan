
function initElement(){
	//This function will initiate elements of DOM for Formatting options
	let body = document.getElementById("body");
	let stories = document.getElementById("stories");
	let content = document.getElementById("content");
}


function changeColor(foreground, background) {
	body.setAttribute("bgcolor", background);
	stories.classList.remove("white-text");
	stories.classList.add(foreground);
}

function changeSize(size){
	switch (size){
		case 'small':
			content.style.fontSize = "16px";
			break;
		case 'normal':
			content.style.fontSize = null;
			break;
		case 'large':
			content.style.fontSize = "32px";
			break;
		
	}
	
}

function bookmark() {
	localStorage.setItem(counter, document.documentElement.scrollTop.toString());
	console.log(100 * $(window).scrollTop() / ($(document).height() - $(window).height()));
}
function goToBookMark() {
	document.documentElement.scrollTop = parseInt(localStorage.getItem(counter));
}

function like() {
	animate_like();
	if (!likes.includes(counter)) {
		likes.push(counter);
		localStorage.setItem("likedStories", JSON.stringify(likes));
		Materialize.toast('Added to Liked Stories', 2000, 'rounded')
	}
	else {
		unlike();
	}
	checkLiked();
}

function unlike() {
	animate_like();
	if (likes.includes(counter)) {
		//following code is to remove unliked index from the likes array and rewrite it to the localStorage.
		likes.splice(likes.indexOf(counter), 1);
		localStorage.removeItem("likedStories");
		localStorage.setItem("likedStories", JSON.stringify(likes));
	}
	checkLiked();

}


//following function checks the likes array if the current indexed page is liked or not

function checkLiked() {
	if (likes.includes(counter)) {
		$("#likeIcon").text("favorite");
	}
	else {
		$("#likeIcon").text("favorite_border");
	}
}

function animate_like() {
	// Following lines add an animate an bounce animation class to initialize animation. Also the classes are removed
	// once the animation ends to ensure next iteration of animation
	$('#likeIcon').addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
		$(this).removeClass('animated bounceIn');
	});
}

function animate_empty() {
	setTimeout(function () {
		$('#empty').addClass('animated pulse');
		$('#empty').css('animation-iteration-count', 'infinite');
	}, 1000);
}