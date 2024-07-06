// ServiceCard.js

import React from 'react';
import '../css/serviceCard.css'; 

const ServiceCard = ({ title, description }) => {
  return (
    <div className="service-card">
      <div className="card-front">
        <div className="card-content">
          <img src="https://e7.pngegg.com/pngimages/495/355/png-clipart-hyperlink-computer-icons-link-building-link-miscellaneous-text.png" alt="" style={{ height: '40px', width: '40px' }}/>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="card-back">
        <div className="card-content">
          <h2>Back Content for {title}</h2>
          <p>Additional details about {title}.</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
