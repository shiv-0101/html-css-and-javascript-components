window.onload = function (){

    var seconds = 00
    var tens = 00

    var appendSeconds = document.getElementById("seconds")
    var appendTens = document.getElementById("tens")
    var buttonStart = document.getElementById("start-button")
    var buttonStop = document.getElementById("stop-button")
    var buttonReset = document.getElementById("reset-button")

    var Interval;

    buttonStart.onclick= function(){
        clearInterval(Interval)
        Interval= setInterval(startTimer, 10) 
    }

    buttonStop.onclick= function(){
        clearInterval(Interval)
    }

    buttonReset.onclick= function(){
        clearInterval(Interval)
        tens= "00"
        seconds= "00"
        appendTens.innerHTML= tens
        appendSeconds.innerHTML = seconds
    }

function startTimer (){
    tens++

    if(tens<= 9){
        appendTens.innerHTML = "0"+tens
    }

    if(tens> 9){
        appendTens.innerHTML = tens
    }

    if(tens> 99){
        console.log ("seconds")
        seconds++
        appendSeconds.innerHTML = "0"+ seconds
        tens= 0
        appendTens.innerHTML = "0" + 0
    }
    
    if(seconds > 9){
        appendSeconds.innerHTML = seconds
    }
}

}