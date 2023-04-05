import { useEffect, useState } from "react";
import { Form, FormGroup, Input, Label, Button, Alert } from "reactstrap";
import useAxios, { REQ_TYPES } from "../hooks/useAxios";
import {
  getProductParams,
  createProductParams,
  updateProductParams,
} from "../api/endpoints";

const ProductForm = ({ productId }) => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    img: "",
    stock: 0,
  });
  const [saveProduct, createProRes, createProLoading] = useAxios();
  const [getProduct, getProRes] = useAxios();

  // todo: add err state of form
  // todo: import yup
  // todo: create form schema
  // todo: change handlerlara err statei almak için güncelleme yapılmalı
  // todo: Form inputlara invalid styling ve err mesajlarını eklemek

  const changeHandler = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (product.id) {
      saveProduct(updateProductParams(product));
    } else {
      saveProduct(createProductParams(product));
    }
  };

  useEffect(() => {
    console.log("product > ", product);
  }, [product]);

  useEffect(() => {
    if (productId) {
      // get req product data çekeceğiz
      getProduct(getProductParams(productId))
        .then((productData) => {
          setProduct(productData);
        })
        .catch((err) => {
          alert(productId + " id'sine sahip bir kayıt bulunamadı.");
        });
    }
  }, []);

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
