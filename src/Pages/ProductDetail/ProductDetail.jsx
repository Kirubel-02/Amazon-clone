import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../API/EndPoints";
import ProductCard from "../../components/Product/ProductCard";
import Loader from "../../components/Loader/Loder";
import LayOut from "../../components/Layout/LayOut";

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${productUrl}/products/${productId}`);
        setProduct(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  return (
    <LayOut>
      {isLoading ? <Loader /> : <ProductCard product={product} flex renderDesc renderAdd />}
    </LayOut>
  );
}

export default ProductDetail;

