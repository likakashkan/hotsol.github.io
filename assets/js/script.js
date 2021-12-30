var radio1 = document.getElementById("about_us_choice1");
var radio2 = document.getElementById("about_us_choice2");
var radio3 = document.getElementById("about_us_choice3");
var radio4 = document.getElementById("about_us_choice4");

var box1 = document.querySelector(".info_box_1");
var box2 = document.querySelector(".info_box_2");
var box3 = document.querySelector(".info_box_3");
var box4 = document.querySelector(".info_box_4");

function changeChoice(){
    if (radio1.checked == true) {
        box1.style.display = "flex";
    } else {
        box1.style.display = "none";
    }
    if (radio2.checked == true) {
        box2.style.display = "flex";
    } else {
        box2.style.display = "none";
    }
    if (radio3.checked == true) {
        box3.style.display = "flex";
    } else {
        box3.style.display = "none";
    }
    if (radio4.checked == true) {
        box4.style.display = "flex";
    } else {
        box4.style.display = "none";
    }
}