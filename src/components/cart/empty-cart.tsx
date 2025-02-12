import { useNavigate } from "react-router-dom";
import ButtonMain from "../UI/button-main";
import emptyCartIcon from "/assets/img/empty-cart.png";

const EmptyCart = () => {
  const navigate = useNavigate();
  return (
    <div className="cart__empty">
      <img src={emptyCartIcon} alt="Empty cart" className="cart__empty-img" />
      <h2 className="cart__empty-title">Your Cart Is Empty</h2>
      <ButtonMain
        onClick={() => {
          navigate("/products");
        }}
      >
        Start shopping
      </ButtonMain>
    </div>
  );
};

export default EmptyCart;
