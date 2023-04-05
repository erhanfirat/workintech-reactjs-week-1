import { REQ_TYPES } from "../hooks/useAxios";

// PRODUCTS REQUESTS ***********************

export const getProductParams = (productId) => ({
  endpoint: "products/" + productId,
  reqType: REQ_TYPES.GET,
});

export const getProductsParams = () => ({
  endpoint: "products",
  reqType: REQ_TYPES.GET,
});

export const createProductParams = (product) => ({
  endpoint: "products",
  reqType: REQ_TYPES.POST,
  payload: product,
});

export const updateProductParams = (product) => ({
  endpoint: `products/${product.id}`,
  reqType: REQ_TYPES.PUT,
  payload: product,
});

export const deleteProductParams = (productId) => ({
  endpoint: `products/${productId}`,
  reqType: REQ_TYPES.DELETE,
});
