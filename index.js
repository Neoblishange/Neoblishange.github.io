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
/*
function zoom(image) {
    console.log(image);
    document.getElementById("spawnBox").innerHTML +=
        "<a class=\"changeImageLeft\" onclick=\"leftImage()\">\n" +
        "<i id=\"leftArrow\" class=\"fa fa-angle-left\" style=\"font-size:48px; z-index: 9\"></i>\n" +
        "</a>\n" +
        "<img id=\"spawnImage\" src=" + image.src + ">\n" +
        "<a class=\"changeImageRight\" onclick=\"rightImage()\">\n" +
        "<i id=\"rightArrow\" class=\"fa fa-angle-right\" style=\"font-size:48px; z-index: 9\"></i>\n" +
        "</a>";
}

function leftImage() {
    let nextImg;
    switch ((document.getElementById("spawnImage").src).split("/")) {
        case "pic03.png":
            nextImg = "/Portfolio/Projects/1/pic07.png";
            break;
        case "pic04.png":
            nextImg = "/Portfolio/Projects/1/pic03.png";
            break;
        case "pic05.png":
            nextImg = "/Portfolio/Projects/1/pic04.png";
            break;
        case "pic06.png":
            nextImg = "/Portfolio/Projects/1/pic05.png";
            break;
        case"pic07.png" :
            nextImg = "/Portfolio/Projects/1/pic06.png";
            break;
        default :
            break;
    }
    document.getElementById("spawnImage").src = nextImg;
}

function rightImage() {
    let nextImg;
    switch ((document.getElementById("spawnImage").src).split("/")) {
        case "pic03.png":
            nextImg = "/Portfolio/Projects/1/pic04.png";
            break;
        case "pic04.png":
            nextImg = "/Portfolio/Projects/1/pic05.png";
            break;
        case "pic05.png":
            nextImg = "/Portfolio/Projects/1/pic06.png";
            break;
        case "pic06.png":
            nextImg = "/Portfolio/Projects/1/pic07.png";
            break;
        case"pic07.png" :
            nextImg = "/Portfolio/Projects/1/pic03.png";
            break;
        default :
            break;
    }
    document.getElementById("spawnImage").src = nextImg;
}*/