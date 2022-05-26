// import { useState } from "react";
// import "./contact.scss"
// import { send } from 'emailjs-com';

// export default function Contact() {
//   // const [message,setMessage] = useState(false)

//   const handleSubmit = (e)=>{
//     e.preventDefault();
//     // setMessage(true)
//   }
//   // const Contact = () => {
//     const [sender_email, set_sender_email] =useState('');
//     const [message, set_message] =useState('');
//     const handleEmail = (e) =>{
//       set_sender_email(e.target.value)
//     }

//     const handlemessage = (e) =>{
//       set_message(e.target.value)
//     }

//     const sendMail = (e) =>{
//       e.preventDefault();
//       send(
//         'service_dgu48jr',
//         'template_tjke8ag',
//         {sender_email, message},
//         'user_VEGHwb7dVD6C8OqB'
//       )
//       // .then((response) => {
//       //   console.log('Message Sent Successfully', response.status, response.text)
//       // })
//       // .catch((err) => {
//       //   console.log('Failed', err)
//       // })
//     }
  
//   return (
//     <div className='contact' id="contact">
//       <div className="left">
//         <img src="assets/shake.svg" alt="" />
//       </div>
//       <div className="right">
//         <h2>Contact Me</h2>
//         <form onSubmit={handleSubmit}>
//           <form onSubmit={sendMail}>
//             <input type="email" name="sender_email" value={sender_email} onChange={handleEmail} required placeholder="Enter Your Email"/>
//             <textarea name="message" value={message} onChange={handlemessage} required placeholder="Message..."></textarea>
//             <button type="Submit">Send</button>
//             {message && <span>Thanks for visiting! 🙂</span>}
//           </form>
//         </form>
//       </div>
//     </div>
//   )
//   }
// // }


import { useState } from "react";
import "./contact.scss"

export default function Contact() {
  const [message,setMessage] = useState(false)

  const handleSubmit = (e)=>{
    e.preventDefault();
    setMessage(true)
  }
  return (
    <div className='contact' id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter Your Email"/>
          <textarea placeholder="Message..."></textarea>
          <button type="Submit">Send</button>
          {message && <span>Thanks for visiting! 🙂</span>}
        </form>
      </div>
    </div>
  )
}