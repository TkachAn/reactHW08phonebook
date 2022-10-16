import { useDispatch } from 'react-redux';
import { setSearchValue } from 'redux/contacts/searchSlice';
// import css from './filter.module.css';
import TextField from '@mui/material/TextField';
export const Filter = () => {
  const dispatch = useDispatch();
  const handleSearch = e => {
    dispatch(setSearchValue(e.currentTarget.value));
  };

  return (
    <TextField
      variant="standard"
      // autoComplete="given-name"
      // name="find"
      // required
      id="outlined-search"
      label="Find contacts by name"
      // autoFocus
      // type="search"
      onChange={handleSearch}
    />
  );
};
