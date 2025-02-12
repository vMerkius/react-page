import { useNavigate } from "react-router";

type TopItemProps = {
  name: string;
  img: string;
};

const TopItem: React.FC<TopItemProps> = ({ name, img }) => {
  const navigate = useNavigate();
  return (
    <li className="top__item">
      <div className="top__img-container">
        <img
          src={img}
          alt={name}
          className="top__img"
          onClick={() => {
            navigate(`/products?category=${name}`);
            window.scrollTo(0, 0);
          }}
        />
        <div className="top__img-bg"></div>
      </div>
      <p className="top__name">{name}</p>
    </li>
  );
};

export default TopItem;
