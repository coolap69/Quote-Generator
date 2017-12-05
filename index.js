/*global $ */

// https://dev.twitter.com/web/tweet-button/web-intent
// https://fonts.google.com/

var musk= {
    inspiration: [ {
        quote: "“You have to be pretty driven to make it happen. Otherwise, you will just make yourself miserable.”",
        name: "-Elon Musk"
    },
    {
        quote: "“Life is too short for long-term grudges.”",
        name: "-Elon Musk"
    },
    {
        quote: "“People work better when they know what the goal is and why. It is important that people look forward to coming to work in the morning and enjoy working.”",
        name: "-Elon Musk"
    },
    {
        quote: "“Failure is an option here. If things are not failing, you are not innovating enough.”",
        name: "-Elon Musk"
    },
    {
        quote: "“The first step is to establish that something is possible; then probability will occur.”",
        name: "-Elon Musk"        
    }
    ],
}

document.getElementById("btnquotes").onclick = function() {
    console.log("click")
    var place = document.getElementById("quotes");
    var aPlace= document.getElementById("author");
        place.innerHTML = musk.inspiration[Math.floor(Math.random() * 4)].quote, aPlace.innerHTML = musk.inspiration[0].name;
};



 (function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s);
                js.id = id;
                js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.11';
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
         
document.getElementById("tweet").onclick = function(){
    window.open('https://twitter.com/intent/tweet?text='+ musk.inspiration[Math.floor(Math.random() * 4)].quote + musk.inspiration[0].name);
}
