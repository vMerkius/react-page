import { IItem } from "../../types/item";
import { formatCurrency } from "../../utils/formatter";
import Stars from "../UI/stars";
import iconPurpleHeart from "/assets/img/icon-purple-heart.svg";
import iconPurpleCart from "/assets/img/icon-purple-cart.svg";
import iconPurpleAdd from "/assets/img/icon-purple-add.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";
import { useState } from "react";
import Modal from "../UI/modal";
import { toast } from "react-toastify";

type ItemsProps = {
  items: IItem[];
  view: string;
};

const Items: React.FC<ItemsProps> = ({ items, view }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const notify = () => toast("Item added to cart");

  const [showModal, setShowModal] = useState<boolean>(false);
  let viewClass = "";
  view === "flex" ? (viewClass += "flex") : (viewClass += "grid");

  if (!items || items.length === 0) {
    return <h4 className="items text-middle">No items found</h4>;
  }
  return (
    <div className={`items items--${viewClass}`}>
      {items.map((item) => (
        <div key={item.id} className={`item item--${viewClass}`}>
          {showModal && (
            <Modal
              img={item.img}
              name={item.name}
              setShowModal={setShowModal}
            />
          )}
          <div className="item__image-container">
            <img
              onClick={() => {
                navigate(`/products/${item.id}`);
              }}
              className="item__image"
              src={item.img}
              alt={item.name}
            />
          </div>
          <div className={`item__right item__right--${viewClass}`}>
            <div className={`item__upper item__upper--${viewClass}`}>
              <p
                onClick={() => {
                  navigate(`/products/${item.id}`);
                }}
                className="item__name"
              >
                {item.name}
              </p>
              <Stars num={item.stars} />
            </div>
            <div className="item__prices">
              <span className="item__discount">
                {formatCurrency(item.price - item.discount)}
              </span>
              <span className="item__price">{formatCurrency(item.price)}</span>
            </div>
            <p className={`item__description item__description--${viewClass}`}>
              {item.description}
            </p>
            <div className="item__icons">
              <img
                className="item__icon"
                src={iconPurpleCart}
                alt="purple cart"
                onClick={() => {
                  notify();
                  dispatch(cartActions.addToCart(item));
                }}
              />
              <img
                className="item__icon"
                src={iconPurpleHeart}
                alt="purple heart"
              />
              <img
                onClick={() => {
                  setShowModal(true);
                }}
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

export default Items;
