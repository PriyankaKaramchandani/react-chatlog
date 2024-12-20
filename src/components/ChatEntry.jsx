import './ChatEntry.css';
import TimeStamp from './TimeStamp';
import PropTypes from 'prop-types';

const ChatEntry = ({id, sender, body, timeStamp, liked, handleLike, currentUser}) => {
  const localVsRemoteMessage = sender === currentUser ? 'local' : 'remote';

  return (
    <div className={`chat-entry ${localVsRemoteMessage}`}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time"><TimeStamp time={timeStamp}></TimeStamp></p>
        <button className="like" onClick={() => handleLike(id)}>{liked ? '❤️' : '🤍'}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  handleLike: PropTypes.func,
  currentUser: PropTypes.string,
};

export default ChatEntry;
