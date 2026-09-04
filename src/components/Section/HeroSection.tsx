import "./HeroSection.css"
export default function HeroSection(){
    return(
        <section className="hero-section ambient-shadow">
            <div className="hero-bg">
                <div
                    className="hero-bg-image"
                    data-alt="A bright, sunlit coastal scene with soft, white sand dunes and subtle turquoise ocean waves in the background. Modern, minimalist, bright, light-mode aesthetic, high clarity, evoking a relaxed holiday feeling."
                ></div>
                <div className="hero-bg-overlay"></div>
            </div>
            <div className="hero-content animate-fade-in-up">
                <h1 className="hero-title">Encuentra tus chanclas perfectas</h1>
                <p className="hero-description">
                    Descubre la mayor selección de chanclas de verano. Compra estilos únicos o vende los que ya
                    no usas en nuestra comunidad.
                </p>
                <div className="hero-buttons">
                    <button className="btn-primary btn-glow">Explorar Colección</button>
                    <button className="btn-secondary-outline">Vender Chanclas</button>
                </div>
            </div>
        </section>

    );
}