const startStopBtn = document.querySelector('.startStopBtn');
const resetBtn = document.querySelector('.resetBtn');
const timer = document.querySelector('.timer');


let hours = 0;
let minutes = 0;
let seconds = 0;

let leadingHours = 0;
let leadingMinutes = 0;
let leadingSeconds = 0;

let status = "stopped";
let timeInterval = null;
function stopWatch(){
    seconds++;

    if(seconds/60 == 1){
        minutes++;
        seconds = 0;
    }
    if(minutes/60 == 1){
        hours++;
        minutes = 0;
    }

    if(seconds<10){
        leadingSeconds = "0" + seconds.toString();
    }
    else{
        leadingSeconds = seconds;
    }
    if(minutes<10){
        leadingMinutes = "0" + minutes.toString();
    }
    else{
        leadingMinutes = minutes;
    }
    if(hours<10){
        leadingHours = "0" + hours.toString();
    }
    else{
        leadingHours = hours;
    }
    timer.innerText = leadingHours+":"+leadingMinutes+":"+leadingSeconds;
}

//window.setInterval(stopWatch,1);
startStopBtn.addEventListener('click',function(){
        if(status === "stopped"){
            console.log("haiii");
            timeInterval = setInterval(stopWatch,1000);
            status = "started";
            startStopBtn.innerHTML = "<i class = 'fa-solid fa-pause' id = pause></i>"
        }

        else{
            clearInterval(timeInterval);
            status = "stopped";
            startStopBtn.innerHTML = "<i class = 'fa-solid fa-play' id = play></i>"
        }
    
})

resetBtn.addEventListener('click', function(){
    seconds = 0;
    minutes = 0;
    hours = 0;
    
    clearInterval(timeInterval);
    timer.innerText = "00:00:00";
    startStopBtn.innerHTML = "<i class = 'fa-solid fa-play' id = play></i>"
})