console.log("its work");
const container = document.getElementById("container")

const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
const SQUARE = 500

for (let index = 0; index < SQUARE; index++) {
    const square = document.createElement('div')
    square.addEventListener("mouseover", () => setColor(square))
    square.addEventListener("mouseout", () => removeColor(square))
    square.classList.add('square')
    container.appendChild(square)
}

function setColor(div) {
    const randomColor = getRandomColor()
    div.style.backgroundColor = randomColor
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}

function removeColor(div){
    div.style.backgroundColor = 'darkseagreen'
}