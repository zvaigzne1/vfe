import './AddToBox.scss';
import ButtonBox from './ButtonBox';
import LeadTime from './LeadTime';
import OptionSummary from './OptionSummary';
import ShippingPrice from './ShippingPrice';
import ShippingTime from './ShippingTime';
import ShipTo from './ShipTo';

const AddToBox = () => {
  return (
    <section className="add-to-box">
      <OptionSummary />
      <div className="add-to-box__container">
        <div className="add-to-box__shipping-info-box">
          <ShipTo />
          <LeadTime />
          <ShippingTime />
        </div>
        <div className="add-to-box__price-box">
          <ShippingPrice />
        </div>
        <div className="add-to-box__btn-box">
          <ButtonBox />
        </div>
      </div>
    </section>
  );
};

export default AddToBox;
