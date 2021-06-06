import {
    setSupportedCurrencyPairs,
    setSuccessSupportedCurrencyPairs,
    setErrorsSupportedCurrencyPairs
  } from './supported-currency-pairs-slice';
  import { getSupportedCurrencyPairs } from '../../api/supported-currency-pairs';
import { AppDispatch } from '../store';

  
  export const getSupportedCurrencyPairsThunk = () => async (dispatch: AppDispatch) => {
    let result;
    try {
      dispatch(setSupportedCurrencyPairs());
  
      result = await getSupportedCurrencyPairs();
    } catch (e) {
      if (e.response && e.response.data) {
        const { errors } = e.response.data || {};
        dispatch(setErrorsSupportedCurrencyPairs(errors));
        return Promise.reject(errors);
      }else if(e.request){
        dispatch(setErrorsSupportedCurrencyPairs(e));
        return Promise.reject(e);
      }else{
        dispatch(setErrorsSupportedCurrencyPairs(e.message));
        return Promise.reject(e.message);
      }
    }
  
    dispatch(setSuccessSupportedCurrencyPairs(result));
    return Promise.resolve(result);
  };
  