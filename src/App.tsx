import './App.css';
import tealCoralFlipFlops from './assets/a_professional_studio_shot_of_stylish_teal_and_coral_flip_flops_on_a_clean.png';
import floralFlipFlops from './assets/colorful_summer_flip_flops_with_floral_patterns_for_women_beach_vibe_high.png';
import sportSlides from './assets/sporty_slides_for_men_modern_design_black_and_white_color_scheme_professional.png';
import leatherSandals from './assets/a_professional_studio_shot_of_classic_beach_sandals_comfortable_leather.png';
import Minigame from "./components/minigame/Minigame.tsx";

export default function App() {
    return (
        <div className="app-container">
            {/* TopNavBar */}
            <nav className="navbar glass-nav">
                <div className="navbar-container">
                    <a className="navbar-brand" href="#">SolelyBeach</a>
                    <div className="navbar-links">
                        <a className="nav-link active" href="#">Marketplace</a>
                        <a className="nav-link" href="#">Brands</a>
                        <a className="nav-link" href="#">Sale</a>
                        <a className="nav-link" href="#">Community</a>
                    </div>
                    <div className="navbar-actions">
                        <button className="icon-button" aria-label="Cart">
                            <span className="material-symbols-outlined">shopping_cart</span>
                        </button>
                        <button className="icon-button" aria-label="Account">
                            <span className="material-symbols-outlined">account_circle</span>
                        </button>
                    </div>
                </div>
            </nav>

            <main className="main-content">
                {/* Hero Section */}
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

                {/* Giveaway Section */}
                <section className="section-container animate-fade-in-up delay-100">
                    <div className="giveaway-card ambient-shadow">
                        <div className="giveaway-content">
                            <div className="giveaway-badge">
                                <span className="material-symbols-outlined">redeem</span>
                                Gran Sorteo de Verano
                            </div>
                            <h2 className="giveaway-title">Gana un par de edición limitada</h2>
                            <p className="giveaway-description">
                                Participa ahora y llévate unas chanclas exclusivas para lucir este verano en la playa.
                            </p>
                            <div className="countdown-grid">
                                <div className="countdown-box">
                                    <span className="countdown-val">03</span>
                                    <span className="countdown-lbl">Días</span>
                                </div>
                                <div className="countdown-box">
                                    <span className="countdown-val">14</span>
                                    <span className="countdown-lbl">Horas</span>
                                </div>
                                <div className="countdown-box">
                                    <span className="countdown-val">45</span>
                                    <span className="countdown-lbl">Min</span>
                                </div>
                            </div>
                            <button className="btn-accent btn-glow">
                                Participar Ahora <span className="material-symbols-outlined">arrow_forward</span>
                            </button>
                        </div>
                        <div className="giveaway-image-wrapper">
                            <img alt="Limited Edition Flip Flops" className="giveaway-image" src={tealCoralFlipFlops} />
                        </div>
                        {/* Decorative Background Elements */}
                        <div className="glow-circle-1"></div>
                        <div className="glow-circle-2"></div>
                    </div>
                </section>

                {/* Minigame section*/}
                <Minigame></Minigame>

                {/* Novedades Section */}
                <section className="section-container marketplace-section">
                    <div className="marketplace-header">
                        <h2 className="section-title animate-fade-in-up delay-100">Novedades en el Marketplace</h2>
                        <a className="see-all-link animate-fade-in-up delay-100" href="#">
                            Ver todo <span className="material-symbols-outlined">arrow_forward</span>
                        </a>
                    </div>
                    <div className="products-grid">
                        {/* Product Card 1 */}
                        <div className="product-card ambient-shadow ambient-shadow-hover animate-fade-in-up delay-100">
                            <div className="product-image-container">
                                <img alt="Floral Flip Flops" className="product-image" src={floralFlipFlops} />
                                <div className="product-badge">
                                    <span className="product-badge-text">Nuevo</span>
                                </div>
                            </div>
                            <div className="product-info">
                                <h3 className="product-name">Tropical Bloom</h3>
                                <p className="product-meta">Talla 38 • Casi nuevas</p>
                            </div>
                            <div className="product-footer">
                                <span className="product-price">€15</span>
                                <div>
                                    <button aria-label="Comprar" className="btn-buy">
                                        <span className="material-symbols-outlined">shopping_cart</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Product Card 2 */}
                        <div className="product-card ambient-shadow ambient-shadow-hover animate-fade-in-up delay-200">
                            <div className="product-image-container">
                                <img alt="Sport Slides" className="product-image" src={sportSlides} />
                            </div>
                            <div className="product-info">
                                <h3 className="product-name">Sport Slide Pro</h3>
                                <p className="product-meta">Talla 42 • Sin usar</p>
                            </div>
                            <div className="product-footer">
                                <span className="product-price">€22</span>
                                <div>
                                    <button aria-label="Comprar" className="btn-buy">
                                        <span className="material-symbols-outlined">shopping_cart</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Product Card 3 */}
                        <div className="product-card ambient-shadow ambient-shadow-hover animate-fade-in-up delay-300">
                            <div className="product-image-container">
                                <img alt="Leather Sandals" className="product-image" src={leatherSandals} />
                            </div>
                            <div className="product-info">
                                <h3 className="product-name">Classic Leather Double</h3>
                                <p className="product-meta">Talla 40 • Buen estado</p>
                            </div>
                            <div className="product-footer">
                                <span className="product-price">€35</span>
                                <div>
                                    <button aria-label="Comprar" className="btn-buy">
                                        <span className="material-symbols-outlined">shopping_cart</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Product Card 4 */}
                        <div className="product-card ambient-shadow ambient-shadow-hover animate-fade-in-up delay-400">
                            <div className="product-image-container">
                                <img alt="Aura Teal Flip Flops" className="product-image" src={tealCoralFlipFlops} />
                            </div>
                            <div className="product-info">
                                <h3 className="product-name">Aura Active Teal</h3>
                                <p className="product-meta">Talla 39 • Nuevas</p>
                            </div>
                            <div className="product-footer">
                                <span className="product-price">€18</span>
                                <div>
                                    <button aria-label="Comprar" className="btn-buy">
                                        <span className="material-symbols-outlined">shopping_cart</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="footer">
                <div className="section-container footer-grid">
                    <div>
                        <h4 className="footer-brand-title">SolelyBeach</h4>
                        <p className="footer-brand-desc">Tu marketplace definitivo para el calzado de verano.</p>
                    </div>
                    <div className="footer-nav">
                        <a className="footer-link" href="#">About Us</a>
                        <a className="footer-link" href="#">Sustainability</a>
                        <a className="footer-link" href="#">Shipping</a>
                        <a className="footer-link" href="#">Returns</a>
                        <a className="footer-link" href="#">Contact</a>
                    </div>
                    <div className="footer-copyright-col">
                        <p className="footer-copyright">© 2024 SolelyBeach Boutique. Stay Salty.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
