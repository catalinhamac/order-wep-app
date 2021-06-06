import { client } from './client';
import { SupportedCurrencyPairs } from '../domain/SupportedCurrencyPairs';

export const getSupportedCurrencyPairs = (): Promise<SupportedCurrencyPairs[]> =>
  client('supportedCurrencyPairs', {
    method: 'GET'
  });
