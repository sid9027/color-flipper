
//color select select on page load
window.onload = function(){
const showcase = document.querySelector(".container .showcase span:nth-child(2)");
const baudy = document.getElementsByTagName("body");
const bttn = document.querySelector(".container button");

//change color on button click
bttn.addEventListener("click",function(f){
    var kode = rainbow();
    showcase.textContent = kode;
    baudy[0].style.backgroundColor = kode;
    console.log(baudy[0]);
})
const colrs = ["red","yellow","violet","indigo","blue","green","orange"]
function rainbow(){

   var a=Math.trunc((Date.now())%10);
   while(a>6){
        a=Math.trunc((Date.now())%10);
   }
   return colrs[a];
}
//onload decide color
var kode = rainbow();
showcase.textContent = kode;
baudy[0].style.backgroundColor = kode;
console.log(baudy[0]);
}
