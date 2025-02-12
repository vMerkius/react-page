import { useDispatch } from "react-redux";
import { IItem } from "../../types/item";
import { formatCurrency } from "../../utils/formatter";
import ButtonMain from "../UI/button-main";
import Stars from "../UI/stars";

import heartEmptyIcon from "/assets/img/icon-heart-empty.svg";
import { cartActions } from "../../store/cartSlice";
import { toast } from "react-toastify";

type InfoProps = {
  item: IItem;
};

const Info: React.FC<InfoProps> = ({ item }) => {
  const dispatch = useDispatch();
  const notify = () => toast("Item added to cart");

  return (
    <div className="info">
      <div className="info__images">
        <div className="info__small-imgs">
          <img
            src={item.imgs ? item.imgs[0] : item.img}
            alt={item.name}
            className="info__img info__img--small"
          />
          <img
            src={item.imgs ? item.imgs[1] : item.img}
            alt={item.name}
            className="info__img info__img--small"
          />
          <img
            src={item.imgs ? item.imgs[2] : item.img}
            alt={item.name}
            className="info__img info__img--small"
          />
        </div>
        <div className="info__img--big-container">
          <img
            src={item.img}
            alt={item.name}
            className="info__img info__img--big"
          />
        </div>
      </div>
      <div className="info__details">
        <h2 className="info__header">{item.name}</h2>
        <Stars num={item.stars} />
        <p className="info__prices">
          {formatCurrency(item.price - item.discount)}
          <span className="info__price"> {formatCurrency(item.price)}</span>
        </p>
        <p className="info__description">{item.description}</p>
        <div className="info__add">
          <ButtonMain
            onClick={() => {
              notify();
              dispatch(cartActions.addToCart(item));
            }}
          >
            Add To Cart
          </ButtonMain>
          <img
            src={heartEmptyIcon}
            alt="Add to wishlist"
            className="info__heart"
          />
        </div>
      </div>
    </div>
  );
};

export default Info;
