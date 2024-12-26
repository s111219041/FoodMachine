const sm_items = document.querySelectorAll(".sm_item");
const ni_items = document.querySelectorAll(".ni_item");
const bg_Effects = document.querySelectorAll(".background_effect");
const lotteryButton = document.querySelector('.Lottery-button');
const foodItemsImagesBox = document.querySelectorAll('.food_image_container');
const foodItemsImages = document.querySelectorAll('.food-image');

//顯示單位
const NIunit = ['kcal','g','g','g' , 'g' , '分' , '分' , 'g' , 'mg', 'g' , 'g'];
const keys = ['calories', 'protein', 'carbs', 'fat' , 'fiber' , 'vitamins' , 'minerals' , 'sugar' , 'sodium' , 'water'];

//變量
let totalNI = new NutritionalInformation(0,0,0,0,0,0,0,0,0,0); //目前營養價值總計


let foodLotteryInProgressCount = 0;

//設定
const totalNICounterDuration = 1500;
const foodLotteryDuration = 3000; //3500


//初始化FoodItem
for (let i = 0; i < sm_items.length; i++)
{
    foodItemsImagesBox[i].  addEventListener('mouseover', function() {
        if(foodLotteryInProgressCount != 0)
        {
            return;
        }

        foodItemsImages[i].style.width = '100%';
        foodItemsImages[i].style.height = '100%';

        keys.forEach((key, index) => {    
            if(foodItems[i].currentFood !== undefined)
                itemNIPrinter(index , foodItems[i].currentFood.nutritionalInfo[key]);
        });
    });

    foodItemsImagesBox[i].addEventListener('mouseleave', function() {
        if(foodLotteryInProgressCount != 0)
        {
            return;
        }

        foodItemsImages[i].style.width = '80%';
        foodItemsImages[i].style.height = '80%';

        currentTotalNIPrinter();
    });
}


currentTotalNIPrinter();

//開始抽獎
function StartLottery() 
{
    if(foodLotteryInProgressCount > 0)
    {
        return;
    }

    foodLotteryInProgressCount = 5;

    ChangeBulbState(1);

    spendCoin(10);
    drawLotteryTextDisplay();

    resetAllFoodTags();

    lotteryButton.querySelector('.buttonImage').src = "LotteryButtonImage/click.png";
    totalNI.reset();

    currentTotalNIPrinter();

    for (let i = 0; i < sm_items.length; i++) 
    {
        startRandomImage(i , (i+1) * foodLotteryDuration , (i - 2) * 50);
    }
}

//開始隨機顯示圖片
function startRandomImage(itemIndex , stopTime , startPos)
{
    let yOffset = startPos;   
    const item = sm_items[itemIndex];
    const bg_Effect = bg_Effects[itemIndex];
    const itemFoodImage = item.querySelector('.food-image');
    let food;
    bg_Effect.querySelector('.background-image').src = "";

    item.querySelector('.food-image').style.filter = "blur(5px)"; //模糊
    item.querySelector('.food-name').textContent = "???";

    //隨機圖片抽獎效果
    const intervalId = setInterval(() => {
        food = getRandomFood();
        itemFoodImage.style.transform = `translateY(${yOffset}px)`;
        
        yOffset += 50;
        if(yOffset > 100)           
        {
            yOffset = -100;
        }

        itemFoodImage.src = food.image;
    }, 35
    );

    //背景光變色
    const backgroundUpdate = setInterval(() => {

        const color = getRandomColor();
        const color1 = `rgb(${color.r}, ${color.g}, ${color.b} , 0.9)`; // 不透明顏色
        const color2 = `rgba(${color.r}, ${color.g}, ${color.b}, 0)`; // 透明顏色
        const stop1 = '0%'; // 第一個顏色的比例
        const stop2 = '70%'; // 第二個顏色的比例    
        bg_Effect.style.background =  `radial-gradient(circle, ${color1} ${stop1}, ${color2} ${stop2})`;

    }, 150
    );
    
    //一個項目完成抽獎
    setTimeout(() => {
        clearInterval(intervalId);
        clearInterval(backgroundUpdate);
        endRandomFoodExtraction(itemIndex , food);

        item.querySelector('.food-image').style.filter = "none";
        item.querySelector('.food-image').style.transform = `translateY(${0}px)`;
        item.querySelector('.food-name').textContent = food.name;
        
        bg_Effect.querySelector('.background-image').src = food.image;
        bg_Effect.style.background = 'transparent';

    }, stopTime);
}

//隨機播放食物圖片
function playRandomImage(item)
{
    const food = getRandomFood();
    item.querySelector('.food-image').src = food.image;
    
    return food;
}

//一個項目完成抽獎
function endRandomFoodExtraction(itemIndex , food)
{
    keys.forEach((key, index) => {
        let currentNI = totalNI[key];
        totalNI[key] += food.nutritionalInfo[key];
        totalNICounter(index, currentNI , totalNI[key]);
    });

    foodItems[itemIndex].currentFood = food;
    calculateItemTags(itemIndex , food);

    setTimeout(() => {
        foodLotteryInProgressCount--;

        // 所有抽獎結束
        if (foodLotteryInProgressCount == 0) {
            EndLottery();
        }
    }, totalNICounterDuration);
}

// 所有抽獎結束
function EndLottery()
{
    lotteryButton.querySelector('.buttonImage').src = "LotteryButtonImage/Idle.png";
    ChangeBulbState(0);
    currentTotalNIPrinter();
    calculateAllTags();
    UpdateGlobalSpinCounter();
}

//營養價值數字平滑
function totalNICounter(NIItemIndex , currentNI , targetNI)
{
    const interval = 50; // 每次更新的間隔（毫秒）
    const steps = totalNICounterDuration / interval; // 計算總步數
    const difference = targetNI - currentNI;
    let increment = difference / steps; // 每步增加的數值

    const counterInterval = setInterval(() => {
        currentNI += increment;
        totalNIwithFoodPrinter(NIItemIndex , currentNI , difference);

        //數字停止計算
        if (currentNI >= targetNI) {
            currentNI = targetNI; // 確保不超過目標值

            if(foodLotteryInProgressCount != 0)
            {
                totalNIwithFoodPrinter(NIItemIndex , currentNI , difference);
            }
            else
            {
                totalNIPrinter(NIItemIndex , currentNI);
            }

            clearInterval(counterInterval); // 停止計時器
        }
    }, interval);
}

//營養價值+當前食物輸出
function totalNIwithFoodPrinter(NIItemIndex , totalNI , foodNI)
{
    ni_items[NIItemIndex].querySelector('.ni-value').textContent 
    = totalNI.toFixed(0) + NIunit[NIItemIndex] + " (+" + foodNI.toFixed(0) + ")";
}
//parseFloat(foodNI.toFixed(2))

//總營養價值輸出
function currentTotalNIPrinter()
{
    keys.forEach((key, index) => {
        totalNIPrinter(index , totalNI[key]);
    });
}

function totalNIPrinter(NIItemIndex , totalNI)
{
    ni_items[NIItemIndex].querySelector('.ni-value').textContent 
    = totalNI.toFixed(0) + NIunit[NIItemIndex] ;
}

//一個項目的營養價值輸出格式
function itemNIPrinter(ni_item_index , foodNI)
{
    ni_items[ni_item_index].querySelector('.ni-value').textContent 
    = foodNI.toFixed(0) + NIunit[ni_item_index];
}

//抽獎按鈕事件
lotteryButton.addEventListener('click', StartLottery);

lotteryButton.addEventListener("mouseover", () => {
    if(foodLotteryInProgressCount == 0)
    {
        lotteryButton.querySelector('.buttonImage').src = "LotteryButtonImage/hover.png";
    } 
});

lotteryButton.addEventListener("mouseleave", () => {
    if(foodLotteryInProgressCount == 0)
    {
        lotteryButton.querySelector('.buttonImage').src = "LotteryButtonImage/Idle.png";
    } 
});
