import React from "react";
import "./Buysell.css";

const Buysell = (props) => {
  return (
    <div className="container-buysell">
      <div>
        <h1 className="heading-buysell">
          Buy and sell with the lowest <br></br> fees in the industry
        </h1>
        <p className="description-buysell">
          Buy and sell 150+ cryptocurrencies with 20+ fiat currencies using{" "}
          <br></br>bank transfers or your credit/debit card.
        </p>
        <a href="https://www.example.com" className="external-link">
          Learn More
        </a>
      </div>
      <div>
        <table className="data-table">
          <thead>
            <tr>
              <th>Coin</th>
              <th>Symbol</th>
              <th>Price</th>
              <th>Market cap</th>
              <th>Trade</th>
            </tr>
          </thead>
          <tbody>
            {props.cryptoData.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.symbol}</td>
                  <td>{item.current_price}</td>
                  <td>{item.market_cap}</td>
                  <td><a href="#link">Trade Now</a></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Buysell;
