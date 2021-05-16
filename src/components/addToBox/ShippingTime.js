import './ShippingTime.scss';
import { useSelector } from 'react-redux';

const ShippingTime = () => {
  const product = useSelector(state => state.getProduct.product);

  return (
    <>
    {
      product.name 
        ?
          <div className="shipping-time">
            <p className="shipping-time__p">Shipping time <span className="shipping-time__span">{product.shipping.method.shipping_time.value.slice(0, 5)}</span> days</p>
            <img className="shipping-time__img" src="img/icons8-info.png" alt="info icon" />
          </div>
        :
          <p>Loading...</p>
    }
    </>
  );
};

export default ShippingTime;
