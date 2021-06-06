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
  name: 'createdOrder',
  initialState,
  reducers: {
    setCreatedOrder: (state) => {
      state.isLoading = true;
    },
    setSuccessCreatedOrder: (state, action:PayloadAction<any> ) => {
      state.isLoading = initialState.isLoading;
      state.data = action.payload;
      state.errors = initialState.errors;
    },
    setErrorsCreatedOrder: (state, action:PayloadAction<any>) => {
      state.isLoading = initialState.isLoading;
      state.data = initialState.data;
      state.errors = action.payload;
    },
    resetCreateOrder: (state) => (state = initialState)
  },
});

export const { setCreatedOrder, setSuccessCreatedOrder, setErrorsCreatedOrder, resetCreateOrder } = slice.actions;

export const selectCreatedOrder = (state: RootState): Order | null => state.createdOrder.data;
export const selectIsLoading = (state: RootState): boolean => state.createdOrder.isLoading;
export const selectErrors = (state: RootState): Error | null => state.createdOrder.errors;

export default slice.reducer;
