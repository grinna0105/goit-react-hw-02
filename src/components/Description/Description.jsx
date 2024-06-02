import PropTypes from 'prop-types';
import css from './Description.module.css';

const Description = ({name, description}) => {
  
    return (
      <div className={css.container}>
          <h1 className={css.title}>{name}</h1>
          <p className={css.text}>{description}</p>
      </div>
    );
  };

  Description.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };
  
  export default Description;