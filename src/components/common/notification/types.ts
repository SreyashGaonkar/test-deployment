export interface NotificationPropType {
    message: string;
    onClose: () => void;
}

export enum NotificationType {
    SUCCESS,
    ERROR,
    NORMAL,
}