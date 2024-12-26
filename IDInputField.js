
const IDInputWindow = document.querySelector('.ID-input');
const IDInputDownButton = document.querySelector('.ID-input-down-button');
const InputField = document.getElementById('username');
window.userID;

IDInputDownButton.addEventListener("click", function () {
    IDInputWindow.style.display = "none";
    
    if (InputField.value === "") 
    {
        userID = "匿名使用者";
    }
    else
    {
        userID = InputField.value;
    }

    document.getElementById("leaderboardTable").rows[6].cells[1].textContent = userID;

});