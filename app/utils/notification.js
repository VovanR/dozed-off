import {NOTIFICATION_PERMISSIONS} from '../constants.js'

export function requestNotificationPermission() {
  if (Notification.permission === NOTIFICATION_PERMISSIONS.DEFAULT) {
    Notification.requestPermission()
  }
}

export function showNotification(message) {
  if (Notification.permission === NOTIFICATION_PERMISSIONS.GRANTED) {
    return new Notification(message)
  }
}
