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
  return (
    <Select name={name} required>
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
