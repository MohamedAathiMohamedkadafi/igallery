var pics = [
    {
        image: "download (5).jpg",
        title: "ANUPAMA PARAMESHWARI",
        info: "perfect blend of natural charm, expressive eyes, and graceful elegance"
    },
    {
        image: "Mamitha biju.jpg",
        title: "MAMITHA BIJU",
        info: "beauty stands out with her natural charm and expressive smile."
    },
    {
        image: "download (6).jpg",
        title: "RASHMIKA MANADHANA",
        info: "natural charm, bright smile, and graceful screen presence."
    },
    {
        image: "Sai 💌.jpg",
        title: "SAI PALLAVI",
        info: "natural, graceful, and effortlessly charming."
    },
    {
        image: "Divya Bharathi.jpg",
        title: "DIVYA BHARATHI",
        info: "expressive eyes and natural, girl-next-door elegance."
    }
];

var i = 0; 

var photo     = document.getElementById("photo");
var titleText = document.getElementById("title-text");
var infoText  = document.getElementById("info-text");
var countText = document.getElementById("count-text");

function show() {
    photo.src           = pics[i].image;
    titleText.innerHTML = pics[i].title;
    infoText.innerHTML  = pics[i].info;
    countText.innerHTML = (i + 1) + " / " + pics.length;
}
function next() {
    i++;
    if (i >= pics.length) {
        i = 0;
    }
    show();
}
function prev() {
    i--;
    if (i < 0) {
        i = pics.length - 1;
    }
    show();
}
show();