import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, Button, Input } from "reactstrap";
import Product from "../components/Product";
import PageTemplate from "./PageTemplate";

const ProductsPage = (props) => {
  const [filterText, setFilterText] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(props.products);

  const filterInputChange = (e) => {
    setFilterText(e.target.value.trim());
  };

  useEffect(() => {
    setFilteredProducts(
      props.products.filter(
        (product) =>
          product.name
            .toLocaleLowerCase()
            .indexOf(filterText.toLocaleLowerCase()) >= 0
      )
    );
  }, [filterText, props.products]);

  return (
    <PageTemplate title="Ürünler">
      <Link to="/product-form" className="btn btn-primary me-2 mb-2">
        <i className="fa-solid fa-plus me-2"></i>
        Yeni Ürün Ekle
      </Link>
      Ürün sayısı: {props.products.length}
      <Input
        type="text"
        onChange={filterInputChange}
        placeholder="Search in products..."
      />
      <div className="d-flex flex-wrap">
        {/*props.products
          .filter(
            (product) =>
              product.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
          )
          .map((product) => (
            <Product product={product} key={product.id} />
        ))
          */}

        {filteredProducts.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </PageTemplate>
  );
};

export default ProductsPage;
