import { useCart } from "./CartContext";

const Cart = () => {
    const { carrito, eliminarDelCarrito, actualizarCantidad } = useCart();

    const calcularTotal = () => {
        return carrito.reduce((total, item) => total + (item.precio * item.cantidad), 0).toFixed(2);
    };

    return (
        <div className="min-h-screen bg-gray-50 py-6 sm:py-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
                    TU <span className="text-teal-600">CARRITO</span>
                </h2>
                
                {carrito.length === 0 ? (
                    <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 text-center">
                        <p className="text-gray-500 text-base sm:text-lg">El carrito está vacío</p>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {carrito.map((item) => (
                            <div key={item.id} className="bg-white rounded-lg shadow-md p-4 sm:p-6">
                                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                                    <img 
                                        src={item.image} 
                                        alt={item.nombre} 
                                        className="w-24 h-24 sm:w-24 sm:h-24 object-cover rounded-lg"
                                    />
                                    
                                <div className="flex-1 text-center sm:text-left">
                                    <h3 className="text-base sm:text-lg font-bold text-gray-900">{item.nombre}</h3>
                                    <p className="text-teal-600 font-semibold mt-1">S/ {item.precio}</p>
                                </div>                                    <div className="flex items-center gap-3">
                                        <button 
                                            onClick={() => actualizarCantidad(item.id, item.cantidad - 1)}
                                            className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center font-bold text-gray-700"
                                        >
                                            -
                                        </button>
                                        <input 
                                            type="number" 
                                            value={item.cantidad} 
                                            readOnly
                                            className="w-12 sm:w-16 text-center border border-gray-300 rounded-lg py-1"
                                        />
                                        <button 
                                            onClick={() => actualizarCantidad(item.id, item.cantidad + 1)}
                                            className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center font-bold text-gray-700"
                                        >
                                            +
                                        </button>
                                    </div>

                                    <p className="text-base sm:text-lg font-bold text-gray-900 w-20 sm:w-24 text-center sm:text-right">
                                        S/ {(item.precio * item.cantidad).toFixed(2)}
                                    </p>

                                    <button 
                                        onClick={() => eliminarDelCarrito(item.id)}
                                        className="w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-semibold transition mt-2 sm:mt-0"
                                    >
                                        Eliminar
                                    </button>
                                </div>
                            </div>
                        ))}
                        
                        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mt-6">
                            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Total:</h3>
                                <p className="text-2xl sm:text-3xl font-bold text-teal-600">S/ {calcularTotal()}</p>
                            </div>
                            <button className="w-full mt-4 bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 rounded-lg transition">
                                Proceder al Pago
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;