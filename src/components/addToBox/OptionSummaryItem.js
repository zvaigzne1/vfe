const OptionSummaryItem = ({ item }) => {
  return (
    <div className="option-summary-item">
      <div className="option-summary-item__box">
        <p className="option-summary-item__label">{item.label}</p>
        <p className="option-summary-item__text">Price for <span className="option-summary-item__qty">{item.qty}</span> item(s):<span className="option-summary-item__price">{item.symbol} {(item.price * item.qty).toFixed(2)}</span></p>
      </div>      
    </div>
  );
};

export default OptionSummaryItem;
