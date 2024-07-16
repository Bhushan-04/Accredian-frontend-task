import React from 'react';
import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Utilities from './components/Uitlities/Utilities';
import Investment from './components/Investments/Investments';
import Support from './components/Support/Support';
import Buysell from './components/Buysell/Buysell';
import Firststep from './components/Firststep/Firststep';
import Transmission from './components/Transmission/Transmission';
import Footer from './components/Footer/Footer';

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    try {
      axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false&locale=en')
      .then((res) => {
        // console.log(res);
        setData(res.data);
      })
    } catch (error) {
      console.log(error);
    }
  }, [])

  return (
    <div className='main-container'>
      <Header></Header>
      <Hero></Hero>
      <Utilities></Utilities>
      <Investment></Investment>
      <Support></Support>
      <Buysell cryptoData = {data}></Buysell>
      <Firststep></Firststep>
      <Transmission></Transmission>
      <Footer></Footer>
    </div>
  )
}

export default App