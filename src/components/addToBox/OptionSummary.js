import './OptionSummary.scss';
import { useSelector } from 'react-redux';
import OptionSummaryItem from './OptionSummaryItem';


const OptionSummary = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  
  return (
    <>
    {
      cartItems.length > 0 
        ?
          <div className="option-summary">
          <p>Option Summary</p>
          {cartItems.map((item) => <OptionSummaryItem item={item} key={item.label} />)}
          </div>
        :
        ""
    }
    </>
  );
};

export default OptionSummary;
