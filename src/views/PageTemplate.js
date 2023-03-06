import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

const PageTemplate = ({ title, children }) => {
  const navigate = useNavigate();

  return (
    <div className="p-3">
      <h1>
        <Button color="link" onClick={() => navigate(-1)}>
          <i class="fa-solid fa-chevron-left"></i>
        </Button>{" "}
        {title}
      </h1>
      <hr />
      {children}
    </div>
  );
};

export default PageTemplate;
