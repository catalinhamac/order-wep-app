export class OrderMockBuilder {
    id = '';
    buy = false;
    counterCcy = '';
    investmentCcy = '';
    limit = 0;
    validUntil = '';
  
    build() {
      return {
        id: this.id,
        buy: this.buy,
        counterCcy: this.counterCcy,
        investmentCcy: this.investmentCcy,
        limit: this.limit,
        validUntil: this.validUntil,
      };
    }
  }
  