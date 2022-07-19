let element = document.getElementsByClassName("main-lights");
let sound = new Audio('./assets/f1.mp3');
let lightsOn = false;
let timeOut;
let start = 0;
let end = 0;
let reactionTime;
let timerRunning = false;
let bestTime;

window.onload = () => {
    // document.getElementById("best-time").innerText = localStorage.getItem("bestItem") ||"not Set";
   //alert(window.localStorage.getItem("bestItem"));
}

function clickBody(event , device) {
    if(event.key != " " && device == "keyboard"){
        exit;
    }
    // alert(date.getTime());
    if (!lightsOn) {
        lightsOn = true;
        lightsOnProcedure(lightsOutProcedure);
        //lightsOutProcedure();
    } else {
        if(timerRunning){
        lightsOn = false;
        timerRunning = false;
        let date = new Date();
        end = date.getTime();
        reactionTime = (end - start) / 1000;
        bestTimeSet(reactionTime);
        document.getElementById("reaction-time").innerText =  reactionTime;
        
        //alert(end - start);
        } else {
            lightsOut();
            //clearTimeout(timeOut);
            document.getElementById("reaction-time").innerText =  "Jump Start";

        }
    }


}

function startLights(stripNo) {

    timeOut = setTimeout(() => {
        element[stripNo].classList.toggle("on");
        element[stripNo + 1].classList.toggle("on");

    }, 500 * stripNo);
}
function lightsOnProcedure(lightsOutCallback) {

    sound.play();
    for (let i = 0; i < element.length; i += 2) {
        startLights(i);
    }
    lightsOutCallback();
}
function lightsOutProcedure() {
    let delay = 5000 + Math.random() * 2000;
    setTimeout(lightsOut, delay);
    //setTimeout(reactionTimerRunning, delay);

}
function lightsOut() {
    clearTimeout(timeOut);
    for (let i = 0; i < 10; i++) {
        element[i].classList.toggle("on");
    }
    reactionTimerRunning();
}
function reactionTimerRunning() {
    timerRunning = true;
    let d = new Date();
    start = d.getTime();
    //alert('timer');
}
function bestTimeSet(r){
    if(bestTime == "not set"){
        document.getElementById("best-time").innerText = r;
        window.localStorage.setItem("bestTime" , 123);
    } else if(reactionTime < bestTime){
        document.getElementById("best-time").innerText = r;
        window.localStorage.setItem("bestTime" , 123);
    }
}