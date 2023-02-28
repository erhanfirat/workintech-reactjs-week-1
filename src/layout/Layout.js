import { directive } from "@babel/types";
import Main from "../views/Main";
import Greeting from "../components/Greeting";
import "./Layout.css";
import SideBar from "../components/SideBar";

const Layout = () => {
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
          <Main />
        </div>
      </div>
      <div className="footer">Footer</div>
    </div>
  );
};

export default Layout;
