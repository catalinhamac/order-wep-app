import {
    setFormValues
  } from './form-values-slice';
import { AppDispatch } from '../store';
  
  export const getFormValuesThunk = (formValues: any) => async (dispatch: AppDispatch) => {    
    try {
        dispatch(setFormValues(formValues));
        return Promise.resolve(formValues);
    } catch (e) {
      if (e.response && e.response.data) {
        const { errors } = e.response.data || {};
        return Promise.reject(errors);
      }
    }
  };
  