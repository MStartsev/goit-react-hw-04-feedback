import css from './Notification.module.css';

export const NotificationItem = ({ children }) => (
  <p className={css.item}>{children}</p>
);
