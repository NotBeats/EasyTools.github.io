function displayUserName() {
    if (localStorage.getItem("name") != null) {
        document.querySelector('.sign-up-button').style.width = 0
        document.querySelector('.sign-up-text').style.fontSize = 0;
    } else { 
        document.getElementById('.display-name').style.display = 'none';
    }
    document.getElementById("display-name").innerHTML = "Hello " + localStorage.getItem("name");
}

if (window.addEventListener) {
    window.addEventListener("load", displayUserName, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", displayUserName);
}