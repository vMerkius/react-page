// import HeaderWrapper from "../UI/header-wrapper";
// import FeaturedCard from "./featured-card";
// import { useEffect, useState } from "react";
// import FeaturedPaging from "./featured-paging";
// import { IItem } from "../../types/item";
// import LoadingBoxes from "../loading/loading-boxes";
// import ErrorInfo from "../UI/error-box";
// import { fetchFeaturedItems } from "../../utils/functions";
// import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
// import axios from "axios";

// type FeaturedProps = {
//   related?: boolean;
// };

// type QueryProps = {
//   success: boolean;
//   data: IItem[];
// };

// const OtherFeatured: React.FC<FeaturedProps> = ({ related = false }) => {
//   const itemsPerPage = 4;
//   const [page, setPage] = useState<number>(0);

//   const { status, error, data } = useQuery<QueryProps>({
//     queryKey: ["featured"],
//     queryFn: async () => {
//       await new Promise((resolve) => setTimeout(resolve, 2000));
//       const response = await axios.get("http://localhost:3000/featured", {
//         params: { start: 0, end: 4 },
//       });
//       return response.data;
//     },
//   });

//   const handlePageChange = (newPage: number) => {
//     setPage(newPage);
//   };

//   if (status === "error") {
//     console.log(error, data);
//     const errorMessage = error
//       ? error.response.data.error
//       : "An unknown error occurred";
//     return <ErrorInfo message={errorMessage} />;
//   }

//   if (status === "pending") return <LoadingBoxes header="Featured Products" />;

//   return (
//     <section className="featured">
//       <HeaderWrapper
//         header={`${related ? "Related Products" : "Featured Products"}`}
//       >
//         <>
//           <div className="featured__container medium-top-gap">
//             {data?.data.map((item) => (
//               <FeaturedCard key={item.id} item={item} />
//             ))}
//           </div>
//           {!related && (
//             <FeaturedPaging page={page} handlePageChange={handlePageChange} />
//           )}
//         </>
//       </HeaderWrapper>
//     </section>
//   );
// };

// export default OtherFeatured;
