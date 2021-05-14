import './QtyRocker.scss';
import { useDispatch, useSelector } from 'react-redux';


const QtyRocker = ({ item }) => {
  const dispatch = useDispatch();
  // const cartItems = useSelector(state => state.cart.cartItems);
  const incrementStep = 1;
  const maxValue = 10;
  const minValue = 0;
  
  return (
    <section className="qty-rocker">
      <div className={`qty-rocker__minus-box ${item.qty === 0 ? "grayed-out" : ""}`}>
        <img className="qty-rocker__img-minus" src="img/icons8-minus.png" alt="minus button" />
      </div>

      <div className="qty-rocker__input-box">
        {item.qty === 0
        ?
          <input 
            id="light-placeholder" 
            type="number"
            placeholder={item.qty}
          />       
        :
          <input 
            id="dark-placeholder" 
            type="number"
            placeholder={item.qty}
          />        
        }
      </div>

      <div className={`qty-rocker__plus-box ${item.qty >= maxValue ? "grayed-out" : ""}`}>
        <img className="qty-rocker__img-plus" src="img/icons8-plus_math.png" alt="plus button" />
      </div>      
    </section>
  );
};

export default QtyRocker;
