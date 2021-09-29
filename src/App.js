import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState({
    initial: "",
    quantity: "",
    current: "",
  });
  const [result, setResult] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setResult(null);
    const { initial, quantity, current } = data;

    if (initial && quantity && current) {
      const initialAmount = initial * quantity;
      const currentAmount = current * quantity;

      if (currentAmount > initialAmount) {
        const profit = currentAmount - initialAmount;
        const percentage = (profit / initialAmount) * 100;
        setResult(
          `This Stock Is In PROFIT of  ₹${profit}, ${percentage.toFixed(2)}% ⬆`
        );
      } else if (currentAmount === initialAmount) {
        setResult("This Stock Is Neither In Profit Nor In Loss ");
      } else {
        const loss = initialAmount - currentAmount;
        const percentage = (loss / initialAmount) * 100;
        setResult(
          `This Stock Is In LOSS of  ₹${loss}, ${percentage.toFixed(2)}% ⬇`
        );
      }
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Profit or Loss</h1>
      </header>
      <main>
        <form>
          <label htmlFor="initial">Initial Price</label>
          <input type="number" name="initial" onChange={handleInputChange} />
          <label htmlFor="quantity">Quantity Stocks</label>
          <input type="number" name="quantity" onChange={handleInputChange} />
          <label htmlFor="current">Current Price</label>
          <input type="number" name="current" onChange={handleInputChange} />
          <button onClick={handleSubmit}>Submit</button>
        </form>
        {result !== null && <p>{result}</p>}
      </main>
      <footer>
        Created with love by <a href="https://atulgairola.tech">Atul Gairola</a>
      </footer>
    </div>
  );
}

export default App;
