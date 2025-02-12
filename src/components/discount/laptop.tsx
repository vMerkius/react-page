import ButtonMain from "../UI/button-main";
import DoneIconListItem from "../UI/done-icon-list-item";
import laptopImg from "/assets/img/featured-3.png";
import laptopData from "../../data/laptop-data";

const Laptop = () => {
  return (
    <>
      <div className="discount__left">
        <h3 className="discount__header">10% Discount Of All Laptops</h3>
        <p className="discount__subtitle">Macbook Pro M4 Details</p>
        <p className="discount__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
          feugiat habitasse nec, bibendum condimentum.
        </p>
        <ul className="discount__list">
          {laptopData.map((item, index) => (
            <DoneIconListItem key={index}>{item}</DoneIconListItem>
          ))}
        </ul>
        <ButtonMain>Shop Now</ButtonMain>
      </div>
      <div className="discount__right">
        <img src={laptopImg} alt="Laptop image" className="discount__img" />
      </div>
    </>
  );
};

export default Laptop;
