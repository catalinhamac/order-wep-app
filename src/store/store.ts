import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import ordersReducer from './retrieve-orders/retrieve-orders-slice';
import supportedCurrencyPairsReducer from './supported-currency-pairs/supported-currency-pairs-slice';
import formValuesReducer from './form-values/form-values-slice';
import createdOrderReducer from './create-order/create-order-slice';
import cancelOrderReducer from './cancel-order/cancel-order-slice';


const rootReducer = combineReducers({
  orders: ordersReducer,
  supportedCurrencyPairs: supportedCurrencyPairsReducer,
  formValues: formValuesReducer,
  createdOrder: createdOrderReducer,
  cancelOrder: cancelOrderReducer
});


export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: getDefaultMiddleware(),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
