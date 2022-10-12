import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectSearch, selectContacts } from 'redux/selectors';
import { ContactItem } from './item';

export const ContactList = () => {
  const filter = useSelector(selectSearch);
  const { contacts } = useSelector(selectContacts);
  let filteredContacts = contacts;

  if (filter.searchValue.toLowerCase()) {
    filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.searchValue.toLowerCase())
    );
  }

  return (
    <>
      <ul>
        {filteredContacts.map(({ id, name, phone }) => {
          return <ContactItem id={id} name={name} phone={phone} key={id} />;
        })}
      </ul>
    </>
  );
};

ContactList.propType = {
  contacts: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  error: PropTypes.string,
};

// {error && <p>{error}</p>}
// {!filteredContacts.length && Boolean(contacts.length) && (
// 	<p className="inputName">No contacts found</p>
// )}
