const page = document.querySelector('.page')

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
const buttonPlus = document.querySelector('.sum')
const buttonMinus = document.querySelector('.minus')
const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonLight = document.querySelector('#light')
const buttonDark = document.querySelector('#dark')
const cardForest = document.querySelector('.forest')
const cardRain = document.querySelector('.rain')
const cardMarket = document.querySelector('.market')
const cardFire = document.querySelector('.fire')
const forestSound = new Audio("../sounds/Floresta.wav")
let timerTimeOut

function updateTimerDisplay(minutes, seconds) {
  minutesDisplay.innerHTML = String(minutes).padStart(2,'0')
  secondsDisplay.innerHTML = String(seconds).padStart(2,'0')
}

function countdown () {
  timerTimeOut = setTimeout(function() {
    let minutes = Number(minutesDisplay.innerHTML)
    let seconds = Number(secondsDisplay.innerHTML)

    if (minutes <= 0 && seconds <= 0) {
      stop()
      return
    }

    if (seconds <= 0) {
      --minutes
      seconds = 4  
    }

    --seconds

    updateTimerDisplay(minutes,seconds)
    countdown()

  },1000)
}

function stop() {
  clearTimeout(timerTimeOut)
}

function toggleLightOrDark() {
  if (buttonDark.classList.contains('hide')) {
    document.documentElement.style.setProperty('--bg-page', '#121214')
    document.documentElement.style.setProperty('--color-timer', '#FFFFFF')
    document.documentElement.style.setProperty('--color-controls', '#C4C4CC')
    document.documentElement.style.setProperty('--color-bg-card', '#29292E')
    document.documentElement.style.setProperty('--color-icon-card', '#C4C4CC')
    document.documentElement.style.setProperty('--color-sound-card', '#FFFFFF')
    buttonLight.classList.toggle('hide')
    buttonDark.classList.toggle('hide')
  }

  else {
    document.documentElement.style.setProperty('--bg-page', '#FFFFFF')
    document.documentElement.style.setProperty('--color-timer', '#323238')
    document.documentElement.style.setProperty('--color-controls', '#323238')
    document.documentElement.style.setProperty('--color-bg-card', '#E1E1E6')
    document.documentElement.style.setProperty('--color-icon-card', '#323238')
    document.documentElement.style.setProperty('--color-sound-card', '#323238')
    buttonLight.classList.toggle('hide')
    buttonDark.classList.toggle('hide')
  }
}

buttonPlay.addEventListener('click', function() {
  countdown()
})

buttonStop.addEventListener('click', function() {
  stop()
})

buttonPlus.addEventListener('click', function() {
  let minutes = Number(minutesDisplay.innerHTML)
  minutes = minutes + 5

  updateTimerDisplay(minutes, secondsDisplay.innerHTML)
})

buttonMinus.addEventListener('click', function() {
  let minutes = Number(minutesDisplay.innerHTML)
  if(minutes >= 5) {
    minutes = minutes - 5
    updateTimerDisplay(minutes, secondsDisplay.innerHTML)
  }

  else{
    return alert('Não é possível diminuir mais')
  }
})

buttonLight.addEventListener('click', function() {
  toggleLightOrDark()
})

buttonDark.addEventListener('click', function() {
  toggleLightOrDark()
})



cardForest.addEventListener('click', function() {
  const forestSlide = document.querySelector('.forest input')
  
  forestSound.play()
  forestSound.loop = true
  forestSound.volume = forestSlide.value/100

  document.documentElement.style.setProperty('--color-bg-card-pressed', '#02799D')
  document.documentElement.style.setProperty('--color-icon-card-pressed', '#FFFFFF')
  document.documentElement.style.setProperty('--color-sound-card-pressed', '#FFFFFF')
})