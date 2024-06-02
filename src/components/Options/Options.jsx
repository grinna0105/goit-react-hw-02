import PropTypes from 'prop-types';
import css from './Options.module.css'

const Options = ({update, total, reset}) => {
  
    return (
        <div className={css.container}>
        <button onClick={() => update("good")} type="button">
          Good
        </button>
        <button onClick={() => update("neutral")} type="button">
          Neutral
        </button>
        <button onClick={() => update("bad")} type="button">
          Bad
        </button>
        {total === 0 ? "" : (
          <button onClick={reset} type="button">
            Reset
          </button>
        )}
      </div>
    );
  };

  Options.propTypes = { 
    update: PropTypes.func.isRequired,
    total: PropTypes.number.isRequired,
    reset: PropTypes.func.isRequired,
  };
  
  
  export default Options;