import React from 'react';
import './Support.css';
import supportIcon from '../../assets/support.svg';

const Support = () => {
  return (
    <div className="support-container">
        <div className="image-container">
            <img src={supportIcon} alt="support" className="image"/>
        </div>
        <div className="content-container">
            <h1 className="title">24/7 access to full service customer support</h1>
            <p className="description">We invest more resources than any other platform in making sure great support from real people is a click away, whenever you need it.</p>
            <button className="btn-primary">Get Started</button>
        </div>
    </div>
  )
}

export default Support