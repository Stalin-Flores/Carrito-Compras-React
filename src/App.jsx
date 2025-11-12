import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Components/Home"
import Navbar from "./Components/Navbar"
import DetailsProduct from "./Components/DetailsProduct"
import Cart from "./Components/Cart"
import { CartProvider } from "./Components/CartContext"


const App = () => {
  return (
    <>
    <CartProvider> {/* para que este disponible en toda la app */}
      <Router> 
        <Navbar /> {/* /para el navbar sea global */}
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/producto/:id" element={<DetailsProduct />} /> {/* para capturar el ID del producto */}
          <Route path="/carrito" element={<Cart />} />
        </Routes>
      </Router>
      </CartProvider>
      

    </>
  )
}

export default App