import HeaderWrapper from "../UI/header-wrapper";
import Options from "../latest/latest-options";

const options = [
  {
    id: 1,
    name: "New Arrival",
    tag: "new",
    active: true,
  },
  {
    id: 2,
    name: "Best Seller",
    tag: "bestseller",
    active: false,
  },
  {
    id: 3,
    name: "Featured",
    tag: "featured",
    active: false,
  },
  {
    id: 4,
    name: "Special Offer",
    tag: "special",
    active: false,
  },
];

const LoadingLatest = () => {
  return (
    <section className="latest">
      <HeaderWrapper header="Latest Products" largeGap>
        <>
          <Options options={options} handleOptionChange={() => {}} />
          <div className="latest__container medium-top-gap">
            {[0, 1, 2, 3, 4, 5].map((_, index) => {
              return <div key={index} className="latest__loading-box"></div>;
            })}
          </div>
        </>
      </HeaderWrapper>
    </section>
  );
};

export default LoadingLatest;
