import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../redux/actions/productActions';
// import axios from 'axios';

const App = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector(state => state.getProduct);

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  // const getData = async () => {
  //   const { data } = await axios.get("https://fe-assignment.vaimo.net/");
  //   console.log(data.product);
  // };
  // getData();

  return (
    <div>
      App
    </div>
  );
};

export default App;
