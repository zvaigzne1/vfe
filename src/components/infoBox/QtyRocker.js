import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, subtractFromCart, removeFromCart } from '../../redux/actions/cartActions';
import './QtyRocker.scss';

const QtyRocker = ({ item }) => {
  const inputField = useRef();
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);
  const incrementStep = 1;
  const maxValue = 10;
  const minValue = 0;

  const itemFromCart = cartItems.find((x) => (x.id === item.id));
  itemFromCart ? item.qty = itemFromCart.qty : item.qty=0;

  const btnDissabled = item.qty > 0 ? false : true;

  const addToCartHandler = (item) => {
    const val = Number(item.qty);

    if (val + incrementStep <= maxValue) {
      const existItem = cartItems.find((x) => x.id === item.id);
      if (existItem) {
        item.qty = val + incrementStep;
        dispatch(addToCart(item));
        inputField.current.value = item.qty;
      } else {
        item.qty = incrementStep;
        dispatch(addToCart(item));
        inputField.current.value = item.qty;
      }
    }
  };

  const subtractFromCartHandler = (item) => {
    if (item.qty - incrementStep >= minValue) {
      item.qty = item.qty - incrementStep;
      dispatch(subtractFromCart(item));
      inputField.current.value = item.qty;
    }
    if (item.qty === 0) {
      dispatch(removeFromCart(item.id));      
    }
  };

  const onBlurHandler = (e) => {
    const value = Number(e.target.value)

    if (value > minValue && value <= maxValue) {
      item.qty=value;
      dispatch(addToCart(item));
    } else if (value === 0) {
      dispatch(removeFromCart(item.id));
    } else {
      inputField.current.value = item.qty;
    }
  }

  return (
    <section className="qty-rocker">
      <button 
        disabled={btnDissabled}
        onClick={() => {subtractFromCartHandler(item)}}
        className={`qty-rocker__minus-box ${item.qty === 0 ? "grayed-out" : ""}`}>
        <img className="qty-rocker__img-minus" src="img/icons8-minus.png" alt="minus button" />        
      </button>
     
      <div className="qty-rocker__input-box">
     
        <input
          ref={inputField}
          className={item.qty === 0 ? "grayed-out" : ""}
          type="number"
          placeholder={item.qty}
          onBlur={(e) => onBlurHandler(e)}
          >
        </input>
      </div>

      <button 
        onClick={() => {addToCartHandler(item)}}
        className={`qty-rocker__plus-box ${item.qty >= maxValue ? "grayed-out" : ""}`}
        >
        <img className="qty-rocker__img-plus" src="img/icons8-plus_math.png" alt="plus button"/>
      </button>
    </section>
  );
};

export default QtyRocker;
