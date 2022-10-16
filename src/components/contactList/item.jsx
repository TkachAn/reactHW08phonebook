import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { delContact } from 'redux/contacts/operations';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const delContacts = () => dispatch(delContact(id));

  return (
    <li key={id}>
      <Container component="box">
        <Box>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={5}>
              {name}:
            </Grid>
            <Grid item xs={12} sm={6}>
              {number}
            </Grid>
            <Grid item xs={12} sm={1}>
              <Button
                type="button"
                onClick={() => delContacts(id)}
                sx={{ color: 'red', fontWeight: 900 }}
              >
                X
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </li>
  );
};

ContactItem.propType = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
// maxWidth={}
//className={css.item}
//className={css.btn}
//hover {
// color: white,
//  backgroundColor: red, }
