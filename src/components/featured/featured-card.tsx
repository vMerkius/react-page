import { useNavigate } from "react-router";
import { formatCurrency } from "../../utils/formatter";
import iconPurpleHeart from "/assets/img/icon-purple-heart.svg";
import iconPurpleCart from "/assets/img/icon-purple-cart.svg";
import iconPurpleAdd from "/assets/img/icon-purple-add.svg";
import ButtonGreen from "../UI/button-green";
import { cartActions } from "../../store/cartSlice";
import { useDispatch } from "react-redux";
import { IItem } from "../../types/item";
import { useState } from "react";
import Modal from "../UI/modal";
import { toast } from "react-toastify";

type FeaturedCardProps = {
  item: IItem;
};

const FeaturedCard: React.FC<FeaturedCardProps> = ({ item }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const notify = () => toast("Item added to cart");
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <div className="featured-card">
      {showModal && (
        <Modal img={item.img} name={item.name} setShowModal={setShowModal} />
      )}
      <div className="featured-card__icons">
        <div
          onClick={() => {
            notify();
            dispatch(cartActions.addToCart(item));
          }}
          className="featured-card__bg "
        >
          <img
            src={iconPurpleCart}
            alt="cart icon"
            className="featured-card__icon featured-card__icon--cart"
          />
        </div>
        <div className="featured-card__bg">
          <img
            src={iconPurpleHeart}
            alt="heart icon"
            className="featured-card__icon"
          />
        </div>
        <div
          onClick={() => {
            setShowModal(true);
          }}
          className="featured-card__bg"
        >
          <img
            src={iconPurpleAdd}
            alt="add icon"
            className="featured-card__icon featured-card__icon--add"
          />
        </div>
      </div>
      <img src={item.img} alt={item.name} className="featured-card__img" />
      <div className="featured-card__info">
        <div className="featured-card__btn-container">
          <ButtonGreen
            onClick={() => {
              navigate(`/products/${item.id}`);
            }}
          >
            View Details
          </ButtonGreen>
        </div>
        <h4 className="featured-card__name">{item.name}</h4>
        <p className="featured-card__code">Code . {item.code}</p>
        <p className="featured-card__price">{formatCurrency(item.price)}</p>
      </div>
    </div>
  );
};

export default FeaturedCard;
