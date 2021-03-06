import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import ListItem from './Components/ListItem/ListItem';
import Client from './Components/Chat/Client.js';
import ReactPaginate from 'react-paginate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CurrConverter from './Components/CurrencyConverter/CurrConverter';
import NewsFeed from './Components/NewsFeed/NewsFeed';

function App() {
  const [search, setSearch] = useState('');
  const [coins, setCoins] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

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

  const coinsPerPage = 6;
  const pagesVisited = pageNumber * coinsPerPage;

  const displayCoins = filteredCoins
    .slice(pagesVisited, pagesVisited + coinsPerPage)
    .map((coin) => {
      return (
        <ListItem
          id={coin.id}
          name={coin.name}
          price={coin.current_price}
          symbol={coin.symbol}
          marketcap={coin.market_cap}
          volume={coin.total_volume}
          image={coin.image}
          priceChange={coin.price_change_percentage_24h}
        />
      );
    });

  const pageCount = Math.ceil(coins.length / coinsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="App">
      <div className="exchangeContainer">
        <CurrConverter />
        <NewsFeed />
      </div>
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
        <div className="coinsContainer">{displayCoins}</div>
        <div>
          <ReactPaginate
            previousLabel={'<'}
            nextLabel={'>'}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={'paginationButtons'}
            previousClassName={'previousButton'}
            nextLinkClassName={'nextButton'}
            disabledClassName={'paginationDisabled'}
            activeClassName={'paginationActive'}
          />
        </div>
        <div className="socialButtons"></div>
      </div>
      <div className="chatContainer">
        <Client />
      </div>
    </div>
  );
}

export default App;
