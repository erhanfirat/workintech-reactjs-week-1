import { useEffect, useState } from "react";
import Product from "../components/Product";

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
    <div>
      Ürün sayısı: {props.products.length}
      <input type="text" onChange={filterInputChange} />
      <div className="products-container">
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
    </div>
  );
};

export default ProductsPage;
