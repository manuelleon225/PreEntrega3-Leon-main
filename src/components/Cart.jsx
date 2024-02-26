import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

const Cart = () => {
    const {cart, removeItem, clear, totalQuantity, totalPrice} = useContext(CartContext);

    if (totalQuantity() == 0) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                    <p className="display-1">🎸</p>
                        <div className="alert alert-danger" role="alert">No se encontraron productos en el Carrito</div>
                        <Link to={"/"} className="btn my-5" style={colorButton}>Volver a la Página Principal</Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <h1>Productos Agregados</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center">
                    <div className="d-flex justify-content-end mb-3">
                        <button onClick={clear} style={colorButton} className="btn">Limpiar Carrito <FontAwesomeIcon icon={faTrash} /></button>
                    </div>
                        <table className="table table-bordered">
                            <tbody>
                                <tr>
                                    <td colSpan={2}><strong>Producto</strong></td>
                                    <td className="text-center align-middle"><strong>Precio Unitario</strong></td>
                                    <td className="text-center align-middle"><strong>Cantidad</strong></td>
                                    <td className="text-center align-middle"><strong>Precio Total</strong></td>
                                    <td className="text-center align-middle"><strong>Eliminar</strong></td>

                                </tr>
                                {cart.map(product =>
                                    <tr key={product.id}>
                                        <td className="align-middle"><img src={product.link} alt={product.title} width={80} /></td>
                                        <td className="text-center align-middle">{product.title}</td>
                                        <td className="text-center align-middle">{product.price.toLocaleString('es-CO', { style: 'currency', currency: 'COP',minimumFractionDigits: 0  })}</td>
                                        <td className="text-center align-middle">{product.quantity}</td>
                                        <td className="text-center align-middle">{(product.quantity * product.price).toLocaleString('es-CO', { style: 'currency', currency: 'COP',minimumFractionDigits: 0 })}</td>
                                        <td className="text-center align-middle"><a href="#" onClick={() => {removeItem(product.id)}}><FontAwesomeIcon icon={faTrash} style={{ color: 'black' }} size="lg"/></a></td>
                                    </tr>
                                )}
                                <tr>
                                    <td className="text-center align-middle" colSpan={4}>&nbsp;<h4><strong>Total Compra</strong></h4></td>
                                    <td className="text-center align-middle">{totalPrice()}</td>
                                    <td className="text-end align-middle"><Link to={"/checkout"} className="btn btn-warning">Confirmar Compra</Link></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
    )
}

const colorButton = {
    backgroundColor: '#9c123d',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '15px',
    color:'#FFFFFF',
    textAlign: 'right'
};


export default Cart;