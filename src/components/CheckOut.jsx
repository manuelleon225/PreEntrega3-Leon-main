import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

const Checkout = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [address, setAddress] = useState("");
    const [orderId, setOrderId] = useState(null);
    const { cart, clear, totalQuantity, totalPrice,cantProduct  } = useContext(CartContext);

    const generarOrden = () => {
        if (!nombre.trim() || !email.trim() || !telefono.trim()) {
            alert("Por favor, complete todos los campos");
            return;
        }

        const buyer = { name: nombre, email, phone: telefono, address:address };
        const items = cart.map(item => ({ id: item.id, title: item.title, price: item.price, quantity:cantProduct(item.id), totalItem:(cantProduct(item.id) * item.price)  }));
        const fecha = new Date();
        const date = `${fecha.getDate()}-${fecha.getMonth() + 1}-${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}`;
        const total = totalPrice();
        const order = { buyer, items, date, total };

        console.log("order --------->",order);

        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order)
        .then(resultado => {
            clear();
            setOrderId(resultado.id);
            alert("¡Orden generada exitosamente! Tu ID de Compra es: " + resultado.id);
        })
        .catch(error => {
            console.error("Error al generar la orden:", error);
            alert("Hubo un error al generar la orden. Por favor, inténtalo de nuevo más tarde.");
        });
    }

    if (totalQuantity() === 0 && orderId == null) {
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
                    <h1>Confirmar Compra</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <h3>Datos de Compra</h3>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label">Nombre</label>
                            <input type="text" id="nombre" className="form-control" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" id="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="telefono" className="form-label">Teléfono</label>
                            <input type="number" id="telefono" className="form-control" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">Dirección de Residencia</label>
                            <input type="text" id="address" className="form-control" value={address} onChange={(e) => setAddress(e.target.value)} />
                        </div>
                        <button type="button" className="btn" style={colorButton} onClick={generarOrden}>Generar Orden</button>
                    </form>
                </div>
                <div className="col-md-6 text-center">
                    <h3>Productos Seleccionados</h3>
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                            <td colSpan={2} className="text-center align-middle"><b>Producto</b></td>
                            <td className="text-center align-middle"><b>Precio Unitario</b></td>
                            <td className="text-center align-middle"><b>Cantidad</b></td>
                            <td className="text-center align-middle"><b>Precio Total</b></td>
                            </tr>
                            {cart.map(product =>
                                <tr key={product.id}>
                                    <td className="align-middle"><img src={product.link} alt={product.title} width={90} /></td>
                                    <td className="text-start align-middle">{product.title}</td>
                                    <td className="text-start align-middle">${product.price}</td>
                                    <td className="text-start align-middle">{product.quantity}</td>
                                    <td className="text-start align-middle">${product.quantity * product.price}</td>
                                </tr>
                            )}
                            <tr>
                                <td className="text-center align-middle" colSpan={4}>&nbsp;</td>
                                <td className="text-start align-middle"><strong>{totalPrice()}</strong></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row my-5">
                <div className="col text-center">
                    {orderId && (
                        <div className="alert p-5 text-center" role="alert" style={{backgroundColor:"#d7a0b2"}}>
                            <p className="display-1">🎸</p>
                            <h1>Gracias por tu Compra!</h1>
                            <p>Tu ID de Compra es: <b>{orderId}</b></p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

const colorButton = {
    backgroundColor: '#9c123d',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '15px',
    color:'#FFFFFF'
};

export default Checkout;
