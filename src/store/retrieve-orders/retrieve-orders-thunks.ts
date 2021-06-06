import {
    setOrders,
    setSuccessOrders,setErrorsOrders
  } from './retrieve-orders-slice';
  import { getOrders } from '../../api/retrieve-orders';
import { AppDispatch } from '../store';

  
  export const getOrdersThunk = () => async (dispatch: AppDispatch) => {
    let result;
    try {
      dispatch(setOrders());
  
      result = await getOrders();
    } catch (e) {
      if (e.response && e.response.data) {
        const { errors } = e.response.data || {};
        dispatch(setErrorsOrders(errors));
        return Promise.reject(errors);
      }else if(e.request){
        dispatch(setErrorsOrders(e));
        return Promise.reject(e);
      }else{
        dispatch(setErrorsOrders(e.message));
        return Promise.reject(e.message);
      }
    }
  
    dispatch(setSuccessOrders(result));
    return Promise.resolve(result);
  };
  