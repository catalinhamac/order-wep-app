import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../store';
import { Order } from '../../domain/Order';

type SliceState = {
  isLoading: boolean;
  errors: Error | null;
  data: Order[] | null;
};

export const initialState: SliceState = {
  isLoading: false,
  errors: null,
  data: null
};

export const slice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    setOrders: state => {
      state.isLoading = true;
    },
    setSuccessOrders: (state, action: PayloadAction<any>) => {
      state.isLoading = initialState.isLoading;
      state.data = action.payload;
      state.errors = initialState.errors;
    },
    setErrorsOrders: (state, action: PayloadAction<any>) => {
      state.isLoading = initialState.isLoading;
      state.data = initialState.data;
      state.errors = action.payload;
    }
  }
});

export const { setOrders, setSuccessOrders, setErrorsOrders } = slice.actions;

export const selectOrders = (state: RootState): Order[] | null =>
  state.orders.data;
export const selectIsLoading = (state: RootState): boolean =>
  state.orders.isLoading;
export const selectErrors = (state: RootState): Error | null =>
  state.orders.errors;

export default slice.reducer;
