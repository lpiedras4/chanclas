export default function TopNavBar(){
    return(
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

);
}