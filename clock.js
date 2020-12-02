var date,hours,min,sec;



function time(){
    date = new Date();  
    hours = date.getHours();
    min = date.getMinutes();
    sec = date.getSeconds();
    hoursRotation = 30*hours + min/2;
    minRotation = 6*min;
    secRotation = 6*sec;
    console.log('Current time : '+hours,min,sec);
    document.getElementById('Sec').style.transform = `rotate(${secRotation}deg)`;
    document.getElementById('Min').style.transform = `rotate(${minRotation}deg)`;
    document.getElementById('Hours').style.transform = `rotate(${hoursRotation}deg)`;
    document.getElementById('digital').innerHTML = hours+' : '+min+' : '+sec;
    
}

function rotation(){
    setInterval(time,1000)

}

