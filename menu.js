
let isMenuOpen = false;
const menuContent = document.querySelector(".menu-content");
const menuButtonImage = document.querySelector('.menu-button-image');

document.querySelector(".menu-button").addEventListener("click", function () {

    isMenuOpen = !isMenuOpen;

    if(isMenuOpen == false)
    {
        menuButtonImage.src = "MenuButtomImage/01.svg";
        menuContent.style.display = "none";
    }
    else
    {
        menuButtonImage.src = "MenuButtomImage/02.png";
        menuContent.style.display = "block";
    }
    
});