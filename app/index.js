/* global fetch */
/* eslint arrow-parens: "off" */

import SleepButton from './components/SleepButton/index.js'
import Progress from './components/Progress/index.js'
import StatusIcon from './components/StatusIcon/index.js'
import Timer from './components/Timer/index.js'
import Audio from './components/Audio/index.js'
import NotificationMessage from './components/NotificationMessage/index.js'
import {
  SLEEP_TIMEOUT,
  NOTIFICATION_MESSAGE
} from './constants.js'

const containerBlock = document.getElementById('app')

const timeout = SLEEP_TIMEOUT

const audio = new Audio()

const statusIcon = new StatusIcon()
const progress = new Progress({
  value: 0,
  max: timeout
})
const sleepButton = new SleepButton({
  timeout,
  textBeforeElement: statusIcon.getElement(),
  textAfterElement: progress.getElement(),
  onClick: startTimer
})

const fragment = document.createDocumentFragment()
fragment.appendChild(sleepButton.getElement())
containerBlock.prepend(fragment)

function startTimer() {
  const notificationMessage = new NotificationMessage({
    message: NOTIFICATION_MESSAGE
  })

  audio.preload()

  sleepButton.disable()

  new Timer({
    timeout,
    onEnd: () => {
      audio.play()
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
