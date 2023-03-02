import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";
// props = { product}

const Product = ({ product }) => {
  return (
    <Card
      style={{
        width: "18rem",
      }}
      className="m-3 ms-0 mb-0"
    >
      <img alt="Sample" src={product.img} />
      <CardBody>
        <CardTitle tag="h5">{product.name}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {product.name}
        </CardSubtitle>
        <CardText>{product.description}</CardText>
        <Button>Sepete Ekle</Button>
        <Button>Favorilere Ekle</Button>
      </CardBody>
    </Card>
  );
};

export default Product;
