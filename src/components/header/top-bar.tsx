import mailIcon from "/assets/img/icon-mail.svg";
import phoneIcon from "/assets/img/icon-phone.svg";
import cartIcon from "/assets/img/icon-cart.svg";
import { Link } from "react-router-dom";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import topBarData from "../../data/top-bar-data";

const TopBar = () => {
  const { items } = useSelector((state: RootState) => state.cart);
  const cartItems = items
    .map((item) => item.count)
    .reduce((sum, count) => sum + count, 0);

  const showedNumber = cartItems > 9 ? "9+" : cartItems;

  return (
    <div className="header__top-bar">
      <div className="header__contact">
        <div className="header__group">
          <img src={mailIcon} alt="Mail icon" className="header__icon" />
          <Link to="mailto:mhhasanul@gmail.com" className="header__link-top">
            mhhasanul@gmail.com
          </Link>
        </div>
        <div className="header__group">
          <img src={phoneIcon} alt="Phone icon" className="header__icon" />
          <Link to="tel:+(12345)67890" className="header__link-top">
            (12345)67890
          </Link>
        </div>
      </div>
      <menu className="header__menu">
        <ul className="header__options">
          {topBarData.map((item) => (
            <li key={item.id} className="header__group">
              <Link to={item.link} className="header__link-top">
                {item.name}
                <img
                  src={item.img}
                  alt={item.altName}
                  className="header__icon"
                />
              </Link>
            </li>
          ))}
        </ul>
        <Link to="/cart" className="header__link-top">
          {cartItems > 0 && (
            <div className="header__cart-items">{showedNumber}</div>
          )}
          <img src={cartIcon} alt="Cart icon" className="header__icon" />
        </Link>
      </menu>
    </div>
  );
};

export default TopBar;
