import emailjs from 'emailjs-com';

export const randomId = () => {
  const id = Math.floor(Math.random() * 100);

  return id;
};

export const sendEmail = (formElement: HTMLFormElement) => {
  const USER_ID = 'user_qc6OtIgYEpURMlU4xHwUr';
  const TEMPLATE_ID = 'template_j9hqmjq';

  emailjs.sendForm('gmail', TEMPLATE_ID, formElement, USER_ID).then(
    (result) => {
      console.log(result.text);
    },
    (error) => {
      console.log(error.text);
    }
  );
};
