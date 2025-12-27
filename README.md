# Ex.07 Design of Interactive Image Gallery
## Date:27.12.2025

## AIM:
To design a web application for an inteactive image gallery for a minimum five images with next and previous buttons.

## DESIGN STEPS:

### Step 1:
Clone the github repository and create Django admin interface.

### Step 2:
Change settings.py file to allow request from all hosts.

### Step 3:
Use CSS for positioning and styling.

### Step 4:
Write JavaScript program for implementing interactivity.

### Step 5:
Validate the HTML and CSS code.

### Step 6:
Publish the website in the given URL.

## PROGRAM:
```
oops.html

<html>
<head>
    <meta charset="UTF-8">
    <title>Universe Gallery</title>
    <link rel="stylesheet" href="oops.css">
</head>
<body>
    <div class="box">
        <h1 class="heading">Beauties</h1>
        <p class="small-text">beauty . aura .sexy .glam .vogue</p>

        <div class="image-area">
            <img src="background .jpeg" id="photo" alt="actress">

            <p class="title" id="title-text">ANUPAMA PARAMESHWARI</p>
            <p class="info" id="info-text">
                perfect blend of natural charm, expressive eyes, and graceful elega
            </p>
        </div>

        <div class="buttons">
            <button onclick="prev()">Previous</button>
            <button onclick="next()">Next</button>
        </div>

        <p class="count" id="count-text">1 / 6</p>
    </div>

    <footer class="footer">
        &copy; Mohamed Aathil M (25008235)
    </footer>

    <script src="oops.js"></script>
</body>
</html>
```
```
oops.css

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    font-family: Arial, sans-serif;
    background: url("background .jpeg");
    background-size: cover;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    color: white;
}
.box {
    width: 90%;
    max-width: 600px;
    margin-left:460px;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.9);
    border-radius: 15px;
    margin-top:68px;
}
.heading {
    font-size: 32px;
    margin-bottom: 4px;
    margin-top:5px;
}
.small-text {
    font-size: 12px;
    margin-bottom: 15px;
    color: #cdd4ff;
}
.image-area img {
    margin-top:20px;
    width: 100%;
    max-width:400px;
    height: 320px;
    object-fit: cover;
    border-radius: 12px;
    border: 2px solid #ffd4ec;
}
.title {
    margin-top: 10px;
    font-size: 22px;
    font-weight: bold;
}
.info {
    margin-top: 4px;
    font-size: 14px;
}
.buttons {
    margin-top: 15px;
    display: flex;
    justify-content: center;
    gap: 15px;
}
.buttons button {
    width: 120px;
    padding: 8px;
    font-size: 14px;
    font-weight: bold;
    border-radius: 20px;
    border: none;
    cursor: pointer;
    background-color: #ffd4ec;
    color: #2b1022;
}
.count {
    margin-top: 10px;
    font-size: 13px;
    color: #cdd4ff;
}
.footer {
    margin-left:75px;
    font-size: 13px;
    padding: 8px;
    color: #e5e7ff;
}
```
```
oops.js

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
```
## OUTPUT:
![alt text](<Screenshot 2025-12-27 111931.png>)

![alt text](<Screenshot 2025-12-27 111950.png>)

![alt text](<Screenshot 2025-12-27 112004.png>)

![alt text](<Screenshot 2025-12-27 112018.png>)

![alt text](<Screenshot 2025-12-27 112033.png>)
## RESULT:
The program for designing an interactive image gallery using HTML, CSS and JavaScript is executed successfully.
