import { MarketStateVm } from './../api-types';

export enum CurrencyPairs {
  RUB_CUPCAKE = 'RUB/CUPCAKE',
  USD_CUPCAKE = 'USD/CUPCAKE',
  EUR_CUPCAKE = 'EUR/CUPCAKE',
  RUB_USD = 'RUB/USD',
  RUB_EUR = 'RUB/EUR',
  EUR_USD = 'EUR/USD',
}

export const createCurrencyPairs = (marketState: MarketStateVm) => {
  const {
    rates: { RUB, USD, EUR },
  } = marketState;

  return {
    [CurrencyPairs.RUB_CUPCAKE]: Number((1 / RUB).toFixed(3)),
    [CurrencyPairs.USD_CUPCAKE]: Number((1 / USD).toFixed(3)),
    [CurrencyPairs.EUR_CUPCAKE]: Number((1 / EUR).toFixed(3)),
    [CurrencyPairs.RUB_USD]: Number((USD / RUB).toFixed(3)),
    [CurrencyPairs.RUB_EUR]: Number((EUR / RUB).toFixed(3)),
    [CurrencyPairs.EUR_USD]: Number((USD / EUR).toFixed(3)),
  };
};
