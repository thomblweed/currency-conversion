import { createFormHook } from '@tanstack/react-form';

import { fieldContext, formContext } from '../context/FormContext';
import { FieldLayout } from '../ui/FieldLayout';

export const { useAppForm } = createFormHook({
  fieldContext,
  formContext,
  fieldComponents: { FieldLayout },
  formComponents: {},
});
