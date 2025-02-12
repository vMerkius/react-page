import Cart from "../components/cart/cart";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";

const CartPage = () => {
  return (
    <>
      <Header />
      <main className="medium-top-gap">
        <Cart />
      </main>
      <Footer />
    </>
  );
};

export default CartPage;
