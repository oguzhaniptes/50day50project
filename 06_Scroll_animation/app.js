const boxes = document.querySelectorAll(".box")

window.addEventListener("scroll", checkBoxes)
checkBoxes()
function checkBoxes(){
    const triggerBotom = (window.innerHeight / 10 ) * 4
    // console.log(triggerBotom);

    boxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top
        console.log(boxTop);

        if (boxTop < triggerBotom) {
            box.classList.add('show')
        }else{
            box.classList.remove('show')
        }
    })
}