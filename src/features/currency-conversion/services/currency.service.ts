import axios from 'axios';

import { mapCurrenciesResponseToCurrencies } from './mappers/mapCurrenciesResponseToCurrencies';

import type { ConvertCurrencyResponse } from '../interfaces/ConvertCurrencyResponse.interface';
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
    `/currencies?type=flat&api_key=${API_KEY}`
  );

  return mapCurrenciesResponseToCurrencies(response.data);
};

interface ConvertCurrencyParams {
  from: string;
  to: string;
  amount: string;
}

export const convertCurrency = async ({
  from,
  to,
  amount,
}: ConvertCurrencyParams) => {
  const response = await api.get<ConvertCurrencyResponse>(
    `/convert?from=${from}&to=${to}&amount=${amount}&api_key=${API_KEY}`
  );

  return response.data.response.value;
};
