import { use } from 'react';

import { CurrenciesContext } from '../context/CurrenciesContext';

export const useCurrencies = () => {
  const currenciesConverter = use(CurrenciesContext);

  if (!currenciesConverter) {
    throw new Error(
      'useCurrencies hook must be used with the CurrencyConversionProvider'
    );
  }

  return currenciesConverter;
};
