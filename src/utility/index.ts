import emailjs from 'emailjs-com';

export const randomId = () => {
  const id = Math.floor(Math.random() * 100);

  return id;
};

export const sendEmail = async (formElement: HTMLFormElement) => {
  try {
    const USER_ID = 'user_qc6OtIgYEpURMlU4xHwUr';
    const TEMPLATE_ID = 'template_j9hqmjq';

    await emailjs.sendForm('gmail', TEMPLATE_ID, formElement, USER_ID);
  } catch (error) {
    throw new Error('There was a problem with sending an e-mail');
  }
};
