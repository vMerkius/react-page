import { formatCurrency } from "../../utils/formatter";
import ButtonMain from "../UI/button-main";
import Stars from "../UI/stars";

import heartEmptyIcon from "/assets/img/icon-heart-empty.svg";

const LoadingDetails = () => {
  return (
    <section className="details">
      <div className="info">
        <div className="info__images">
          <div className="info__small-imgs">
            <div className="info__loading-box"></div>
            <div className="info__loading-box"></div>
            <div className="info__loading-box"></div>
          </div>
          <div className="info__img--big-container">
            <div className="info__loading-box info__loading-box--big"></div>
          </div>
        </div>
        <div className="info__details">
          <h2 className="info__header">Item</h2>
          <Stars num={3} />
          <p className="info__prices">
            {formatCurrency(10)}
            <span className="info__price"> {formatCurrency(20)}</span>
          </p>
          <p className="info__description">Description</p>
          <div className="info__add">
            <ButtonMain>Add To Cart</ButtonMain>
            <img
              src={heartEmptyIcon}
              alt="Add to wishlist"
              className="info__heart"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoadingDetails;
