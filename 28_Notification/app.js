const notifContainer = document.querySelector('.notifContainer')
const button = document.getElementById('button')

const notifications = [
    'Instagram Notifications', 'Telegram Notifications', 'Twitter Notifications', 'Youtube Notifications'
]

const bgColors = [
    'red', 'purple', 'green', 'blue', 'gray', 'yellow'
]

button.addEventListener('click', () => createNotification())

function createNotification() {
    const notif = document.createElement('div')
    notif.classList.add('notif')
    notif.classList.add(getRandomColor())
    notif.innerText = getRandomNotif()
    notifContainer.appendChild(notif)
    setTimeout(() => {
       notif.remove() 
    }, 2000);
}

function getRandomNotif(){
    return notifications [Math.floor(Math.random() * notifications.length)]
}
function getRandomColor(){
    return bgColors [Math.floor(Math.random() * notifications.length)]
}