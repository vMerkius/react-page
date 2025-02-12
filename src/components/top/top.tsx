import HeaderWrapper from "../UI/header-wrapper";
import TopItem from "./top-item";
import { useState } from "react";
import TopPaging from "./top-paging";
import topData from "../../data/top-data";
import { ICategory } from "../../types/category";

const initial = topData.slice(0, 4);

const Top = () => {
  const [topItems, setTopItems] = useState<ICategory[]>(initial);
  const [page, setPage] = useState<number>(0);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    setTopItems(topData.slice(newPage * 4, newPage * 4 + 4));
  };
  return (
    <section className="top">
      <HeaderWrapper header="Top Categories" largeGap>
        <>
          <ul className="top__list medium-top-gap">
            {topItems.map((item) => (
              <TopItem key={item.id} {...item} />
            ))}
          </ul>
          <TopPaging page={page} handlePageChange={handlePageChange} />
        </>
      </HeaderWrapper>
    </section>
  );
};

export default Top;
