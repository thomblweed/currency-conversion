import type { CurrenciesResponse } from '../../interfaces/CurrenciesResponse.interface';
import type { Currency } from '../../interfaces/Currency.interface';

export const mapCurrenciesResponseToCurrencies = (
  currenciesResponse: CurrenciesResponse
): Currency[] => {
  return currenciesResponse.response.map((currency) => ({
    name: currency.name,
    code: currency.short_code,
  }));
};
