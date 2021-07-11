import { MarketName } from '../api-types';
import { RootApi } from './api/index';
import { MarketStateVm } from './../api-types';

type Params = {
  marketName: MarketName;
  nextData: (data: MarketStateVm) => void;
};

export const subscribe = async (params: Params) => {
  const { marketName, nextData } = params;

  try {
    const key = `${marketName}Market` as keyof typeof RootApi;
    const data = await RootApi[key].getPoll();

    nextData(data);

    await subscribe(params);
  } catch (error) {
    setTimeout(() => {
      subscribe(params);
    }, 500);
  }
};
