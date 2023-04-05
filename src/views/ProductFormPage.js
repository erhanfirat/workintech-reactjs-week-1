import { useParams } from "react-router";
import ProductForm from "../components/ProductForm";
import PageTemplate from "./PageTemplate";

const ProductFormPage = () => {
  const { id } = useParams();

  return (
    <PageTemplate title={"Product " + (id ? "Edit" : "Create") + " Form"}>
      <ProductForm productId={id} />
    </PageTemplate>
  );
};

export default ProductFormPage;
