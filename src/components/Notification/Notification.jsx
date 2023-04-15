import PropTypes from 'prop-types';
import { NotificationItem } from './NotificationElements';

function Notification({ message }) {
  return <NotificationItem>{message}</NotificationItem>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
