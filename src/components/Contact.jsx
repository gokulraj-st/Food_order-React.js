import React from "react";
import './Contact.css'

function Contact() {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>If you have any questions or inquiries, feel free to reach out to us:</p>
      <ul>
        <li>Email: gokulrajst555@.com</li>
        <li>Phone: +91 9600278466</li>
        <li>Address: Thuraiyur</li>
      </ul>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
