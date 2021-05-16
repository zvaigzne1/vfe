import './ProductImage.scss';
import { useSelector } from 'react-redux';

const ProductImage = () => {
  const product = useSelector(state => state.getProduct.product);
  return (
    <>
      {
        product.name
          ? 
          <div className="product-image">
            <img
              className="product-image__img"
              src={product.gallery[0].main}
              alt={product.name}
            />
          </div>
          :
          <p>Loading...</p>
      }
    </>
  );
};

export default ProductImage;
