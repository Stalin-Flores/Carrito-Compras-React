/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

const CartProvider = ({children}) => {
    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (producto) => {
        setCarrito((carritoAnterior) => {
            const yaExisteElproducto = carritoAnterior.findIndex(
                articulo => articulo.id === producto.id
            );
            if (yaExisteElproducto >= 0) {
                const nuevoCarrito = [...carritoAnterior];
                nuevoCarrito[yaExisteElproducto].cantidad += 1;
                return nuevoCarrito;
            } else {
                return [...carritoAnterior, { ...producto, cantidad: 1 }];
            }
        });
    };

    const eliminarDelCarrito = (id) => {
        setCarrito((carritoAnterior) => 
            carritoAnterior.filter((item) => item.id !== id)
        );
    };

    const actualizarCantidad = (id, nuevaCantidad) => {
        if (nuevaCantidad <= 0) {
            eliminarDelCarrito(id);
            return;
        }
        setCarrito((carritoAnterior) => 
            carritoAnterior.map((item) => 
                item.id === id ? { ...item, cantidad: nuevaCantidad } : item
            )
        );
    };

    return (
        <CartContext.Provider value={{ carrito, agregarAlCarrito, eliminarDelCarrito, actualizarCantidad }}>
            {children}
        </CartContext.Provider>
    );
}

export { CartProvider };
export const useCart = () => useContext(CartContext);