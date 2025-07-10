import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { useCurrencies } from '../../hooks/useCurrencies';

export const SelectCurrency = ({ name }: { name: string }) => {
  return (
    <Select name={name}>
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

const CurrencyItems = () => {
  const { currencies } = useCurrencies();

  return currencies.map((currency) => (
    <SelectItem key={currency.code} value={currency.code}>
      {currency.code} ({currency.name})
    </SelectItem>
  ));
};
