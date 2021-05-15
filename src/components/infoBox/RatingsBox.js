import './RatingsBox.scss';
import { useSelector } from 'react-redux';

const RatingsBox = () => {
  const product = useSelector(state => state.getProduct.product);

  return (
    <>
    {
      product.name
        ?
        <div className="ratings-box">
          <img className="ratings-box__img" src="img/icons8-star_filled.png" alt="star icon filled" />
          <img className="ratings-box__img" src="img/icons8-star_filled.png" alt="star icon filled" />
          <img className="ratings-box__img" src="img/icons8-star_filled.png" alt="star icon filled" />
          <img className="ratings-box__img" src="img/icons8-star_filled.png" alt="star icon filled" />
          <img className="ratings-box__img" src="img/icons8-star_filled.png" alt="star icon filled" />
          <div className="ratings-box__ratings-score">{product.reviews.rating}</div>
          <div className="ratings-box__reviews-count">{product.reviews.count} Reviews</div>
          <div className="ratings-box__buyers-count">{product.reviews.total_buyers} buyers</div>
        </div>
        :
        <p>Loading...</p>
    }      
    </>
  );
};

export default RatingsBox;


