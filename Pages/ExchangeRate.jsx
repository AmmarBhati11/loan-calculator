import { useEffect, useState } from 'react';

export default function ExchangeRate() {
  const [rates, setRates] = useState({});

  useEffect(() => {
    fetch('https://api.exchangerate-api.com/v4/latest/USD')
      .then(res => res.json())
      .then(data => setRates(data.rates))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800 dark:text-white">Live Exchange Rates (USD)</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Object.entries(rates).map(([currency, value]) => (
          <div key={currency} className="border p-3 rounded shadow-sm bg-white dark:bg-gray-800 text-gray-800 dark:text-white">
            <strong>{currency}</strong>: {value.toFixed(2)}
          </div>
        ))}
      </div>
    </div>
  );
}
