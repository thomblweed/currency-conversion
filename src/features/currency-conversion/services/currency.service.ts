import axios from 'axios';

import { trimToLastTwoDecimalPlaces } from '@/lib/utils';

import type { ConvertCurrencyApiResponse } from '../interfaces/ConvertCurrencyApiResponse.interface';
import type { CurrenciesApiResponse } from '../interfaces/CurrenciesApiResponse.interface';

const BASE_URL = 'https://api.currencybeacon.com/v1';
const API_KEY = (import.meta.env.VITE_CURRENCY_BEACON_API_KEY as string) || '';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
  },
});

export const getAvailableCurrencies = async () => {
  const response = await api.get<CurrenciesApiResponse>(
    `/currencies?type=flat&api_key=${API_KEY}`
  );

  return response.data;
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
  const response = await api.get<ConvertCurrencyApiResponse>(
    `/convert?from=${from}&to=${to}&amount=${amount}&api_key=${API_KEY}`
  );

  const convertedValue = response.data.response.value;

  return trimToLastTwoDecimalPlaces(convertedValue);
};
