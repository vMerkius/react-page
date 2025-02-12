import HeaderWrapper from "../UI/header-wrapper";

const LoadingBlogs = () => {
  return (
    <section className="blog">
      <HeaderWrapper header="Latest Blog" largeGap>
        <div className="blog__list medium-top-gap">
          {[0, 1, 2].map((_, index) => {
            return <div key={index} className="blog__loading-box"></div>;
          })}
        </div>
      </HeaderWrapper>
    </section>
  );
};

export default LoadingBlogs;
