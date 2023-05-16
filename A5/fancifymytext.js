function makeBig() {
    document.getElementById("input-text-1").style.fontSize = "24pt";
}

function alerting() {
    alert("Hello, world!");
}

function makeFancy() {
    document.getElementById("input-text-1").style.fontSize = "";
    document.getElementById("input-text-1").style.color = "blue";
    document.getElementById("input-text-1").style.fontStyle = "italic";
}

function makeBoring() {
    document.getElementById("input-text-1").style.fontSize = "";
    document.getElementById("input-text-1").style.color = "";
    document.getElementById("input-text-1").style.fontStyle = "normal";
    document.getElementById("input-text-1").style.textDecoration = "";
}

function setBold() {
    document.getElementById("input-text-1").style.font.setBold;
    document.getElementById("input-text-1").style.textDecoration = "underline";
}

function moo() {
    const text = document.getElementById("input-text-1").value;
    const words = text.split(" ");
    for (var i = 0; i < words.length; i++) {
        let word = words[i].trim()
        word += "-moo";
        words[i] = word;
    }
    document.getElementById("input-text-1").value = words.join("");
}