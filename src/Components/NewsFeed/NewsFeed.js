import React from 'react';
import { useState, useEffect } from 'react';
import './NewsFeed.css';

function NewsFeed() {
  // const [articles, setArticles] = useState(null);
  const News = [
    {
      news: 'https://cryptopotato.com/crypto-hedge-funds-are-outperforming-following-bitcoins-decline-since-november/',
      image:
        'https://crypto.snapi.dev/images/v1/v/q/altcoins-cover-1-90062.jpg',
      title:
        "Crypto Hedge Funds are Outperforming Following Bitcoin's Decline Since November",
      text: "Crypto hedge funds backed by a basket of digital assets outperformed Bitcoin last month as the world's leading cryptocurrency fell hard from its peak price.",
      source_name: 'CryptoPotato',
      date: 'Thu, 16 Dec 2021 02:29:41 -0500',
      topics: ['institutions'],
      sentiment: 'Neutral',
      type: 'Article',
      tickers: ['BTC'],
    },
    {
      news: 'https://ambcrypto.com/cryptogames-offering-bitcoin-and-altcoin-casino-games/',
      image:
        'https://crypto.snapi.dev/images/v1/o/z/jonathan-petersson-gqhwmkyh3yc-unsplash-90058.jpg',
      title: 'CryptoGames: Offering Solana and Altcoin casino games',
      text: 'CryptoGames, owned by MuchGaming B.V, is an exclusive crypto casino that is operating online for a good couple of years now. Over time, it rapidly became the top and first choice for gamblers from around the world.',
      source_name: 'AMBCrypto',
      date: 'Thu, 16 Dec 2021 01:40:04 -0500',
      topics: [],
      sentiment: 'Neutral',
      type: 'Article',
      tickers: ['SOL'],
    },
    {
      news: 'https://www.newsbtc.com/news/bitcoin/dorsey-and-jay-zs-blind-trust-to-fund-bitcoin-development-reveals-board-members/',
      image:
        'https://crypto.snapi.dev/images/v1/o/p/106911087-16263029762021-07-12t182451z-1049474836-rc26jo9ua1af-rtrmadp-0-fintech-crypto-flows-120x86-90054.jpeg',
      title:
        "Dorsey And Jay-Z's Blind Trust To Fund Bitcoin Development Reveals Board Members",
      text: 'The 500 BTC blind trust announced its board of directors. Back in February, Jack Dorsey and Jay-Z created the ₿trust with a clear mission.',
      source_name: 'NewsBTC',
      date: 'Thu, 16 Dec 2021 00:59:16 -0500',
      topics: [],
      sentiment: 'Neutral',
      type: 'Article',
      tickers: ['BTC'],
    },
    {
      news: 'https://coinpedia.org/news/crypto-bull-market-resumes-post-fed-meeting/',
      image: 'https://crypto.snapi.dev/images/v1/k/r/crypto11-90051.jpg',
      title:
        'Crypto Bull Market Resumes Post Fed Meeting! BTC And ETH Getting Into 2022 Bull Season!',
      text: 'The Federal Reserve officials raised their fearless stride to escalate the withdrawal of the unprecedented monetary impetus used to fortify markets in the wake of Covid-19. Conceding the mounting risk of inflation. The crypto fraternity has been carefully observing resolutions of the US central bank whilst the majority of them see Bitcoin and other cryptocurrencies …',
      source_name: 'CoinPedia',
      date: 'Thu, 16 Dec 2021 00:49:27 -0500',
      topics: [],
      sentiment: 'Positive',
      type: 'Article',
      tickers: ['ETH'],
    },
    {
      news: 'https://www.cryptopolitan.com/bitcoin-ethereum-solana-tron-daily-price-analysis-15-december-roundup/',
      image: 'https://crypto.snapi.dev/images/v1/z/h/roundup-v2-1-1-90044.png',
      title:
        'Bitcoin, Ethereum, Solana, TRON Daily Price Analysis – 15 December Roundup',
      text: 'TL;DR Breakdown Global market cap takes a sigh of relief, adding 3.58% in the last 24 hours. Bitcoin has gained 2.10% in the last 24 hours, adding to its bulk.',
      source_name: 'Cryptopolitan',
      date: 'Thu, 16 Dec 2021 00:17:48 -0500',
      topics: ['tanalysis'],
      sentiment: 'Neutral',
      type: 'Article',
      tickers: ['BTC', 'ETH', 'SOL', 'TRX'],
    },
    {
      news: 'https://u.today/bitcoin-spikes-to-49000-as-fed-leaves-interest-rates-unchanged',
      image:
        'https://crypto.snapi.dev/images/v1/z/b/bitcoin-2007769-1920-154-89281-89946.jpg',
      title: 'Bitcoin Spikes to $49,000 as Fed Leaves Interest Rates Unchanged',
      text: 'Bitcoin spiked to an intraday high after the announcement',
      source_name: 'UToday',
      date: 'Wed, 15 Dec 2021 14:09:00 -0500',
      topics: [],
      sentiment: 'Positive',
      type: 'Article',
      tickers: ['BTC'],
    },
  ];
  /*
  useEffect(() => {
    var options = {
      method: 'GET',
      url: 'https://crypto-news-live.p.rapidapi.com/news/coindesk',
      headers: {
        'x-rapidapi-host': 'crypto-news-live.p.rapidapi.com',
        'x-rapidapi-key': '2549edee18mshe98db9262b75704p1919e4jsn5060e8bbac6a',
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setArticles(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const first5Articles = articles?.slice(0, 5);
*/
  return (
    <div className="newsFeed">
      <div class="scrollbar" id="style-2">
        <div class="force-overflow"></div>
      </div>
      <h2>News Feed</h2>
      {News?.map((data, _index) => (
        <div className="articles" key={_index}>
          <a
            href={data.news}
            target="_blank"
            rel="noreferrer"
            className="imagePreview"
          >
            <img src={data.image} alt={data.type} className="articlesImage" />
          </a>
          <div className="title">
            <a target="_blank" href={data.news} rel="noreferrer">
              {data.title}
            </a>
            <span className="bottomTicker">{data.tickers[0]}</span>
          </div>
          <div className="bottom">
            <span className="bottomSearchText">{data.date}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NewsFeed;
