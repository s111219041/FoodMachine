
class NutritionalInformation {
    constructor(calories, protein, carbs, fat, fiber, vitamins, minerals, sugar, sodium , water) {
        this.calories = calories; // 食物熱量 kcal
        this.protein = protein; // 蛋白質 g
        this.carbs = carbs; // 碳水化合物 g
        this.fat = fat; // 脂肪 g 
        this.fiber = fiber; // 膳食纖維 g 
        this.vitamins = vitamins; // 維生素 分 (根據含量給予0-20分)
        this.minerals = minerals; // 礦物質 分 (根據含量給予0-20分)
        this.sugar = sugar; // 糖 g
        this.sodium = sodium; // 鈉 mg
        this.water = water; //水分 g
    }

    reset() {
        this.calories = 0;
        this.protein = 0;
        this.carbs = 0;
        this.fat = 0;
        this.fiber = 0;
        this.vitamins = 0;
        this.minerals = 0;
        this.sugar = 0;
        this.sodium = 0;
        this.water = 0;
    }
}

class Food 
{
    constructor(image , name, nutritionalInfo) 
    {
        this.image = image; // 食物圖片URL
        this.name = name; // 食物名稱
        this.nutritionalInfo = nutritionalInfo;
    }
}


class FoodItem //執行中使用的資料
{
    constructor(currentFood , tags) {
        this.currentFood = currentFood; //此項目的食物
        /*this.tags = tags; //標籤*/
    }
}

const initFood = new Food('', "", new NutritionalInformation(0, 0, 0, 0, 0, 0, 0, 0, 0, 0.0));
let foodItems = new Array(5).fill(null).map(() => new FoodItem(initFood, null));

const foodDatabase = [
    new Food('FoodImage/01.png', "草莓", new NutritionalInformation(32, 0.7, 7.7, 0.3, 2, 10, 4, 4.9, 1, 91.0)),
    new Food('FoodImage/02.png', "櫻桃", new NutritionalInformation(50, 1, 12, 0.3, 1.6, 12, 6, 8, 3, 82.0)),
    new Food('FoodImage/03.png', "蘋果", new NutritionalInformation(52, 0.3, 14, 0.2, 2.4, 8, 5, 10.4, 1, 86.0)),
    new Food('FoodImage/04.png', "西瓜", new NutritionalInformation(30, 0.6, 8, 0.2, 0.4, 8, 3, 6.2, 1, 92.0)),
    new Food('FoodImage/05.png', "橘子", new NutritionalInformation(47, 0.9, 12, 0.1, 2.4, 17, 7, 9, 1, 86.0)),
    new Food('FoodImage/06.png', "芒果", new NutritionalInformation(60, 0.8, 15, 0.4, 1.6, 14, 6, 13.7, 1, 83.0)),
    new Food('FoodImage/07.png', "鳳梨", new NutritionalInformation(50, 0.5, 13.1, 0.1, 1.4, 10, 7, 9.9, 1, 86.0)),
    new Food('FoodImage/08.png', "香蕉", new NutritionalInformation(89, 1.1, 22.8, 0.3, 2.6, 5, 6, 12.2, 1, 74.0)),
    new Food('FoodImage/09.png', "檸檬", new NutritionalInformation(29, 1.1, 9.3, 0.3, 2.8, 19, 3, 2.5, 1, 89.0)),
    new Food('FoodImage/10.png', "哈密瓜", new NutritionalInformation(34, 0.9, 8.2, 0.2, 0.9, 7, 3, 8.2, 1, 90.0)),
    new Food('FoodImage/11.png', "西洋梨", new NutritionalInformation(57, 0.4, 15, 0.1, 3.1, 7, 5, 9.8, 1, 84.0)),
    new Food('FoodImage/12.png', "奇異果", new NutritionalInformation(61, 1.1, 14.7, 0.5, 2.1, 15, 6, 9, 3, 83.0)),
    new Food('FoodImage/13.png', "橄欖", new NutritionalInformation(115, 0.8, 6, 10.7, 3.2, 10, 7, 0.5, 1, 80.0)),
    new Food('FoodImage/14.png', "藍莓", new NutritionalInformation(57, 0.7, 14.5, 0.3, 2.4, 10, 3, 9.7, 1, 84.0)),
    new Food('FoodImage/15.png', "葡萄", new NutritionalInformation(69, 0.7, 18.1, 0.2, 0.9, 9, 3, 16.3, 2, 81.0)),
    new Food('FoodImage/16.png', "椰子", new NutritionalInformation(354, 3.3, 15.2, 33.5, 9.0, 1, 2, 6.2, 20, 47.0)),
    new Food('FoodImage/17.png', "番茄", new NutritionalInformation(18, 0.9, 3.9, 0.2, 1.2, 15, 7, 2.6, 5, 95.0)),
    new Food('FoodImage/18.png', "辣椒", new NutritionalInformation(40, 1.9, 8.8, 0.4, 1.5, 20, 5, 5.3, 7, 88.0)),
    new Food('FoodImage/19.png', "薑", new NutritionalInformation(80, 1.8, 17.8, 0.8, 2.0, 5, 4, 1.7, 13, 78.0)),
    new Food('FoodImage/20.png', "胡蘿蔔", new NutritionalInformation(41, 0.9, 9.6, 0.2, 2.8, 17, 8, 4.7, 2, 88.0)),
    new Food('FoodImage/21.png', "地瓜", new NutritionalInformation(86, 1.6, 20.1, 0.1, 3.0, 13, 10, 4.2, 55, 77.0)),
    new Food('FoodImage/22.png', "洋蔥", new NutritionalInformation(40, 1.1, 9.3, 0.1, 1.7, 10, 4, 4.2, 4, 89.0)),
    new Food('FoodImage/23.png', "玉米", new NutritionalInformation(86, 3.2, 19, 1.2, 2.7, 9, 8, 6.3, 15, 76.0)),
    new Food('FoodImage/24.png', "花椰菜", new NutritionalInformation(34, 2.8, 6.6, 0.4, 2.5, 14, 9, 1.7, 30, 89.0)),
    new Food('FoodImage/25.png', "小黃瓜", new NutritionalInformation(15, 0.7, 3.6, 0.1, 0.5, 5, 2, 1.7, 2, 95.0)),
    new Food('FoodImage/26.png', "菠菜", new NutritionalInformation(23, 2.9, 3.6, 0.4, 2.2, 20, 12, 0.4, 24, 91.0)),
    new Food('FoodImage/27.png', "碗豆", new NutritionalInformation(81, 5.4, 14.5, 0.4, 5.1, 10, 8, 5.7, 5, 79.0)),
    new Food('FoodImage/28.png', "青椒", new NutritionalInformation(20, 0.9, 4.6, 0.2, 1.7, 18, 4, 2.4, 3, 92.0)),
    new Food('FoodImage/29.png', "酪梨", new NutritionalInformation(160, 2, 8.5, 14.7, 6.7, 2, 3, 0.7, 7, 73.0)),
    new Food('FoodImage/30.png', "大蒜", new NutritionalInformation(149, 6.4, 33.1, 0.5, 2.1, 5, 10, 1, 17, 58.0)),
    new Food('FoodImage/31.png', "馬鈴薯", new NutritionalInformation(77, 2, 17, 0.1, 2.2, 10, 8, 0.8, 6, 79.0)),
    new Food('FoodImage/32.png', "紅豆", new NutritionalInformation(329, 19.9, 60.8, 0.5, 12.7, 8, 15, 0.3, 5, 12.0)),
    new Food('FoodImage/33.png', "綠豆", new NutritionalInformation(347, 23.9, 62.6, 1.2, 16.3, 8, 12, 0.8, 5, 10.0)),
    new Food('FoodImage/34.png', "栗子", new NutritionalInformation(196, 2, 44, 1.3, 3, 5, 6, 10, 2, 52.0)),
    new Food('FoodImage/35.png', "花生", new NutritionalInformation(567, 25.8, 16.1, 49.2, 8.5, 4, 7, 4.7, 18, 2.0)),
    new Food('FoodImage/36.png', "吐司", new NutritionalInformation(265, 9, 49, 3.2, 2.4, 6, 10, 5, 400, 38.0)),
    new Food('FoodImage/37.png', "牛角麵包", new NutritionalInformation(406, 8, 45, 21, 2, 6, 8, 8.5, 370, 22.0)),
    new Food('FoodImage/38.png', "貝果", new NutritionalInformation(245, 9, 49, 1.5, 2.5, 6, 8, 6.3, 460, 25.0)),
    new Food('FoodImage/39.png', "鬆餅", new NutritionalInformation(227, 5.8, 28, 9.7, 0.8, 5, 6, 6.3, 400, 30.0)),
    new Food('FoodImage/40.png', "荷包蛋", new NutritionalInformation(143, 12.6, 1.1, 9.5, 0, 0, 0, 0.4, 142, 75.0)),
    new Food('FoodImage/41.png', "起司", new NutritionalInformation(402, 25, 1.3, 33, 0, 3, 8, 0.5, 621, 37.0)),
    new Food('FoodImage/42.png', "培根", new NutritionalInformation(541, 37, 1.4, 42, 0, 2, 6, 0.5, 1900, 41.0)),
    new Food('FoodImage/43.png', "漢堡", new NutritionalInformation(295, 17, 30, 12, 1.5, 5, 7, 5, 560, 43.0)),
    new Food('FoodImage/44.png', "香腸", new NutritionalInformation(301, 13, 2.7, 27, 0, 4, 6, 1, 730, 54.0)),
    new Food('FoodImage/45.png', "熱狗", new NutritionalInformation(290, 10, 28, 16, 1.2, 4, 6, 4.5, 800, 45.0)),
    new Food('FoodImage/46.png', "三明治", new NutritionalInformation(250, 12, 27, 10, 1.8, 5, 7, 3.2, 650, 40.0)),
    new Food('FoodImage/47.png', "薯條", new NutritionalInformation(312, 3.4, 41, 15, 3.8, 2, 5, 0.3, 210, 46.0)),
    new Food('FoodImage/48.png', "墨西哥捲餅", new NutritionalInformation(340, 12, 44, 14, 5, 7, 6, 2.5, 800, 35.0)),
    new Food('FoodImage/49.png', "西班牙海鮮燉飯", new NutritionalInformation(150, 10, 25, 5, 1, 0, 3, 0, 600, 90.0)),
    new Food('FoodImage/50.png', "義大利麵", new NutritionalInformation(220, 8, 31, 7, 2, 6, 5, 3.4, 320, 55.0)),
    new Food('FoodImage/51.png', "火鍋", new NutritionalInformation(250, 18, 12, 15, 3, 9, 7, 1, 1300, 75.0)),
    new Food('FoodImage/52.png', "生菜沙拉", new NutritionalInformation(70, 2, 8, 3, 3.5, 12, 8, 0.5, 170, 88.0)),
    new Food('FoodImage/53.png', "咖哩飯", new NutritionalInformation(280, 6, 44, 9, 3, 5, 6, 2.5, 520, 60.0)),
    new Food('FoodImage/54.png', "拉麵", new NutritionalInformation(296, 9.5, 54, 4.6, 1.8, 3, 6, 0.3, 1100, 38.0)),
    new Food('FoodImage/55.png', "披薩", new NutritionalInformation(266, 11, 33, 10, 2.3, 6, 8, 3.8, 640, 45.0)),
    new Food('FoodImage/56.png', "握壽司", new NutritionalInformation(120, 3.0, 25, 0.5, 0.5, 5, 2, 4, 250, 70.0)),
    new Food('FoodImage/57.png', "炸蝦", new NutritionalInformation(240, 16, 15, 13, 1.1, 3, 7, 0.5, 500, 45.0)),
    new Food('FoodImage/58.png', "白飯", new NutritionalInformation(130, 2.4, 28.7, 0.3, 0.4, 0, 1, 0.1, 1, 70.0)),
    new Food('FoodImage/59.png', "便當", new NutritionalInformation(150, 6, 20, 5, 1, 8, 9, 2, 300, 70.0)),
    new Food('FoodImage/60.png', "水餃", new NutritionalInformation(220, 8, 30, 8, 1.5, 4, 5, 1, 500, 60.0)),
    new Food('FoodImage/61.png', "關東煮", new NutritionalInformation(150, 10, 12, 5, 1, 6, 6, 1.5, 800, 85.0)),
    new Food('FoodImage/62.png', "飯糰", new NutritionalInformation(180, 3, 38, 1.2, 1.2, 2, 3, 1, 350, 60.0)),
    new Food('FoodImage/63.png', "魚板", new NutritionalInformation(95, 7, 12, 1.1, 0, 3, 4, 0.2, 600, 72.0)),
    new Food('FoodImage/64.png', "糯米糰子", new NutritionalInformation(150, 3, 34, 0.3, 0.5, 1, 2, 12, 20, 58.0)),
    new Food('FoodImage/65.png', "幸運籤餅", new NutritionalInformation(130, 2, 25, 4, 0.3, 0, 1, 10, 80, 5.0)),
    new Food('FoodImage/66.png', "刨冰", new NutritionalInformation(90, 0, 22, 0, 0, 0, 0, 18, 10, 78.0)),
    new Food('FoodImage/67.png', "冰淇淋", new NutritionalInformation(200, 4, 23, 11, 0.7, 3, 3, 19, 70, 60.0)),
    new Food('FoodImage/68.png', "霜淇淋", new NutritionalInformation(200, 4, 30, 8, 1, 0, 4, 20, 100, 80.0)),
    new Food('FoodImage/69.png', "派", new NutritionalInformation(300, 3, 45, 12, 2, 5, 3, 25, 200, 40.0)),
    new Food('FoodImage/70.png', "草莓蛋糕", new NutritionalInformation(350, 4, 45, 16, 1.5, 6, 3, 30, 150, 40.0)),
    new Food('FoodImage/71.png', "布丁", new NutritionalInformation(140, 4, 20, 4, 0, 2, 2, 18, 60, 74.0)),
    new Food('FoodImage/72.png', "杯子蛋糕", new NutritionalInformation(400, 5, 50, 18, 1.5, 4, 3, 30, 300, 25.0)),
    new Food('FoodImage/73.png', "棒棒糖", new NutritionalInformation(70, 0, 18, 0, 0, 0, 0, 16, 5, 2.0)),
    new Food('FoodImage/74.png', "糖果", new NutritionalInformation(380, 0, 98, 0, 0, 0, 0, 80, 30, 1.0)),
    new Food('FoodImage/75.png', "棉花糖", new NutritionalInformation(320, 0, 80, 0, 0, 0, 0, 70, 20, 1.0)),
    new Food('FoodImage/76.png', "巧克力", new NutritionalInformation(546, 5, 61, 31, 7, 2, 3, 50, 24, 1.5)),
    new Food('FoodImage/77.png', "甜甜圈", new NutritionalInformation(452, 5, 51, 25, 2, 4, 2, 21, 326, 30.0)),
    new Food('FoodImage/78.png', "餅乾", new NutritionalInformation(502, 6, 64, 24, 2, 2, 3, 30, 400, 5.0)),
    new Food('FoodImage/79.png', "蜂蜜", new NutritionalInformation(304, 0, 82, 0, 0, 0, 1, 60, 20, 17.0)),
    new Food('FoodImage/80.png', "鹽巴", new NutritionalInformation(0, 0, 0, 0, 0, 0, 0, 0, 38758, 0.0)),
    new Food('FoodImage/81.png', "奶油", new NutritionalInformation(717, 0.9, 0.1, 81, 0, 1, 1, 0, 11, 16.0)),
    new Food('FoodImage/82.png', "爆米花", new NutritionalInformation(375, 13, 78, 4.5, 15, 0, 3, 0.9, 7, 4.0)),
    new Food('FoodImage/83.png', "珍珠奶茶", new NutritionalInformation(120, 1, 28, 1.5, 0, 1, 1, 20, 40, 70.0)),
    new Food('FoodImage/84.png', "牛奶", new NutritionalInformation(42, 3.4, 4.8, 1.0, 0.0, 15, 12, 4.8, 44, 87.0)),
    new Food('FoodImage/85.png', "綠茶", new NutritionalInformation(0, 0, 0, 0, 0, 0, 0, 0, 0, 99.0)),
    new Food('FoodImage/86.png', "咖啡", new NutritionalInformation(2, 0.1, 0, 0, 0, 0, 0, 0, 5, 99.5)),
    new Food('FoodImage/87.png', "香檳", new NutritionalInformation(75, 0.2, 1.4, 0, 0, 0, 1, 0, 3, 93.0)),
    new Food('FoodImage/88.png', "紅酒", new NutritionalInformation(85, 0.1, 2.6, 0, 0, 0, 1, 0, 4, 91.0)),
    new Food('FoodImage/89.png', "香菇", new NutritionalInformation(22, 3, 3.3, 0.3, 1, 8, 8, 0.5, 5, 92.0)),
    new Food('FoodImage/90.png', "蟋蟀", new NutritionalInformation(121, 20, 0.5, 2.1, 0, 5, 5, 0, 50, 75.0)),
    new Food('FoodImage/91.png', "蛇肉", new NutritionalInformation(93, 21, 0, 1.2, 0, 0, 4, 0, 54, 77.0)),
    new Food('FoodImage/92.png', "鍋貼", new NutritionalInformation(200, 10, 25, 7, 1.5, 0, 3, 2, 500, 70.0)),
    new Food('FoodImage/93.png', "牛肉", new NutritionalInformation(250, 26, 0, 15, 0, 0, 5, 0, 60, 60.0)),
    new Food('FoodImage/94.png', "豬肉", new NutritionalInformation(242, 25, 0, 14, 0, 0, 10, 0, 60, 60.0)),
    new Food('FoodImage/95.png', "雞腿", new NutritionalInformation(180, 20, 0, 10, 0, 0, 5, 0, 70, 70.0)),
    new Food('FoodImage/96.png', "鯛魚", new NutritionalInformation(190, 22, 0, 9, 0, 0, 0, 0, 50, 90.0)),
    new Food('FoodImage/97.png', "旗魚", new NutritionalInformation(205, 23, 0, 12, 0, 0, 5, 0, 60, 85.0)),
    new Food('FoodImage/98.png', "龍蝦", new NutritionalInformation(90, 19, 0, 0.8, 0, 0, 1, 0, 40, 98.0)),
    new Food('FoodImage/99.png', "螃蟹", new NutritionalInformation(97, 20, 0, 1.5, 0, 0, 2, 0, 50, 85.0)),
    new Food('FoodImage/100.png', "章魚", new NutritionalInformation(140, 30, 0, 1, 0, 0, 10, 0, 50, 77.0)),
    new Food('FoodImage/101.png', "蜘蛛", new NutritionalInformation(220, 50, 0, 4, 0, 0, 5, 0, 60, 75.0)),
    new Food('FoodImage/102.png', "蝸牛", new NutritionalInformation(91, 16, 0, 1.4, 0, 0, 3, 0, 60, 80.0)),
    new Food('FoodImage/103.png', "蟑螂", new NutritionalInformation(130, 20, 0, 6, 0, 0, 3, 0, 40, 70.0)),
    //new Food('FoodImage/.png', "", ),
];


