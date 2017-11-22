var musk= {
    inspiration: [ {
        quote: "“You have to be pretty driven to make it happen. Otherwise, you will just make yourself miserable.”",
        number: 1,
    },
    {
        quote: "“Life is too short for long-term grudges.”",
        number: 2,
    },
    {
        quote: "“People work better when they know what the goal is and why. It is important that people look forward to coming to work in the morning and enjoy working.”",
        number: 3,
    },
    {
        quote: "“Failure is an option here. If things are not failing, you are not innovating enough.”",
        number: 4,
    },
    {
        quote: "“The first step is to establish that something is possible; then probability will occur.”",
        number: 5,
        
    }
    ],
    name: "Elon Musk"
}


document.getElementById("btnquotes").onclick = function() {
    console.log("click")
    var place = document.getElementById("quotes");
        // place.innerHTML = musk.inspiration[1].quote;
        place.innerHTML = musk.inspiration[Math.floor(Math.random() * 4)].quote;

}


// function random() {
//     document.getElementById("quotes").innerHTML = musk.inspiration
// }