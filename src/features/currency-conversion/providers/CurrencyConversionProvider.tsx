import { useQuery } from '@tanstack/react-query';
import { type ReactNode, useMemo } from 'react';

import { CurrenciesContext } from '../context/CurrenciesContext';
import { getAvailableCurrencies } from '../services/currency.service';

export const CurrencyConversionProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const { data } = useQuery({
    queryKey: ['currencies'],
    queryFn: getAvailableCurrencies,
  });

  const currenciesValue = useMemo(() => ({ currencies: data ?? [] }), [data]);

  return (
    <CurrenciesContext value={currenciesValue}>{children}</CurrenciesContext>
  );
};
