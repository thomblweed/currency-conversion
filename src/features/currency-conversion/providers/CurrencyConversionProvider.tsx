import { useQuery } from '@tanstack/react-query';
import { type ReactNode, useMemo } from 'react';

import { CurrencyConversionContext } from '../context/CurrencyConversionContext';
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

  const value = useMemo(() => data ?? [], [data]);

  return (
    <CurrencyConversionContext value={value}>
      {children}
    </CurrencyConversionContext>
  );
};
