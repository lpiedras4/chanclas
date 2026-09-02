import './App.css';

/**
 * SolelyBeach / FlipFlop Hub — Marketplace.
 *
 * Las imágenes locales (*.png) viven junto a este archivo. Si tu bundler no
 * resuelve rutas relativas dentro del JSX, muévelas a /public o impórtalas.
 */

type Product = {
  name: string;
  meta: string;
  price: string;
  image: string;
  alt: string;
  badge?: string;
};

type Feature = {
  icon: string;
  variant: 'primary' | 'secondary';
  title: string;
  text: string;
};

const HERO_BACKGROUND =
    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB_ADH-4fxQpfREbG3DPcmxdQBwkovONd4SigI2TmeCsNb7U7-SzOfM3_AaXCjv20EBPaSD3Dwfp7LqvFfevU1-xtWy6BurufTnfQLRQEMr8cmMeBX5gI56zGzBggvC_InIWuhkOQzIaY4HPPKx9IfBIewW-MfBZ00a7WD_r6E0vbDZ87xGD5ct2K2o56YfLQ6L5JjIQiqXlNsZdqPWgg_Bv9UtqZeCn8d1oT9B5SdDS3Qyt6H6uhP3jw')";

const NAV_LINKS = ['Marketplace', 'Brands', 'Sale', 'Community'];

const COUNTDOWN = [
  { value: '03', label: 'Días' },
  { value: '14', label: 'Horas' },
  { value: '45', label: 'Min' },
];

const FEATURES: Feature[] = [
  {
    icon: 'touch_app',
    variant: 'primary',
    title: 'Fácil de jugar',
    text: 'Atrapa los pares de chanclas que caen antes de que toquen el suelo.',
  },
  {
    icon: 'local_activity',
    variant: 'secondary',
    title: 'Recompensas instantáneas',
    text: 'Consigue más de 1000 puntos para desbloquear un código del 15% de descuento.',
  },
];

const PRODUCTS: Product[] = [
  {
    name: 'Tropical Bloom',
    meta: 'Talla 38 • Casi nuevas',
    price: '€15',
    badge: 'Nuevo',
    image:
        'colorful_summer_flip_flops_with_floral_patterns_for_women_beach_vibe_high.png',
    alt: 'Floral Flip Flops',
  },
  {
    name: 'Sport Slide Pro',
    meta: 'Talla 42 • Sin usar',
    price: '€22',
    image:
        'sporty_slides_for_men_modern_design_black_and_white_color_scheme_professional.png',
    alt: 'Sport Slides',
  },
  {
    name: 'Classic Leather Double',
    meta: 'Talla 40 • Buen estado',
    price: '€35',
    image:
        'a_professional_studio_shot_of_classic_beach_sandals_comfortable_leather.png',
    alt: 'Leather Sandals',
  },
  {
    name: 'Aura Active Teal',
    meta: 'Talla 39 • Nuevas',
    price: '€18',
    image:
        'a_professional_studio_shot_of_stylish_teal_and_coral_flip_flops_on_a_clean.png',
    alt: 'Aura Teal Flip Flops',
  },
];

const FOOTER_LINKS = [
  'About Us',
  'Sustainability',
  'Shipping',
  'Returns',
  'Contact',
];

/** Escalonado de la animación de entrada de las tarjetas de producto. */
const CARD_DELAYS = ['delay-100', 'delay-200', 'delay-300', 'delay-400'];

export default function App() {
  return (
      <div className="app">
        {/* TopNavBar */}
        <nav className="nav">
          <div className="shell nav__inner">
            <a className="nav__brand" href="#">
              SolelyBeach
            </a>

            <div className="nav__links">
              {NAV_LINKS.map((label, index) => (
                  <a
                      key={label}
                      className={`nav__link t-label-md${
                          index === 0 ? ' nav__link--active' : ''
                      }`}
                      href="#"
                  >
                    {label}
                  </a>
              ))}
            </div>

            <div className="nav__actions">
              <button className="icon-btn" aria-label="Carrito" type="button">
                <span className="material-symbols-outlined">shopping_cart</span>
              </button>
              <button className="icon-btn" aria-label="Mi cuenta" type="button">
                <span className="material-symbols-outlined">account_circle</span>
              </button>
            </div>
          </div>
        </nav>

        <main className="main">
          {/* Hero */}
          <section className="shell hero">
            <div className="hero__bg">
              <div
                  className="hero__image"
                  style={{ backgroundImage: HERO_BACKGROUND }}
                  role="img"
                  aria-label="Costa soleada con dunas de arena blanca y olas turquesa al fondo."
              />
              <div className="hero__scrim" />
            </div>

            <div className="hero__content animate-fade-in-up">
              <h1 className="hero__title t-display">
                Encuentra tus chanclas perfectas
              </h1>
              <p className="hero__text t-body-lg">
                Descubre la mayor selección de chanclas de verano. Compra estilos
                únicos o vende los que ya no usas en nuestra comunidad.
              </p>
              <div className="hero__actions">
                <button className="btn btn--primary" type="button">
                  Explorar Colección
                </button>
                <button className="btn btn--ghost" type="button">
                  Vender Chanclas
                </button>
              </div>
            </div>
          </section>

          {/* Giveaway */}
          <section className="shell section animate-fade-in-up delay-100">
            <div className="giveaway">
              <div className="giveaway__body">
                <div className="giveaway__badge t-label-sm">
                  <span className="material-symbols-outlined">redeem</span>
                  Gran Sorteo de Verano
                </div>
                <h2 className="giveaway__title t-headline-lg">
                  Gana un par de edición limitada
                </h2>
                <p className="giveaway__text t-body-lg">
                  Participa ahora y llévate unas chanclas exclusivas para lucir este
                  verano en la playa.
                </p>

                <div className="countdown">
                  {COUNTDOWN.map((cell) => (
                      <div className="countdown__cell" key={cell.label}>
                    <span className="countdown__value t-headline-md">
                      {cell.value}
                    </span>
                        <span className="countdown__label t-label-sm">
                      {cell.label}
                    </span>
                      </div>
                  ))}
                </div>

                <button className="btn btn--accent" type="button">
                  Participar Ahora
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>

              <div className="giveaway__media">
                <img
                    className="giveaway__img"
                    src="a_professional_studio_shot_of_stylish_teal_and_coral_flip_flops_on_a_clean.png"
                    alt="Limited Edition Flip Flops"
                />
              </div>

              <div className="giveaway__blob giveaway__blob--top" />
              <div className="giveaway__blob giveaway__blob--bottom" />
            </div>
          </section>

          {/* Minigame */}
          <section className="shell section animate-fade-in-up delay-200">
            <div className="minigame">
              <div className="minigame__stage">
                <div className="minigame__grid" />

                <div className="minigame__panel">
                <span className="material-symbols-outlined minigame__icon">
                  videogame_asset
                </span>
                  <h3 className="minigame__title t-headline-md">Flip-Flop Catch</h3>
                  <p className="minigame__text t-body-md">
                    ¡Atrapa los pares correctos y gana descuentos!
                  </p>
                  <button className="btn btn--primary" type="button">
                    Jugar Ahora
                    <span className="material-symbols-outlined">play_arrow</span>
                  </button>
                </div>

                <div className="minigame__deco minigame__deco--ping" />
                <div className="minigame__deco minigame__deco--pulse" />
                <span className="material-symbols-outlined minigame__sticker minigame__sticker--icecream">
                icecream
              </span>
                <span className="material-symbols-outlined minigame__sticker minigame__sticker--beach">
                beach_access
              </span>
              </div>

              <div className="minigame__copy">
                <h2 className="t-headline-lg">Diviértete y Gana</h2>
                <p className="t-body-lg">
                  Tómate un descanso y prueba nuestro nuevo minijuego. Pon a prueba
                  tus reflejos y gana cupones de descuento exclusivos para tu
                  próxima compra.
                </p>

                <ul className="feature-list">
                  {FEATURES.map((feature) => (
                      <li className="feature" key={feature.title}>
                        <div
                            className={`feature__icon feature__icon--${feature.variant}`}
                        >
                      <span className="material-symbols-outlined">
                        {feature.icon}
                      </span>
                        </div>
                        <div>
                          <h4 className="feature__title t-label-md">
                            {feature.title}
                          </h4>
                          <p className="feature__text t-body-md">{feature.text}</p>
                        </div>
                      </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Novedades en el Marketplace */}
          <section className="shell section">
            <div className="novedades__head">
              <h2 className="novedades__title t-headline-lg animate-fade-in-up delay-100">
                Novedades en el Marketplace
              </h2>
              <a
                  className="novedades__all t-label-md animate-fade-in-up delay-100"
                  href="#"
              >
                Ver todo
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>

            <div className="product-grid">
              {PRODUCTS.map((product, index) => (
                  <div
                      className={`product-card animate-fade-in-up ${CARD_DELAYS[index]}`}
                      key={product.name}
                  >
                    <div className="product-card__media">
                      <img
                          className="product-card__img"
                          src={product.image}
                          alt={product.alt}
                      />
                      {product.badge && (
                          <div className="product-card__badge t-label-sm">
                            {product.badge}
                          </div>
                      )}
                    </div>

                    <div className="product-card__body">
                      <h3 className="product-card__name t-label-md">
                        {product.name}
                      </h3>
                      <p className="product-card__meta t-body-md">{product.meta}</p>
                    </div>

                    <div className="product-card__foot">
                  <span className="product-card__price t-headline-md">
                    {product.price}
                  </span>
                      <button className="cart-btn" aria-label="Comprar" type="button">
                    <span className="material-symbols-outlined">
                      shopping_cart
                    </span>
                      </button>
                    </div>
                  </div>
              ))}
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="footer">
          <div className="shell footer__inner">
            <div>
              <h4 className="footer__brand t-headline-md">SolelyBeach</h4>
              <p className="footer__about t-body-md">
                Tu marketplace definitivo para el calzado de verano.
              </p>
            </div>

            <div className="footer__links">
              {FOOTER_LINKS.map((link) => (
                  <a className="footer__link t-body-md" href="#" key={link}>
                    {link}
                  </a>
              ))}
            </div>

            <div className="footer__copy-block">
              <p className="footer__copy t-body-md">
                © 2024 SolelyBeach Boutique. Stay Salty.
              </p>
            </div>
          </div>
        </footer>
      </div>
  );
}
