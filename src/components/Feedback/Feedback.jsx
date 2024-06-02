import PropTypes from 'prop-types';
import css from '../Feedback/Feedback.module.css';

const Feedback = ({good, neutral, bad, total, positiveFeedback }) => {
  
  return (
    <div className={css.feedback}>
        <ul className={css.feedbackList}>
            <li className={css.feedbackItem}>Good: {good}</li>
            <li className={css.feedbackItem}>Neutral: {neutral}</li>
            <li className={css.feedbackItem}>Bad: {bad}</li>
            <li className={css.feedbackItem}>Total: {total}</li>
            <li className={css.feedbackItem}>Positive: {positiveFeedback}%</li>
        </ul>
    </div>
  );
};

Feedback.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};

export default Feedback;