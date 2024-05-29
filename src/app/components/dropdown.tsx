"use client";
import React from "react";

export default function Dropdown() {
    const currencies = ["EUR ☀️", "USD ☀️", "CAD ☀️", "GBP ☀️", "JPY ☀️ "];

    return (
        <div className="h-[420px] w-[1080px] bg-teal-800 rounded-lg shadow-xl flex justify-center items-center space-x-24">
            <div className="flex flex-col items-center justify-center">
                <p className="text-xl text-white self-center font-semibold my-2">
                    Monnaie d&apos;entrée :
                </p>
                <select className="bg-teal-950 px-[80px] py-[20px] text-white font-bold rounded-lg" defaultValue="50.00€">
                    {currencies.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>

            <div className="flex flex-col items-center justify-center">
                <p className="text-xl text-white self-center font-semibold my-2">
                    Monnaie de sortie :
                </p>
                <select className="bg-teal-950 px-[80px] py-[20px] text-white font-bold rounded-lg" defaultValue="50.00€">
                    {currencies.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>

        </div>
    );
}