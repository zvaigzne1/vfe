import { useSelector } from 'react-redux';
import Option from './Option';

const OptionList = () => {
  const options = useSelector(state => state.getProduct.options);

  return (
    <div className="option-list">
      <div className="option-list__desktop-div">Options:</div>
      <div className="option-list__list">
        {options.map((item) => 
          <Option 
            item={item} 
            key={Math.floor(Math.random()*10000000)}
          />
        )}
      </div>
    </div>
  );
};

export default OptionList;
