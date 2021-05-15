import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, subtractFromCart, removeFromCart } from '../../redux/actions/cartActions';
import './QtyRocker.scss';

const QtyRocker = ({ item }) => {
  let [qty, setQty] = useState(item.qty);
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);
  const incrementStep = 1;
  const maxValue = 10;
  const minValue = 0;   

  const addToCartHandler = (item) => {
    const val = Number(item.qty);

    if (val + incrementStep <= maxValue) {
      const existItem = cartItems.find((x) => x.id === item.id);
      if (existItem) {
        item.qty = val + incrementStep;
        dispatch(addToCart(item));
        setQty(item.qty);
      } else {
        item.qty = incrementStep;
        dispatch(addToCart(item));
        setQty(item.qty);
      }
    }
  };

  const subtractFromCartHandler = (item) => {
    if (item.qty - incrementStep >= minValue) {
        item.qty = item.qty - incrementStep;
        dispatch(subtractFromCart(item));
        setQty(item.qty);
    }

    if (item.qty === 0) {
      dispatch(removeFromCart(item.id));
      setQty(item.qty);
    }
  };

  const onInputChangeHandler = (e) => {
    const value = Number(e.target.value);
    if (value > minValue && value <= maxValue) {
      setQty(value);
      item.qty = value;
      dispatch(addToCart(item));
    } else if (value === 0) {
      setQty(0);
      dispatch(removeFromCart(item.id));
    } else if (value < minValue || value > maxValue) {
      setQty(item.qty);
    }
  } 



  return (
    <section className="qty-rocker">
      <div 
        onClick={() => {subtractFromCartHandler(item)}}
        className={`qty-rocker__minus-box ${item.qty === 0 ? "grayed-out" : ""}`}>
        <img className="qty-rocker__img-minus" src="img/icons8-minus.png" alt="minus button" />        
      </div>
     
      <div className="qty-rocker__input-box">
     
        <input
          className={item.qty === 0 ? "grayed-out" : ""}
          type="number"
          value={qty}
          onChange={(e) => onInputChangeHandler(e)}
          >
        </input>

      </div>

      <div 
        onClick={() => {addToCartHandler(item)}}
        className={`qty-rocker__plus-box ${item.qty >= maxValue ? "grayed-out" : ""}`}
        >
        <img className="qty-rocker__img-plus" src="img/icons8-plus_math.png" alt="plus button"/>
      </div>
    </section>
  );
};

export default QtyRocker;
