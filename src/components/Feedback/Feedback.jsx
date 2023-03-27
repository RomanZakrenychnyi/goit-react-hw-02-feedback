import PropTypes from 'prop-types';
import style from './Feedback.module.css';

export const Feedback = ({ onHandleUpdate }) => {
  return (
    <>
      <h2 className={style.title}>Please leave feedback</h2>
      <ul className={style.list}>
        <li className={style.item}>
          <button
            onClick={onHandleUpdate}
            className={style.btn}
            type="button"
            name="good"
          >
            Good
          </button>
        </li>
        <li className={style.item}>
          <button
            onClick={onHandleUpdate}
            className={style.btn}
            type="button"
            name="neutral"
          >
            Neutral
          </button>
        </li>
        <li className={style.item}>
          <button
            onClick={onHandleUpdate}
            className={style.btn}
            type="button"
            name="bad"
          >
            Bad
          </button>
        </li>
      </ul>
    </>
  );
};

Feedback.propTypes = {
  onHandleUpdate: PropTypes.func.isRequired,
};