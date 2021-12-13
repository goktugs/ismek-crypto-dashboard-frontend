import React from 'react';
import './ListItem.css';
import graphLineDown from './Graphs/graphLineDown.svg';
import graphLineUp from './Graphs/graphLineUp.svg';

const Coin = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
  id,
}) => {
  return (
    <div className="wrapper">
      <div className="cryptoCoin">
        <img src={image} alt={`${name}`} className="coinLogo" />
        <div className="coinNameWrap">
          <h1
            className="coinName"
            onClick={() => {
              window.open(`https://www.coingecko.com/tr/coins/${id}`);
            }}
          >
            {name}
          </h1>
          <p className="coinSymbol">{symbol}</p>
        </div>
        <p className="coinPrice">${price.toLocaleString()}</p>
        <p className="coinMarketcap">
          Market Cap: ${marketcap.toLocaleString()}
        </p>
        <p className="coinVolume">Volume (24H): ${volume.toLocaleString()}</p>
        {priceChange < 0 ? (
          <div className="priceContainerDOWN">
            <img src={graphLineDown} alt="down" />
            <p className="priceChange">{priceChange.toFixed(2)}%</p>
          </div>
        ) : (
          <div className="priceContainerUP">
            <img src={graphLineUp} alt="up" />{' '}
            <p className="priceChange">{priceChange.toFixed(2)}%</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Coin;
