import Diamond from "../UI/diamond";

type HeroPagingProps = {
  page: number;
  handlePageChange: (num: number) => void;
  max?: number;
};

const HeroPaging: React.FC<HeroPagingProps> = ({
  page,
  handlePageChange,
  max = 3,
}) => {
  return (
    <div className="hero__paging">
      {Array.from({ length: max }, (_, index) => index).map((num) => (
        <Diamond
          key={num}
          isActive={page === num}
          onClick={() => handlePageChange(num)}
        />
      ))}
    </div>
  );
};

export default HeroPaging;
