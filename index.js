var element = document.getElementsByClassName("main-lights");
let lightsOn = false;
function clickBody() {
    if (!lightsOn){
        lightsOn =true;
        for (let i = 0; i < element.length; i += 2) {
            startLights(i);
        }
    }
    else{
        lightsOn = false;
        setTimeout(lightsOut() , 2000);
        
    }


}

function startLights(stripNo) {
    // if([0 , 2 , 4 , 6 ,8].notIncludes(stripNo) ){
    // }
    setTimeout(() => {
        element[stripNo].classList.toggle("on");
        element[stripNo + 1].classList.toggle("on");

    }, 500 * stripNo);
}
function lightsOut(){
    for(let i = 0 ; i < 10 ; i++){
        element[i].classList.toggle("on");
    }
}