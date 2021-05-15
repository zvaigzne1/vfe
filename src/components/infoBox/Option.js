import './Option.scss';
import QtyRocker from './QtyRocker';

const Option = ({ item }) => {
  return (
    <div className="option">
      <div className="option__label">{item.label}</div>
      <div className="option__price">{item.symbol} {item.price}</div>
      <QtyRocker item={item} />      
    </div>
  );
};

export default Option;
