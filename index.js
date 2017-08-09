/* global document fetch soundManager */
/* eslint arrow-parens: "off" */

const SOUND_URL = 'sounds/393633__daronoxus__ding.mp3'
const SOUND_ID = 'ding'
const SLEEP_TIMEOUT = 1000 * 60 * 15
const PROGRESS_INTERVAL = 1000

const containerBlock = document.getElementById('app')
const sleepButton = document.getElementById('sleep-button')
const progressBlock = document.getElementById('sleep-progress')

progressBlock.setAttribute('max', SLEEP_TIMEOUT / PROGRESS_INTERVAL)

let timeout = null
let progressInterval = null
let progressValue = 0

const toggleSleepButton = (disabled) => sleepButton.disabled = disabled
const disableSleepButton = () => toggleSleepButton(true)
const enableSleepButton = () => toggleSleepButton(false)
const playSound = () => soundManager.play(SOUND_ID)
const startProgress = () => {
  if (progressInterval) {
    clearInterval(progressInterval)
  }
  progressInterval = setInterval(() => {
    progressValue += 1
    progressBlock.value = progressValue
  }, PROGRESS_INTERVAL);
}
const stopProgress = () => {
  if (progressInterval) {
    clearInterval(progressInterval)
    progressInterval = null
  }
  progressValue = 0
  progressBlock.value = progressValue
}

function initialize() {
  const sound = soundManager.createSound({
    id: SOUND_ID,
    url: SOUND_URL,
    onload: (success) => toggleSleepButton(!success),
    autoLoad: true,
  })

  sleepButton.addEventListener('click', startTimer)
}

function startTimer() {
  disableSleepButton()

  startProgress()

  timeout = setTimeout(() => {
    playSound()
    enableSleepButton()
    stopProgress()
  }, SLEEP_TIMEOUT);
}

soundManager.onready(initialize)
