import './LeadTime.scss';
import { useSelector } from 'react-redux';

const LeadTime = () => {
  const product = useSelector(state => state.getProduct.product);

  return (
    <>
    {
      product.name
      ?
        <div className="lead-time">
          <p className="lead-time__p">Lead Time <span className="lead-time__span">{product.shipping.lead_time.value.slice(0, 3)}</span> days</p>
          <img className="lead-time__img" src="img/icons8-info.png" alt="info icon" />
        </div>
      : 
        <p>Loading...</p>
    }
    </>
  );
};

export default LeadTime;
