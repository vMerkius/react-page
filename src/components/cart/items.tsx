import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { formatCurrency } from "../../utils/formatter";
import Panel from "./panel";

const CartItems = () => {
  const { items } = useSelector((state: RootState) => state.cart);
  return (
    <div className="cart-items">
      {items.map((item) => (
        <div className="cart-item" key={item.item.id}>
          <div className="cart-item__left">
            <img
              src={item.item.img}
              alt={item.item.name}
              className="cart-item__img"
            />
            <div className="cart-item__name-price">
              <span className="cart-item__name">{item.item.name}</span>
              <span className="cart-item__price">
                {formatCurrency(item.item.price - item.item.discount)}
              </span>
            </div>
          </div>
          <div className="cart-item__right">
            <Panel item={item.item} count={item.count} />
            <span className="cart-item__price">
              {formatCurrency(
                (item.item.price - item.item.discount) * item.count
              )}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItems;
