import { Order } from '../domain/Order';

export class OrderMockBuilder {
  id = '';
  buy = false;
  counterCcy = '';
  investmentCcy = '';
  limit = 0;
  validUntil = '';

  build(): Order {
    return {
      id: this.id,
      buy: this.buy,
      counterCcy: this.counterCcy,
      investmentCcy: this.investmentCcy,
      limit: this.limit,
      validUntil: this.validUntil
    };
  }
}
