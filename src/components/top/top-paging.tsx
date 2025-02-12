type TopPagingProps = {
  page: number;
  handlePageChange: (num: number) => void;
  max?: number;
};

const TopPaging: React.FC<TopPagingProps> = ({
  page,
  handlePageChange,
  max = 3,
}) => {
  return (
    <div className="top__paging medium-top-gap">
      {Array.from({ length: max }, (_, index) => index).map((num) => (
        <div
          key={num}
          className={`top__dot ${page === num ? "top__dot--active" : ""}`}
          onClick={() => handlePageChange(num)}
        ></div>
      ))}
    </div>
  );
};

export default TopPaging;
