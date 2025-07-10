import { Label } from '../ui/label';

import type { ReactNode } from 'react';

interface FieldProps {
  name: string;
  label: string;
  children: ReactNode;
}

export const Field = ({ name, label, children }: FieldProps) => (
  <div className="flex flex-col gap-2 w-full">
    <Label htmlFor={name}>{label}</Label>
    {children}
  </div>
);
