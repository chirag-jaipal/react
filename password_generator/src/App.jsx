import { useCallback, useEffect, useState, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  // Using useCallBack to memoize the password generator and copyPasswordToClipboard function and avoid unnecessary re-renders
  const passGenerator = useCallback(() => {
    let pass = "";
    let secret = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) secret += "0123456789";
    if (charAllowed) secret += "!@#$%^&*_-+=[]{}~`";

    for (let i = 1; i <= length; ++i) {
      let char = Math.floor(Math.random() * secret.length + 1);
      pass += secret.charAt(char);
    }

    setPassword(pass);
    // Added 'setPassword' to the dependency array to ensure the function is updated when 'setPassword' changes
  }, [length, numAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select(); // Select the text in the input field
    passwordRef.current?.setSelectionRange(0, 101); // Set the selection range to cover the entire password
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passGenerator();
    // Added 'passGenerator' to the dependency array to ensure the effect runs when the password generator function changes
  }, [length, numAllowed, charAllowed, passGenerator]);

  return (
    <div className="mx-auto my-10 w-full max-w-md rounded-2xl border border-orange-700/50 bg-orange-800 p-5 text-orange-50 shadow-2xl shadow-orange-950/40">
      <h1 className="mb-4 text-center text-2xl text-orange-50">
        Password Generator
      </h1>
      <div className="flex overflow-hidden rounded-xl border border-orange-700/60 bg-orange-950/60 shadow-inner transition focus-within:border-amber-400 focus-within:ring-2 focus-within:ring-amber-400/30">
        <input
          type="text"
          value={password}
          className="w-full bg-transparent px-4 py-3 text-lg font-medium text-orange-50 outline-none placeholder:text-orange-300/60"
          placeholder="password"
          readOnly
          ref={passwordRef}
        />
        <button
          className="bg-orange-500 px-5 py-3 font-semibold text-orange-950 transition hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-300 active:bg-amber-500 cursor-pointer"
          onClick={copyPasswordToClipboard}
        >
          Copy
        </button>
      </div>
      <div className="mt-5 grid gap-4 rounded-xl border border-orange-700/40 bg-orange-950/30 p-4 text-sm sm:grid-cols-3 sm:gap-3">
        <div className="flex items-center gap-2 sm:flex-col sm:items-start">
          <input
            id="lengthInput"
            type="range"
            min={6}
            max={100}
            value={length}
            className="w-full cursor-pointer accent-amber-400"
            onChange={(e) => setLength(e.target.value)}
          />
          <label
            className="whitespace-nowrap text-orange-200"
            htmlFor="lengthInput"
          >
            Length:{" "}
            <span className="font-semibold text-amber-300">{length}</span>
          </label>
        </div>
        <label className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-2 text-orange-100 transition">
          <input
            type="checkbox"
            id="numInput"
            defaultChecked={numAllowed}
            className="h-4 w-4 cursor-pointer accent-amber-400"
            onChange={() => setNumAllowed((prev) => !prev)}
          />
          <span>Numbers</span>
        </label>
        <label className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-2 text-orange-100 transition">
          <input
            type="checkbox"
            id="charInput"
            defaultChecked={charAllowed}
            className="h-4 w-4 cursor-pointer accent-amber-400"
            onChange={() => setCharAllowed((prev) => !prev)}
          />
          <span>Characters</span>
        </label>
      </div>
    </div>
  );
}

export default App;
