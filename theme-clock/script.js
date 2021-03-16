// alert('JS is loaded')

const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggleEl = document.querySelector('.toggle')

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


//toggles back and forth from light and dark mode

toggleEl.addEventListener('click', (e) => {
    const html = document.querySelector('html')
    if( html.classList.contains('dark')) {
        html.classList.remove('dark')
        e.target.innerHtml = 'Dark mode'
    } else {
        html.classList.add('dark')
        e.target.innerHtml = 'Light mode'
    }
})

//Clock functions 
function setTime() {
    const time = new Date()
    //JS 
    const month = time.getMonth()
    const day = time.getDay()
    const hours = time.getHours()
    const hoursForClock = hours % 12
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    //set needles to make a clock according to current time
    //creates 12 hour format for clock. 360 is set because the clock is round
    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`
    //for minutes 0 , 59 , represents 60 minutes in one hour
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`


    //set  time in html
    timeEl.innerHTML = `${hoursForClock}: `


}

// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
setTime()

setInterval(setTime, 1000)

