/* global fetch soundManager */
/* eslint arrow-parens: "off" */

import SleepButton from './components/SleepButton/index.js'
import Progress from './components/Progress/index.js'
import Timer from './components/Timer/index.js'
import NotificationMessage from './components/NotificationMessage/index.js'
import {
  SLEEP_TIMEOUT,
  SOUND_ID,
  SOUND_URL,
  NOTIFICATION_MESSAGE
} from './constants.js'

const containerBlock = document.getElementById('app')

const timeout = SLEEP_TIMEOUT

const sleepButton = new SleepButton({
  timeout,
  onClick: startTimer
})
const progress = new Progress({
  value: 0,
  max: timeout
})

const fragment = document.createDocumentFragment()
fragment.appendChild(sleepButton.getElement())
fragment.appendChild(progress.getElement())
containerBlock.prepend(fragment)

function initialize() {
  soundManager.createSound({
    id: SOUND_ID,
    url: SOUND_URL,
    onload: (success) => sleepButton.toggle(!success),
    autoLoad: true
  })
}

function startTimer() {
  const notificationMessage = new NotificationMessage({
    message: NOTIFICATION_MESSAGE
  })

  sleepButton.disable()

  new Timer({
    timeout,
    onEnd: () => {
      soundManager.play(SOUND_ID)
      sleepButton.enable()
      sleepButton.setValue(timeout)
      progress.setValue(0)
      notificationMessage.show()
    },
    onTick: (progressTime, restTime) => {
      sleepButton.setValue(restTime)
      progress.setValue(progressTime)
    }
  })
}

soundManager.onready(initialize)
