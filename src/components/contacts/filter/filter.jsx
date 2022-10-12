import { useDispatch } from 'react-redux';
import { setSearchValue } from 'redux/searchSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleSearch = e => {
    dispatch(setSearchValue(e.currentTarget.value));
  };

  return (
    <label>
      <p className="inputName">Find contacts by name</p>
      <input type="text" onChange={handleSearch} />
    </label>
  );
};
