window.onload = function resize() {
    var width = document.documentElement.clientWidth
    var aaa = document.getElementById("aaa")
    var bbb = document.getElementById("bbb")
    console.log(width)
    if (width < 595) {
        aaa.placeholder = "aaa"
        bbb.placeholder = "bbb"
        console.log("bb")
    } else {
        aaa.placeholder = ""
        bbb.placeholder = ""
    }
    window.onresize = function resize() {
        console.log(width)
        if (width < 595) {
            aaa.placeholder = "aaa"
            bbb.placeholder = "bbb"
            console.log("bb")
        } else {
            aaa.placeholder = ""
            bbb.placeholder = ""
        }

    }


}