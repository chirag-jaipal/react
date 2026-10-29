import { useEffect, useState } from "react";

const colors = [
  "#FF5733", // Red
  "#33FF57", // Green
  "#3357FF", // Blue
  "#F1C40F", // Yellow
  "#9B59B6", // Purple
  "#E67E22", // Orange
  "#1ABC9C", // Teal
  "#E6E6FA", // Crimson
  "#2ECC71", // Emerald
  "#000000", // Sky Blue
];

function App() {
  const [color, setColor] = useState("#111111");

  return (
    <div
      className="w-full h-screen duration-200 flex justify-center items-center"
      style={{ backgroundColor: color }}
    >
      <div className="fixed bottom-12 flex flex-wrap justify-center items-center gap-3 bg-white p-3 rounded-full">
        {colors.map((buttonColor, index) => (
          <button
            className="rounded-full shadow-lg cursor-pointer outline-none"
            key={index}
            onClick={() => setColor(buttonColor)}
            style={{
              backgroundColor: buttonColor,
              width: "48px",
              height: "48px",
            }}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default App;
