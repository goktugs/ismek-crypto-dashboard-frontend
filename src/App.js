import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import ListItem from './Components/ListItem/ListItem';

function App() {
  const [search, setSearch] = useState('');
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ display: 'flex' }}>
      <div className="exchangeContainer">converter</div>
      <div className="middlePart">
        <div className="header">
          <form>
            <input
              className="inputField"
              type="text"
              onChange={handleChange}
              placeholder="Search a Coin"
            />
          </form>
        </div>
        <div className="coinsContainer">
          {filteredCoins.map((coin) => {
            return (
              <ListItem
                key={coin.id}
                name={coin.name}
                price={coin.current_price}
                symbol={coin.symbol}
                marketcap={coin.market_cap}
                volume={coin.total_volume}
                image={coin.image}
                priceChange={coin.price_change_percentage_24h}
              />
            );
          })}
        </div>
      </div>
      <div className="chatContainer">chat</div>
    </div>
  );
}

export default App;
