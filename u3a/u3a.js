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
    4. The function that is executed after the html document is loaded
 */
window.onload = function () {
    create_top_button();

    /*
        5. Function to execute during document scrolling
    */
    window.addEventListener("scroll", function () {
        show_top_button();
    })

    /*
        6. Function to execute during document scrolling
    */
    document.getElementById("top-button").addEventListener("click", function () {
        click_top_button();
    })
}

