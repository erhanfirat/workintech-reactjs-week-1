import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import PageTemplate from "./PageTemplate";
import ProductDetail from "../components/ProductDetail";

const ProductDetailPage = () => {
  // get productId from url parameter
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products/${productId}`
      )
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.error(
          "Product data çekilirken bir hata ile karşılaşıldı > ",
          err
        );
      });
  }, []);

  return (
    <PageTemplate title={product.name}>
      <ProductDetail product={product} />
    </PageTemplate>
  );
};

export default ProductDetailPage;
