import { queryOptions } from '@tanstack/react-query';

import { getAvailableCurrencies } from '../services/currency.service';
import { mapCurrenciesApiResponseToCurrencyDetails } from './mappers/mapCurrenciesResponseToCurrencyList';

export const currencyDetailsQueryOptions = () =>
  queryOptions({
    queryKey: ['currencies'],
    queryFn: getAvailableCurrencies,
    select: mapCurrenciesApiResponseToCurrencyDetails,
  });
