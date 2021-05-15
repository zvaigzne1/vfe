import './App.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../redux/actions/productActions';
import ProductImage from './ProductImage';
import InfoBox from './infoBox/InfoBox';
import AddToBox from './addToBox/AddToBox';

const App = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector(state => state.getProduct);

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return (
    <>
      {loading 
        ? <h2>Loading...</h2>
        : error
          ? <h2>{error}</h2>
          : <div className="main-container">
              <ProductImage />
              <InfoBox />
              <AddToBox />
            </div>
      }
    </>
  );
};

export default App;
