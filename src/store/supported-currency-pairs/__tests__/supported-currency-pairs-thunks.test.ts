import { getSupportedCurrencyPairsThunk } from '../supported-currency-pairs-thunks';
import { setSupportedCurrencyPairs, setSuccessSupportedCurrencyPairs } from '../supported-currency-pairs-slice';
import * as getSupportedCurrencyPairsApi from '../../../api/supported-currency-pairs';

const mock = {
    "ccy1":"EUR",
    "ccy2":"USD"
    }

describe('supported-currency-pairs-thunks', () => {
  it('should get pairs', async () => {
    jest.spyOn(getSupportedCurrencyPairsApi, 'getSupportedCurrencyPairs').mockResolvedValue(mock);

    const dispatch = jest.fn();

    await getSupportedCurrencyPairsThunk()(dispatch);

    expect(dispatch.mock.calls[0][0]).toEqual(setSupportedCurrencyPairs());
    expect(dispatch.mock.calls.length).toEqual(2);
    expect(dispatch.mock.calls[1][0]).toEqual(setSuccessSupportedCurrencyPairs(mock));
  });
});
