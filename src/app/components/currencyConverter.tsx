"use client";
import React, { useState, useEffect } from "react";
import CurrencyFlag from 'react-currency-flags';

export default function CurrencyConverter() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [exchangeRate, setExchangeRate] = useState(0);
  const [result, setResult] = useState(0);

  useEffect(() => {
    if (fromCurrency && toCurrency) {
      fetch(`/api/convert?from=${fromCurrency}&to=${toCurrency}`)
        .then((response) => response.json())
        .then((data) => setExchangeRate(data.rate));
    }
  }, [fromCurrency, toCurrency]);

  useEffect(() => {
    setResult(amount * exchangeRate);
  }, [amount, exchangeRate]);

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <p className="text-lg text-white self-start">Saisissez le montant</p>
      <div className="mb-4 space-x-2">
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
        ></select>

        <span className="mx-4 text-white text-xl">en</span>
        <select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
          className="p-3 border-teal-950 bg-teal-800 rounded text-white font-bold"
        ></select>
      </div>
      <div className="text-lg my-2">
        <button
          onClick={() => {
            setResult(0);
            setAmount(1);
            setFromCurrency("USD");
            setToCurrency("EUR");
          }}
          className="p-3 bg-red-900 rounded text-white font-bold"
        >
          Réinitialiser
        </button>
      </div>
      <div className="text-xl text-white">
        {amount} {fromCurrency} = {result.toFixed(2)} {toCurrency}
      </div>
    </div>
  );
}
