import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import { SideBarContext } from "../context/SideBarProvider";

const PageTemplate = ({ title, children }) => {
  const navigate = useNavigate();
  const { theme } = useContext(SideBarContext);

  return (
    <div className="p-3">
      <h1>
        <Button color="link" onClick={() => navigate(-1)}>
          <i className="fa-solid fa-chevron-left"></i>
        </Button>{" "}
        {title}
      </h1>
      <span>active theme: {theme}</span>
      <hr />
      {children}
    </div>
  );
};

export default PageTemplate;
