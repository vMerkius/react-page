import { useSelector } from "react-redux";
import EmptyCart from "./empty-cart";
import CartItems from "./items";
import Summary from "./summary";
import { RootState } from "../../store/store";

const Cart = () => {
  const { items } = useSelector((state: RootState) => state.cart);
  const isCartEmpty = items.length === 0;

  return (
    <section className="cart">
      {isCartEmpty ? (
        <EmptyCart />
      ) : (
        <>
          <CartItems />
          <Summary />
        </>
      )}
    </section>
  );
};

export default Cart;
