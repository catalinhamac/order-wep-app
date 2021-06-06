import reducer, {
  initialState,
  setSupportedCurrencyPairs,
  setSuccessSupportedCurrencyPairs,
  setErrorsSupportedCurrencyPairs,
  selectSupportedCurrencyPairs,
  selectErrors,
  selectIsLoading,
  slice
} from '../supported-currency-pairs-slice';

describe('supported-currency-pairs-slice', () => {
  it('setSupportedCurrencyPairs', () => {
    const newState = reducer(initialState, setSupportedCurrencyPairs());
    const appState = { [slice.name]: newState };

    expect(selectIsLoading(appState)).toBe(true);
  });

  it('setSuccessSupportedCurrencyPairs', () => {
    const payload = {
      data: [],
      errors: null,
      isLoading: false
    };
    const newState = reducer(
      initialState,
      setSuccessSupportedCurrencyPairs(payload)
    );
    const appState = { [slice.name]: newState };

    expect(selectIsLoading(appState)).toBe(false);
    expect(selectSupportedCurrencyPairs(appState)).toEqual(payload);
    expect(selectErrors(appState)).toBe(null);
  });

  it('setErrorsSupportedCurrencyPairs', () => {
    const e = { message: 'm' };
    const newState = reducer(initialState, setErrorsSupportedCurrencyPairs(e));
    const appState = { [slice.name]: newState };

    expect(selectIsLoading(appState)).toBe(false);
    expect(selectSupportedCurrencyPairs(appState)).toBeNull();
    expect(selectErrors(appState)).toBe(e);
  });
});
