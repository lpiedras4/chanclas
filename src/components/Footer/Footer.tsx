import "./Footer.css"
export default function Footer() {
    return (
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

    )
}