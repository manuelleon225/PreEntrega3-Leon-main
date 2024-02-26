import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({ stock,onAdd,cart}) => {
    const [count, setCount] = useState(1);
    const [itemAdded, setItemAdded] = useState(false);

    const increment = () => {
        let cantidad = stock -cart;
        if (count < cantidad) {
            setCount(prevCount => prevCount + 1);
        }
    }

    const decrement = () => {
        
        if (count > 1) {
            setCount(prevCount => prevCount - 1);
        }
    }

    const addToCart = () => {
        if (count <= stock) {
            setItemAdded(true);
            onAdd(count);
        }
    }

    useEffect(() => {
        setCount(1);
        setItemAdded(false);
    }, [stock]);

    return (
        <>
            <div className="row my-1">
                <div className="col-md-2">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn" style={colorButton} onClick={decrement}>-</button>
                        <button type="button" className="btn" style={colorButton} >{count}</button>
                        <button type="button" className="btn" style={colorButton} onClick={increment}>+</button>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <h4 style={{color:"gray"}}>( {stock} Unidades Disponibles)</h4>
                    </div>
                </div>
            </div>
            <div className="row my-1">
                <div className="col-md-5">
                {itemAdded ? <Link to={"/cart"} className="btn" style={colorButton} >Terminar Mi Compra</Link> : <button type="button" className="btn" style={colorButton} onClick={addToCart}>Agregar al Carrito</button>}
                </div>
            </div>
        </>
    )
}

const colorButton = {
    backgroundColor: '#9c123d',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '15px',
    color:'#FFFFFF'
  };

export default ItemCount;
