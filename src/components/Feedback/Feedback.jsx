import PropTypes from 'prop-types';
import style from './Feedback.module.css';

const Feedback = props => {
  return (
    <>
      <h2>Please leave feedback</h2>
      <ul>
        <li>
          <button>Good</button>
        </li>
        <li>
          <button>Neutral</button>
        </li>
        <li>
          <button>Bad</button>
        </li>
      </ul>
    </>
  );
};

export default Feedback;
