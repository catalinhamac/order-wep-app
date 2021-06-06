import reducer, {
  initialState,
  setCreatedOrder,
  setSuccessCreatedOrder,
  setErrorsCreatedOrder,
  selectCreatedOrder,
  selectErrors,
  selectIsLoading,
  slice
} from '../create-order-slice';

describe('create-order-slice', () => {
  it('setCreatedOrder', () => {
    const newState = reducer(initialState, setCreatedOrder());
    const appState = { [slice.name]: newState };

    expect(selectIsLoading(appState)).toBe(true);
  });

  it('setSuccessCreatedOrder', () => {
    const payload = {
      data: [],
      errors: null,
      isLoading: false
    };
    const newState = reducer(initialState, setSuccessCreatedOrder(payload));
    const appState = { [slice.name]: newState };

    expect(selectIsLoading(appState)).toBe(false);
    expect(selectCreatedOrder(appState)).toEqual(payload);
    expect(selectErrors(appState)).toBe(null);
  });

  it('setErrorsCreatedOrder', () => {
    const e = { message: 'm' };
    const newState = reducer(initialState, setErrorsCreatedOrder(e));
    const appState = { [slice.name]: newState };

    expect(selectIsLoading(appState)).toBe(false);
    expect(selectCreatedOrder(appState)).toBeNull();
    expect(selectErrors(appState)).toBe(e);
  });
});
