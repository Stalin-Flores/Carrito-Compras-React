import ProductList from "./ProductList"
import Hero from "./Hero"
import Footer from "./Footer"

const Home = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Hero />
            <ProductList />
            <Footer />
        </div>
    )
}

export default Home