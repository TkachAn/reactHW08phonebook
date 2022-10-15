import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from '../components/contactForm/form';
import { ContactList } from '../components/contactList/list';
import { Filter } from '../components/filter/filter';
import { selectContacts } from '../redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contacts/operations';
import css from '../components/App.module.css';
import { Helmet } from 'react-helmet';

export default function ContactsPage() {
  const dispatch = useDispatch();

  const { contacts, isLoading } = useSelector(selectContacts);
  // console.log({ contacts, isLoading });
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <main className={css.container}>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {Number(contacts.length) > 1 && <Filter />}

      {isLoading && <p>Loading contacts...</p>}
      {contacts.length > 0 ? (
        <ContactList />
      ) : (
        <p>Your phonebook is empty. Please add contact.</p>
      )}
    </main>
  );
}
//contacts={contacts}
// export default ContactsPage;
