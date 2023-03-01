// props = { product}

const Product = ({ product }) => {
  return (
    <div className="product-item" key={product.id}>
      <img src={product.img} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <button>Sepete Ekle</button>
      <a href="#">Favorilere Ekle</a>
    </div>
  );
};

export default Product;
