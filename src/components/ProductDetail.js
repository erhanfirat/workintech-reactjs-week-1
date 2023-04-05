import { Button } from "reactstrap";
import useAxios, { REQ_TYPES } from "../hooks/useAxios";

const ProductDetail = ({ product }) => {
  const [doReq, res] = useAxios();
  const deleteProduct = () => {
    doReq({ 
      endpoint: "products/" + product.id,
      reqType: REQ_TYPES.DELETE,
    }).then((res) => {
      alert("Ürün silindi");
    });
  };

  return (
    <div>
      <img alt="Sample" src={product.img} />
      <h2>{product.name}</h2>
      <h3 className="mb-2 text-muted" tag="h6">
        {product.name}
      </h3>
      <p>{product.description}</p>
      <Button>Sepete Ekle</Button>
      <Button type="danger" onClick={deleteProduct}>
        Ürünü Sil
      </Button>
    </div>
  );
};

export default ProductDetail;
