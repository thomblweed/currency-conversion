import type { CurrenciesResponse } from '../../interfaces/CurrenciesResponse.interface';
import type { CurrencyDetails } from '../../interfaces/CurrencyDetails.interface';

export const mapCurrenciesResponseToCurrencyDetails = (
  currenciesResponse: CurrenciesResponse,
): CurrencyDetails[] => {
  return currenciesResponse.response.map((currency) => ({
    name: currency.name,
    code: currency.code,
  }));
};
