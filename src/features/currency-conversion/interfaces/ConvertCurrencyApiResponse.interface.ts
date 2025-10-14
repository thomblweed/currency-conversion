interface Meta {
  code: number;
  disclaimer: string;
}

interface Response {
  timestamp: number;
  date: string;
  from: string;
  to: string;
  amount: number;
  value: number;
}

export interface ConvertCurrencyApiResponse {
  meta: Meta;
  response: Response;
  timestamp: number;
  date: string;
  from: string;
  to: string;
  amount: number;
  value: number;
}
