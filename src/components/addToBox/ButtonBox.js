import './ButtonBox.scss';
import ContactSupplierBtn from './ContactSupplierBtn';
import LoginBtn from './LoginBtn';

const ButtonBox = () => {
  return (
    <div className="button-box">
      <LoginBtn />
      <ContactSupplierBtn />
    </div>
  );
};

export default ButtonBox;
