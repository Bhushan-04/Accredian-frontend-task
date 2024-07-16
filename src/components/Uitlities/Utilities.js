import React from 'react';
import './Utilities.css';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import trade from '../../assets/transaction-removebg-preview.jpg';
import atm from '../../assets/atm(1)-removebg-preview.jpg';
import wallet from "../../assets/wallet-filled-money-tool-removebg-preview.jpg";

const Utilities = () => {
  return (
    <div className="content-row">
      <div className="content-box">
        <img src={trade} alt="Image 1" className="content-image"/>
        <h2 className="content-heading">Trade Desk</h2>
        <p className="content-description">Invest in crypto anytime, anywhere with our safe, secure, and easy to use online <br></br>platform</p>
        <a href="#link1" className="content-link">Get Started</a>
      </div>
      <div className="content-box">
        <img src={atm} alt="Image 2" className="content-image" />
        <h2 className="content-heading">CoinFlip ATMs</h2>
        <p className="content-description">We have thousands of ATMs located across the U.S. where you can easily convert cash to crypto</p>
        <a href="#link2" className="content-link">Find an ATM logo remaining</a>
      </div>
      <div className="content-box">
        <img src={wallet} alt="Image 3" className="content-image" />
        <h2 className="content-heading">CoinFlip Wallet</h2>
        <p className="content-description">Store your growing investments in our non-custodial wallet that gives you access to a full suite of DeFi services in one place</p>
        <a href="#link2" className="content-link">Download the App logo remaining</a>
      </div>
    </div>
  )
}

export default Utilities;