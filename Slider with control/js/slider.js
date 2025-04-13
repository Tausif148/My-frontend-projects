var box = document.getElementById("box");

var image = ['Images/Im1', 'Images/Im2', 'Images/Im3', 'Images/Im4', 'Images/Im5', 'Images/Im6', 'Images/Im7', 'Images/Im8', 'Images/Im9', 'Images/Im10'];
var i = image.length;

function nextImg() {
    if (i < image.length) {
        i = i + 1;
    } else {
        i = 1;
    }
    box.innerHTML = "<img src=" + image[i - 1] + ".jpg>";
}

function prevImg() {
    if (i < image.length + 1 && i > 1) {
        i = i - 1;
    } else {
        i = image.length;
    }
    box.innerHTML = "<img src=" + image[i - 1] + ".jpg>";
}

