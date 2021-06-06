import { setFormValues } from './form-values-slice';
import { AppDispatch } from '../store';
import { Order } from '../../domain/Order';

export const getFormValuesThunk = (formValues: Order) => async (
  dispatch: AppDispatch
): Promise<any> => {
  try {
    if (!formValues) {
      throw new Error('Create order form fields empty.');
    }
    dispatch(setFormValues(formValues));
    return Promise.resolve(formValues);
  } catch (e) {
    if (e.response && e.response.data) {
      const { errors } = e.response.data || {};
      return Promise.reject(errors);
    }
  }
};
