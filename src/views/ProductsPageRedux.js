import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Input, Spinner } from "reactstrap";
import Product from "../components/Product";
import useInput from "../hooks/useInput";
import { getProductsActionCreator } from "../store/actions/actions";
import PageTemplate from "./PageTemplate";

const ProductsPageRedux = (props) => {
  const products = useSelector((store) => store.productsState.products);
  const productsLoading = useSelector(
    (store) => store.productsState.isFetching
  );
  const productsFetched = useSelector((store) => store.productsState.fetched);
  const productsError = useSelector((store) => store.productsState.error);
  const [filterText, filterInputChange] = useInput("");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const dispatch = useDispatch();

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
    !productsFetched && dispatch(getProductsActionCreator());
  }, []);

  return (
    <PageTemplate title="Ürünler (Redux)">
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

export default ProductsPageRedux;
