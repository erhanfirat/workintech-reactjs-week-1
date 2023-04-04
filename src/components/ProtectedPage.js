import { Navigate } from "react-router";

const ProtectedPage = ({ pageComponent: PageComponent }) => {
  return localStorage.getItem("token") ? (
    <PageComponent />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ProtectedPage;
