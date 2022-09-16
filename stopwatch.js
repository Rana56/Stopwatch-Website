var hour = 0;
var min = 0;
var sec = 0;

var h = "00";
var m = "00";
var s = "00";
var interval;

document.getElementById("start").onclick = startCount;
document.getElementById("stop").onclick = stopCount;
document.getElementById("reset").onclick = reset;


function startCount() {
    console.log("Start");
    //setIntercal calls the function at specfied intercals (milliseconds)
    interval = setInterval(function() {
        sec++;

        if(sec % 60 == 0){
            min++;
            sec = 0;
        }
        if(min % 60 == 0 && min != 0){
            hour++;
            min = 0;
        }
        if(hour > 99){
            reset();
        }

        if(sec < 10){
            s = "0" + sec;
        } else {
            s = sec;
        }

        if(min < 10){
            m = "0" + min;
        } else {
            m = min;
        }

        if(hour < 10){
            h = "0" + hour;
        } else {
            h = hour;
        }
        
        document.getElementById("time").innerHTML = h + ":" + m + ":" + s;
    }, 1000)
}

function stopCount() {
    console.log("Stop" + sec)
    clearInterval(interval);
}

function reset() {
    console.log("Reset" + sec)
    document.getElementById("time").innerHTML = "00:00:00";
    sec = 0;
    min = 0;
    hour = 0;
}