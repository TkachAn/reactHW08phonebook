import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addContact, fetchContacts, delContact } from './operations';

const actions = [addContact, fetchContacts, delContact];

const FetchContacts = (state, action) => {
  state.contacts = action.payload;
  // console.log('state.contacts', state.contacts);
};

const AddContact = (state, action) => {
  const isNameExist = state.contacts.find(
    contact => contact.name.toLowerCase() === action.payload.name.toLowerCase()
  );
  isNameExist
    ? alert(`${action.payload.name} is already in contacts`)
    : state.contacts.push(action.payload);
};

const DelContact = (state, action) => {
  const idx = state.contacts.findIndex(item => item.id === action.payload.id);
  state.contacts.splice(idx, 1);
};

const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const itemsSlice = createSlice({
  name: 'items',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, FetchContacts)
      .addCase(addContact.fulfilled, AddContact)
      .addCase(delContact.fulfilled, DelContact)
      .addMatcher(
        isAnyOf(...actions.map(action => action.fulfilled)),
        handleFulfilled
      )
      .addMatcher(
        isAnyOf(...actions.map(action => action.pending)),
        handlePending
      )
      .addMatcher(
        isAnyOf(...actions.map(action => action.rejected)),
        handleRejected
      ),
});

export const itemsReducer = itemsSlice.reducer;
