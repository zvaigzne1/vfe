import { useSelector } from 'react-redux';

const OptionList = () => {
  const options = useSelector(state => state.getProduct.options);
  console.log(options);
  return (
    <div>
      
    </div>
  )
}

export default OptionList
