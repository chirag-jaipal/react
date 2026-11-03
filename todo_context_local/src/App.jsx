import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className="text-3xl text-center bg-blue-500 p-4 m-4 text-white">
        Manage Your Todos
      </h1>
    </div>
  );
}

export default App;
