import "./Minigame.css"

export default function Minigame(){
    return (    <section className="section-container minigame-section animate-fade-in-up delay-200">
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
        </section>)
}