function functionmenu() {
    var nnav = document.getElementById("nnav")
    var mul = document.getElementById("mul")
    var ham = document.getElementById("ham")
    var bur = document.getElementById("bur")
    var ger = document.getElementById("ger")
    if (nnav.style.height == "100%") {
        mul.style.marginTop = "-150px"
        nnav.style.height = "50px"
        ham.style.transform = "rotate(0deg)"
        ham.style.width = "25px"
        bur.style.width = "25px"
        ger.style.width = "25px"
        ger.style.transform = "rotate(0deg)"
        console.log("b")
    } else {
        mul.style.marginTop = "50px"
        nnav.style.height = "100%"
        console.log("1")
        ham.style.transform = "rotate(45deg)";
        ham.style.width = "28.3px"
        bur.style.width = "0"
        ger.style.transform = "rotate(-45deg)";
        ger.style.width = "28.3px"
    }
}

function formfunction() {
    var aaa = document.getElementById("aaa")
    var bbb = document.getElementById("bbb")
    var ccc = document.getElementById("ccc")

    console.log(aaa.value, bbb.value, ccc.value)
    if (aaa.value == "" && bbb.value == "") {
        aaa.style.backgroundColor = "red"
        bbb.style.backgroundColor = "red"
    } else if (aaa.value == "") {
        aaa.style.backgroundColor = "red"
    } else if (bbb.value == "") {
        bbb.style.backgroundColor = "red"
    } else {
        alert("all data inputted")
        aaa.style.backgroundColor = "white"
        bbb.style.backgroundColor = "white"
    }
    if (ccc.checked == true) {
        alert("thank u for subscribe")
    }
}

function blurrr() {
    var hdbg = document.getElementById("hdbg");
    hdbg.style.filter = "contrast(50%)";
}

function unblur() {
    var hdbg = document.getElementById("hdbg");
    hdbg.style.filter = "contrast(100%)";

}