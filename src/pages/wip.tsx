import Footer from "../components/footer/footer";
import Header from "../components/header/header";

const WIPPage = () => {
  return (
    <>
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
        className="large-top-gap"
      >
        <h1>Work in progress</h1>
        <p>Coming soon...</p>
      </div>
      <Footer />
    </>
  );
};

export default WIPPage;
