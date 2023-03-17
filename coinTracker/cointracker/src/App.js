import { useState, useEffect } from "react";
// api.coinpaprika.com/v1/tickers
function App() {
  const [ loading, setLoading ] = useState(true);
  const [ coins, setCoins] = useState([])
  useEffect(() => {
    // url에 데이터를 요청해서 받아들인다.
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response) => response.json())
    .then((json) => {
      setCoins(json);
      setLoading(false);
  });
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? <strong>Loading...</strong> : null}
      <select>
        {coins.map((coin) => <option>{coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD</option>)}
      </select>
      <ul>
        {coins.map((coin) => <li>{coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD</li>)}
      </ul>
    </div>
  );
}

export default App;
