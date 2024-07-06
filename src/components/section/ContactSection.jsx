// ContactSection.js
import React from 'react';
import ContactForm from '../contactForm';
import '../../css/Contactsection.css';
import '../../css/card.css'
const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="background-image"></div>
      <div className="left-side">
        create box inside it written text animation facebook , wahtsapp , instagram 
      </div>
      <div className="right-side">
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;
