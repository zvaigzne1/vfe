import './ShipTo.scss';
import { useSelector } from 'react-redux';

const ShipTo = () => {
  const product = useSelector(state => state.getProduct.product);

  return (
    <>
      {
        product.name
        ?
          <div className="ship-to">
          Ship to <span className="ship-to__span">{product.shipping.method.country}<br/>
          by {product.shipping.method.title.slice(0, 15)}...</span>
          </div>
        :
        <p>Loading...</p>
      }
    </>
  );
};

export default ShipTo;
