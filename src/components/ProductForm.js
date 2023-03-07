import axios from "axios";
import { useEffect, useState } from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";

const ProductForm = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    img: "",
    stock: 0,
  });

  const changeHandler = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products", product)
      .then((res) => {
        console.log("res data  > ", res.data);
        if (res.status == "SUCCESS") {
          // navigate to products
        }
      });
  };

  useEffect(() => {
    console.log("product > ", product);
  }, [product]);

  return (
    <Form onSubmit={submitHandler}>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input
          type="text"
          name="name"
          id="name"
          placeholder="Product name"
          onChange={changeHandler}
          value={product.name}
        />
      </FormGroup>
      <FormGroup>
        <Label for="description">Description</Label>
        <Input
          type="text"
          name="description"
          id="description"
          placeholder="Product description"
          onChange={changeHandler}
          value={product.description}
        />
      </FormGroup>
      <FormGroup>
        <Label for="img">Image URL</Label>
        <Input
          type="text"
          name="img"
          id="img"
          placeholder="Product image"
          onChange={changeHandler}
          value={product.img}
        />
      </FormGroup>
      <FormGroup>
        <Label for="stock">Stock</Label>
        <Input
          type="number"
          name="stock"
          id="stock"
          placeholder="Stock count"
          onChange={changeHandler}
          value={product.stock}
        />
      </FormGroup>
      <Button type="submit" color="primary">
        <i className="fa-sharp fa-solid fa-floppy-disk me-2"></i>
        Save
      </Button>
    </Form>
  );
};

export default ProductForm;
