import './ShippingPrice.scss';
import { useSelector } from 'react-redux';

const ShippingPrice = () => {
  const product = useSelector(state => state.getProduct.product);

  return (
    <>
    {
      product.name
      ?
        <div className="shipping-price">
          {product.shipping.method.cost.currency.symbol}
          &nbsp;
          {product.shipping.method.cost.value.toFixed(2)}
        </div>
      :
        <p>Loading...</p>
    }
    </>
  );
};

export default ShippingPrice;
