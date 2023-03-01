// outsource libraries first
import { useEffect, useState } from "react";
import axios from "axios";
// project own code blocks
import Layout from "./layout/Layout";
// stylings
import "./App.css";

// ROOT COMPONENT
// ATOMIC DESIGN PATTERN
// Hot Reload
// JSX > JS Expression

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.error(
          "Product data çekilirken bir hata ile karşılaşıldı > ",
          err
        );
      });
  }, []);
  
  return <Layout products={products} />;
}

export default App;
