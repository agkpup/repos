// App.js

import React from 'react';
import ServiceCard from '../ServiceCard'; 
import '../../css/card.css'
const ServiceCardSec = () => {
  return (
      <div className="card-container">
        <ServiceCard
          title="Web App"
          description="responsive web applications."
        />
        <ServiceCard
          title="Android App"
          description="Android applications."
        />
        <ServiceCard
          title="Digital Marketing"
          description="Promoting brands ."
        />
        <ServiceCard
          title="SEO"
          description="search engines."
        />
      </div>
  );
};

export default ServiceCardSec;
