export enum NotificationType {
  Success = 'Success',
  Info = 'Info',
  Error = 'Error',
  Warning = 'Warning',
}

export enum NotificationColor {
  Success = '#5cb85c',
  Info = '#5bc0de',
  Danger = '#d9534f',
  Warning = '#f0ad4e',
}

export interface NotificationItem {
  id: number;
  type: NotificationType;
  description: string;
  color: NotificationColor;
}
