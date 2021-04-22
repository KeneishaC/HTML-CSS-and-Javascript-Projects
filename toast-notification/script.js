const button = document.getElementsById('button')
const toasts = document.getElementsById('toasts')

const messages = [
    'Chiceea',
    'Shawanda',
    'Katrina',
    'Okoye',
    'Keneisha',
    'Malek'    
]


button.addEventListener('click', () => createNotification())

function createNotification() {
    const notif = document.createElement('div')
    notif.classList.add('toast')

    notif.innerText = getRandomMessage()
}

function getRandomMessage() {
   return messages [Math.floor(Math.random() * messages.length)]
}