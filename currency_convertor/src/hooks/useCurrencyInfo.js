import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchCurrencyData = async () => {
      try {
        const response = await fetch(
          `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`,
        );
        const res = await response.json();

        setData(res[currency]);
      } catch (error) {
        console.error("Failed to fetch currency data:", error);
      }
    };

    fetchCurrencyData();
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
