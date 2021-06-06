import { getCreatedOrderThunk } from '../create-order-thunks';
import { setCreatedOrder, setSuccessCreatedOrder } from '../create-order-slice';
import * as createOrderApi from '../../../api/create-order';
import { OrderMockBuilder } from "../../../mocks/OrderMockBuilder";

const mock = new OrderMockBuilder().build();

describe('create-order-thunks', () => {
  it('should create order', async () => {
    jest.spyOn(createOrderApi, 'createOrder').mockResolvedValue(mock);

    const dispatch = jest.fn();

    await getCreatedOrderThunk(mock)(dispatch);

    expect(dispatch.mock.calls[0][0]).toEqual(setCreatedOrder());
    expect(dispatch.mock.calls.length).toEqual(2);
    expect(dispatch.mock.calls[1][0]).toEqual(setSuccessCreatedOrder(mock));
  });
});
