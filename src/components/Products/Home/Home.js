import classes from "./Home.module.css";
import backgroundImage from "../../../assets/backgroundImage.jpg";
import { useSelector } from "react-redux";
import TopProducts from "./TopProducts";
import PopularProducts from "./PopularProducts";
import Footer from "../../Layout/Header/Footer";
function Home() {
  const { isLoading } = useSelector((state) => state.products.isLoading);
  const productsTop = useSelector((state) =>
    state.products.products?.filter((item, key) => key > 4 && key < 15)
  );
  const productsBottom = useSelector((state) =>
    state.products.products?.filter((item, key) => key > 14 && key < 25)
  );

  if (isLoading) {
    return (
      <section>
        <p style={{ textAlign: "center" }}>"Loading...!"</p>
      </section>
    );
  }

  return (
    <div className={classes.products_row}>
      <div className={classes.main__image}>
        <img src={backgroundImage} alt="" />
      </div>
      <h2>Popular Products</h2>
      <PopularProducts className={classes.popular__products} />
      <h2>Popular Products</h2>
      <TopProducts products={productsTop} />
      <h2>Popular Products</h2>
      <TopProducts products={productsBottom} />
      <div className={classes.footer_top}></div>
      <Footer></Footer>
    </div>
  );
}

export default Home;
