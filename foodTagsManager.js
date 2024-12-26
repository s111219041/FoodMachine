
const foodTagsTexts = document.querySelectorAll(".food-tags");

const proteinThreshold = [12 , 18 , 24];
const carbsThreshold = [20, 40 , 60];
const fatThreshold = [10 , 17 , 24];
const fiberThreshold = [3 , 6 , 9];
const vitaminsThreshold = [5 , 10 , 15];
const mineralsThreshold = [5 , 10 , 15];
const sugarThreshold = [10 , 15 , 20];
const sodiumThreshold = [300 , 600 , 900];
const waterThreshold = [70 , 80 , 90];

let totalTags = new Array(9).fill(0);

const rewardTable = 
[
    0 , 
    0 , 0 , 0 , 0 , 0 ,
    2 , 5 , 10 , 18 , 35 ,
    60 , 150 , 777 , 7777 , 77777
]

resetAllFoodTags();

function resetAllFoodTags()
{
    totalTags.fill(0);

    foodTagsTexts.forEach((tagsText) => {
        tagsText.textContent = "";
    });
}

function calculateItemTags(itemIndex , food)
{
    const foodNI = food.nutritionalInfo;

    addNutritionTag(foodNI.protein , foodTagsTexts[itemIndex] , proteinThreshold, "🍗",0);
    addNutritionTag(foodNI.carbs , foodTagsTexts[itemIndex] , carbsThreshold, "🍞",1);
    addNutritionTag(foodNI.fat , foodTagsTexts[itemIndex] , fatThreshold, "🧈",2);
    addNutritionTag(foodNI.fiber , foodTagsTexts[itemIndex] , fiberThreshold, "🥦",3);
    addNutritionTag(foodNI.vitamins , foodTagsTexts[itemIndex] , vitaminsThreshold, "🍊",4);
    addNutritionTag(foodNI.minerals , foodTagsTexts[itemIndex] , mineralsThreshold, "🪨",5);
    addNutritionTag(foodNI.sugar , foodTagsTexts[itemIndex] , sugarThreshold, "🍬",6);
    addNutritionTag(foodNI.sodium , foodTagsTexts[itemIndex] , sodiumThreshold, "🧂",7);
    addNutritionTag(foodNI.water , foodTagsTexts[itemIndex] , waterThreshold, "💧",8);
}

function addNutritionTag(Nutritional, targetElement , thresholds, tag , tagNumber) {
    for (let i = 0; i < thresholds.length; ++i) {
        if (Nutritional >= thresholds[i]) {
            targetElement.textContent += tag;
            totalTags[tagNumber] += 1;
        }
    }
}

function calculateAllTags()
{
    let totalCoin = 0;

    for (let i = 0; i < totalTags.length; ++i) 
    {
        totalCoin += rewardTable[totalTags[i]];
    }

    getCoins(totalCoin);
}
