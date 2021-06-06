import { getOrdersThunk } from '../retrieve-orders-thunks';
import { setOrders, setSuccessOrders } from '../retrieve-orders-slice';
import * as getOrdersApi from '../../../api/retrieve-orders';
import { OrderMockBuilder } from "../../../mocks/OrderMockBuilder";

const mock = new OrderMockBuilder().build();

describe('retrieve-order-thunks', () => {
  it('should get orders', async () => {
    jest.spyOn(getOrdersApi, 'getOrders').mockResolvedValue(mock);

    const dispatch = jest.fn();

    await getOrdersThunk()(dispatch);

    expect(dispatch.mock.calls[0][0]).toEqual(setOrders());
    expect(dispatch.mock.calls.length).toEqual(2);
    expect(dispatch.mock.calls[1][0]).toEqual(setSuccessOrders(mock));
  });
});
