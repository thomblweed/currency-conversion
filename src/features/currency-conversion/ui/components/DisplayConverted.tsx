import { useAtomValue } from 'jotai/react';

import { Field } from '@/components/form/Field';
import { Input } from '@/components/ui/input';

import { convertedAtom } from '../../atoms/converted.atom';

export const DisplayConverted = () => {
  const convertedValue = useAtomValue(convertedAtom);

  return (
    <Field name="converted" label="Converted">
      <Input name="converted" type="number" readOnly value={convertedValue} />
    </Field>
  );
};
