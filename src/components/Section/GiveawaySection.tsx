import tealCoralFlipFlops from "../../assets/a_professional_studio_shot_of_stylish_teal_and_coral_flip_flops_on_a_clean.png"
import './GiveawaySection.css'
export default function GiveawaySection() {
    return(
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
    );
}