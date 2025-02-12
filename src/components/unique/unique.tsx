import sofaImg from "/assets/img/sofa.png";
import listData from "../../data/list-data";
import CustomListItem from "../UI/custom-list-item";
import ButtonMain from "../UI/button-main";
import { formatCurrency } from "../../utils/formatter";

const Unique = () => {
  return (
    <div className="unique sections-top-gap">
      <img className="unique__img" src={sofaImg} alt="Sofa" />
      <div className="unique__right">
        <h2 className="unique__header">
          Unique Feauters Of Latest & Trening Products
        </h2>
        <ul className="unique__description">
          {listData.map((item) => (
            <CustomListItem key={item.id} {...item} />
          ))}
        </ul>
        <div className="unique__add">
          <ButtonMain> Add To Cart</ButtonMain>
          <div className="unique__price">
            <span>B&B Italian Sofa</span>
            <span>{formatCurrency(32.0)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Unique;
