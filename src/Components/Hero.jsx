const Hero = () => {
    return (
    <section className="w-full py-8 md:py-12 lg:py-16 bg-linear-to-b from-amber-50 to-white h-215">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Texto */}
                <div className="order-2 lg:order-1 text-center lg:text-left">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-4">
                        Moda <span className="text-teal-600">Peruana</span> 
                        <br />
                        <span className="text-amber-600">Con Estilo</span>
                    </h1>
                    <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
                        Descubre nuestra colección exclusiva de ropa inspirada en la vibrante cultura peruana. 
                        Calidad, diseño y tradición en cada prenda. ¡Viste con orgullo! 🇵🇪
                    </p>
                </div>
                
                {/* Imagen */}
                <div className="order-1 lg:order-2">
                    <img 
                        src="/images/hero-portada.jpg" 
                        alt="Hero Banner" 
                        className="w-full h-auto rounded-lg shadow-lg object-cover max-h-[350px] md:max-h-[500px] lg:max-h-[600px]"
                    />
                </div>
            </div>
        </div>
    </section>
    )
}

export default Hero