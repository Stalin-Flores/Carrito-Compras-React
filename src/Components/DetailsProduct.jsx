import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "./CartContext";

const DetailsProduct = () => {
    // Obtener el ID del producto desde la URL
    const { id } = useParams()
    const [product, setProduct] = useState(null)
    const [error, setError] = useState(null)

    //agregar al carrito
    const { agregarAlCarrito } = useCart();
    const handleAgregarAlCarrito = () => {
        if (product) {
            agregarAlCarrito({
                id: product.id,
                nombre: product.nombre,
                precio: product.precio,
                image: product.image,
                cantidad: 1
            });
        }
    }

    

    // Cargar el producto al montar el componente
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch("/src/data/db.json");
                if (!response.ok) {
                    throw new Error("Error al cargar los productos.");
                }
                const data = await response.json();
                // Buscar el producto por ID
                const foundProduct = data.products.find((item) => item.id === parseInt(id));
                if (!foundProduct) {
                    throw new Error("Producto no encontrado.");
                }
                setProduct(foundProduct);

            } catch (err) {
                setError(err.message);
            }
        };
        fetchProduct();
    }, [id])

    // Mostrar error si hay algún problema
    if (error) {
        return <div className="text-center py-8 text-red-500 font-bold">Error: {error}</div>;
    }



    return (
        <div className="bg-white min-h-screen">
            {product ? (
                <div className="max-w-7xl mx-auto p-4 sm:p-6 md:p-8">
                    {/* Contenedor principal con 2 columnas */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-start">
                        
                        {/* COLUMNA IZQUIERDA - Imagen */}
                        <div className="flex flex-col gap-4">
                            {/* Imagen principal */}
                            <img 
                                src={product.image} 
                                alt={product.nombre} 
                                className="w-full h-auto object-cover rounded-lg shadow-lg" 
                            />
                        </div>

                        {/* COLUMNA DERECHA - Información del producto */}
                        <div className="space-y-4 sm:space-y-6">
                            {/* Nombre del producto */}
                            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">{product.nombre}</h1>
                            
                            {/* Precio destacado */}
                            <div className="space-y-2">
                                <p className="text-2xl sm:text-3xl text-cyan-500 font-bold">S/ {product.precio}</p>
                            </div>
                            
                            {/* Descripción */}
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {product.descripcion}
                            </p>
                            
                            {/* Selector de tallas */}
                            <div className="space-y-3">
                                <p className="text-sm font-semibold text-gray-700">Selecciona tu talla:</p>
                                <div className="flex flex-wrap gap-2 sm:gap-3">
                                    <button className="px-4 sm:px-5 py-2 border-2 border-gray-300 rounded hover:border-gray-500 hover:bg-gray-100 transition font-semibold text-gray-700">S</button>
                                    <button className="px-4 sm:px-5 py-2 border-2 border-gray-300 rounded hover:border-gray-500 hover:bg-gray-100 transition font-semibold text-gray-700">M</button>
                                    <button className="px-4 sm:px-5 py-2 border-2 border-gray-300 rounded hover:border-gray-500 hover:bg-gray-100 transition font-semibold text-gray-700">L</button>
                                    <button className="px-4 sm:px-5 py-2 border-2 border-gray-300 rounded hover:border-gray-500 hover:bg-gray-100 transition font-semibold text-gray-700">XL</button>
                                </div>
                            </div>

                            {/* Botón de carrito */}
                            <button 
                                onClick={handleAgregarAlCarrito}
                                type="button" 
                                className="w-full bg-linear-to-r from-teal-500 via-teal-600 to-teal-700 hover:bg-linear-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 shadow-lg text-white font-bold rounded-lg text-base sm:text-lg px-6 py-3 sm:py-4 text-center transition">
                                AÑADIR AL CARRITO
                            </button>

                            {/* Información adicional */}
                            <div className="border-t pt-4 space-y-2 text-xs text-gray-600">
                                <p>
                                    <span className="font-semibold">Producto 100% original.</span> El pago contra reembolso está disponible para este producto. 
                                    Política de devolución y cambio fácil dentro de los 7 días.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="text-center py-12 sm:py-16">
                    <div className="inline-block animate-spin text-xl sm:text-2xl">⏳</div>
                    <p className="text-gray-600 mt-4 text-base sm:text-lg">Cargando detalles del producto...</p>
                </div>
            )}
        </div>
    )
}

export default DetailsProduct