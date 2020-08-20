import { Validators } from '@lemoncode/fonk'
import { createFinalFormValidation } from "@lemoncode/fonk-final-form";

const validationSchema = {
  field: {
    fullName: [ 
      {
          validator: Validators.required.validator,
          message: "Pełne imię i nazwisko jest wymagane."
      }
    ],
    email: [
      {
        validator: Validators.required.validator,
        message: "Email jest wymagany."
      },
      {
          validator: Validators.email.validator,
          message: "Podaj poprawny adres email."
      }
    ],
    phone: [
      {
        validator: Validators.required.validator,
        message: "Numer telefonu jest wymaganu."
      },
      {
        validator: Validators.pattern,
        customArgs: {
          pattern: /[0-9]{9}/,
        },
        message: 'Podaj poprawny numer telefonu bez spacji ani myślników.'
      }
    ],
    message: [
      {
        validator: Validators.required.validator,
        message: "Podaj wiadomość jaką chcesz do nas wysłać."
      }
    ],
  }
};

export const formValidation = createFinalFormValidation(validationSchema);