import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { useCurrencies } from '../../hooks/useCurrencies';

interface SelectCurrencyProps {
  name: string;
  value: string;
  onChange: (value: string) => void;
}

export const SelectCurrency = ({
  name,
  value,
  onChange,
}: SelectCurrencyProps) => {
  return (
    <Select name={name} value={value} onValueChange={onChange}>
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
