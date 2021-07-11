export interface MarketStateRatesVm {
  CUPCAKE: number;
  RUB: number;
  USD: number;
  EUR: number;
}

export interface MarketStateVm {
  date: string;
  base: string;
  rates: MarketStateRatesVm;
  timestamp: number;
}

export enum MarketName {
  FIRST = 'first',
  SECOND = 'second',
  THIRD = 'third',
}
