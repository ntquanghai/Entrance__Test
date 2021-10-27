function generateRandomColor() {
    document.getElementById("container--id").style.backgroundImage = "none";
    let elements = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0; i < 6; i++) {
        color = color + elements[Math.floor(Math.random() * 16)];
    }
    document.getElementById("container--id").style.backgroundColor = color;
    document.getElementById("color__hexcode--id").innerText = color;
}

function getRandomColor() {
    let elements = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0; i < 6; i++) {
        color = color + elements[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getRandomGradient() {
    document.getElementById("container--id").style.backgroundImage = "linear-gradient(" + getRandomColor() + "," + getRandomColor() + ")";
}


