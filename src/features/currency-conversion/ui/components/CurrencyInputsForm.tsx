import { useMutation } from '@tanstack/react-query';
import { useSetAtom } from 'jotai';
import { type FormEvent, type FormEventHandler } from 'react';

import { Field } from '@/components/form/Field';
import { FormRow } from '@/components/form/FormRow';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Spinner } from '@/components/ui/spinner';
import { getFormData } from '@/lib/utils';

import { DisplayConverted } from './DisplayConverted';
import { SelectCurrency } from './SelectCurrency';
import { convertedAtom } from '../../atoms/converted.atom';
import { convertCurrency } from '../../services/currency.service';

export const CurrencyInputsForm = () => {
  const setConvertedValue = useSetAtom(convertedAtom);
  const { mutate: convert, isPending } = useMutation({
    mutationKey: ['convert'],
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
      <FormRow>
        <Field name="from" label="From">
          <SelectCurrency name="from" />
        </Field>
        <Field name="to" label="To">
          <SelectCurrency name="to" />
        </Field>
      </FormRow>
      <FormRow>
        <Field name="amount" label="Amount">
          <Input
            name="amount"
            type="number"
            placeholder="Amount"
            disabled={isPending}
            required
          />
        </Field>
        <DisplayConverted />
      </FormRow>
      <Button type="submit" className="w-fit">
        {isPending ? <Spinner /> : 'Convert'}
      </Button>
    </form>
  );
};
