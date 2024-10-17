// src/redux/efoSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../utils/axiosInstance.ts';
import { Term } from '../types'; 

export const fetchEfoTerms = createAsyncThunk(
  'efo/fetchTerms',
  async () => {
    const response = await axiosInstance.get(`/api/terms/`);
    return response.data; 
  }
);

interface EfoState {
  terms: Term[]; 
  loading: boolean;
  error: string | null;
}

const initialState: EfoState = {
  terms: [],
  loading: false,
  error: null,
};

const efoSlice = createSlice({
  name: 'efo',
  initialState,
  reducers: {}, 
  extraReducers: (builder) => {
    builder.addCase(fetchEfoTerms.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchEfoTerms.fulfilled, (state, action) => {
      state.loading = false;
      state.terms = action.payload;
    });
    builder.addCase(fetchEfoTerms.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Failed to fetch terms';
    });
  },
});

export default efoSlice.reducer;
