import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import ButtonMain from "../UI/button-main";
import { formatCurrency } from "../../utils/formatter";
import { useNavigate } from "react-router-dom";
import { cartActions } from "../../store/cartSlice";

const Summary = () => {
  const navigate = useNavigate();
  const { sum } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const shipping = 20;
  return (
    <div className="summary">
      <div className="summary__price-box">
        <div className="summary__row">
          <span className="summary__name">Subtotal:</span>
          <span className="summary__price">{formatCurrency(sum)}</span>
        </div>
        <div className="summary__line"></div>
        <div className="summary__row">
          <span className="summary__name">Total:</span>
          <span className="summary__price">
            {formatCurrency(sum + shipping)}
          </span>
        </div>
        <div className="summary__line"></div>

        <div className="summary__row summary__row--shipping">
          <span className="summary__name">Shipping:</span>
          <span className="summary__price summary__price--shipping">
            {formatCurrency(shipping)}
          </span>
        </div>
        <ButtonMain
          onClick={() => {
            navigate("/checkout");
          }}
        >
          Proceed to checkout
        </ButtonMain>
      </div>
      <button
        onClick={() => {
          dispatch(cartActions.clearCart());
        }}
        className="summary__clear"
      >
        Clear cart
      </button>
    </div>
  );
};

export default Summary;
