"use client";

import { useState } from "react";

const suggestedAmounts = [
  20000,
  35000,
  50000,
];

export default function AmountSelector() {
  const [selectedAmount, setSelectedAmount] =
    useState<number | null>(20000);

  const [customAmount, setCustomAmount] =
    useState("");

  return (
    <div className="amountSelector">
      <div className="amountGrid">
        {suggestedAmounts.map((amount) => (
          <button
            key={amount}
            className={`amountButton ${
              selectedAmount === amount
                ? "activeAmount"
                : ""
            }`}
            onClick={() => {
              setSelectedAmount(amount);
              setCustomAmount("");
            }}
          >
            ${amount.toLocaleString("es-AR")}
          </button>
        ))}
      </div>

      <input
        type="number"
        placeholder="Otro monto"
        value={customAmount}
        onChange={(e) => {
          setCustomAmount(e.target.value);
          setSelectedAmount(null);
        }}
        className="amountInput"
      />
    </div>
  );
}