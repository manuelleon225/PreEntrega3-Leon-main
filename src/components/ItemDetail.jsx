import { useContext } from "react";
import { CartContext } from "./CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({ product }) => {
  const { addItem } = useContext(CartContext);
  const { cantProduct } = useContext(CartContext);

  const onAdd = (quantity) => {
    addItem(product, quantity);
  };

  return (
    <div style={containerStyle}>
      <div style={imageContainerStyle}>
        <img src={product.link} alt={product.title} style={imageStyle} />
      </div>
      <div style={textContainerStyle}>
        <div style={detailsHeaderStyle}>
          <h1 style={productNameStyle}>{product.title}</h1>
        </div>
        <br />
        <h1>
          {product.price.toLocaleString("es-CO", {
            style: "currency",
            currency: "COP",
            minimumFractionDigits: 0,
          })}
        </h1>
        <div style={descriptionContainerStyle}>
          <h2>Descripción</h2>
          <p style={paragraphStyle}>{product.description}</p>
        </div>
        <div>
          {product.stock - cantProduct(product.id) == 0 ? (
            <div>
              <h1 style={{ color: "red" }}>Producto sin STOCK</h1>
            </div>
          ) : (
            <ItemCount
              stock={product.stock}
              onAdd={onAdd}
              cart={cantProduct(product.id)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

const containerStyle = {
  display: "flex",
  border: "1px solid #ddd",
  borderRadius: "8px",
  padding: "20px",
  margin: "20px",
};

const imageContainerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flex: 1,
  paddingLeft: "200px"
};

const imageStyle = {
  maxWidth: "100%",
  maxHeight: "100%",
  objectFit: "center",
};

const textContainerStyle = {
  flex: 2,
  paddingLeft: "350px",
};

const detailsHeaderStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const descriptionContainerStyle = {
  marginTop: "40px",
};

const paragraphStyle = {
  fontSize: "20px",
  color: "#333",
  margin: "10px 0",
};

const productNameStyle = {
  fontSize: "45px",
  fontWeight: "bold",
  color: "#333",
  margin: 0,
};

export default ItemDetail;
