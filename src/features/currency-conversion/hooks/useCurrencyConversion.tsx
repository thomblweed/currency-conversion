import { use } from 'react';

import { CurrencyConversionContext } from '../context/CurrencyConversionContext';

export const useCurrencyConversion = () => {
  const currenciesConverter = use(CurrencyConversionContext);

  if (!currenciesConverter) {
    throw new Error(
      'useCurrencuConversion hook must be used with the CurrencyConversionProvider',
    );
  }

  return currenciesConverter;
};
