import ButtonMain from "../UI/button-main";
import DoneIconListItem from "../UI/done-icon-list-item";
import otherImg from "/assets/img/latest-2.png";
import otherData from "../../data/other-data";

const Other = () => {
  return (
    <>
      <div className="discount__left">
        <h3 className="discount__header">10% Discount Of All Products</h3>
        <p className="discount__subtitle">Everything Saled</p>
        <p className="discount__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
          feugiat habitasse nec, bibendum condimentum.
        </p>
        <ul className="discount__list">
          {otherData.map((item, index) => (
            <DoneIconListItem key={index}>{item}</DoneIconListItem>
          ))}
        </ul>
        <ButtonMain>Shop Now</ButtonMain>
      </div>
      <div className="discount__right">
        <img
          src={otherImg}
          alt="Shoes image"
          className="discount__img discount__img--other"
        />
      </div>
    </>
  );
};

export default Other;
