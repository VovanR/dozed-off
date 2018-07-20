import {NOTIFICATION_PERMISSIONS} from '../../constants.js'

class NotificationMessage {
  constructor({
    message
  }) {
    this._message = message

    this._requestPermission()
  }

  _requestPermission() {
    if (Notification.permission === NOTIFICATION_PERMISSIONS.DEFAULT) {
      Notification.requestPermission()
    }
  }

  show() {
    if (Notification.permission === NOTIFICATION_PERMISSIONS.GRANTED) {
      return new Notification(this._message)
    }
  }
}

export default NotificationMessage
