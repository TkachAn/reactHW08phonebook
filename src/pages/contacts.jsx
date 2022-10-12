import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from './contactForm/form';
import { ContactList } from './contactList/list';
import { Filter } from './filter/filter';
import { selectContacts } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import css from './App.module.css';

export const App = () => {
  const dispatch = useDispatch();
  const { contacts, isLoading } = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm contacts={contacts} />
      <h2>Contacts</h2>
      {Number(contacts.length) > 1 && <Filter />}
      {isLoading && <p>Loading contacts...</p>}
      {contacts.length > 0 ? (
        <ContactList />
      ) : (
        <p>Your phonebook is empty. Please add contact.</p>
      )}
    </div>
  );
};
