import { getCancelOrderThunk } from '../cancel-order-thunks';
import { setCancelOrder, setSuccessCancelOrder } from '../cancel-order-slice';
import * as cancelOrderApi from '../../../api/cancel-order';
import { OrderMockBuilder } from '../../../mocks/OrderMockBuilder';

const mock = new OrderMockBuilder().build();

describe('cancel-order-thunks', () => {
  it('should cancel order', async () => {
    jest.spyOn(cancelOrderApi, 'cancelOrder').mockResolvedValue(mock);

    const dispatch = jest.fn();

    await getCancelOrderThunk('id')(dispatch);

    expect(dispatch.mock.calls[0][0]).toEqual(setCancelOrder());
    expect(dispatch.mock.calls.length).toEqual(2);
    expect(dispatch.mock.calls[1][0]).toEqual(setSuccessCancelOrder(mock));
  });
});
