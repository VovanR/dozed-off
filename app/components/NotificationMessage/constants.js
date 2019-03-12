/**
 * Notification.permission
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/API/Notification/permission}
 * @enum {string}
 */
export const NOTIFICATION_PERMISSION = {
  /** The user has explicitly granted permission for the current origin to display system notifications. */
  GRANTED: 'granted',
  /** The user has explicitly denied permission for the current origin to display system notifications. */
  DENIED: 'denied',
  /** The user decision is unknown; in this case the application will act as if permission was `denied`. */
  DEFAULT: 'default'
}
