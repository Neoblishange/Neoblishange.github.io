//Nav bar feedback
function navClick(NavButton) {
    document.getElementById("active").removeAttribute("id");
    NavButton.id = "active";
}

//back to home on refresh
window.onbeforeunload = function () {
    window.setTimeout(function () {
        window.location = "index.html";
    }, 0);
    window.onbeforeunload = null;
}