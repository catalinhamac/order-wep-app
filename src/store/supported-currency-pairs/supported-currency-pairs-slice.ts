import {  createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../store';
import { SupportedCurrencyPairs } from '../../domain/SupportedCurrencyPairs';


type SliceState = {
  isLoading: boolean;
  errors: Error | null;
  data: SupportedCurrencyPairs[] | null
};

export const initialState: SliceState = {
  isLoading: false,
  errors: null,
  data: null,
};

export const slice = createSlice({
  name: 'supportedCurrencyPairs',
  initialState,
  reducers: {
    setSupportedCurrencyPairs: (state) => {
      state.isLoading = true;
    },
    setSuccessSupportedCurrencyPairs: (state, action:PayloadAction<any> ) => {
      state.isLoading = initialState.isLoading;
      state.data = action.payload;
      state.errors = initialState.errors;
    },
    setErrorsSupportedCurrencyPairs: (state, action:PayloadAction<any>) => {
      state.isLoading = initialState.isLoading;
      state.data = initialState.data;
      state.errors = action.payload;
    },
  },
});

export const { setSupportedCurrencyPairs, setSuccessSupportedCurrencyPairs, setErrorsSupportedCurrencyPairs } = slice.actions;

export const selectSupportedCurrencyPairs = (state: RootState): SupportedCurrencyPairs[] | null => state.supportedCurrencyPairs.data;
export const selectIsLoading = (state: RootState): boolean => state.supportedCurrencyPairs.isLoading;
export const selectErrors = (state: RootState): Error | null => state.supportedCurrencyPairs.errors;

export default slice.reducer;
