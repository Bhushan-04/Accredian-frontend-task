import React from 'react';
import './Firststep.css';
import  investmentIcon  from '../../assets/business-investment.svg';


const Firststep = () => {
  return (
    <div className="container-firststep">
    <div className="content-container">
        <h1 className="title-firststep">Take your first step <br></br> into safe, secure<br></br> crypto investing</h1>
        <p className="description-firststep">Separated they live in Bookmarks right at the coast of the famous<br></br> Semantics, large language ocean Separated they live in Bookmarks right <br></br>at the coast.</p>
        <button className="btn-primary">Get Started</button>
    </div>
    <div className="image-container">
        <img src={investmentIcon} alt="investment" className="image"/>
    </div>
</div>
  )
}

export default Firststep