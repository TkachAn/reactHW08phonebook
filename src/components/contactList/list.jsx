import { useSelector } from 'react-redux';
import { selectSearch, selectContacts } from '../../redux/contacts/selectors';
import { ContactItem } from './item';

// const selectContacts = state => state.items;
// const selectSearch = state => state.searchValue;

export const ContactList = () => {
  const filter = useSelector(selectSearch);
  const { contacts } = useSelector(selectContacts);
  // console.log('selectContacts', useSelector(selectContacts));
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.searchValue.toLowerCase())
  );

  return (
    <>
      <ul>
        {filteredContacts.map(({ id, name, number }) => {
          return <ContactItem id={id} name={name} number={number} key={id} />;
        })}
      </ul>
    </>
  );
};
