

var object = document.getElementById('bounce');
var count = 0

object.onclick = function () {
    count++
    var element = document.querySelector(".header")
    element.innerText = `${count} Cookies!`
    var x = Math.floor(Math.random() * 30);
    var y = Math.floor(Math.random() * 30);
    object.style.top = x + 'px';
    object.style.left = y + 'px';
};