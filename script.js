/* VERSMO NATURALS - MAIN JAVASCRIPT ENGINE */

const products = [
  {
    id: 1,
    title: "Black Seed Oil",
    category: "carrier",
    image: "images/black-seed.jpg",
    sizes: [
      { size: "30ml", price: 650 },
      { size: "50ml", price: 950 },
      { size: "100ml", price: 1600 }
    ]
  },
  {
    id: 2,
    title: "Peppermint Essential Oil",
    category: "essential",
    image: "images/peppermint.jpg",
    sizes: [
      { size: "15ml", price: 500 },
      { size: "30ml", price: 850 }
    ]
  },
  {
    id: 3,
    title: "Jamaican Black Castor Oil",
    category: "carrier",
    image: "images/castor.jpg",
    sizes: [
      { size: "50ml", price: 700 },
      { size: "100ml", price: 1200 },
      { size: "250ml", price: 2400 }
    ]
  },
  {
    id: 4,
    title: "Sesame Oil",
    category: "carrier",
    image: "images/sesame.jpg",
    sizes: [
      { size: "50ml", price: 500 },
      { size: "100ml", price: 850 }
    ]
  },
  {
    id: 5,
    title: "Cold-Pressed Sunflower Oil",
    category: "carrier",
    image: "images/sunflower.jpg",
    sizes: [
      { size: "100ml", price: 600 },
      { size: "250ml", price: 1100 }
    ]
  },
  {
    id: 6,
    title: "Flaxseed Oil",
    category: "carrier",
    image: "images/flaxseed.jpg",
    sizes: [
      { size: "50ml", price: 600 },
      { size: "100ml", price: 1000 }
    ]
  },
  {
    id: 7,
    title: "Moringa Oil",
    category: "carrier",
    image: "images/moringa.jpg",
    sizes: [
      { size: "30ml", price: 800 },
      { size: "50ml", price: 1300 }
    ]
  },
  {
    id: 8,
    title: "Pure Rosehip Seed Oil",
    category: "carrier",
    image: "images/rosehip.jpg",
    sizes: [
      { size: "30ml", price: 950 },
      { size: "50ml", price: 1500 }
    ]
  },
  {
    id: 9,
    title: "Chamomile Essential Oil",
    category: "essential",
    image: "images/chamomile.jpg",
    sizes: [
      { size: "15ml", price: 600 },
      { size: "30ml", price: 1000 }
    ]
  },
  {
    id: 10,
    title: "Sweet Orange Essential Oil",
    category: "essential",
    image: "images/orange.jpg",
    sizes: [
      { size: "15ml", price: 450 },
      { size: "30ml", price: 750 }
    ]
  },
  {
    id: 11,
    title: "Frankincense Essential Oil",
    category: "essential",
    image: "images/frankincense.jpg",
    sizes: [
      { size: "15ml", price: 850 },
      { size: "30ml", price: 1500 }
    ]
  },
  {
    id: 12,
    title: "Pure Vanilla Oil",
    category: "essential",
    image: "images/vanilla.jpg",
    sizes: [
      { size: "15ml", price: 700 },
      { size: "30ml", price: 1200 }
    ]
  },
  {
    id: 13,
    title: "Anti-Itch Scalp Elixir",
    category: "blends",
    image: "images/anti-itch.jpg",
    sizes: [
      { size: "50ml", price: 950 },
      { size: "100ml", price: 1600 }
    ]
  },
  {
    id: 14,
    title: "Scalp Growth Nourisher",
    category: "blends",
    image: "images/growth.jpg",
    sizes: [
      { size: "50ml", price: 1100 },
      { size: "100ml", price: 1850 }
    ]
  },
  {
    id: 15,
    title: "Hydrating Scalp Oil",
    category: "blends",
    image: "images/hydrating.jpg",
    sizes: [
      { size: "50ml", price: 900 },
      { size: "100ml", price: 1500 }
    ]
  },
  {
    id: 16,
    title: "Vanilla Whipped Shea Butter",
    category: "butters",
    image: "images/vanilla-shea.jpg",
    sizes: [
      { size: "100g", price: 800 },
      { size: "250g", price: 1500 }
    ]
  },
  {
    id: 17,
    title: "Sweet Orange Whipped Shea",
    category: "butters",
    image: "images/orange-shea.jpg",
    sizes: [
      { size: "100g", price: 800 },
      { size: "250g", price: 1500 }
    ]
  },
  {
    id: 18,
    title: "Mango-Shea Glow Butter",
    category: "butters",
    image: "images/shea-mango.jpg",
    sizes: [
      { size: "100g", price: 950 },
      { size: "250g", price: 1750 }
    ]
  },
  {
    id: 19,
    title: "Cocoa-Shea Body Butter",
    category: "butters",
    image: "images/shea-cocoa.jpg",
    sizes: [
      { size: "100g", price: 850 },
      { size: "250g", price: 1600 }
    ]
  }
];

let cart = [];

function renderProducts(filterCategory = 'all') {
  const grid = document.getElementById('product-grid');
  if (!grid) return;

  grid.innerHTML = '';
  
  const filtered = filterCategory === 'all' 
    ? products 
    : products.filter(p => p.category === filterCategory);

  // Reliable dark amber bottle placeholder URL
  const fallbackImg = "https://images.unsplash.com/photo-1608248597261-2a9b422f28ed?w=600&auto=format&fit=crop";

  filtered.forEach(p => {
    const card = document.createElement('div');
    card.className = 'product-card';

    card.innerHTML = `
      <div>
        <img 
          src="${p.image}" 
          alt="${p.title}" 
          class="product-img" 
          onerror="this.onerror=null; this.src='${fallbackImg}';" 
        />
        <div class="product-category">${p.category}</div>
        <h3 class="product-title">${p.title}</h3>
        <select class="product-size-select" id="size-${p.id}">
          ${p.sizes.map((s, idx) => `<option value="${idx}">${s.size} - KSh${s.price}</option>`).join('')}
        </select>
      </div>
      <div class="product-bottom">
        <span class="product-price" id="price-${p.id}">KSh ${p.sizes[0].price}</span>
        <button class="add-btn" onclick="addToCart(${p.id})">Add</button>
      </div>
    `;

    grid.appendChild(card);

    setTimeout(() => {
      const select = document.getElementById(`size-${p.id}`);
      const priceDisplay = document.getElementById(`price-${p.id}`);
      if (select && priceDisplay) {
        select.addEventListener('change', (e) => {
          const selectedIdx = e.target.value;
          priceDisplay.textContent = `KSh ${p.sizes[selectedIdx].price}`;
        });
      }
    }, 0);
  });
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  const select = document.getElementById(`size-${productId}`);
  const selectedIdx = select ? parseInt(select.value) : 0;
  const selectedSize = product.sizes[selectedIdx];

  const cartItemId = `${productId}-${selectedSize.size}`;
  const existing = cart.find(item => item.cartItemId === cartItemId);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      cartItemId,
      title: product.title,
      size: selectedSize.size,
      price: selectedSize.price,
      qty: 1
    });
  }

  updateCartUI();
  toggleCart(true);
}

function updateCartUI() {
  const cartContainer = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  const cartCount = document.getElementById('cart-count');

  if (!cartContainer || !cartTotal || !cartCount) return;

  cartContainer.innerHTML = '';
  let total = 0;
  let count = 0;

  cart.forEach(item => {
    const itemTotal = item.price * item.qty;
    total += itemTotal;
    count += item.qty;

    const row = document.createElement('div');
    row.className = 'cart-item';
    row.innerHTML = `
      <div class="cart-item-info">
        <h4>${item.title}</h4>
        <p>${item.size} × ${item.qty}</p>
      </div>
      <div>
        <span>KSh ${itemTotal}</span>
      </div>
    `;
    cartContainer.appendChild(row);
  });

  cartTotal.textContent = `KSh ${total}`;
  cartCount.textContent = count;
}

function toggleCart(open) {
  const drawer = document.getElementById('cart-drawer');
  const backdrop = document.getElementById('cart-backdrop');
  if (drawer && backdrop) {
    if (open) {
      drawer.classList.add('active');
      backdrop.classList.add('active');
    } else {
      drawer.classList.remove('active');
      backdrop.classList.remove('active');
    }
  }
}

function checkoutWhatsApp() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  const phone = "254700000000"; // Replace with your exact M-Pesa / WhatsApp order receiving number
  let message = "Hello Versmo Naturals! I would like to place an order:\n\n";
  let total = 0;

  cart.forEach((item, idx) => {
    const itemTotal = item.price * item.qty;
    total += itemTotal;
    message += `${idx + 1}. ${item.title} (${item.size}) x${item.qty} - KSh ${itemTotal}\n`;
  });

  message += `\n*Total:* KSh ${total}\n\nPlease confirm availability and payment options.`;

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

document.addEventListener('DOMContentLoaded', () => {
  renderProducts();

  const tabs = document.querySelectorAll('.tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      tabs.forEach(t => t.classList.remove('active'));
      e.target.classList.add('active');
      const cat = e.target.getAttribute('data-category');
      renderProducts(cat);
    });
  });
});
