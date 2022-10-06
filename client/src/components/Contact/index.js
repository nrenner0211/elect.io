import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log('Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
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
  };

  return (
    <section className='center-forum'>

    <h3 id="contact" className='intro contact'>Contact Us!</h3>
    <div className='center'>

        <form id="contact-form" onSubmit={handleSubmit}>

            <div>
            <input type="text" placeholder="Name" name="name" defaultValue={name} onBlur={handleChange} />
            </div>

            <div>
            <input type="email" placeholder="Email" name="email" defaultValue={email} onBlur={handleChange} />
            </div>

            <div>
            <label htmlFor="message">Message:</label>
            <textarea name="message" rows="5" placeholder="Feedback Welcome!" defaultValue={message} onBlur={handleChange} />
            </div>

            {errorMessage && (
            <div>
                <p className="error-text">{errorMessage}</p>
            </div>
            )}
            <button data-testid="button" type="submit">Submit</button>
        </form>

    </div>

    </section>
  );
}

export default Contact;