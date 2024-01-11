var generalButton = document.getElementById("general-button");
var registerButton = document.getElementById("register-button");
var loginButton = document.getElementById("login-button");
var userButton = document.getElementById("user-button");
var adminButton = document.getElementById("admin-button");

var descriptions = document.getElementsByClassName("description");

generalButton.addEventListener("click", () => {
    for (let i = 0; i < descriptions.length; i++) {
        descriptions[i].style.display = "none";
    }
    descriptions[0].style.display = "block";
});

registerButton.addEventListener("click", () => {
    for (let i = 0; i < descriptions.length; i++) {
        descriptions[i].style.display = "none";
    }
    descriptions[1].style.display = "block";
});

loginButton.addEventListener("click", () => {
    for (let i = 0; i < descriptions.length; i++) {
        descriptions[i].style.display = "none";
    }
    descriptions[2].style.display = "block";
});

userButton.addEventListener("click", () => {
    for (let i = 0; i < descriptions.length; i++) {
        descriptions[i].style.display = "none";
    }
    descriptions[3].style.display = "block";
});

adminButton.addEventListener("click", () => {
    for (let i = 0; i < descriptions.length; i++) {
        descriptions[i].style.display = "none";
    }
    descriptions[4].style.display = "block";
});