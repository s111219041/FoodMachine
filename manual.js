//使用說明
const manualContent = document.querySelector(".manual");
const manuaButtonImage = document.querySelector('.menu-button-image');
const menuItems = document.querySelectorAll(".menu-item a");
const manualCloseButton = document.querySelector('.manual-close-botton');

menuItems[0].addEventListener("click", function () {
    manualContent.style.display = "block";
});

manualCloseButton.addEventListener("click", function () {
    manualContent.style.display = "none";
});