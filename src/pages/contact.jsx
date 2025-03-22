import React from 'react'
import "../style/contact.css"

const contact = () => {
  return (
    <div className='contact_body'>
      <div class="container">
        <h2>Contact Us</h2>
        <form action="#" method="POST">
            <div class="input-group">
                <label for="name">Full Name</label>
                <input type="text" id="name" name="name" placeholder="Enter your full name" required/>
            </div>

            <div class="input-group">
                <label for="email">Email ID</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" required/>
            </div>

            <div class="input-group">
                <label for="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required/>
            </div>

            <div class="input-group">
                <label for="message">Message</label>
                <textarea id="message" name="message" rows="5" placeholder="Write your message here..." required></textarea>
            </div>

            <button type="submit">Submit</button>
        </form>
    </div>

    </div>
  )
}

export default contact