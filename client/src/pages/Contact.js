import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';
import { Container } from '@mui/system';
import Paper from '@mui/material/Paper';



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
    <Container className="center" maxWidth="xlg">
      <Paper elevation={6}>
        <form id="contact-form" onSubmit={handleSubmit}>
          <div className='intro'>Contact Us</div>

            <div>
            <label htmlFor="name"></label>
            <input type="text" placeholder="Name" name="name" defaultValue={name} onBlur={handleChange} />
            </div>

            <div>
            <label htmlFor="email"></label>
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
    </Paper>
    </Container>
  );
}

export default Contact;