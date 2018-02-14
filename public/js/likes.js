

function goToPage(index){
    localStorage.removeItem("goToPage");
    localStorage.setItem("goToPage", index);
    window.location.href = '../';
}

function getInfo(index) {
    dbref.orderByChild("index").equalTo(index).once('value').then(function (dataSnapshot){
        if(dataSnapshot == null){
            console.log(dataSnapshot);
            return true;
        }
        dataSnapshot.forEach(function (snapshot) {
            let li = '<li><div class="card hoverable">\n' +
                '                    <div class=card-content>\n' +
                '                        <!-- User Information -->\n' +
                '                        <div class="row">\n' +
                '                            <div class="col s1.5">\n' +
                '                                <img class="sidenav-img-circle" src="../img/sky.jpeg"/>\n' +
                '                            </div>\n' +
                '                            <div class="col s9 truncate">\n' +
                '                                <span id="author"><b>'+snapshot.val().author+'</b></span> in\n' +
                '                                <span id="section" class="grey-text text-darken-1" style="font-weight:300;"><a href="../likes.html">'+snapshot.val().section+'</a></span><br>\n' +
                '                                <span id="class" class="grey-text text-darken-1" style="">'+snapshot.val().class+'</span><b style="color: #9c27b0"> | </b><span id="email" class="grey-text text-darken-1" style="">'+snapshot.val().email+'</span>\n' +
                '                            </div>\n' +
                '                        </div>\n' +
                '                        <!-- glimps of title/info -->\n' +
                '                        <div class="row s12">\n' +
                '                            <div class="col s8" onclick="goToPage('+index+')">\n' +
                '                                <h4 id="title" style="font-weight:600;z-index:100000">'+snapshot.val().title+'</h4>\n' +
                '                                <h5 id="subtitle" style="font-weight:300;" class=" grey-text text-darken-1">'+snapshot.val().subtitle+'</h5>\n' +
                '                                <span id="alt_content" class="" style="white-space: pre-line;">\n' +
                '                                    '+getWords(snapshot.val().content)+" ..."+
                '                                </span>\n' +
                '                                <a onclick="goToPage('+index+')">Read more</a>\n' +
                '                            </div>\n' +
                '                            <div class="col s4">\n' +
                '                                <div id="image">\n' +
                '                                    <img id="articleImage" src="../img/sky.jpeg"  class="hoverable z-depth-3" style="max-width: 175px !important;overflow: hidden;border-radius: 4px; margin-top: 18px"/>\n' +
                '                                </div>\n' +
                '                            </div>\n' +
                '                        </div>\n' +
                '                    </div>\n' +

                '                </div>\n' ;
            $('#list').append(li);
        })

    });
}