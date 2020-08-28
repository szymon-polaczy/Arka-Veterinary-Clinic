import React from 'react'
import Styled from 'styled-components'
import { Form, Field } from 'react-final-form'

import { formValidation } from './FormValidation'

const Container = Styled.article`
  h2 {
    padding: 1.5rem 1rem 0 1rem;
    font-family: ${props => props.theme.secondaryFontFamily};
    text-align: center;
    letter-spacing: .1rem;
    margin-bottom: 0;
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
      color: ${props => props.theme.light};
    }

    input, textarea {
      width: 280px;
      background: ${props => props.theme.gray};
      border-bottom: 2px solid ${props => props.theme.akcent};
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
      border-top: 2px solid ${props => props.theme.akcent};
      border-bottom: 2px solid ${props => props.theme.akcent};
      width: 15rem;
      padding: .65rem 0;
      font-size: 1.65rem;
      font-family: ${props => props.theme.secondaryFontFamily};
      letter-spacing: .1rem;
      margin-bottom: 1.5rem;
      margin-top: 1.5rem;
      transition: .1s transform ease-out;

      &:hover, &:focus {
        background: ${props => props.theme.gray};
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
  @media (min-width: 600px) {
    form {
      input, textarea {
        padding: .35rem;
      }
  
      label {
        font-size: 1.1rem;
      }
    }
  }

  @media (min-width: 900px) {
    display: flex;
    width: 100%;
    align-items: center;
    flex-flow: column;
    justify-content: center;

    
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