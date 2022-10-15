import { useDispatch } from 'react-redux';
import { setSearchValue } from 'redux/contacts/searchSlice';
import css from './filter.module.css';
export const Filter = () => {
  const dispatch = useDispatch();
  const handleSearch = e => {
    dispatch(setSearchValue(e.currentTarget.value));
  };

  return (
    <label className={css.label}>
      Find contacts by name
      <input className={css.input} type="text" onChange={handleSearch} />
    </label>
  );
};
