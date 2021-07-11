import MarketApi from './market';
import { API_URL } from './../../constants';
import { MarketName } from '../../api-types';

export const RootApi = {
  firstMarket: new MarketApi(API_URL, MarketName.FIRST),
  secondMarket: new MarketApi(API_URL, MarketName.SECOND),
  thirdMarket: new MarketApi(API_URL, MarketName.THIRD),
};
