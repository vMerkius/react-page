import FeaturedPaging from "../featured/featured-paging";
import HeaderWrapper from "../UI/header-wrapper";

type LoadingBoxesProps = {
  big?: boolean;
  header: string;
};

const LoadingBoxes: React.FC<LoadingBoxesProps> = ({ big = false, header }) => {
  return (
    <section className="featured">
      <HeaderWrapper header={header}>
        <>
          <div className="featured__container medium-top-gap">
            {[0, 1, 2, 3].map((_, index) => {
              return (
                <div
                  key={index}
                  className={`featured__loading-box featured__loading-box${
                    big ? "--big" : ""
                  }`}
                ></div>
              );
            })}
          </div>
          <FeaturedPaging page={0} handlePageChange={() => {}} />
        </>
      </HeaderWrapper>
    </section>
  );
};

export default LoadingBoxes;
