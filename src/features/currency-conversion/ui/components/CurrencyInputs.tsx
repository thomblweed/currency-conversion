import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAppForm } from '@/features/form/hooks/useAppForm';

import { SelectCurrency } from './SelectCurrency';
import { convertCurrency } from '../../services/currency.service';

export const CurrencyInputs = () => {
  const form = useAppForm({
    defaultValues: {
      from: '',
      to: '',
      amount: '',
      converted: '',
    },
    onSubmit: async ({ value }) => {
      const { from, to, amount } = value;

      try {
        const convertedValue = await convertCurrency({
          from,
          to,
          amount: amount.toString(),
        });

        form.setFieldValue('converted', convertedValue.toString());
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(event) => {
        event.preventDefault();
        void form.handleSubmit();
      }}
    >
      <div className="flex gap-4 w-1/2">
        <form.AppField name="from">
          {(field) => (
            <field.FieldLayout name="from" label="From">
              <SelectCurrency
                name="from"
                value={field.state.value}
                onChange={(value) => {
                  field.handleChange(value);
                }}
              />
            </field.FieldLayout>
          )}
        </form.AppField>
        <form.AppField name="to">
          {(field) => (
            <field.FieldLayout name="to" label="To">
              <SelectCurrency
                name="to"
                value={field.state.value}
                onChange={(value) => {
                  field.handleChange(value);
                }}
              />
            </field.FieldLayout>
          )}
        </form.AppField>
      </div>
      <div className="flex gap-4 w-1/2">
        <form.AppField name="amount">
          {(field) => (
            <field.FieldLayout name="amount" label="Amount">
              <Input
                name="amount"
                type="text"
                placeholder="Amount"
                value={field.state.value}
                onChange={(event) => {
                  field.handleChange(event.target.value);
                }}
              />
            </field.FieldLayout>
          )}
        </form.AppField>
        <form.AppField name="converted">
          {(field) => (
            <field.FieldLayout name="converted" label="Converted">
              <div className="h-full pt-1">{field.state.value}</div>
            </field.FieldLayout>
          )}
        </form.AppField>
      </div>
      <Button type="submit" className="w-fit">
        Convert
      </Button>
    </form>
  );
};
