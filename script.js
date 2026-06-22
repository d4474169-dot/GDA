function changeTheme() {
    document.body.classList.toggle("dark");
}
function toggleBlock() {
    let block = document.getElementById("info");

    if (block.style.display == "none") {
        block.style.display = "block";
    } else {
        block.style.display = "none";
    }
}
let count = 0;

function clicker() {
    count++;
    document.getElementById("count").innerText = count;
}

let change = false;

function changeImage() {
    let img = document.getElementById("photo");

    if (change == false) {
        img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ78owXCqtIubreL3UBiDJIGpvf8ox_WCwr-H16-H7fRA&s=10";
        change = true;
    } else {
        img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwv3Ln3bNUwCF76HcwFcbBNdF6TwgQRfyfgDnOCY1ejA&s=10";
        change = false;
    }
}

function resetCounter() {
    count = 0;
    document.getElementById("count").innerText = count;
}

function toggleBlock() {
    let block = document.getElementById("block");

    if (block.style.display === "none") {
        block.style.display = "block";
    } else {
        block.style.display = "none";
    }
}
