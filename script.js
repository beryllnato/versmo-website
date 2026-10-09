/* VERSMO NATURALS - MAIN STYLESHEET */
:root {
    --bg-black: #0a0a0a;
    --bg-card: #121212;
    --text-white: #f8f9fa;
    --text-muted: #a0a0a0;
    --gold-primary: #d4af37;
    --gold-hover: #f1c40f;
    --border-color: #262626;
    --font-heading: 'Playfair Display', serif;
    --font-body: 'Montserrat', sans-serif;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: var(--bg-black);
    color: var(--text-white);
    font-family: var(--font-body);
    line-height: 1.6;
}

/* Announcement Bar */
.announcement-bar {
    background: var(--gold-primary);
    color: #000;
    text-align: center;
    padding: 8px 16px;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
}

/* Navigation Bar */
.navbar {
    background-color: rgba(10, 10, 10, 0.95);
    border-bottom: 1px solid var(--border-color);
    position: sticky;
    top: 0;
    z-index: 100;
    padding: 16px 24px;
    backdrop-filter: blur(8px);
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.brand-logo {
    text-decoration: none;
    color: var(--text-white);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.logo-main {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    letter-spacing: 3px;
    font-weight: 700;
    color: var(--text-white);
}

.logo-sub {
    font-size: 0.6rem;
    letter-spacing: 4px;
    color: var(--gold-primary);
    text-transform: uppercase;
    margin-top: -3px;
}

.nav-links {
    display: flex;
    gap: 24px;
}

.nav-links a {
    color: var(--text-muted);
    text-decoration: none;
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: color 0.3s;
}

.nav-links a:hover {
    color: var(--gold-primary);
}

.cart-trigger {
    background: none;
    border: 1px solid var(--border-color);
    color: var(--text-white);
    padding: 8px 14px;
    border-radius: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: border-color 0.3s;
}

.cart-trigger:hover {
    border-color: var(--gold-primary);
}

.cart-badge {
    background: var(--gold-primary);
    color: #000;
    font-weight: 700;
    font-size: 0.75rem;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* Hero Section */
.hero-section {
    padding: 100px 20px;
    text-align: center;
    background: radial-gradient(circle at center, #1a1a1a 0%, #0a0a0a 100%);
    border-bottom: 1px solid var(--border-color);
}

.hero-tagline {
    color: var(--gold-primary);
    font-size: 0.8rem;
    letter-spacing: 4px;
    margin-bottom: 12px;
}

.hero-section h1 {
    font-family: var(--font-heading);
    font-size: 3rem;
    letter-spacing: 1px;
    margin-bottom: 16px;
}

.hero-subtitle {
    color: var(--text-muted);
    max-width: 600px;
    margin: 0 auto 32px auto;
    font-size: 1rem;
    font-weight: 300;
}

.btn {
    display: inline-block;
    padding: 12px 32px;
    text-decoration: none;
    font-size: 0.85rem;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    border-radius: 2px;
    transition: all 0.3s;
    cursor: pointer;
}

.btn-gold {
    background-color: var(--gold-primary);
    color: #000;
    border: 1px solid var(--gold-primary);
}

.btn-gold:hover {
    background-color: var(--gold-hover);
    border-color: var(--gold-hover);
}

.btn-block {
    display: block;
    width: 100%;
}

/* Catalog Section */
.catalog-section {
    padding: 80px 20px;
    max-width: 1200px;
    margin: 0 auto;
}

.section-header {
    text-align: center;
    margin-bottom: 40px;
}

.section-header h2 {
    font-family: var(--font-heading);
    font-size: 2rem;
    letter-spacing: 2px;
}

.gold-line {
    width: 50px;
    height: 2px;
    background: var(--gold-primary);
    margin: 12px auto 0 auto;
}

.category-tabs {
    display: flex;
    justify-content: center;
    gap: 12px;
    flex-wrap: wrap;
    margin-bottom: 40px;
}

.tab-btn {
    background: none;
    border: 1px solid var(--border-color);
    color: var(--text-muted);
    padding: 8px 20px;
    font-size: 0.8rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s;
}

.tab-btn.active, .tab-btn:hover {
    border-color: var(--gold-primary);
    color: var(--gold-primary);
}

/* Product Grid */
.product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 30px;
}

.product-card {
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: border-color 0.3s;
}

.product-card:hover {
    border-color: var(--gold-primary);
}

.product-img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    background: #1e1e1e;
    margin-bottom: 16px;
    border-radius: 2px;
}

.product-category {
    font-size: 0.65rem;
    color: var(--gold-primary);
    letter-spacing: 2px;
    text-transform: uppercase;
}

.product-title {
    font-family: var(--font-heading);
    font-size: 1.1rem;
    margin: 4px 0 12px 0;
}

.product-size-select {
    width: 100%;
    background: #1a1a1a;
    color: var(--text-white);
    border: 1px solid var(--border-color);
    padding: 8px;
    font-size: 0.85rem;
    margin-bottom: 16px;
    border-radius: 2px;
}

.product-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.product-price {
    font-weight: 600;
    color: var(--gold-primary);
    font-size: 1rem;
}

.add-btn {
    background: none;
    border: 1px solid var(--gold-primary);
    color: var(--gold-primary);
    padding: 6px 14px;
    font-size: 0.75rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s;
}

.add-btn:hover {
    background: var(--gold-primary);
    color: #000;
}

/* Cart Drawer */
.cart-drawer-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: none;
    z-index: 200;
}

.cart-drawer-backdrop.active {
    display: block;
}

.cart-drawer {
    position: fixed;
    top: 0;
    right: -400px;
    width: 100%;
    max-width: 380px;
    height: 100%;
    background: var(--bg-card);
    border-left: 1px solid var(--border-color);
    z-index: 201;
    display: flex;
    flex-direction: column;
    transition: right 0.3s ease;
}

.cart-drawer.active {
    right: 0;
}

.cart-header {
    padding: 20px;
    border-bottom: 1px solid var(--border-color);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.cart-header h3 {
    font-family: var(--font-heading);
    letter-spacing: 1px;
}

.cart-close {
    background: none;
    border: none;
    color: var(--text-white);
    font-size: 1.5rem;
    cursor: pointer;
}

.cart-body {
    flex: 1;
    overflow-y: auto;
    padding: 20px;
}

.cart-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
    padding-bottom: 16px;
    border-bottom: 1px solid var(--border-color);
}

.cart-item-info h4 {
    font-size: 0.9rem;
}

.cart-item-info p {
    font-size: 0.75rem;
    color: var(--text-muted);
}

.cart-footer {
    padding: 20px;
    border-top: 1px solid var(--border-color);
}

.cart-total-row {
    display: flex;
    justify-content: space-between;
    font-weight: 600;
    font-size: 1.1rem;
    margin-bottom: 8px;
    color: var(--gold-primary);
}

.checkout-note {
    font-size: 0.7rem;
    color: var(--text-muted);
    margin-bottom: 12px;
    text-align: center;
}

/* Footer */
.site-footer {
    background: #050505;
    border-top: 1px solid var(--border-color);
    padding: 40px 20px 20px 20px;
}

.footer-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 30px;
    margin-bottom: 30px;
}

.footer-brand p, .footer-info p {
    color: var(--text-muted);
    font-size: 0.85rem;
    margin-top: 8px;
}

.footer-bottom {
    text-align: center;
    color: var(--text-muted);
    font-size: 0.75rem;
    border-top: 1px solid var(--border-color);
    padding-top: 20px;
}