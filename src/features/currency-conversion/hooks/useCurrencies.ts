import { useQuery } from "@tanstack/react-query";

import { getAvailableCurrencies } from "../services/currency.service";

export const useCurrencies = () => {
  return useQuery({
    queryKey: ["currencies"],
    queryFn: getAvailableCurrencies,
  });
};
