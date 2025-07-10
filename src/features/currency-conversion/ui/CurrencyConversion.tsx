import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { CurrencyInputs } from './components/CurrencyInputs';
import { CurrencyConversionProvider } from '../providers/CurrencyConversionProvider';

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
});

export const CurrencyConversion = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <CurrencyConversionProvider>
        <CurrencyInputs />
      </CurrencyConversionProvider>
    </QueryClientProvider>
  );
};
