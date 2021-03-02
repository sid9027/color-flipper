

window.onload = function () {
    const showcase = document.querySelector(".container .showcase span:nth-child(2)");
    const baudy = document.getElementsByTagName("body");
    const bttn = document.querySelector(".container button")
    //change color on button click
    bttn.addEventListener("click", function (f) {
        const kode = rgbGen();
        showcase.textContent = kode;
        baudy[0].style.backgroundColor = kode;
        // console.log(baudy[0]);
    })
    //random hex numer generator
    function rgbGen() {
        var getR;
        var getG;
        var getB;
        var a = Math.trunc(Math.trunc((Date.now()) % 1000) % 255);
        //hexcode for red vector
        getR = hexConvertor(a);
        if (getR.length === 1) {
            getR = '0' + getR;
        }
        //hexcode for green vector
        getB = hexConvertor(Math.trunc(1000 * (Math.random())) % 255);
        if (getB.length === 1) {
            getB = '0' + getB;
        }
        //hexcode for blue vector
        
        getG = showcase.textContent.slice(-2);
        console.log(getR, ' ', getG, ' ', getB);
        return '#' + getR + getG + getB;
    }
    // decimal to hexadecimal
    function hexConvertor(num) {
        if (num > 255) {
            alert("color code has 255 variants only");
        }
        else {
            var Q = num;
            var R;
            var hexCode = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
            var arr = [];
            var rt = '';
            while (Q > 0) {
                R = Math.trunc(Q % 16);
                Q = Math.trunc(Q / 16);
                if (R > 15) {
                    alert("error");
                }
                arr.push(hexCode[R]);
            }
        }
        while (arr.length > 0) {
            rt = rt + arr.pop();
        }
        return rt;
    }
    const kode = rgbGen();
    showcase.textContent = kode;
    baudy[0].style.backgroundColor = kode;
}


