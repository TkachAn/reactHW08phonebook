import { createSelector } from '@reduxjs/toolkit';
export const selectContacts = state => state.contacts;
// export const selectContacts = state => state.items;
export const selectSearch = state => state.searchValue;

export const filteredContacts = createSelector(
  [selectContacts, selectSearch],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  }
);

// const getVisibleContacts = createSelector(
//   [getAllContacts, getFilter],
//   (contacts, filter) => {
//     const normalizedFilter = filter.toLowerCase();

//     return contacts.filter(({ name }) =>
//       name.toLowerCase().includes(normalizedFilter)
//     );
//   }
// );
