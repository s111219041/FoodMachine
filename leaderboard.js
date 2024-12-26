//排行榜
const leaderboardUI = document.querySelector(".leaderboard");
const leaderboardUICloseButton = document.querySelector('.leaderboard-close-botton');

menuItems[1].addEventListener("click", function () {
    leaderboardUI.style.display = "block";
    UpdateLeaderboardContent();
});

leaderboardUICloseButton.addEventListener("click", function () {
    leaderboardUI.style.display = "none";
});