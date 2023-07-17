import PropTypes from 'prop-types';

import styles from './ContactList.module.css';

const ContactList = ({ items, onDelete }) => {
  return (
    <ul>
      {items.map(({ id, name, number }) => (
        <li key={id} className={styles.contact}>
          {name}: {number}
          <button
            onClick={() => onDelete(id)}
            type="button"
            className={styles.btn}
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

ContactList.defaultProps = {
  items: [],
};

ContactList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};
