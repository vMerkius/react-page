import { useEffect } from "react";
import HeaderWrapper from "../UI/header-wrapper";
import BlogCard from "./blog-card";
import { IBlog } from "../../types/blog";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../store/blogSlice";
import { AppDispatch, RootState } from "../../store/store";
import LoadingBlogs from "../loading/loading-blogs";
import ErrorInfo from "../UI/error-box";

const Blog = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { blogs, loading, error } = useSelector(
    (state: RootState) => state.blogs
  );

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  if (error) {
    return <ErrorInfo message={error} />;
  }

  if (loading) return <LoadingBlogs />;

  return (
    <section className="blog">
      <HeaderWrapper header="Latest Blog" largeGap>
        <div className="blog__list medium-top-gap">
          {blogs.map((item: IBlog) => (
            <BlogCard key={item.id} {...item} />
          ))}
        </div>
      </HeaderWrapper>
    </section>
  );
};

export default Blog;
