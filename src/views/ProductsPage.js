import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Input, Spinner } from "reactstrap";
import Product from "../components/Product";
import useAxios, { REQ_TYPES } from "../hooks/useAxios";
import useInput from "../hooks/useInput";
import PageTemplate from "./PageTemplate";
import { getProductsParams } from "../api/endpoints";

const ProductsPage = (props) => {
  const [getProducts, products, productsLoading] = useAxios([]);
  const [filterText, filterInputChange] = useInput("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    setFilteredProducts(
      products.filter(
        (product) =>
          product.name
            .toLocaleLowerCase()
            .indexOf(filterText.toLocaleLowerCase()) >= 0
      )
    );
  }, [filterText, products]);

  useEffect(() => {
    getProducts(getProductsParams()).then((resData) => {
      console.log("resData > ", resData);
    });
  }, []);

  return (
    <PageTemplate title="Ürünler">
      <Link to="/product-form" className="btn btn-primary me-2 mb-2">
        <i className="fa-solid fa-plus me-2"></i>
        Yeni Ürün Ekle
      </Link>
      Ürün sayısı: {products.length}
      <Input
        type="text"
        onChange={filterInputChange}
        placeholder="Search in products..."
      />
      <div className="d-flex flex-wrap">
        {/*products
          .filter(
            (product) =>
              product.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
          )
          .map((product) => (
            <Product product={product} key={product.id} />
        ))
          */}

        {!productsLoading &&
          filteredProducts.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        {productsLoading && <Spinner>Loading...</Spinner>}
      </div>
    </PageTemplate>
  );
};

export default ProductsPage;
