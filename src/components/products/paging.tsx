import React from "react";
type PagingProps = {
  page: number;
  setPage: (page: number) => void;
  totalPage: number;
};

const Paging: React.FC<PagingProps> = ({ page, setPage, totalPage }) => {
  return (
    <div className="paging">
      {[...Array(totalPage)].map((_, index) => (
        <button
          key={index}
          onClick={() => setPage(index + 1)}
          className={`paging__btn ${
            index + 1 === page ? "paging__btn--active" : ""
          }`}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Paging;
