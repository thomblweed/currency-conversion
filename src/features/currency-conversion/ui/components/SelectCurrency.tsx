import { useIsMutating } from '@tanstack/react-query';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { CurrencyItems } from './CurrencyItems';

interface SelectCurrencyProps {
  name: string;
}

export const SelectCurrency = ({ name }: SelectCurrencyProps) => {
  const isConverting = useIsMutating({ mutationKey: ['convert'] });

  return (
    <Select name={name} required disabled={!!isConverting}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select a currency" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <CurrencyItems />
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
