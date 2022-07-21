const loadingText = document.querySelector(".loading-text")
const background = document.querySelector(".background")

let load = -1;
let int =  setInterval(bluring, 60)
function bluring() {
    load++
    if (load > 99) {
        clearInterval(int); //islevi durdur
    }
    console.log(load);
    loadingText.innerText = `${load}%`
    loadingText.style.opacity = scale(load,0,100,1,0);
    background.style.filter = `blur(${scale(load ,0,100,30,0)}px)`
}
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}