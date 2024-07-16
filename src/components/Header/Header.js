import React from 'react';
import './Header.css';
import { useScroll, motion,useSpring } from "framer-motion";

const Header = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress)
  // useSpring(x, )

  return (
    <div className="header">
      <div className="logo-container">
        <img src="logo.png" alt="COINFLIP" className="logo" />
      </div>
      <div className="nav-links-container">
        <ul className="nav-links">
          <li><a href="#buysell">Buy / Sell</a></li>
          <li><a href="#grow">Grow</a></li>
          <li><a href="#markets">Markets</a></li>
          <li><a href="#business">Business</a></li>
          <li><a href="#support">Support</a></li>
        </ul>
      </div>
      <div className="header-buttons">
        <button className="btn-primary">Sign in</button>
        <button className="btn-secondary">Sign up</button>
      </div>
      <motion.div
        className="progress-bar"
        style={{ scaleX }}
      />
    </div>
  );
}

export default Header;