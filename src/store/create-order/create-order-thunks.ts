import {
  setCreatedOrder,
  setSuccessCreatedOrder,
  setErrorsCreatedOrder
} from './create-order-slice';
import { createOrder } from '../../api/create-order';
import { AppDispatch } from '../store';
import { Order } from '../../domain/Order';

export const getCreatedOrderThunk = (formValues: Order | null) => async (
  dispatch: AppDispatch
): Promise<Order | null> => {
  let result;
  try {
    dispatch(setCreatedOrder());

    result = await createOrder(formValues);
  } catch (e) {
    if (e.response && e.response.data) {
      const { errors } = e.response.data || {};
      dispatch(setErrorsCreatedOrder(errors));
      return Promise.reject(errors);
    } else if (e.request) {
      dispatch(setErrorsCreatedOrder(e));
      return Promise.reject(e);
    } else {
      dispatch(setErrorsCreatedOrder(e.message));
      return Promise.reject(e.message);
    }
  }

  dispatch(setSuccessCreatedOrder(result));
  return Promise.resolve(result);
};
