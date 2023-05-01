import PropTypes from 'prop-types';
import { NotificationItem } from './NotificationElements';

const Notification = ({ message }) => (
  <NotificationItem>{message}</NotificationItem>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
