document.getElementsByClassName("image").onmouseover=function(){
    mouseOver()
}
document.getElementsByClassName("image").onmouseout=function(){
    mouseOut()
}
function enlargePic(){
    console.log("enlarge function called")
    var toothpaste = document.getElementById("mouse");
    toothpaste.style.width="150px"
}