
const bulbs = document.querySelectorAll('.bulb'); 

let lightNumber = 0;

let bulbSpeed = 500;

let bulbUpdate = setInterval(UpdateLight , bulbSpeed);

function ChangeBulbState(state)
{
    if(state == 0)
    {
        ChangeBulbUpdateSpeed(500);
    }
    else if(state == 1)
    {
        ChangeBulbUpdateSpeed(100);
    }
}

function ChangeBulbUpdateSpeed(speed)
{
    clearInterval(bulbUpdate);
    bulbUpdate = setInterval(UpdateLight , speed);
}

function UpdateLight()
{
    for (let i = 0; i < bulbs.length; i++) 
    {
        if((i+1) % 4 == lightNumber)
        {
            bulbs[i].style.backgroundColor = 'rgb(255, 80, 80)';
        }
        else
        {
            bulbs[i].style.backgroundColor = 'rgb(255, 235, 135)';
        }
    }

    lightNumber++;

    if(lightNumber >= 4)
    {
        lightNumber = 0;
    }
}