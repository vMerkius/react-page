type FeaturedPagingProps = {
  page: number;
  handlePageChange: (num: number) => void;
  max?: number;
};

const FeaturedPaging: React.FC<FeaturedPagingProps> = ({
  page,
  handlePageChange,
  max = 4,
}) => {
  return (
    <div className="featured__paging medium-top-gap">
      {Array.from({ length: max }, (_, index) => index).map((num) => (
        <div
          key={num}
          className={`featured__rectangle ${
            page === num ? "featured__rectangle--active" : ""
          }`}
          onClick={() => handlePageChange(num)}
        ></div>
      ))}
    </div>
  );
};

export default FeaturedPaging;
