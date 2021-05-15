import './Payments.scss';

const Payments = () => {
  return (
    <div className="payments">
      <p className="payments__p">Payments: </p>
      &nbsp;
      <img 
        className="payments__visa" 
        src="img/icons8-visa.svg" 
        alt="visa card icon" 
      />
      <img 
        className="payments__mastercard" 
        src="img/icons8-mastercard.svg" 
        alt="mastercard icon" 
      />
      <img 
        className="payments__apple" 
        src="img/icons8-apple_pay.svg" 
        alt="apple pay icon" 
      />      
    </div>
  );
};

export default Payments;
