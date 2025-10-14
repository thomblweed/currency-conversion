import { useMutation } from '@tanstack/react-query';
import { useState, type FormEvent, type FormEventHandler } from 'react';

import { Field } from '@/components/form/Field';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { SelectCurrency } from './SelectCurrency';
import { convertCurrency } from '../../services/currency.service';

const getFormData = (event: FormEvent<HTMLFormElement>) => {
  const formData = new FormData(event.target as HTMLFormElement);
  return Object.fromEntries(formData);
};

export const CurrencyInputsForm = () => {
  // TODO: update to atom and push state down
  const [convertedValue, setConvertedValue] = useState<number | undefined>(
    undefined
  );
  const { mutate: convert } = useMutation({
    mutationFn: convertCurrency,
    onSuccess: setConvertedValue,
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = getFormData(event);
    const { from, to, amount } = formData;

    convert({
      from: from as string,
      to: to as string,
      amount: amount as string,
    });
  };

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit as FormEventHandler<HTMLFormElement>}
    >
      <div className="flex gap-4 w-1/2">
        <Field name="from" label="From">
          <SelectCurrency name="from" />
        </Field>
        <Field name="to" label="To">
          <SelectCurrency name="to" />
        </Field>
      </div>
      <div className="flex gap-4 w-1/2">
        <Field name="amount" label="Amount">
          <Input name="amount" type="number" placeholder="Amount" />
        </Field>
        <Field name="converted" label="Converted">
          <Input
            name="converted"
            type="number"
            readOnly
            value={convertedValue}
          />
        </Field>
      </div>
      <Button type="submit" className="w-fit">
        Convert
      </Button>
    </form>
  );
};
