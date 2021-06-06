import { client } from './client';

export const cancelOrder = (id: string): Promise<boolean> =>
  client('cancelOrder', {
    method: 'POST',
    body: { id }
  });
