var element = document.getElementsByClassName("main-lights");
var sound = new Audio();
sound.src = './assets/f1.mp3';
let lightsOn = false;
function clickBody() {
    if (!lightsOn){
        lightsOn = true;
        lightsOnProcedure(lightsOutProcedure);
                    //lightsOutProcedure();
    }


}

function startLights(stripNo) {
 
    setTimeout(() => {
        element[stripNo].classList.toggle("on");
        element[stripNo + 1].classList.toggle("on");

    }, 500 * stripNo);
}
function lightsOnProcedure(lightsOutCallback){
    lightsOn = true;
    sound.play();
    lightsOn =true;
    for (let i = 0; i < element.length; i += 2) {
        startLights(i);
    }
    lightsOutCallback();
}
function lightsOutProcedure(){
    setTimeout(lightsOut ,5000 + Math.random() * 2000);

}
function lightsOut(){
    for(let i = 0 ; i < 10 ; i++){
        element[i].classList.toggle("on");
    }
    lightsOn = false;

}