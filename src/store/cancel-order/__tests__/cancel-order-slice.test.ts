import reducer, {
  initialState,
  setCancelOrder,
  setSuccessCancelOrder,
  setErrorsCancelOrder,
  selectCanceldOrder,
  selectErrors,
  selectIsLoading,
  slice
} from '../cancel-order-slice';

describe('cancel-order-slice', () => {
  it('setCancelOrder', () => {
    const newState = reducer(initialState, setCancelOrder());
    const appState = { [slice.name]: newState };

    expect(selectIsLoading(appState)).toBe(true);
  });

  it('setSuccessCancelOrder', () => {
    const payload = {
      data: [],
      errors: null,
      isLoading: false
    };
    const newState = reducer(initialState, setSuccessCancelOrder(payload));
    const appState = { [slice.name]: newState };

    expect(selectIsLoading(appState)).toBe(false);
    expect(selectCanceldOrder(appState)).toEqual(payload);
    expect(selectErrors(appState)).toBe(null);
  });

  it('setErrorsCancelOrder', () => {
    const e = { message: 'm' };
    const newState = reducer(initialState, setErrorsCancelOrder(e));
    const appState = { [slice.name]: newState };

    expect(selectIsLoading(appState)).toBe(false);
    expect(selectCanceldOrder(appState)).toBeNull();
    expect(selectErrors(appState)).toBe(e);
  });
});
