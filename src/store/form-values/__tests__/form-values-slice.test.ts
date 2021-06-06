import reducer, {
    initialState,
    setFormValues,
    selectFormValues,
    slice,
  } from '../form-values-slice';

  import { OrderMockBuilder } from "../../../mocks/OrderMockBuilder";

const mock = new OrderMockBuilder().build();
  
  describe('form-values-slice', () => {
  
    it('setFormValues', () => {
      const newState = reducer(initialState, setFormValues(mock));
      const appState = { [slice.name]: newState };      
  
      expect(setFormValues(appState).payload.formValues).toEqual(mock);
    });
  

  });
  