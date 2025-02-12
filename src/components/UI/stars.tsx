import starIcon from "/assets/img/icon-star.svg";
import starEmptyIcon from "/assets/img/icon-star-empty.svg";

type StarsProps = {
  num: number;
  max?: number;
};

const Stars: React.FC<StarsProps> = ({ num, max = 5 }) => {
  return (
    <div className="stars">
      {Array.from({ length: max }, (_, index) => index + 1).map((star) => (
        <img
          src={star <= num ? starIcon : starEmptyIcon}
          alt="star"
          key={star}
          className="stars__star"
        />
      ))}
    </div>
  );
};

export default Stars;
