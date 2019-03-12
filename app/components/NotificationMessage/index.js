import {NOTIFICATION_PERMISSION} from './constants.js'

class NotificationMessage {
  constructor({
    message
  }) {
    this._message = message

    this._requestPermission()
  }

  _requestPermission() {
    if (Notification.permission === NOTIFICATION_PERMISSION.DEFAULT) {
      Notification.requestPermission()
    }
  }

  show() {
    if (Notification.permission === NOTIFICATION_PERMISSION.GRANTED) {
      return new Notification(this._message)
    }
  }
}

export default NotificationMessage
