import React, { useState } from 'react';
import { validateEmail } from '../../Utils/helpers';

function ContactForm() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
              } else {
                setErrorMessage('');
              }
        } else {
                if (!e.target.value.length) {
                  setErrorMessage(`${e.target.name} is required.`);
                } else {
                  setErrorMessage('');
                }
              }  
              if (!errorMessage) {
                setFormState({ ...formState, [e.target.name]: e.target.value });
              }
    console.log('errorMessage', errorMessage);
    }
      
    function handleSubmit(e) {
        e.preventDefault();
      }

    return (
        <section>
            <div className="wrap">
                <p className="slide">slide into the DMs</p>
            </div>
          <form id="contact-form" onSubmit={handleSubmit}>
            <div className="input">
              <label htmlFor="name" className="inputLabel">name:</label>
              <input type="text" defaultValue={name} onBlur={handleChange} size="30" name="name" />
            </div>
            <div className="input">
              <label htmlFor="email" className="inputLabel">email address:</label>
              <input type="email" defaultValue={email} name="email" onBlur={handleChange} size="50"/>
            </div>
            <div className="input">
              <label htmlFor="message" className="inputLabel">message:</label>
              <textarea name="message" defaultValue={message} onBlur={handleChange} rows="15" cols="80" />
            </div>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
            <div className="input">
            <button type="submit">Submit</button>
            </div>
          </form>
        </section>
        );
}
    
export default ContactForm;