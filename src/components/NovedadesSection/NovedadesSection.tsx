import "./NovedadesSection.css"
import floralFlipFlops from '../../assets/colorful_summer_flip_flops_with_floral_patterns_for_women_beach_vibe_high.png';
import sportSlides from '../../assets/sporty_slides_for_men_modern_design_black_and_white_color_scheme_professional.png';
import leatherSandals from '../../assets/a_professional_studio_shot_of_classic_beach_sandals_comfortable_leather.png';
import tealCoralFlipFlops from '../../assets/a_professional_studio_shot_of_stylish_teal_and_coral_flip_flops_on_a_clean.png';
//Cuando se importa imgs de otro folder se debe de poner "../../assest"
//../ salgo de mi primer carpeta (NovedadesSection), 2do ../ salgo de segunda carpeta (components)
//Con assests/ entro a la carpeta que quiero (assets)

export default function NovedadesSection() {
    return (
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

    )
}