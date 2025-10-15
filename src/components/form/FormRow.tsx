import type { ReactNode } from 'react';

export const FormRow = ({ children }: { children: ReactNode }) => {
  return <div className="flex gap-4 w-1/2">{children}</div>;
};
