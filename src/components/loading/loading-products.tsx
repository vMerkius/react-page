import { formatCurrency } from "../../utils/formatter";
import Stars from "../UI/stars";
import iconPurpleHeart from "/assets/img/icon-purple-heart.svg";
import iconPurpleCart from "/assets/img/icon-purple-cart.svg";
import iconPurpleAdd from "/assets/img/icon-purple-add.svg";

type ItemsProps = {
  perPage: number;
  view: string;
};

const LoadingProducts: React.FC<ItemsProps> = ({ perPage, view }) => {
  let viewClass = "";
  view === "flex" ? (viewClass += "flex") : (viewClass += "grid");

  return (
    <div className={`items items--${viewClass}`}>
      {Array.from({ length: perPage }, (_, index) => (
        <div key={index} className={`item item--${viewClass}`}>
          <div className="item__image-container">
            <div className="item__loading-box"></div>
          </div>
          <div className={`item__right item__right--${viewClass}`}>
            <div className={`item__upper item__upper--${viewClass}`}>
              <p className="item__name">{"Item"}</p>
              <Stars num={3} />
            </div>
            <div className="item__prices">
              <span className="item__discount">{formatCurrency(10)}</span>
              <span className="item__price">{formatCurrency(20)}</span>
            </div>
            <p className={`item__description item__description--${viewClass}`}>
              {"Description"}
            </p>
            <div className="item__icons">
              <img
                className="item__icon"
                src={iconPurpleCart}
                alt="purple cart"
              />
              <img
                className="item__icon"
                src={iconPurpleHeart}
                alt="purple heart"
              />
              <img
                className="item__icon"
                src={iconPurpleAdd}
                alt="purple add"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LoadingProducts;
