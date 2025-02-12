import HeaderWrapper from "../UI/header-wrapper";
import FeaturedCard from "./featured-card";
import { useEffect, useState } from "react";
import FeaturedPaging from "./featured-paging";
import { IItem } from "../../types/item";
import LoadingBoxes from "../loading/loading-boxes";
import ErrorInfo from "../UI/error-box";
import { fetchFeaturedItems } from "../../utils/functions";

type FeaturedProps = {
  related?: boolean;
};

const Featured: React.FC<FeaturedProps> = ({ related = false }) => {
  const itemsPerPage = 4;
  const [featuredItems, setFeaturedItems] = useState<IItem[]>([]);
  const [page, setPage] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  useEffect(() => {
    fetchFeaturedItems(
      setLoading,
      setFeaturedItems,
      setError,
      page,
      itemsPerPage
    );
  }, [page]);

  if (error) {
    return <ErrorInfo message={error} />;
  }

  if (loading) return <LoadingBoxes header="Featured Products" />;

  return (
    <section className="featured">
      <HeaderWrapper
        header={`${related ? "Related Products" : "Featured Products"}`}
      >
        <>
          <div className="featured__container medium-top-gap">
            {featuredItems.map((item) => (
              <FeaturedCard key={item.id} item={item} />
            ))}
          </div>
          {!related && (
            <FeaturedPaging page={page} handlePageChange={handlePageChange} />
          )}
        </>
      </HeaderWrapper>
    </section>
  );
};

export default Featured;
