import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineFilter, AiOutlineClose } from "react-icons/ai";

const ProductList = () => {
    const [productos, setProductos] = useState([]); 
    const [error, setError] = useState(null);
    //agregar para el orden de productos
    const [orden, setOrden] = useState("novedades");
    //estado para mostrar/ocultar filtros en móvil
    const [mostrarFiltros, setMostrarFiltros] = useState(false);

    //filtrar por categoria y tipo
    const [filtros, setFiltros] = useState({categorias: [], tipos: []});

    const navegador = useNavigate(); 



    // Cargar los productos desde db.json al montar el componente
    useEffect(() => {
        const fetchProductos = async () => {
            try {
                // Corregido: Cambié la ruta de "./data/productos.json" a "/src/data/db.json"
                const response = await fetch("/src/data/db.json");
                if (!response.ok) {
                    throw new Error("Error al cargar los productos.");
                }
                const data = await response.json();
                // Corregido: Accedemos a data.products porque el JSON tiene estructura { "products": [...] }
                setProductos(data.products);

            } catch (err) {
                setError(err.message);
            }
        };
        fetchProductos();
    }, []); // Corregido: Agregué dependencia vacía para ejecutar solo una vez

    // Función para actualizar los filtros
    const Filtros = (tipoFiltro, valor) => {
        setFiltros((prev) => ({
            ...prev,
            [tipoFiltro]: prev[tipoFiltro].includes(valor)
                ? prev[tipoFiltro].filter((item) => item !== valor)
                : [...prev[tipoFiltro], valor],
        }));
    }

    // Filtrar productos según los filtros seleccionados
    const productosFiltrados = productos.filter((producto) => {
        const categoriaMatch =
            filtros.categorias.length === 0 || filtros.categorias.includes(producto.categoria);
        const tipoMatch =
            filtros.tipos.length === 0 || filtros.tipos.includes(producto.tipo);
        return categoriaMatch && tipoMatch;
    });

    // Ordenar productos según el estado "orden"
    const ordenar=(e) => {
        setOrden(e.target.value);
    }

    // Corregido: Ahora compara con los valores correctos del select
    // Primero filtra, luego ordena
    const productosOrdenados = [...productosFiltrados].sort((a, b) => {
        if (orden === "precio-asc") {
            // Menor a Mayor: de menor precio al mayor
            return a.precio - b.precio;
        } else if (orden === "precio-desc") {
            // Mayor a Menor: de mayor precio al menor
            return b.precio - a.precio;
        }
        
        return 0;
    });

    const imagenClick = (id) => {
        navegador(`/producto/${id}`);
    }




    return (
        <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 py-8 md:py-12">
        
        {/* Botón de filtros para móviles */}
        <div className="lg:hidden mb-4">
            <button 
                onClick={() => setMostrarFiltros(!mostrarFiltros)}
                className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition"
            >
                {mostrarFiltros ? <AiOutlineClose className="w-5 h-5" /> : <AiOutlineFilter className="w-5 h-5" />}
                {mostrarFiltros ? 'Ocultar Filtros' : 'Mostrar Filtros'}
            </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
        {/* Sidebar de Filtros */}
        <aside className={`${mostrarFiltros ? 'block' : 'hidden'} lg:block w-full lg:w-72 shrink-0 bg-white rounded-lg shadow-md p-4 md:p-6 h-fit lg:sticky lg:top-24`}>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Filtros</h2>
            
            <div className="space-y-6">
                {/* Categorías */}
                <div className="border-b border-gray-200 pb-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Categorías</h3>
                    <div className="space-y-3">
                        <label className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded transition">
                            <input onChange={() => Filtros("categorias", "Hombres")}
                                type="checkbox" className="w-5 h-5 rounded border-gray-300 text-teal-600 focus:ring-teal-500" />
                            <span className="text-gray-700">Hombres</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded transition">
                            <input onChange={() => Filtros("categorias", "Mujeres")}
                                type="checkbox" className="w-5 h-5 rounded border-gray-300 text-teal-600 focus:ring-teal-500" />
                            <span className="text-gray-700">Mujeres</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded transition">
                            <input onChange={() => Filtros("categorias", "Niños")}
                            type="checkbox" className="w-5 h-5 rounded border-gray-300 text-teal-600 focus:ring-teal-500" />
                            <span className="text-gray-700">Niños</span>
                        </label>
                    </div>
                </div>

                {/* Tipos de Productos */}
                <div className="pt-2">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Tipos</h3>
                    <div className="space-y-3">
                        <label className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded transition">
                            <input
                                onChange={() => Filtros("tipos", "Prendas de abrigo")}
                            type="checkbox" className="w-5 h-5 rounded border-gray-300 text-teal-600 focus:ring-teal-500" />
                            <span className="text-gray-700">Prendas de abrigo</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded transition">
                            <input
                                onChange={() => Filtros("tipos", "Ropa interior")}
                            type="checkbox" className="w-5 h-5 rounded border-gray-300 text-teal-600 focus:ring-teal-500" />
                            <span className="text-gray-700">Ropa interior</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded transition">
                            <input
                                onChange={() => Filtros("tipos", "Calzado")}
                            type="checkbox" className="w-5 h-5 rounded border-gray-300 text-teal-600 focus:ring-teal-500" />
                            <span className="text-gray-700">Calzados</span>
                        </label>
                    </div>
                </div>
            </div>
        </aside>

        {/* Contenido Principal */}
        <main className="flex-1 w-full">
            <div className="mb-6 md:mb-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900">
                        Colección <span className="text-teal-600">Exclusiva</span>
                    </h2>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 w-full sm:w-auto">
                        <label className="text-gray-700 font-medium text-sm sm:text-base">Ordenar por:</label>
                        {/* Corregido: Cambié onChange={orden} por onChange={ordenar} */}
                        {/* onChange debe recibir la función controladora, no el estado */}
                        <select onChange={ordenar} value={orden} className="w-full sm:w-auto px-3 sm:px-4 py-2 border border-gray-300 rounded-lg text-sm sm:text-base text-gray-700 bg-white cursor-pointer hover:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500 transition">
                            <option value="novedades">Novedades</option>
                            <option value="precio-asc">Precio: Menor a Mayor</option>
                            <option value="precio-desc">Precio: Mayor a Menor</option>
                        </select>
                    </div>
                </div>
            </div>

            <div>
                {error ? (
                    <p className="text-red-500 bg-red-50 p-4 rounded-lg">{error}</p>
                ) : productosOrdenados.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                        {productosOrdenados.map((producto) => (
                            <div key={producto.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group">
                                {/* Card con imagen, ID, nombre y precio del artículo */}
                                <div className="relative overflow-hidden">
                                    <img 
                                    onClick={() => imagenClick(producto.id)}//para navegar a detalles
                                    src={producto.image} alt={producto.nombre} className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
                                </div>
                                
                                <div className="p-3 md:p-4">
                                    {/* Título o nombre del artículo */}
                                    <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2 truncate">{producto.nombre}</h3>
                                    
                                    {/* Valor monetario del producto */}
                                    <p className="text-lg md:text-xl text-teal-600 font-bold">S/ {producto.precio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12 md:py-16 bg-white rounded-lg shadow-md">
                        <p className="text-gray-500 text-base md:text-lg">No se encontraron productos que coincidan con los filtros aplicados</p>
                    </div>
                )}
            </div>
        </main>
        </div>
    </div>
    )
}

export default ProductList