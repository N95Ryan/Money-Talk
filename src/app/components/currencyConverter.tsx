'use client';

import { useState, useEffect } from 'react';

export default function CurrencyConverter() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [exchangeRate, setExchangeRate] = useState(0);
  const [result, setResult] = useState(0);

  useEffect(() => {
    if (fromCurrency && toCurrency) {
      fetch(`/api/convert?from=${fromCurrency}&to=${toCurrency}`)
        .then(response => response.json())
        .then(data => setExchangeRate(data.rate));
    }
  }, [fromCurrency, toCurrency]);

  useEffect(() => {
    setResult(amount * exchangeRate);
  }, [amount, exchangeRate]);

  return (
    <div className="flex flex-col items-center justify-center gap-4 mt-10">
      <div className="mb-4 space-y-1">
        <p className="text-lg text-white">Saisissez le montant</p>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="p-3 border-teal-950 bg-teal-800 rounded text-white font-bold"
        />
        <select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
          className="p-3 border-teal-950 bg-teal-800 rounded text-white font-bold"
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="JPY">JPY</option>
          {/* Ajoutez plus de devises ici */}
        </select>
        <span className="mx-2 text-white">à</span>
        <select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
          className="p-3 border-teal-950 bg-teal-800 rounded text-white font-bold"
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="JPY">JPY</option>
          {/* Ajoutez plus de devises ici */}
        </select>
      </div>
      <div className="text-lg text-white">
        {amount} {fromCurrency} = {result.toFixed(2)} {toCurrency}
      </div>
    </div>
  );
}
