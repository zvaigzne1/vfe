import './OptionSummary.scss';
import { useSelector } from 'react-redux';
import OptionSummaryItem from './OptionSummaryItem';


const OptionSummary = () => {
  const cartItems = useSelector(state => state.cart.cartItems);

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
  };

  const getCartSubTotal = () => {
    return cartItems.reduce((price, item) => price + (item.price * item.qty), 0).toFixed(2);
  }
  
  return (
    <>
    {
      cartItems.length > 0 
        ?
          <> 
            <div className="option-summary">
              <p className="option-summary__title">Option Summary</p>
              {cartItems.map((item) => <OptionSummaryItem item={item} key={item.label} />)}
              

              <div className="option-summary__count">
              Cart: &nbsp; 
              <span className="option-summary__span">{getCartCount()}</span>
              </div>

              <div className="option-summary__sub-total">
                Subtotal: &nbsp; 
                <span className="option-summary__span">
                {cartItems[0].symbol} {getCartSubTotal()}
                </span>
              </div>
            </div>
            </>
        :
        ""
    }
    </>
  );
};

export default OptionSummary;
