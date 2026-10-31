import { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();

  return (
    <div
      className={`flex w-full gap-4 rounded-xl border border-slate-200/80 bg-white p-4 text-sm shadow-sm transition-shadow focus-within:border-blue-300 focus-within:shadow-md ${className}`}
    >
      <div className="min-w-0 flex-1">
        <label
          htmlFor={amountInputId}
          className="mb-2 inline-block text-xs font-semibold uppercase tracking-wide text-slate-500"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          className="w-full bg-transparent py-1.5 text-lg font-semibold text-slate-800 outline-none placeholder:text-slate-400 disabled:cursor-not-allowed disabled:text-slate-400"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount ?? ""}
          onChange={(e) =>
            onAmountChange &&
            onAmountChange(e.target.value === "" ? "" : Number(e.target.value))
          }
        />
      </div>
      <div className="flex min-w-0 flex-1 flex-wrap justify-end text-right">
        <p className="mb-2 w-full text-xs font-semibold uppercase tracking-wide text-slate-500">
          Currency Type
        </p>
        <select
          className="max-w-full cursor-pointer rounded-lg border border-slate-200 bg-slate-50 px-2 py-1.5 font-semibold uppercase text-slate-700 outline-none transition-colors hover:border-slate-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 disabled:cursor-not-allowed disabled:opacity-60"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((curr) => (
            <option key={curr} value={curr}>
              {curr}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
