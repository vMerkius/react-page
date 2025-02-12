import Blog from "../components/blog/blog";
import Discount from "../components/discount/discount";
import Featured from "../components/featured/featured";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import Hero from "../components/hero/hero";
import Latest from "../components/latest/latest";
import Newsletter from "../components/newsletter/newsletter";
import Top from "../components/top/top";
import Trending from "../components/trending/trending";
import Unique from "../components/unique/unique";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Featured />
        <Latest />
        <Unique />
        <Trending />
        <Discount />
        <Top />
        <Newsletter />
        <Blog />
      </main>
      <Footer />
    </>
  );
};

export default Home;
