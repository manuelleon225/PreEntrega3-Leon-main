import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        const existingItemIndex = cart.findIndex(product => product.id === item.id);

        if (existingItemIndex !== -1) {
            const updatedCart = [...cart];
            updatedCart[existingItemIndex].quantity += quantity;
            setCart(updatedCart);
        } else {
            setCart(prevCart => [...prevCart, { ...item, quantity }]);
        }
    };

    const removeItem = (id) => {
        const updatedCart = cart.filter(product => product.id !== id);
        setCart(updatedCart);
    };

    const clear = () => {
        setCart([]);
    };

    const isInCart = (id) => {
        return cart.some(product => product.id === id);
    };

    const totalQuantity = () => {
        return cart.reduce((total, product) => total + product.quantity, 0);
    };

    const cantProduct = (id) => {
        return cart.reduce((total, product) => {
            if (product.id==id) {
                return total + product.quantity;
            }
            return total;
        }, 0);
    };
    

    const totalPrice = () => {
        const totalAmount = cart.reduce((total, product) => total + (product.quantity * product.price), 0);
        return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(totalAmount);
    };
    

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clear, isInCart, totalQuantity, totalPrice,cantProduct }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
