import { createContext } from 'react';

import type { Currency } from '../interfaces/Currency.interface';

export const CurrenciesContext = createContext<
  | {
      currencies: Currency[];
    }
  | undefined
>(undefined);
