import { useNavigate } from "react-router";
import { formatCurrency } from "../../utils/formatter";
import saleImg from "/assets/img/sale.png";

type LatestBoxProps = {
  id: number;
  img: string;
  name: string;
  discount: number;
  price: number;
};

const LatestBox: React.FC<LatestBoxProps> = ({
  id,
  img,
  name,
  discount,
  price,
}) => {
  const navigate = useNavigate();
  let sale = false;
  if (discount >= 30) sale = true;
  return (
    <div
      onClick={() => {
        navigate(`/products/${id}`);
      }}
      className="latest__box"
    >
      {sale && <img src={saleImg} alt="Sale" className="latest__sale" />}
      <img src={img} alt={name} className="latest__img" />
      <div className="latest__info">
        <h4 className="latest__name">{name}</h4>
        <div className="latest__info-right">
          <p className="latest__discount">{formatCurrency(price - discount)}</p>
          <p className="latest__price">{formatCurrency(price)}</p>
        </div>
      </div>
    </div>
  );
};

export default LatestBox;
