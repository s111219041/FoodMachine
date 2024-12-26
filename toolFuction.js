
//回傳資料庫裡的隨機食物
function getRandomFood() 
{
    const randomIndex = Math.floor(Math.random() * foodDatabase.length);
    return foodDatabase[randomIndex];
}

//回傳隨機顏色
function getRandomColor() 
{
    const r = Math.floor(Math.random() * 256); // 隨機 R 值 (0-255)
    const g = Math.floor(Math.random() * 256); // 隨機 G 值 (0-255)
    const b = Math.floor(Math.random() * 256); // 隨機 B 值 (0-255)
    return { r, g, b }; // 回傳顏色物件
}