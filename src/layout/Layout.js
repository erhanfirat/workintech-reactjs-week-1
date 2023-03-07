import { Route, Routes } from "react-router";

import MainPage from "../views/MainPage";
import Greeting from "../components/Greeting";
import SideBar from "../components/SideBar";
import ProductsPage from "../views/ProductsPage";
import CounterPage from "../views/CounterPage";
import ProductDetailPage from "../views/ProductDetailPage";
import ProductFormPage from "../views/ProductFormPage";
import NotFound from "../views/NotFound";

import "./Layout.css";

const Layout = (props) => {
  const user = {
    name: "Ali",
    surName: "Taş",
    email: "ali@ali.com",
  };

  return (
    <div className="main-container">
      <div className="header">
        <Greeting user={user} />
      </div>
      <div className="body">
        <div className="side-bar">
          <SideBar />
        </div>
        <div className="page-content">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/counter" element={<CounterPage />} />
            <Route
              path="/products"
              element={<ProductsPage products={props.products} />}
            />
            <Route
              path="/product-detail/:productId"
              element={<ProductDetailPage />}
            />
            <Route path="/product-form" element={<ProductFormPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
      <div className="footer">Footer</div>
    </div>
  );
};

export default Layout;
