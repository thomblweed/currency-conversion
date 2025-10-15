import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

import type { FormEvent } from 'react';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const trimToLastTwoDecimalPlaces = (value: number) =>
  Math.trunc(value * 100) / 100;

export const getFormData = (event: FormEvent<HTMLFormElement>) => {
  const formData = new FormData(event.target as HTMLFormElement);
  return Object.fromEntries(formData);
};
