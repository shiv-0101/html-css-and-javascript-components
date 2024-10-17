const hourEl = document.getElementsByClassName('hour')[0]
const minuteEl = document.getElementsByClassName('minute')[0]
const secondEl = document.getElementsByClassName('second')[0]
const timeEl = document.getElementsByClassName('time')[0]
const dateEl = document.getElementsByClassName('date')[0]
const toggle = document.getElementsByClassName('toggle')[0]

const days = ["Sun", "Mon","Tue", "Wed", "Thu","Fri","Sat"]
const months = ["Jan", "Fed","Mar", "Apr", "May","June","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

toggle.addEventListener('click', (x)=> {
    const html = document.querySelector('html')
    if (html.classList.contains('dark')){
        html.classList.remove ('dark')
        x.target.innerHTML = 'Dark Mode'
    }else {
        html.classList.add('dark')
        x.target.innerHTML = 'Light mode'
    }
})

function setTime(){
    const time= new Date()
    const month= time.getMonth()
    const day= time.getDay()
    const date= time.getDate()
    const hours= time.getHours()
    const hoursForClock= hours>= 13? hours%12 : hours
    const minutes= time.getMinutes()
    const seconds= time.getSeconds()
    const ampm= hours<= 12? 'PM' : 'AM'

    hourEl.style.transform =  `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 12, 0, 360)}deg)`
    minuteEl.style.transform =  `translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`
    secondEl.style.transform =  `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`

    timeEl.innerHTML=`${hoursForClock}: ${minutes<10 ? `0${minutes}`: minutes} ${ampm}`
    dateEl.innerHTML= `${days[day]}, ${months[month]} <span class="circle">${date} </span>`

}

const scale = (number, inMin, inMax, outMin, outMax) =>{
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

setTime()

setInterval(setTime, 1000)
