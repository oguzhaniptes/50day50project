const main = document.getElementById('keyS')

window.addEventListener('keydown', getKeyCode)

function getKeyCode(event) {
    console.log(event)

    main.innerHTML =
        `<div class="cap">
            <div class="key" id="event-key">
                ${event.key === " " ? "Space" : event.key}
                <small>event.key</small>
            </div>
            <div class="key" id="event-keyCode">
                ${event.keyCode}
                <small>event.keyCode</small>
            </div>
            <div class="key" id="event-keyName">
                ${event.code}
                <small>event.keyName</small>
            </div>
        </div>`
}