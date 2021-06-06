import reducer, {
  initialState,
  setOrders,
  setSuccessOrders,
  setErrorsOrders,
  selectOrders,
  selectErrors,
  selectIsLoading,
  slice
} from '../retrieve-orders-slice';

describe('retrieve-orders-slice', () => {
  it('setOrders', () => {
    const newState = reducer(initialState, setOrders());
    const appState = { [slice.name]: newState };

    expect(selectIsLoading(appState)).toBe(true);
  });

  it('setSuccessOrders', () => {
    const payload = {
      data: [],
      errors: null,
      isLoading: false
    };
    const newState = reducer(initialState, setSuccessOrders(payload));
    const appState = { [slice.name]: newState };

    expect(selectIsLoading(appState)).toBe(false);
    expect(selectOrders(appState)).toEqual(payload);
    expect(selectErrors(appState)).toBe(null);
  });

  it('setErrorsOrders', () => {
    const e = { message: 'm' };
    const newState = reducer(initialState, setErrorsOrders(e));
    const appState = { [slice.name]: newState };

    expect(selectIsLoading(appState)).toBe(false);
    expect(selectOrders(appState)).toBeNull();
    expect(selectErrors(appState)).toBe(e);
  });
});
