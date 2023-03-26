import PropTypes from 'prop-types';
import css from './Contacts.module.css';

export const Contacts = ({contacts, onDeleteContact}) => (
  <ul >
    {contacts.map(({ id, name, number }) => (
      <li className={css.contacts} key={id}>
        <p>
          {name}: {number}
        </p>
        <button className={css.button} onClick={() => onDeleteContact(id)}>Delete</button>
      </li>
    ))}
  </ul>
);

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};