import { useState } from "react";
import "./contact.scss"
import { useRef } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();
  const [message,setMessage] = useState(false) //adds acknowledgement message

  const sendEmail = (e) => {
    e.preventDefault();
    setMessage(true) // sets acknowledgment message to visible.

    emailjs.sendForm('service_dgu48jr', 'template_tjke8ag', form.current, '_VEGHwb7dVD6C8OqB')
      .then((result) => {
          console.log(result.text);
          e.target.reset() //clears the form
      }, (error) => {
          console.log(error.text);
      });
  };

  return(
  <div className='contact' id="contact">
    <div className="left">
      <img src="assets/shake.svg" alt="" />
    </div>
    <div className="right">
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail}>
        <input type="email" name="sender_email" placeholder="Enter Your Email"/>
        <textarea name="message" placeholder="Message..."></textarea>
        <button type="Submit">Send</button>
        {message && <span>Thanks for visiting! 🙂</span>}
      </form>
    </div>
  </div>
  );
};

export default Contact;