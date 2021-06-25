import InputBox from './contact/input-box';
import MessageBox from './contact/message-box';
import SubmitButton from '../components/shared/submit-button';

const Contact = () => {
  return (
    <div className="container" style={{ paddingTop: '5%' }}>
      <div className="row justify-content-center">
        <div className="col-md-4">
          <h4 className="mb-3">Contact</h4>
          <form className="needs-validation" novalidate>
            <InputBox
              name={'Your Name'}
              id={'yourname'}
              placeholder="Your Name"
              type={'text'}
            />
            <InputBox
              name={'Email'}
              id={'email'}
              placeholder="example@email.com"
              type={'email'}
            />
            <MessageBox />
            <SubmitButton message="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
