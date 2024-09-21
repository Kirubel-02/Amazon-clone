import React from "react";
import Category from "../../components/Category/Category";
import CarouselEffect from "../../components/Carousel/CarouselSlider";
import Product from "../../components/Product/Product";
import Layout from "../../Components/Layout/Layout";

function Landing() {
  return (
    <Layout>
      <CarouselEffect />
      <Category />
      <Product />
    </Layout>
  );
}

export default Landing;
