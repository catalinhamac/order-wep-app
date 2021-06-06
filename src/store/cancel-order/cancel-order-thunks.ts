import {
  setCancelOrder,
  setSuccessCancelOrder,
  setErrorsCancelOrder
} from './cancel-order-slice';
import { cancelOrder } from '../../api/cancel-order';
import { AppDispatch } from '../store';

export const getCancelOrderThunk = (id: string) => async (
  dispatch: AppDispatch
): Promise<boolean> => {
  let result;
  try {
    dispatch(setCancelOrder());

    result = await cancelOrder(id);
  } catch (e) {
    if (e.response && e.response.data) {
      const { errors } = e.response.data || {};
      dispatch(setErrorsCancelOrder(errors));
      return Promise.reject(errors);
    } else if (e.request) {
      dispatch(setErrorsCancelOrder(e));
      return Promise.reject(e);
    } else {
      dispatch(setErrorsCancelOrder(e.message));
      return Promise.reject(e.message);
    }
  }

  dispatch(setSuccessCancelOrder(result));
  return Promise.resolve(result);
};
