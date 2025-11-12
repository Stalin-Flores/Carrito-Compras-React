import { Link } from "react-router-dom"
import { FiSearch } from "react-icons/fi"
import { AiOutlineShoppingCart, AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import { useCart } from "./CartContext"
import { useState } from "react"


const Navbar = () => {
  const { carrito } = useCart();
  const [menuAbierto, setMenuAbierto] = useState(false);
  
  const totalItems = carrito.reduce((total, item) => total + item.cantidad, 0);

  return (
    <header className="bg-white shadow-md border-b border-gray-200 sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-12 lg:px-32 py-4">
        
        {/* Logo */}
        <div className="shrink-0">
          <Link to="/">
            <h1 className="text-2xl sm:text-3xl font-bold text-teal-600 hover:text-teal-700 transition font-display tracking-wide">
              PERÚ <span className="text-amber-600">STYLE</span>
            </h1>
          </Link>
        </div>

        {/* Navegación Desktop */}
        <nav className="hidden md:flex flex-1 mx-8">
          <ul className="flex space-x-8">
            <li>
              <Link to="/" className="text-gray-700 hover:text-teal-600 font-semibold transition-colors text-lg">
                Home
              </Link>
            </li>
          </ul>
        </nav>

        {/* Sección Derecha */}
        <div className="flex items-center gap-3 sm:gap-6">
          {/* Icono de Búsqueda */}
          <button className="text-gray-600 hover:text-teal-600 transition-colors">
            <FiSearch className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Carrito */}
          <Link to="/carrito" className="relative text-gray-600 hover:text-teal-600 transition-colors">
            <AiOutlineShoppingCart className="w-6 h-6 sm:w-7 sm:h-7" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-teal-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>

          {/* Menú Hamburguesa para móviles */}
          <button 
            onClick={() => setMenuAbierto(!menuAbierto)}
            className="md:hidden text-gray-600 hover:text-teal-600 transition-colors"
          >
            {menuAbierto ? <AiOutlineClose className="w-6 h-6" /> : <AiOutlineMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {menuAbierto && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4 px-4">
          <ul className="space-y-3">
            <li>
              <Link 
                to="/" 
                onClick={() => setMenuAbierto(false)}
                className="block text-gray-700 hover:text-teal-600 font-semibold transition-colors text-lg py-2"
              >
                Home
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

export default Navbar