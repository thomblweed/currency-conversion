import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { CurrencyInputsForm } from './components/CurrencyInputsForm';

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
});

export const CurrencyConversion = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <CurrencyInputsForm />
    </QueryClientProvider>
  );
};
