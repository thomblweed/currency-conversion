import { createContext } from 'react';

import type { CurrencyDetails } from '../interfaces/CurrencyDetails.interface';

export const CurrencyConversionContext = createContext<
  CurrencyDetails[] | undefined
>([]);
