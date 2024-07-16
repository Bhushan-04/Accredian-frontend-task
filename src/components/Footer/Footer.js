import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <img src="logo.png" alt="COINFLIP" className="logo" />
          <p className="footer-description">
            CoinFlip, the world's leading bitcoin ATM operator, makes it so flippin' easy to buy and sell bitcoin via cash, card, or bank
            transfer.
          </p>
          <p className="footer-small-text">
            Sign up to get the latest in CoinFlip news, discounts, and more.
          </p>
          <input
            type="email"
            className="footer-input"
            placeholder="Email Address"
          />
        </div>
        <div className="footer-column">
          <h3>Company</h3>
          <ul className="footer-list">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#careers">Careers</a>
            </li>
            <li>
              <a href="#press">Press</a>
            </li>
            <li>
              <a href="#news">News</a>
            </li>
            <li>
              <a href="#merch">Merch</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Privacy Policy and Terms of Service</h3>
          <ul className="footer-list">
            <li>
              <a href="#link1">CoinFlip Privacy Policy</a>
            </li>
            <li>
              <a href="#link2">CoinFlip Biometrics Privacy Policy</a>
            </li>
            <li>
              <a href="#link3">CoinFlip Financial Privacy Notice</a>
            </li>
            <li>
              <a href="#link3">CoinFlip Terms of Service</a>
            </li>
            <li>
              <a href="#link3">CoinFlip Trade Desk Terms of Service</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
