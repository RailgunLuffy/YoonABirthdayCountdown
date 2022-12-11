const day = document.getElementById("day")
const hour = document.getElementById("hour")
const min = document.getElementById("min")
const second = document.getElementById("second")

const showCountdown = (dhms) => {
    [
        day.innerHTML,
        hour.innerHTML,
        min.innerHTML,
        second.innerHTML
    ] = dhms
}

const formatTime = (time) => {
    return time < 10 ? `0${time}` : time
}

const countdown = () => {
    const currentDate = new Date()
    let birthdayDate = new Date(`30 May ${currentDate.getFullYear()}`)

    birthdayDate = birthdayDate < currentDate ? birthdayDate.setFullYear(
        currentDate.getFullYear() + 1
    ) : birthdayDate

    let totalSeconds = (birthdayDate - currentDate) / 1000

    let days = Math.floor(totalSeconds / 3600 / 24)
    let hours = Math.floor(totalSeconds / 3600) % 24
    let mins = Math.floor(totalSeconds / 60) % 60
    let seconds = Math.floor(totalSeconds) % 60

    showCountdown([
        days,
        formatTime(hours),
        formatTime(mins),
        formatTime(seconds)
    ])
}

countdown()

setInterval(countdown, 1000)