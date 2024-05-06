var Hero = document.getElementById('Hero');
var Evil = document.getElementById('Evil');
function jump() {
    Hero.classList.add('animate');
    setTimeout(function () {
        Hero.classList.remove('animate');
    }, 500);
}

var checkstatus = setInterval(function () {
    var herotop = parseInt(window.getComputedStyle(Hero).getPropertyValue("top"));
    var obstacleleft = parseInt(window.getComputedStyle(Evil).getPropertyValue("left"));
    if (obstacleleft < 30 && obstacleleft > 0 && herotop >= 200) {
        Evil.style.animation = "none";
        Evil.style.display = "none";
        alert("You lost");
    }
}
    , 10);