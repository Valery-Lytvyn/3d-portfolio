import React, { useRef, useState } from 'react';

import emailjs from '@emailjs/browser';
import Button from '../button/Button';
import './contact.scss';

function Contact() {
   const [success, setSuccess] = useState(null);
   const form = useRef();

   const handleSubmit = (e) => {
      e.preventDefault();

      emailjs
         .sendForm(
            "service_c4nsjbk",
            "template_cjroexq",
            form.current,
            "vhZJkv-_dXV-apvNU"
         )
         .then(
            (result) => {
               console.log(result.text);
               setSuccess(true);
            },
            (error) => {
               console.log(error.text);
               setSuccess(false);
            }
         );
   }


   return (
      <section className='contact'>
         <div className="formChapter">
            <div className="contactTitle pb-4">
               Contact me
            </div>
            <form
               ref={form}
               className='contactForm'
               onSubmit={handleSubmit}
            >
               <input type="text"
                  name='name'
                  placeholder='Name'
               />
               <input className='my-4'
                  type="email"
                  name='email'
                  placeholder='Email'
               />
               <textarea
                  name="message"
                  rows={10}
                  placeholder='Write your message'
                  className='textarea mb-4'
               ></textarea>
               <Button text={'Send'} />
            </form>
            {success &&
               <p className='pt-2'>Your message has been sent. I'll get back to you soon :)</p>}
         </div>
         <div className="mapChapter">
         </div>
      </section>
   )
}

export default Contact