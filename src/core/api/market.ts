import axios from 'axios';
import { MarketStateVm, MarketName } from '../../api-types';

class MarketApi {
  #API_URL: string;
  #marketName: MarketName;

  constructor(API_URL: string, marketName: MarketName) {
    this.#API_URL = API_URL;
    this.#marketName = marketName;
  }

  get = async () => {
    const { data } = await axios.get<MarketStateVm>(`${this.#API_URL}/${this.#marketName}`);

    return data;
  };

  getPoll = async () => {
    const { data } = await axios.get<MarketStateVm>(`${this.#API_URL}/${this.#marketName}/poll`);

    return data;
  };
}

export default MarketApi;
