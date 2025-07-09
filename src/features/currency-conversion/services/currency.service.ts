import axios from 'axios';

import { mapCurrenciesResponseToCurrencyDetails } from './mappers/mapCurrenciesResponseToCurrencyDetails';

import type { CurrenciesResponse } from '../interfaces/CurrenciesResponse.interface';

const BASE_URL = 'https://api.currencybeacon.com/v1';
const API_KEY = (import.meta.env.VITE_CURRENCY_BEACON_API_KEY as string) || '';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
  },
});

export const getAvailableCurrencies = async () => {
  const response = await api.get<CurrenciesResponse>(
    `/currencies?type=flat&api_key=${API_KEY}`,
  );

  return mapCurrenciesResponseToCurrencyDetails(response.data);
};
