import emailjs from 'emailjs-com';
const USER_ID = 'user_qc6OtIgYEpURMlU4xHwUr';
const TEMPLATE_ID = 'template_j9hqmjq';

export const useEmail = (formElement: HTMLFormElement) => {
  emailjs.sendForm('gmail', TEMPLATE_ID, formElement, USER_ID).then(
    (result) => {
      console.log(result.text);
    },
    (error) => {
      console.log(error.text);
    }
  );
};
