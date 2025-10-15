import type { CurrenciesApiResponse } from '../../interfaces/CurrenciesApiResponse.interface';
import type { CurrencyDetail } from '../../interfaces/CurrencyDetail.interface';

export const mapCurrenciesApiResponseToCurrencyDetails = (
  currenciesApiResponse: CurrenciesApiResponse
): CurrencyDetail[] => {
  return currenciesApiResponse.response.map((currency) => ({
    name: currency.name,
    code: currency.short_code,
  }));
};
