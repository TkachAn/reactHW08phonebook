import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from '../components/contactForm/form';
import { ContactList } from '../components/contactList/list';
import { Filter } from '../components/filter/filter';
import { selectContacts } from '../redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contacts/operations';

import { Helmet } from 'react-helmet';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';

const theme = createTheme({
  typography: {
    h4: {
      color: '#1976d2',
      fontWeight: '700',
      textAlign: 'center',
    },
    h6: {
      color: '#1976d2',
      fontWeight: '700',
      textAlign: 'center',
    },
  },
});
export default function ContactsPage() {
  const dispatch = useDispatch();

  const { contacts, isLoading } = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <main>
        <Helmet>
          <title>Contacts</title>
        </Helmet>
        <Typography component="h1" variant="h4">
          Phonebook
        </Typography>
        <ContactForm />

        <Typography component="h1" variant="h6">
          Contact list
        </Typography>
        <Box sx={{ textAlign: 'center' }}>
          {Number(contacts.length) > 1 && <Filter />}
        </Box>
        {isLoading && <p>Loading contacts...</p>}
        {contacts.length > 0 ? (
          <ContactList />
        ) : (
          <p>Your phonebook is empty. Please add contact.</p>
        )}
      </main>
    </ThemeProvider>
  );
}
//contacts={contacts}
// export default ContactsPage;
// className={css.container}
// sx={{ display: flexbox, textAlign: 'center' }}
//style : {position="fixed"}static
//position="bottom"
//sx={{
