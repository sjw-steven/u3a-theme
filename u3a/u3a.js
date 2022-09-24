/*
    Theme Name: U3A (Neve)
    Template: neve
    Version: 0.1.0
    Author: jingwen shi
 */

/*
    1. Create top button
 */
function create_top_button() {
    let top_button = document.createElement("div");
    top_button.innerHTML = "TOP";
    top_button.setAttribute("class", "top-button");
    top_button.setAttribute("id", "top-button");
    document.body.appendChild(top_button);
    document.getElementById("top-button").style.display = "none";
}

/*
    2. Show the top button when the current page is off the fold
 */
function show_top_button() {
    let top_button = document.getElementById("top-button");
    let vh_height = document.documentElement.clientHeight;
    return document.documentElement.scrollTop > vh_height / 2 ? top_button.style.display = "flex" : top_button.style.display = "none";
}


/*
    3. Click the button to perform a smooth jump
 */
function click_top_button() {
    window.scrollTo(0, 0);
}

/*
    5. Create music button
 */
function create_music_button() {
    let theme_sytle_url = document.getElementById("child-style-css");
    let assets_url = theme_sytle_url.getAttribute("href").split("style.css")[0];
    let music_button = document.createElement("div");
    music_button.innerHTML = '<video src="' + assets_url + './audio/melody-of-nature-main.mp3" loop preload="auto" style="display: none;" id="music"></video>' +
        '<img class="is-puased" id="play-icon" src="' + assets_url + './images/music.png">';
    music_button.setAttribute("class", "music-button");
    music_button.setAttribute("id", "music-button");
    document.body.appendChild(music_button);
    document.getElementById("music-button").style.display = "none";
}

/*
    6. Show the music button when the current page is off the fold
 */
function show_music_button() {
    let music_button = document.getElementById("music-button");
    let vh_height = document.documentElement.clientHeight;
    return document.documentElement.scrollTop > vh_height / 2 ? music_button.style.display = "flex" : music_button.style.display = "none";
}

/*
    7. Click the button to perform a smooth jump
 */
function click_music_button() {
    let music_button = document.getElementById("play-icon");
    let music = document.getElementById("music");
    if (music_button.getAttribute("class") === "is-puased") {
        music.play();
        music_button.setAttribute("class", "is-play");
    } else {
        music.pause();
        music_button.setAttribute("class", "is-puased")
    }
}

/*
    The function that is executed after the html document is loaded
 */
window.onload = function () {
    create_top_button();
    create_music_button();

    /*
        Function to execute during document scrolling
    */
    window.addEventListener("scroll", function () {
        show_top_button();
        show_music_button();
    })

    /*
        Function to execute when top-button click
    */
    document.getElementById("top-button").addEventListener("click", function () {
        click_top_button();
    })

    /*
        Function to execute when music-button click
    */
    document.getElementById("music-button").addEventListener("click", function () {
        click_music_button();
    })
}

