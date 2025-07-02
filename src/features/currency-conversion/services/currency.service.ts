const BASE_URL = "https://api.exchangeratesapi.io/v1";

export const getAvailableCurrencies = async () => {
  const response = await fetch(`${BASE_URL}/currencies`);
  const data = (await response.json()) as Record<string, string>;

  return data;
};
