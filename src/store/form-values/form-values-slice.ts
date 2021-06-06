import {  createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../store';
import { Order } from '../../domain/Order';

export const initialState = {
  id: "",
  counterCcy: "",
  buy: false,
  investmentCcy:"",
  limit: 0,
  validUntil:""
};

export const slice = createSlice({
  name: 'formValues',
  initialState,
  reducers: {
    setFormValues: (state, action: PayloadAction<any>) => (state = action.payload)
  },
});

export const { setFormValues } = slice.actions;

export const selectFormValues = (state: RootState): Order | null => state.formValues;

export default slice.reducer;
