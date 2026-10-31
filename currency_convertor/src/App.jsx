import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo.js";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const currencyOptions = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convertAmount = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat px-4 py-8 sm:px-6"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/39391910/pexels-photo-39391910.jpeg')`,
      }}
    >
      <div className="flex min-h-[calc(100vh-4rem)] w-full items-center justify-center">
        <div className="w-full max-w-md rounded-2xl border border-white/40 bg-slate-950/35 p-5 shadow-2xl shadow-slate-950/30 backdrop-blur-md sm:p-6">
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              convertAmount();
            }}
          >
            <div className="w-full">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={currencyOptions}
                onAmountChange={(amount) => setAmount(amount)}
                onCurrencyChange={(curr) => setFrom(curr)}
                selectCurrency={from}
              />
            </div>
            <div className="relative h-0.5 w-full">
              <button
                type="button"
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white/80 bg-blue-600 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow-lg shadow-blue-950/25 transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-transparent cursor-pointer"
                onClick={swap}
              >
                Swap
              </button>
            </div>
            <div className="w-full">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={currencyOptions}
                onCurrencyChange={(curr) => setTo(curr)}
                selectCurrency={to}
                amountDisable
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white shadow-lg shadow-blue-950/25 transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-transparent cursor-pointer"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
