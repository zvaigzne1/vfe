import './CountdownBox.scss';
import { useSelector } from 'react-redux';
import CountdownTimer from './CountdownTimer';

const CountdownBox = () => {
  const product = useSelector(state => state.getProduct.product);
  
  return (
    <>
    {
      product.name
      ?
        <div className="countdown-box">
          <div className="countdown-box__discount-amount">{product.discount.amount}&nbsp;OFF</div>
          <div className="countdown-box__discount-text">Discount ends in</div>
          <img className="countdown-box__img" src="img/icons8-clock.png" alt="clock icon" />
          <CountdownTimer />
        </div>
      :
      <p>Loading...</p>
    }
    </>
  );
};

export default CountdownBox;
