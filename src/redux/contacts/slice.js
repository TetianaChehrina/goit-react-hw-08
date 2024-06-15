import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./contactsOps";
import { createSelector } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addContact.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.isLoading = false;
      })
      .addCase(addContact.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      })
      .addCase(deleteContact.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
        state.isLoading = false;
      })
      .addCase(deleteContact.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      });
  },
});

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, name) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(name.toLowerCase())
    );
  }
);
export const contactsReducer = contactsSlice.reducer;
