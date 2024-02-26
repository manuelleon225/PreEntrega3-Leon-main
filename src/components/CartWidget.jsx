import { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const {totalQuantity} = useContext(CartContext);

    return (
    <div style={cardWidgetStyle}>
      <Link to={"/cart"} className="btn position-relative" style={colorButton}>
      {totalQuantity() > 0 ? <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: '1.0rem' }} >{totalQuantity()}</span> : '' }
      <FontAwesomeIcon icon={faCartShopping} style={cartIconStyle} />
      </Link>
    </div>
    )
}
const colorButton = {
  backgroundColor: '#9c123d',
  border: '1px solid #ddd',
  borderRadius: '8px',
  padding: '10px',
  color:'#FFFFFF',
};

const notificationBadgeStyle = {
    backgroundColor: '#ff0000',
    color: '#ffffff',
    borderRadius: '50%',
    padding: '0.2em 0.5em', 
    marginLeft: '0.5em',
    fontSize: '1.0em',
  };

  const cardWidgetStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const cartIconStyle = {
    fontSize: '1.5em',
  };

export default CartWidget;