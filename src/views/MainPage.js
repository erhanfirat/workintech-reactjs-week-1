import Login from "../components/Login";
import ProductForm from "../components/ProductForm";
import PageTemplate from "./PageTemplate";

const MainPage = () => {
  return (
    <PageTemplate title="Ana Sayfa">
      React web auygulamama hoşgeldiniz.
      <Login />
    </PageTemplate>
  );
};

export default MainPage;
