import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../redux/actions/productActions';
import InfoBox from './infoBox/InfoBox';

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
              <InfoBox />
            </div>
      }
    </>
  );
};

export default App;
