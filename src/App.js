import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Profit or Loss</h1>
      </header>
      <main>
        <form>
          <label htmlFor="initial">Initial Price</label>
          <input type="number" name="initial" />
          <label htmlFor="initial">Quantity Stocks</label>
          <input type="number" name="quantity" />
          <label htmlFor="initial">Current Price</label>
          <input type="number" name="current" />
          <button>Submit</button>
        </form>
      </main>
      <footer>
        Created with love by <a href="https://atulgairola.tech">Atul Gairola</a>
      </footer>
    </div>
  );
}

export default App;
