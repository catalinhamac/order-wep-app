import { client } from './client';
import { Order } from '../domain/Order';

export const createOrder = (payload: Order | null): Promise<Order> =>
  client('createOrder', {
    method: 'POST',
    body: payload
  });
