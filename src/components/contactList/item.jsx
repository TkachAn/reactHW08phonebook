import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { delContact } from 'redux/contacts/operations';
import css from './list.module.css';
export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const delContacts = () => dispatch(delContact(id));

  return (
    <li className={css.item} key={id}>
      <div className={css.info}>
        {name}: {number}
        <button
          className={css.btn}
          type="button"
          onClick={() => delContacts(id)}
        >
          X
        </button>
      </div>
    </li>
  );
};

ContactItem.propType = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
