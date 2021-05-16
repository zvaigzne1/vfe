import './PriceBox.scss';

const PriceBox = () => {
  return (
    <div className="price-box">
      <p className="price-box__new-price">R 78.50 - R 895.31</p>
      <p className="price-box__option"> &nbsp;/ Option</p>
      <p className="price-box__divider"> | </p>
      <p className="price-box__option-count">2 Options </p>
      <p className="price-box__min-order">(Min.Order)</p>
      <br/>
      <p className="price-box__old-price">R 98.12 - R 1,119.14</p>
    </div>
  );
};

export default PriceBox;
