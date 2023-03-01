import MainPage from "../views/MainPage";
import Greeting from "../components/Greeting";
import SideBar from "../components/SideBar";
import ProductsPage from "../views/ProductsPage";
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
          <MainPage />
          <hr />
          <ProductsPage products={props.products} />
        </div>
      </div>
      <div className="footer">Footer</div>
    </div>
  );
};

export default Layout;
