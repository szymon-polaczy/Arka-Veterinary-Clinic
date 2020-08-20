import React from 'react'
import Styled from 'styled-components'
import { Form, Field } from 'react-final-form'

import { formValidation } from './FormValidation'

const Container = Styled.article`
  h2 {
    padding: 1.5rem 1rem;
    font-family: 'Barrio', cursive;
    text-align: center;
    letter-spacing: .1rem;
  }

  form {
    display: flex;
    flex-flow: column;
    align-items: center;

    div {
      width: min-content;
    }

    input, textarea, button {
      outline: none;
      border: none;
      background: transparent;
      color: #fff;
    }

    input, textarea {
      width: 280px;
      background: #2b2b2b;
      border-bottom: 2px solid #548493;
    }

    label {
      display: block;
      margin-bottom: .25rem;
      margin-top: 1.5rem;
    }

    textarea {
      resize: none;
    }

    button {
      border-top: 2px solid #548493;
      border-bottom: 2px solid #548493;
      width: 15rem;
      padding: .65rem 0;
      font-size: 1.65rem;
      font-family: 'Barrio', cursive;
      letter-spacing: .1rem;
      margin-bottom: 1.5rem;
      margin-top: 1.5rem;
      transition: .1s transform ease-out;

      &:hover, &:focus {
        background: #2b2b2b;
      }

      &:active {
        transform: scale(.9);
      }
    }

    span {
      color: #f33;
      font-size: .9rem;
      padding: .2rem 0;
    }
  }
`

const ContactForm = () => {
  return (
    <Container>
      <h2>Wyślij do nas maila</h2>
      <Form 
        onSubmit={({fullName, email, phone, message}) => {
          console.log({fullName, email, phone, message})
        }}
        initialValues={{
          fullName: '',
          email: '',
          phone: null,
          message: '',
        }}
        validate={(values) => formValidation.validateForm(values)}
        render={({handleSubmit}) => 
        <form onSubmit={handleSubmit}>
          <Field name="fullName">
            {({ input, meta }) => (
              <div>
                <label>Jak się nazywasz?</label>
                <input type="text" {...input} />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="email">
            {({ input, meta }) => (
              <div>
                <label>Twój adres email</label>
                <input type="email" {...input} />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="phone">
            {({ input, meta }) => (
              <div>
                <label>Twój numer telefonu</label>
                <input type="tel" pattern="[0-9]{9}" {...input} />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="message">
            {({ input, meta }) => (
              <div>
                <label>Co chce się dowiedzieć?</label>
                <textarea {...input} />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <button type="submit">Wyślij</button>
        </form>
      }
      />
    </Container>
  )
}

export default ContactForm