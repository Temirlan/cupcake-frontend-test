import React from 'react';
import { MarketName } from '../api-types';
import { createCurrencyPairs, CurrencyPairs } from '../utils';
import { RootApi } from './../core/api/index';
import { subscribe } from './../core/subscribe';

type CurrencyPairsType = {
  [key: string]: number;
};

const useCurrencyPairs = () => {
  const [firstPairs, setFirstPairs] = React.useState<CurrencyPairsType | undefined>(undefined);
  const [secondPairs, setSecondPairs] = React.useState<CurrencyPairsType | undefined>(undefined);
  const [thirdPairs, setThirdPairs] = React.useState<CurrencyPairsType | undefined>(undefined);

  const getCurrencyPairs = () => {
    if (!firstPairs || !secondPairs || !thirdPairs) return [];

    return Object.keys(CurrencyPairs).map((p) => {
      const name = CurrencyPairs[p as keyof typeof CurrencyPairs];

      return {
        name,
        first: firstPairs[name],
        second: secondPairs[name],
        third: thirdPairs[name],
        min: Math.min(firstPairs[name], secondPairs[name], thirdPairs[name]),
      };
    });
  };

  const load = async () => {
    const first = RootApi.firstMarket.get();
    const second = RootApi.secondMarket.get();
    const third = RootApi.thirdMarket.get();

    const [firstData, secondData, thirdData] = await Promise.all([first, second, third]);

    setFirstPairs(createCurrencyPairs(firstData));
    setSecondPairs(createCurrencyPairs(secondData));
    setThirdPairs(createCurrencyPairs(thirdData));
  };

  const poll = async () => {
    const firstSubscribe = subscribe({
      marketName: MarketName.FIRST,
      nextData: (data) => setFirstPairs(createCurrencyPairs(data)),
    });
    const secondSubscribe = subscribe({
      marketName: MarketName.SECOND,
      nextData: (data) => setSecondPairs(createCurrencyPairs(data)),
    });
    const thirdSubscribe = subscribe({
      marketName: MarketName.THIRD,
      nextData: (data) => setThirdPairs(createCurrencyPairs(data)),
    });

    Promise.all([firstSubscribe, secondSubscribe, thirdSubscribe]);
  };

  React.useEffect(() => {
    load();
    poll();
  }, []);

  return {
    currencyPairs: getCurrencyPairs(),
  };
};

export default useCurrencyPairs;
