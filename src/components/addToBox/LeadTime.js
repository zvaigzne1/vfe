import './LeadTime.scss';
import { useSelector } from 'react-redux';
import Tooltip from './Tooltip';

const LeadTime = () => {
  const product = useSelector(state => state.getProduct.product);

  return (
    <>
    {
      product.name
      ?
        <div className="lead-time">
          <p className="lead-time__p">Lead Time <span className="lead-time__span">{product.shipping.lead_time.value.slice(0, 3)}</span> days</p>

          <Tooltip position="top" content={product.shipping.lead_time.info}>
            <img className="lead-time__img" src="img/icons8-info.png" alt="info icon" />
          </Tooltip>

        </div>
      : 
        <p>Loading...</p>
    }
    </>
  );
};

export default LeadTime;
