import './App.css';
import tealCoralFlipFlops from './assets/a_professional_studio_shot_of_stylish_teal_and_coral_flip_flops_on_a_clean.png';

import Footer from "./components/Footer/Footer.tsx";
import NovedadesSection from "./components/NovedadesSection/NovedadesSection.tsx";

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

                {/* Minigame Section */}
                <section className="section-container minigame-section animate-fade-in-up delay-200">
                    <div className="minigame-grid">
                        <div className="minigame-card ambient-shadow">
                            <div className="minigame-bg-grid"></div>
                            <div className="minigame-card-content">
                                <span className="material-symbols-outlined bounce-icon">videogame_asset</span>
                                <h3 className="minigame-card-title">Flip-Flop Catch</h3>
                                <p className="minigame-card-desc">¡Atrapa los pares correctos y gana descuentos!</p>
                                <button className="btn-primary btn-glow">
                                    Jugar Ahora <span className="material-symbols-outlined">play_arrow</span>
                                </button>
                            </div>
                            {/* Decorative elements */}
                            <div className="minigame-decor-circle-1"></div>
                            <div className="minigame-decor-circle-2"></div>
                            <span className="material-symbols-outlined minigame-decor-icon-1">icecream</span>
                            <span className="material-symbols-outlined minigame-decor-icon-2">beach_access</span>
                        </div>
                        <div className="minigame-text-col">
                            <h2 className="section-title">Diviértete y Gana</h2>
                            <p className="section-desc">
                                Tómate un descanso y prueba nuestro nuevo minijuego. Pon a prueba tus reflejos y gana
                                cupones de descuento exclusivos para tu próxima compra.
                            </p>
                            <ul className="feature-list">
                                <li className="feature-item">
                                    <div className="feature-icon-wrapper-primary">
                                        <span className="material-symbols-outlined">touch_app</span>
                                    </div>
                                    <div>
                                        <h4 className="feature-title">Fácil de jugar</h4>
                                        <p className="feature-desc">Atrapa los pares de chanclas que caen antes de que toquen el suelo.</p>
                                    </div>
                                </li>
                                <li className="feature-item">
                                    <div className="feature-icon-wrapper-secondary">
                                        <span className="material-symbols-outlined">local_activity</span>
                                    </div>
                                    <div>
                                        <h4 className="feature-title">Recompensas instantáneas</h4>
                                        <p className="feature-desc">Consigue más de 1000 puntos para desbloquear un código del 15% de descuento.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Novedades Section */}
                <NovedadesSection></NovedadesSection>
            </main>

            {/* Footer */}
            <Footer></Footer>
        </div>
    );
}
