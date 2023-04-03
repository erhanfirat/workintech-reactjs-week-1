import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ButtonGroup, Button } from "reactstrap";
import { SideBarContext } from "../context/SideBarProvider";
import "./SideBar.css";

const activeStyling = {
  backgroundColor: "#12ad43",
  color: "white",
};

const SideBar = () => {
  const { menuList, theme, setTheme } = useContext(SideBarContext);
  return (
    <div className="side-bar-comp">
      <img src="" />
      {menuList.map((menuItem) => (
        <NavLink
          to={menuItem.path}
          style={({ isActive }) => (isActive ? activeStyling : null)}
        >
          {menuItem.title}
        </NavLink>
      ))}
      <br />
      <ButtonGroup>
        <Button
          color="primary"
          onClick={() => setTheme("light")}
          active={theme === "light"}
        >
          Light
        </Button>
        <Button
          color="primary"
          onClick={() => setTheme("dark")}
          active={theme === "dark"}
        >
          Dark
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default SideBar;
