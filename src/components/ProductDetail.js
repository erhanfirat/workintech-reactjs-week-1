import { Button } from "reactstrap";

const ProductDetail = ({ product }) => {
  return (
    <div>
      <img alt="Sample" src={product.img} />
      <h2>{product.name}</h2>
      <h3 className="mb-2 text-muted" tag="h6">
        {product.name}
      </h3>
      <p>{product.description}</p>
      <Button>Sepete Ekle</Button>
    </div>
  );
};

export default ProductDetail;
