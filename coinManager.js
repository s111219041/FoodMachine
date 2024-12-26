const rewardTotalCoinText = document.querySelector('.reward-total-coin-text');
const coinText = document.querySelector('.current-coin');

let drawLotteryTextAnimation;

let TextflashAnimation;

window.coinCount = 100;

updateCurrentCoin(0);

function drawLotteryTextDisplay()
{
    normalText();
    let dotIndex = 0; 
    rewardTotalCoinText.textContent = "抽獎中";
    rewardTotalCoinText.style.color = "rgb(89, 56, 56)";
    

    drawLotteryTextAnimation = setInterval(() => {

        if(dotIndex == 0)
        {
            rewardTotalCoinText.textContent = "抽獎中";
            dotIndex = (dotIndex + 1) % 4;
        }
        else
        {
            rewardTotalCoinText.textContent += ".";
            dotIndex = (dotIndex + 1) % 4;
        }

    }, 250
    );
}

function getCoins(amount)
{
    clearInterval(drawLotteryTextAnimation);

    coinCount += amount;
    if(amount > 0)
    {
        flashText();
        rewardTotalCoinText.textContent = "你贏得了 " + amount + "🪙";
    }
    else
    {
        rewardTotalCoinText.textContent = "😞沒有獲得金幣😞";
    }
    
    updateCurrentCoin();
}

function spendCoin(amount)
{
    coinCount -= amount;
    updateCurrentCoin();
}

//錢幣更新
function updateCurrentCoin()
{   
    coinText.textContent = coinCount + "🪙";
}


function normalText()
{
    clearInterval(TextflashAnimation);
}

function flashText()
{
    TextflashAnimation = setInterval(() => {
        rewardTotalCoinText.style.color = rewardTotalCoinText.style.color === "rgb(207, 44, 44)" ? "rgb(89, 56, 56)" : "rgb(207, 44, 44)";
    }, 150
    );
}