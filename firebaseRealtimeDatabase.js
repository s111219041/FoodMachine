
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getDatabase , ref , get , set , runTransaction } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqNK0LNJkNS8nVd6hL136UZBbKfwZrwMI",
  authDomain: "foodslotmachine-18ba8.firebaseapp.com",
  databaseURL: "https://foodslotmachine-18ba8-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "foodslotmachine-18ba8",
  storageBucket: "foodslotmachine-18ba8.firebasestorage.app",
  messagingSenderId: "988722926101",
  appId: "1:988722926101:web:5fa15553961fa18768741c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const globalSpinCounterText = document.querySelector('.current_global_spin_counter_text');
const leaderboardTable = document.getElementById("leaderboardTable");

const GlobalSpinCounterRef = ref(db , 'GlobalSpinCounter');
const LeaderboardRef = ref(db , 'Leaderboard');

let bestSpinCounter = -1;
let bestCoin = 0;

for (let j = 0; j < 4; j++) {
  leaderboardTable.rows[6].cells[j].style.color = "red"; // 將顏色改成紅色
}

get(GlobalSpinCounterRef).then((snapshot) => {
  if (snapshot.exists()) {
    globalSpinCounterText.textContent = "全體抽獎次數: " + snapshot.val();
  } else {
    globalSpinCounterText.textContent =  "資料不存在" ;
  }
})

//完成抽獎時進行計算及更新
window.UpdateGlobalSpinCounter = function() {

  // 先執行 runTransaction 更新 globalSpinCounterRef
  runTransaction(GlobalSpinCounterRef, (currentValue) => {
    const newValue = (currentValue || 0) + 1;
    return newValue;
  }).then(() => {
    // 更新完成後，再讀取資料並更新 globalSpinCounterTemp
    get(GlobalSpinCounterRef).then((snapshot) => {
      if (snapshot.exists()) {
        const globalSpinCounterTemp = snapshot.val();
        globalSpinCounterText.textContent = "第" + globalSpinCounterTemp + "次的抽獎";

        if(coinCount >= bestCoin)
        {
          bestCoin = coinCount;
          bestSpinCounter = globalSpinCounterTemp;
          console.log(bestCoin + "/" + bestSpinCounter);
        }
        
        // 在這裡進行 leaderboard 更新操作
        get(LeaderboardRef).then((snapshot) => {
          if (snapshot.exists()) 
          {
            let LeaderboardTemp = snapshot.val().List;
            let Ranking = 5;
            
            //計算排名
            for (let i = 4; i >= 0; --i) 
            {
              if (coinCount >= LeaderboardTemp[i].coin) {
                Ranking = i;
              } 
              else 
              { 
                break;
              }
            }
            
            //達到排行榜
            if (Ranking <= 4) 
              {
                let lastRanking = 5;

                for(let i = 0 ; i < 5 ; ++i)
                {
                  if(LeaderboardTemp[i].spinCounter == bestSpinCounter)
                  {
                    lastRanking = i;
                    break;
                  }
                }         

                if(lastRanking < 5) //使用者已經在排行榜上 更新數值及順序
                {
                  if(LeaderboardTemp[lastRanking].coin > coinCount)
                    {
                      console.log("沒有超越自己上次的紀錄");
                      return;
                    }    

                  console.log("使用者已經在排行榜上 更新數值及順序");
                  for(let i = lastRanking ; i > Ranking ; --i)
                  {
                    console.log(i + "lastRanking:" + lastRanking + " currentRank:" + Ranking);
                    LeaderboardTemp[i] = LeaderboardTemp[i - 1];
                  }
                }
                else //使用者尚未上榜 加入排行榜
                {
                  console.log("使用者尚未上榜 加入排行榜");
                  for (let i = 3; i >= Ranking; --i) 
                    {
                      LeaderboardTemp[i + 1] = LeaderboardTemp[i];
                    }            
                }
                
                LeaderboardTemp[Ranking] =  {userName:userID , coin: coinCount, spinCounter: globalSpinCounterTemp };

              console.log(LeaderboardTemp);
              

              // 上傳更新後的排行榜
              set(LeaderboardRef, {
                List: LeaderboardTemp
              }).then(() => {
                console.log("Leaderboard updated");
              }).catch((error) => {
                console.error("Error updating leaderboard: ", error);
              });

            }

            //更新你的最高分
            leaderboardTable.rows[6].cells[1].textContent = userID;
            leaderboardTable.rows[6].cells[2].textContent = bestSpinCounter;
            leaderboardTable.rows[6].cells[3].textContent = bestCoin;
          } 
          else {
            console.log("資料不存在");
          }

        });
            
      } else {
        globalSpinCounterText.textContent = "資料不存在";
      }
    });


  }).catch((error) => {
    console.error("Error updating global spin counter: ", error);
  });
}

//開啟排行榜時更新排行榜資訊
window.UpdateLeaderboardContent = function() {
  get(LeaderboardRef).then((snapshot) => {
    const leaderboardList = snapshot.val().List;    

    for(let i = 0 ; i < 5 ; ++i)
    {
      if(leaderboardList[i].spinCounter == bestSpinCounter)
      {
        leaderboardTable.rows[i+1].cells[1].textContent = leaderboardList[i].userName + "(你)";

        for (let j = 0; j < 4; j++) {
          leaderboardTable.rows[i + 1].cells[j].style.color = "red";
        }
      } 
      else
      {
        leaderboardTable.rows[i+1].cells[1].textContent = leaderboardList[i].userName;
        for (let j = 0; j < 4; j++) {
          leaderboardTable.rows[i + 1].cells[j].style.color = ""; 
        }
      }
      
      leaderboardTable.rows[i+1].cells[2].textContent = leaderboardList[i].spinCounter;
      leaderboardTable.rows[i+1].cells[3].textContent = leaderboardList[i].coin;
    }
  }
)}

/*
排行榜前5名
資料:
名次 第N次抽獎者 當前金幣

事件:完成抽獎時
讀取排行榜
對排行榜的金幣作比較
如果金幣>前5名
    更新排行榜並寫入

事件:開啟排行榜時
讀取排行榜

同一個使用者不會站多個排行榜上的排名
*/


//初始化
/*
set( LeaderboardRef ,{
  List: [
    {userName:'none' , spinCounter: 0, coin: 0 },
    {userName:'none' ,  spinCounter: 0, coin: 0 },
    {userName:'none' ,  spinCounter: 0, coin: 0 },
    {userName:'none' ,  spinCounter: 0, coin: 0 },
    {userName:'none' ,  spinCounter: 0, coin: 0 }
  ]
})
*/