export default function Panel() {
  const currencies = ["EUR - €", "USD - $", "GBP - £", "JPY - ¥"];

  return (
    <div className="h-[420px] w-[840px] bg-teal-800 rounded-lg shadow-xl flex flex-col justify-center items-center">
      <p className="text-2xl font-light text-white mb-10">Saisissez votre montant</p>
      <div className="flex flex-row space-x-4 align-middle justify-center items-center">
        <div>
            <input
                type="number"
                className="p-3 border-teal-950 bg-teal-950 rounded text-white font-bold"
            />
        </div>
        <div className="flex flex-row space-x-4 align-middle justify-center items-center">
          <select className="p-3 bg-teal-950 rounded text-white font-bold">
            {currencies.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
          <span className="text-lg text-white font-light">en</span>
          <select className="p-3 bg-teal-950 rounded text-white font-bold">
            {currencies.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}