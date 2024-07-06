

import React from 'react';
import '../../css/customerSection.css'; // 

const CustomersSection = () => {

  const customerLogos = [
    { id: 1, image: 'customer1.jpeg', name: 'A Pvt Ltd' },
    { id: 2, image: 'customer1.jpeg', name: 'B Pvt Ltd' },
    { id: 3, image: 'customer1.jpeg', name: 'C Pvt Ltd' },
    { id: 4, image: 'customer1.jpeg', name: 'D Pvt Ltd' },
    { id: 5, image: 'customer1.jpeg', name: 'E Pvt Ltd' },
  ];

  return (
    <section className="customers-section">
        <h6>Our most valuable customers</h6>
      <div className="customers-container">
        {customerLogos.map((customer) => (
          <div className="customer-logo" key={customer.id}>
            <img src={customer.image} alt={customer.name} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomersSection;
