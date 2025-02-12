import { IReview } from "../../types/review";

type ReviewsProps = {
  reviews: IReview[];
};

const Reviews: React.FC<ReviewsProps> = ({ reviews }) => {
  return (
    <div className="description__reviews">
      {reviews.map((review) => (
        <p key={review.id} className="description__review">
          {review.content}
        </p>
      ))}
    </div>
  );
};

export default Reviews;
