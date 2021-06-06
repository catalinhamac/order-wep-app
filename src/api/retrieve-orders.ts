import { client } from './client';
import { Order } from '../domain/Order';

export const getOrders = (): Promise<Order[]> =>
  client('retrieveOrders', {
    method: 'GET',
  });
