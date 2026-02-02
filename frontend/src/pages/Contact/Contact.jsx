import React from 'react'
import './Contact.css'

const Contact = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
    alert("Message sent successfully! (This is a demo)");
  }

  return (
    <div className='contact-page'>
      <div className="contact-container">
        <div className="contact-info">
          <h1>Get in Touch</h1>
          <p>Have questions about Quizzard? We'd love to hear from you.</p>
          <div className="info-item">
            <span>📍</span>
            <p>123 Quiz Lane, Education City</p>
          </div>
          <div className="info-item">
            <span>📧</span>
            <p>support@quizzard.com</p>
          </div>
        </div>

        <form onSubmit={onSubmitHandler} className="contact-form">
          <input type="text" placeholder='Your Name' required />
          <input type="email" placeholder='Your Email' required />
          <textarea placeholder='How can we help you?' rows="5" required></textarea>
          <button type='submit'>Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact