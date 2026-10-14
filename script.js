/* ==========================================================================
   PRODUCTS DATA WITH REALISTIC IMAGE URLS & FALLBACKS
   ========================================================================== */
const fallbackImage = "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&q=80";

const products = [
  {
    id: 1,
    name: "Lenovo V15 G4 Laptop",
    category: "Laptops",
    price: 42999,
    originalPrice: 49999,
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&q=80",
    rating: 4.5,
    description: "Intel Core i5 13th Gen, 16GB RAM, 512GB SSD, 15.6'' FHD Display.",
    competitors: [
      { name: "TechMart (Us)", price: 42999, isCurrent: true },
      { name: "Amazon", price: 41499, url: "https://www.amazon.in" },
      { name: "Flipkart", price: 43500, url: "https://www.flipkart.com" }
    ]
  },
  {
    id: 2,
    name: "boAt Nirvana Ion Earbuds",
    category: "Audio",
    price: 1999,
    originalPrice: 3990,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&q=80",
    rating: 4.7,
    description: "120 hours playback, Dual Equalizer Modes, Quad Mics with ENx.",
    competitors: [
      { name: "TechMart (Us)", price: 1999, isCurrent: true },
      { name: "Amazon", price: 2199, url: "https://www.amazon.in" },
      { name: "Flipkart", price: 2299, url: "https://www.flipkart.com" }
    ]
  },
  {
    id: 3,
    name: "Motorola Edge 60 Stylus",
    category: "Mobile & Tablets",
    price: 24999,
    originalPrice: 29999,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80",
    rating: 4.6,
    description: "Built-in stylus, 120Hz pOLED display, 50MP OIS Camera system.",
    competitors: [
      { name: "TechMart (Us)", price: 24999, isCurrent: true },
      { name: "Amazon", price: 23999, url: "https://www.amazon.in" },
      { name: "Flipkart", price: 25499, url: "https://www.flipkart.com" }
    ]
  },
  {
    id: 4,
    name: "Casio fx-991CW Calculator",
    category: "Calculators",
    price: 1595,
    originalPrice: 1795,
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&q=80",
    rating: 4.9,
    description: "Advanced ClassWiz scientific calculator with high-definition display.",
    competitors: [
      { name: "TechMart (Us)", price: 1595, isCurrent: true },
      { name: "Amazon", price: 1595, url: "https://www.amazon.in" },
      { name: "Flipkart", price: 1650, url: "https://www.flipkart.com" }
    ]
  },
  {
    id: 5,
    name: "IFB 7.5 kg Front Load Washer",
    category: "Home Appliances",
    price: 31490,
    originalPrice: 36990,
    image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=400&q=80",
    rating: 4.4,
    description: "3D Wash technology, Aqua Energie, in-built heater, 5-star rating.",
    competitors: [
      { name: "TechMart (Us)", price: 31490, isCurrent: true },
      { name: "Amazon", price: 29990, url: "https://www.amazon.in" },
      { name: "Flipkart", price: 32000, url: "https://www.flipkart.com" }
    ]
  },
  {
    id: 6,
    name: "D-Link DAP-1325 Range Extender",
    category: "Networking",
    price: 1299,
    originalPrice: 2100,
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&q=80",
    rating: 4.2,
    description: "N300 Wi-Fi range extender, external antennas, visual signal indicator.",
    competitors: [
      { name: "TechMart (Us)", price: 1299, isCurrent: true },
      { name: "Amazon", price: 1249, url: "https://www.amazon.in" },
      { name: "Flipkart", price: 1350, url: "https://www.flipkart.com" }
    ]
  },
  {
    id: 7,
    name: "Apple MacBook Air M2",
    category: "Laptops",
    price: 89900,
    originalPrice: 99900,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&q=80",
    rating: 4.9,
    description: "Apple M2 chip, 8GB Unified Memory, 256GB SSD, Liquid Retina display.",
    competitors: [
      { name: "TechMart (Us)", price: 89900, isCurrent: true },
      { name: "Amazon", price: 87900, url: "https://www.amazon.in" },
      { name: "Flipkart", price: 91000, url: "https://www.flipkart.com" }
    ]
  },
  {
    id: 8,
    name: "Sony WH-1000XM5 Headphones",
    category: "Audio",
    price: 26990,
    originalPrice: 34990,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80",
    rating: 4.8,
    description: "Industry-leading noise canceling headphones with Auto NC Optimizer.",
    competitors: [
      { name: "TechMart (Us)", price: 26990, isCurrent: true },
      { name: "Amazon", price: 27990, url: "https://www.amazon.in" },
      { name: "Flipkart", price: 28500, url: "https://www.flipkart.com" }
    ]
  },
  {
    id: 9,
    name: "Samsung Galaxy Tab S9 FE",
    category: "Mobile & Tablets",
    price: 34999,
    originalPrice: 44999,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&q=80",
    rating: 4.5,
    description: "10.9'' display, S Pen included, IP68 water resistance, 90Hz refresh rate.",
    competitors: [
      { name: "TechMart (Us)", price: 34999, isCurrent: true },
      { name: "Amazon", price: 33499, url: "https://www.amazon.in" },
      { name: "Flipkart", price: 35500, url: "https://www.flipkart.com" }
    ]
  },
  {
    id: 10,
    name: "Apple Watch Series 9",
    category: "Wearables",
    price: 41900,
    originalPrice: 44900,
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=400&q=80",
    rating: 4.7,
    description: "S9 SiP chip, Double tap gesture control, brighter display, ECG app.",
    competitors: [
      { name: "TechMart (Us)", price: 41900, isCurrent: true },
      { name: "Amazon", price: 40990, url: "https://www.amazon.in" },
      { name: "Flipkart", price: 42500, url: "https://www.flipkart.com" }
    ]
  },
  {
    id: 11,
    name: "TP-Link Archer AX55 Wi-Fi 6 Router",
    category: "Networking",
    price: 5499,
    originalPrice: 8999,
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&q=80",
    rating: 4.6,
    description: "Dual-Band Gigabit Wi-Fi 6 router up to 3000 Mbps with HomeShield.",
    competitors: [
      { name: "TechMart (Us)", price: 5499, isCurrent: true },
      { name: "Amazon", price: 5499, url: "https://www.amazon.in" },
      { name: "Flipkart", price: 5799, url: "https://www.flipkart.com" }
    ]
  },
  {
    id: 12,
    name: "Dell XPS 13 Laptop",
    category: "Laptops",
    price: 115000,
    originalPrice: 129000,
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&q=80",
    rating: 4.6,
    description: "Intel Evo Core i7, 16GB LPDDR5, 512GB SSD, 13.4'' FHD+ InfinityEdge.",
    competitors: [
      { name: "TechMart (Us)", price: 115000, isCurrent: true },
      { name: "Amazon", price: 112990, url: "https://www.amazon.in" },
      { name: "Flipkart", price: 117000, url: "https://www.flipkart.com" }
    ]
  },
  {
    id: 13,
    name: "JBL Flip 6 Bluetooth Speaker",
    category: "Audio",
    price: 9999,
    originalPrice: 13999,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&q=80",
    rating: 4.5,
    description: "2-way speaker system, IP67 waterproof & dustproof, 12 hours playtime.",
    competitors: [
      { name: "TechMart (Us)", price: 9999, isCurrent: true },
      { name: "Amazon", price: 9499, url: "https://www.amazon.in" },
      { name: "Flipkart", price: 10200, url: "https://www.flipkart.com" }
    ]
  },
  {
    id: 14,
    name: "Dyson V12 Detect Slim Vacuum",
    category: "Home Appliances",
    price: 45900,
    originalPrice: 55900,
    image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=400&q=80",
    rating: 4.8,
    description: "Laser reveals microscopic dust, piezo sensor measures dust particles.",
    competitors: [
      { name: "TechMart (Us)", price: 45900, isCurrent: true },
      { name: "Amazon", price: 45900, url: "https://www.amazon.in" },
      { name: "Flipkart", price: 47000, url: "https://www.flipkart.com" }
    ]
  },
  {
    id: 15,
    name: "Noise ColorFit Pro 5 Smartwatch",
    category: "Wearables",
    price: 3499,
    originalPrice: 7999,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80",
    rating: 4.3,
    description: "1.85'' AMOLED display, BT calling, SOS technology, 100+ sports modes.",
    competitors: [
      { name: "TechMart (Us)", price: 3499, isCurrent: true },
      { name: "Amazon", price: 3299, url: "https://www.amazon.in" },
      { name: "Flipkart", price: 3599, url: "https://www.flipkart.com" }
    ]
  }
];

// Application State Variables
let cart = [];
let activeCategory = 'all';
let userSalaries = [25000, 32000, 28000, 45000, 38000];
let isAuthenticated = false;

/* ==========================================================================
   INITIALIZATION (DOM-READY SAFE)
   ========================================================================== */
function initApp() {
  setupTabNavigation();
  renderProducts();
  renderSalariesList();
  runES6Filter();
  calculateSalary(); // Initialize Q3 salary calculator default
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}

/* ==========================================================================
   NAVIGATION TAB CONTROLLER
   ========================================================================== */
function setupTabNavigation() {
  const tabs = document.querySelectorAll(".nav-tab");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      document.querySelectorAll(".tab-pane").forEach(pane => pane.classList.remove("active"));

      tab.classList.add("active");
      const targetPane = document.getElementById(tab.dataset.tab);
      if (targetPane) targetPane.classList.add("active");
    });
  });
}

/* ==========================================================================
   E-COMMERCE STORE & PRICE COMPARISON RENDERER
   ========================================================================== */
function renderProducts() {
  const grid = document.getElementById("productsGrid");
  if (!grid) return;

  const searchInput = document.getElementById("searchInput");
  const sortSelect = document.getElementById("sortSelect");

  const searchQuery = searchInput ? searchInput.value.toLowerCase() : "";
  const sortOption = sortSelect ? sortSelect.value : "featured";

  // Filter products
  let filtered = products.filter(p => {
    const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery) || p.description.toLowerCase().includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  // Sort products
  if (sortOption === "low") filtered.sort((a, b) => a.price - b.price);
  if (sortOption === "high") filtered.sort((a, b) => b.price - a.price);
  if (sortOption === "rating") filtered.sort((a, b) => b.rating - a.rating);

  if (filtered.length === 0) {
    grid.innerHTML = `<div style="grid-column: 1/-1; text-align:center; padding:3rem; color: var(--text-muted);">
      <i class="fa-solid fa-box-open" style="font-size:3rem; margin-bottom:1rem;"></i>
      <p>No products found matching your search query.</p>
    </div>`;
    return;
  }

  grid.innerHTML = filtered.map(product => {
    // Check competitor lowest price
    const lowestCompetitor = product.competitors.reduce((min, curr) => curr.price < min.price ? curr : min, product.competitors[0]);
    const isCheaperElsewhere = lowestCompetitor.price < product.price;

    return `
      <div class="product-card">
        <span class="card-badge ${isCheaperElsewhere ? 'badge-cheaper' : 'badge-best'}">
          ${isCheaperElsewhere ? `<i class="fa-solid fa-triangle-exclamation"></i> Cheaper on \${lowestCompetitor.name}` : `<i class="fa-solid fa-circle-check"></i> Best Price Guaranteed`}
        </span>

        <div class="img-container">
          <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.onerror=null; this.src='${fallbackImage}';">
        </div>

        <h3 class="product-title">${product.name}</h3>
        <p class="product-desc">${product.description}</p>

        <div class="product-price-row">
          <span class="price-current">₹${product.price.toLocaleString('en-IN')}</span>
          <span class="price-original">₹${product.originalPrice.toLocaleString('en-IN')}</span>
        </div>

        ${isCheaperElsewhere ? `
          <div class="price-alert-box">
            <i class="fa-solid fa-circle-info"></i>
            <span>Available for <strong>₹${lowestCompetitor.price.toLocaleString('en-IN')}</strong> on${lowestCompetitor.name}.</span>
          </div>
        ` : `
          <div class="price-alert-box green">
            <i class="fa-solid fa-shield-check"></i>
            <span>TechMart offers the lowest market price!</span>
          </div>
        `}

        <div class="card-actions">
          <button class="btn btn-outline" onclick="openCompareModal(${product.id})">
            <i class="fa-solid fa-code-compare"></i> Compare
          </button>
          
          ${isCheaperElsewhere ? `
            <a href="\${lowestCompetitor.url}" target="_blank" class="btn btn-primary" style="background:#dc2626;">
              <i class="fa-solid fa-arrow-up-right-from-square"></i> Buy on \${lowestCompetitor.name}
            </a>
          ` : `
            <button class="btn btn-primary" onclick="addToCart(\${product.id})">
              <i class="fa-solid fa-cart-plus"></i> Add to Cart
            </button>
          `}
        </div>
      </div>
    `;
  }).join('');
}

function setCategory(cat, element) {
  activeCategory = cat;
  document.querySelectorAll(".cat-btn").forEach(btn => btn.classList.remove("active"));
  element.classList.add("active");
  renderProducts();
}

function filterProducts() {
  renderProducts();
}

/* ==========================================================================
   CART SYSTEM CONTROLLER
   ========================================================================== */
function toggleCart() {
  document.getElementById("cartDrawer").classList.toggle("active");
  document.getElementById("cartOverlay").classList.toggle("active");
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  const existingItem = cart.find(item => item.id === productId);

  if (existingItem) {
    existingItem.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  updateCartUI();
  toggleCart();
}

function updateCartQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter(i => i.id !== productId);
  }

  updateCartUI();
}

function updateCartUI() {
  const cartBody = document.getElementById("cartBody");
  const cartBadge = document.getElementById("cartBadge");
  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
  if (cartBadge) cartBadge.innerText = totalCount;

  if (!cartBody) return;

  if (cart.length === 0) {
    cartBody.innerHTML = `
      <div style="text-align:center; padding: 3rem 1rem; color: var(--text-muted);">
        <i class="fa-solid fa-basket-shopping" style="font-size:3rem; margin-bottom:1rem;"></i>
        <p>Your shopping cart is currently empty.</p>
      </div>
    `;
    document.getElementById("cartSubtotal").innerText = "₹0.00";
    document.getElementById("cartTax").innerText = "₹0.00";
    document.getElementById("cartTotal").innerText = "₹0.00";
    return;
  }

  let subtotal = 0;
  cartBody.innerHTML = cart.map(item => {
    const itemTotal = item.price * item.qty;
    subtotal += itemTotal;

    return `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" onerror="this.onerror=null; this.src='${fallbackImage}';">
        <div class="cart-item-info">
          <div class="cart-item-title">${item.name}</div>
          <div class="cart-item-price">₹${item.price.toLocaleString('en-IN')}</div>
          <div class="cart-qty-ctrl">
            <button class="qty-btn" onclick="updateCartQty(${item.id}, -1)">-</button>
            <span style="font-weight:700; font-size:0.85rem;">${item.qty}</span>
            <button class="qty-btn" onclick="updateCartQty(${item.id}, 1)">+</button>
          </div>
        </div>
        <div style="font-weight:800; font-size:0.9rem;">₹${itemTotal.toLocaleString('en-IN')}</div>
      </div>
    `;
  }).join('');

  const tax = subtotal * 0.18;
  const grandTotal = subtotal + tax;

  document.getElementById("cartSubtotal").innerText = `₹${subtotal.toLocaleString('en-IN')}`;
  document.getElementById("cartTax").innerText = `₹${tax.toLocaleString('en-IN')}`;
  document.getElementById("cartTotal").innerText = `₹${grandTotal.toLocaleString('en-IN')}`;
}

/* ==========================================================================
   MODALS: COMPARISON, AUTH, AND CHECKOUT
   ========================================================================== */
function openCompareModal(productId) {
  const product = products.find(p => p.id === productId);
  document.getElementById("compareTitle").innerText = `Price Comparison: ${product.name}`;

  const compareContent = document.getElementById("compareContent");
  compareContent.innerHTML = `
    <table class="compare-table">
      <thead>
        <tr>
          <th>Store Name</th>
          <th>Listed Price</th>
          <th>Status / Recommendation</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        ${product.competitors.map(comp => {
          const isBest = comp.price === Math.min(...product.competitors.map(c => c.price));
          return `
            <tr style="${comp.isCurrent ? 'background:#eff6ff;' : ''}">
              <td>
                <div class="store-pill">
                  <i class="fa-solid ${comp.isCurrent ? 'fa-store' : 'fa-globe'}"></i> ${comp.name}
                </div>
              </td>
              <td style="font-weight:800;">₹${comp.price.toLocaleString('en-IN')}</td>
              <td>
                ${isBest ? `<span style="color:var(--success); font-weight:700;"><i class="fa-solid fa-check-circle"></i> Lowest Price</span>` : `<span style="color:var(--text-muted);">Higher Price</span>`}
              </td>
              <td>
                ${comp.isCurrent ? `
                  <button class="btn btn-primary" onclick="addToCart(${product.id}); closeCompareModal();">Buy Here</button>
                ` : `
                  <a href="${comp.url}" target="_blank" class="btn btn-outline">Visit Store</a>
                `}
              </td>
            </tr>
          `;
        }).join('')}
      </tbody>
    </table>
  `;

  document.getElementById("compareModal").classList.add("active");
}

function closeCompareModal() {
  document.getElementById("compareModal").classList.remove("active");
}

function openAuthModal() {
  document.getElementById("authModal").classList.add("active");
}

function closeAuthModal() {
  document.getElementById("authModal").classList.remove("active");
}

function handleLogin() {
  const email = document.getElementById("loginEmail").value;
  isAuthenticated = true;
  document.getElementById("authBtnText").innerText = email.split('@')[0];
  closeAuthModal();
  alert(`Successfully signed in as ${email}`);
}

function openCheckoutModal() {
  if (cart.length === 0) {
    alert("Your cart is empty! Add products before checking out.");
    return;
  }
  
  const total = document.getElementById("cartTotal").innerText;
  document.getElementById("checkoutTotalAmount").innerText = total;
  toggleCart();
  document.getElementById("checkoutModal").classList.add("active");
}

function closeCheckoutModal() {
  document.getElementById("checkoutModal").classList.remove("active");
}

function processPayment() {
  const payBtn = document.getElementById("paySubmitBtn");
  payBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Processing Payment...`;
  payBtn.disabled = true;

  setTimeout(() => {
    alert("🎉 Order Payment Successful! Your order receipt has been sent to your registered email.");
    cart = [];
    updateCartUI();
    payBtn.innerHTML = `<i class="fa-solid fa-shield-halved"></i> Pay & Confirm Order`;
    payBtn.disabled = false;
    closeCheckoutModal();
  }, 1500);
}

/* ==========================================================================
   QUESTION 3: SALARY CALCULATOR LOGIC (JS)
   ========================================================================== */
function calculateSalary() {
  const basicInput = document.getElementById("basicSalary");
  const hraInput = document.getElementById("hraSalary");
  const transportInput = document.getElementById("transportSalary");

  if (!basicInput || !hraInput || !transportInput) return;

  const basic = parseFloat(basicInput.value) || 0;
  const hra = parseFloat(hraInput.value) || 0;
  const transport = parseFloat(transportInput.value) || 0;

  // Question 3 Requirement: Gross Salary = Basic Salary + HRA + Transport Allowance
  const grossSalary = basic + hra + transport;

  document.getElementById("grossSalaryResult").innerText = `₹${grossSalary.toLocaleString('en-IN')}`;
}

/* ==========================================================================
   QUESTION 4: ES6 SALARY FILTER LOGIC
   ========================================================================== */
function renderSalariesList() {
  const container = document.getElementById("currentSalariesDisplay");
  if (container) {
    container.innerHTML = userSalaries.map(s => `<span class="val-badge">₹${s.toLocaleString('en-IN')}</span>`).join('');
  }
}

function runES6Filter() {
  // Question 4 Requirement: ES6 Array filter method for salaries > 30,000
  const filteredSalaries = userSalaries.filter(salary => salary > 30000);

  const display = document.getElementById("filteredSalariesDisplay");
  if (!display) return;

  if (filteredSalaries.length === 0) {
    display.innerHTML = `<em>No salaries greater than ₹30,000 found.</em>`;
    return;
  }

  display.innerHTML = filteredSalaries.map(s => `<span class="val-badge passed">₹${s.toLocaleString('en-IN')}</span>`).join('');
}

function addCustomSalary() {
  const input = document.getElementById("newSalaryInput");
  if (!input) return;

  const val = Number.parseFloat(input.value);

  if (!Number.isNaN(val) && Number.isFinite(val)) {
    userSalaries.push(val);
    renderSalariesList();
    runES6Filter();
    input.value = "";
  }
}