import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/'; //'https://6335c6d265d1e8ef2663035d.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'items/fetchAll',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/contacts');
      // console.log('All-res.data', res.data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'items/addContact',
  async ({ name, number, id }, thunkAPI) => {
    try {
      const res = await axios.post('/contacts', { name, number, id });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const delContact = createAsyncThunk(
  'items/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const res = await axios.delete(`/contacts/${contactId}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
