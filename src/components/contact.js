import InputBox from './contact/input-box';
import MessageBox from './contact/message-box';
import SubmitButton from '../components/shared/submit-button';
import emailjs from 'emailjs-com';
import { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [isNotSent, setIsNotSent] = useState(null);
  const [isSent, setIsSent] = useState(false);

  const isValidEmail = (email) => {
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
  };

  const submit = () => {
    if (!isValidEmail(email)) {
      setIsNotSent(true);
    } else {
      if (name && email && message) {
        const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
        const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
        const userId = process.env.REACT_APP_EMAILJS_USER_ID;
        const templateParams = {
          from_name: name,
          from_email: email,
          message: message,
        };

        emailjs.send(serviceId, templateId, templateParams, userId);

        setName('');
        setEmail('');
        setMessage('');
        setIsSent(true);
        setIsNotSent(false);
      } else {
        setIsNotSent(true);
      }
    }
  };
  return (
    <div className="container" style={{ paddingTop: '5%' }}>
      <div className="row justify-content-center">
        <div className="col-md-4">
          <h4 className="mb-3">Contact</h4>
          {isNotSent === true && (
            <p className="alert alert-danger">
              Your message was not sent. Please ensure all fields are filled in
              and your email is correct.
            </p>
          )}
          {isSent === true && (
            <p className="alert alert-success">
              Your message was sent! I will be in touch with you shortly.
            </p>
          )}
          <div>
            <InputBox
              name={'Your Name'}
              id={'yourname'}
              placeholder="Your Name"
              type={'text'}
              setValue={setName}
            />
            <InputBox
              name={'Email'}
              id={'email'}
              placeholder="example@email.com"
              type={'email'}
              setValue={setEmail}
            />
            <MessageBox setValue={setMessage} />
            <SubmitButton message="Submit" onClick={submit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
