import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const trimToLastTwoDecimalPlaces = (value: number) =>
  Math.trunc(value * 100) / 100;
