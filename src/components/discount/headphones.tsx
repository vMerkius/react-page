import ButtonMain from "../UI/button-main";
import DoneIconListItem from "../UI/done-icon-list-item";
import headphonesImg from "/assets/img/hero-headphones.png";
import headphonesData from "../../data/headphones-data";

const Headphones = () => {
  return (
    <>
      <div className="discount__left">
        <h3 className="discount__header">20% Discount Of All Products</h3>
        <p className="discount__subtitle">Headphones Compact</p>
        <p className="discount__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
          feugiat habitasse nec, bibendum condimentum.
        </p>
        <ul className="discount__list">
          {headphonesData.map((item, index) => (
            <DoneIconListItem key={index}>{item}</DoneIconListItem>
          ))}
        </ul>
        <ButtonMain>Shop Now</ButtonMain>
      </div>
      <div className="discount__right">
        <img
          src={headphonesImg}
          alt="Headphones image"
          className="discount__img"
        />

        <div className="discount__circle discount__circle--light"></div>
        <div className="discount__circle discount__circle--dark"></div>
      </div>
    </>
  );
};

export default Headphones;
