import { useNavigate } from "react-router";
import { formatCurrency } from "../../utils/formatter";
type TrendingCardProps = {
  id: number;
  img: string;
  name: string;
  discount: number;
  price: number;
};

const TrendingCard: React.FC<TrendingCardProps> = ({
  id,
  img,
  name,
  discount,
  price,
}) => {
  const navigate = useNavigate();
  const handleClick = (id: number) => {
    navigate(`/products/${id}`);
  };
  return (
    <div
      onClick={() => {
        handleClick(id);
      }}
      className="trending-card"
    >
      <img src={img} alt={name} className="trending-card__img" />
      <h4 className="trending-card__name">{name}</h4>
      <div className="trending-card__prices">
        <span className="trending-card__discount">
          {formatCurrency(discount)}
        </span>
        <span className="trending-card__price">{formatCurrency(price)}</span>
      </div>
    </div>
  );
};

export default TrendingCard;
