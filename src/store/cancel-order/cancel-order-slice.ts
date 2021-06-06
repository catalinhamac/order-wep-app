import {  createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../store';
import { Order } from '../../domain/Order';


type SliceState = {
  isLoading: boolean;
  errors: Error | null;
  data: Order | null
};

export const initialState: SliceState = {
  isLoading: false,
  errors: null,
  data: null,
};

export const slice = createSlice({
  name: 'cancelOrder',
  initialState,
  reducers: {
    setCancelOrder: (state) => {
      state.isLoading = true;
    },
    setSuccessCancelOrder: (state, action: PayloadAction<any> ) => {
      state.isLoading = initialState.isLoading;
      state.data = action.payload;
      state.errors = initialState.errors;
    },
    setErrorsCancelOrder: (state, action: PayloadAction<any>) => {
      state.isLoading = initialState.isLoading;
      state.data = initialState.data;
      state.errors = action.payload;
    },
    resetErrorsCancelOrder: (state) => (state = initialState)
  },
});

export const { setCancelOrder, setSuccessCancelOrder, setErrorsCancelOrder, resetErrorsCancelOrder } = slice.actions;

export const selectCanceldOrder = (state: RootState): Order | null => state.cancelOrder.data;
export const selectErrors = (state: RootState): Error | null => state.cancelOrder.errors;
export const selectIsLoading = (state: RootState): boolean => state.cancelOrder.isLoading;

export default slice.reducer;
