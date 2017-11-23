function requestNotificationPermission() {
  if (Notification.permission === NOTIFICATION_PERMISSIONS.DEFAULT) {
    Notification.requestPermission()
  }
}

function showNotification(message) {
  if (Notification.permission === NOTIFICATION_PERMISSIONS.GRANTED) {
    return new Notification(message)
  }
}
