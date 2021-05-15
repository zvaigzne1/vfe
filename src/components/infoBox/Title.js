import './Title.scss';
import { useSelector } from 'react-redux';

const Title = () => {
  const product = useSelector(state => state.getProduct.product);

  return (
    <>
    {
      product.name
      ? <main className="title">
          <h1 className="title__h1">{product.name}</h1>
          <div className="title__hot-sale-products">
            <p className="title__p">{product.tags}</p>
          </div>
        </main>
      :
      <p>Loading...</p>
    }
    </>
  );
};

export default Title;
