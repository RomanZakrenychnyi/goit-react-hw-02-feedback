import PropTypes from 'prop-types';
import style from './Statistic.module.css';

export const Statistic = ({ good, neutral, bad, total, positiveFeedback }) => (
  <>
    <h2 className={style.title}>Statistics</h2>

    <p>
      Good:<span>{good}</span>
    </p>
    <p>
      Neutral:<span>{neutral}</span>
    </p>
    <p>
      Bad:<span>{bad}</span>
    </p>
    <p>
      Total:<span>{total}</span>
    </p>
    <p>Positive Feedback:{<span>{positiveFeedback + '%'}</span>}</p>
  </>
);

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.string.isRequired,
};
