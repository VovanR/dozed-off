/* eslint arrow-parens: "off" */

import SleepButton from './components/SleepButton/index.js'
import Progress from './components/Progress/index.js'
import StatusIcon from './components/StatusIcon/index.js'
import Settings from './components/Settings/index.js'
import Timer from './components/Timer/index.js'
import Audio from './components/Audio/index.js'
import NotificationMessage from './components/NotificationMessage/index.js'
import {
  DEFAULT_SLEEP_TIMEOUT,
  NOTIFICATION_MESSAGE
} from './constants.js'
import SearchParamsStorage from './utils/search-params-storage.js'
import minutesToMilliseconds from './utils/minutes-to-milliseconds.js'

const containerBlock = document.querySelector('#app')

let timeout = DEFAULT_SLEEP_TIMEOUT

const searchParamsStorage = new SearchParamsStorage()
let {
  m,
  autostart
} = searchParamsStorage.load()

if (typeof m === 'string') {
  m = Number.parseInt(m, 10)

  if (Number.isInteger(m)) {
    timeout = minutesToMilliseconds(m)
  }

  if (autostart !== 'false') {
    autostart = true
  }
} else {
  autostart = autostart === 'true'
}

const audio = new Audio()

const statusIcon = new StatusIcon()
const settings = new Settings({audio})
const progress = new Progress({
  value: 0,
  max: timeout
})
const sleepButton = new SleepButton({
  timeout,
  textBeforeElement: [
    statusIcon.getElement(),
    settings.getElement()
  ],
  textAfterElement: progress.getElement(),
  onClick: startTimer
})

const fragment = document.createDocumentFragment()
fragment.append(sleepButton.getElement())
containerBlock.prepend(fragment)

if (autostart === true) {
  startTimer()
}

function startTimer() {
  const notificationMessage = new NotificationMessage({
    message: NOTIFICATION_MESSAGE
  })

  audio.preload()

  sleepButton.disable()

  const timer = new Timer({
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

  timer.start()
}
