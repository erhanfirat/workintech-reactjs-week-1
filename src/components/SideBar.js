import { NavLink } from "react-router-dom";
import "./SideBar.css";

const activeStyling = {
  backgroundColor: "#12ad43",
  color: "white",
};

const SideBar = () => {
  return (
    <div className="side-bar-comp">
      <img src="" />
      <NavLink
        to="/"
        style={({ isActive }) => (isActive ? activeStyling : null)}
      >
        Ana Sayfa
      </NavLink>
      <NavLink
        to="/products"
        style={({ isActive }) => (isActive ? activeStyling : null)}
      >
        Ürünler
      </NavLink>
      <NavLink
        to="/products-redux"
        style={({ isActive }) => (isActive ? activeStyling : null)}
      >
        Ürünler (Redux)
      </NavLink>
      <NavLink
        to="/counter"
        style={({ isActive }) => (isActive ? activeStyling : null)}
      >
        Sayaç
      </NavLink>
      {/* <a href="#">Sepetim</a>
      <a href="#">Biz Kimiz?</a>
      <a href="#">İletişim</a> */}
    </div>
  );
};

export default SideBar;
