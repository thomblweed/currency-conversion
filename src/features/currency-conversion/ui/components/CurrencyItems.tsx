import { useQuery } from '@tanstack/react-query';

import { SelectItem } from '@/components/ui/select';
import { Spinner } from '@/components/ui/spinner';

import { currencyDetailsQueryOptions } from '../../queries/currencyQueryOptions';

export const CurrencyItems = () => {
  const { data: currencyDetails, isLoading } = useQuery(
    currencyDetailsQueryOptions()
  );

  return isLoading ? (
    <Spinner />
  ) : (
    currencyDetails?.map((currency) => (
      <SelectItem key={currency.code} value={currency.code}>
        {currency.code} ({currency.name})
      </SelectItem>
    ))
  );
};
