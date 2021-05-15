import './BadgeList.scss';
import { useSelector } from 'react-redux';
import Badge from './Badge';

const BadgeList = () => {
  const product = useSelector(state => state.getProduct.product);
  return (
    <div className="badge-list">
      {
        product.name
          ? 
            <>
              {product.shipping.props.ready_to_ship && 
                <Badge 
                  text="Ready to Ship"
                  hasIcon={false}
                />
              }
              {product.shipping.props.in_stock && 
                <Badge 
                  text="In Stock"
                  hasIcon={true}
                />
              }
              {product.shipping.props.fast_dispatch && 
                <Badge 
                  text="Fast Dispatch"
                  hasIcon={true}
                />
              }
            </>
          :
            <p>Loading...</p>
      }
    </div>
  );
};

export default BadgeList;
