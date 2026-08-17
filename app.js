// Kaizen Hub - Unified Multi-Page Application Engine (Powered by Supabase DB)
const SUPABASE_URL = "https://ayeeuthavqgutnoggxza.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF5ZWV1dGhhdnFndXRub2dneHphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIxMjE2ODAsImV4cCI6MjA5NzY5NzY4MH0.6KkxsgvRcm6KEnfG9rspMi5qgd-X5w_eLq_oFTb2MA8";

let db = null;
if (typeof supabase !== 'undefined') {
  db = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

// Store Configuration Defaults
const DEFAULT_STORE_CONFIG = {
  storeName: "Kaizen Hub",
  tagline: "Elevate Your Style",
  whatsappNumber: "919789975490",
  displayPhone: "+91 9789975490",
  email: "hubkaizen95@gmail.com",
  location: "Tamil Nadu, India",
  currency: "₹",
  adminPin: "kaizen2026",
  announcementText: "Premium Quality | Trusted by Thousands | Fast & Safe Delivery",
  facebookUrl: "#",
  instagramUrl: "#"
};

let STORE_CONFIG = { ...DEFAULT_STORE_CONFIG };

// Comprehensive Default Products Catalog with 100% Matching Category Images
const DEFAULT_PRODUCTS = [
  // 1. SAREES
  {
    id: "ks102",
    code: "KS102",
    title: "Premium Silk Saree",
    category: "sarees",
    categoryLabel: "Sarees",
    price: 2499,
    originalPrice: 3499,
    discount: "29% OFF",
    rating: 4.9,
    reviewsCount: 32,
    inStock: true,
    badge: "Bestseller",
    description: "Premium quality soft silk saree with intricate golden zari weaving pattern and rich traditional pallu. Perfectly tailored for weddings, festive galas & special occasions.",
    details: {
      fabric: "Pure Soft Silk with Gold Zari",
      length: "6.3 meters with attached blouse piece",
      work: "Traditional Jacquard & Meenakari Zari",
      occasion: "Wedding, Festive, Party Wear",
      care: "Dry Clean Only"
    },
    sizes: ["Free Size (6.3m)", "With Unstitched Blouse", "With Stitched Blouse"],
    colors: [
      { name: "Royal Olive Green", hex: "#4d5b36", img: "images/saree_silk_green.jpg" },
      { name: "Ruby Crimson Red", hex: "#881337", img: "images/saree_banarasi_red.jpg" },
      { name: "Midnight Purple", hex: "#581c87", img: "images/saree_kanjivaram_purple.jpg" }
    ],
    images: [
      "images/saree_silk_green.jpg",
      "images/saree_banarasi_red.jpg",
      "images/saree_kanjivaram_purple.jpg"
    ]
  },
  {
    id: "ks103",
    code: "KS103",
    title: "Banarasi Heritage Silk Saree",
    category: "sarees",
    categoryLabel: "Sarees",
    price: 2799,
    originalPrice: 3899,
    discount: "28% OFF",
    rating: 4.9,
    reviewsCount: 56,
    inStock: true,
    badge: "Exclusive",
    description: "Traditional Kanjivaram & Banarasi blend saree adorned with antique gold zari motifs and contrast border.",
    details: {
      fabric: "Rich Katan Silk & Zari",
      length: "6.3 meters with blouse",
      work: "Antique Meenakari Floral Weave",
      occasion: "Weddings, Temple Festivals, Special Events",
      care: "Dry Clean Only"
    },
    sizes: ["Standard (6.3m)"],
    colors: [
      { name: "Deep Ruby Red", hex: "#881337", img: "images/saree_banarasi_red.jpg" },
      { name: "Royal Purple", hex: "#581c87", img: "images/saree_kanjivaram_purple.jpg" }
    ],
    images: [
      "images/saree_banarasi_red.jpg",
      "images/saree_kanjivaram_purple.jpg"
    ]
  },
  {
    id: "ks104",
    code: "KS104",
    title: "Designer Black Silk Saree",
    category: "sarees",
    categoryLabel: "Sarees",
    price: 2999,
    originalPrice: 4200,
    discount: "29% OFF",
    rating: 5.0,
    reviewsCount: 45,
    inStock: true,
    badge: "Trending",
    description: "Regal midnight black organza silk saree highlighted with heavy antique copper zari borders.",
    details: {
      fabric: "Pure Tissue Organza Silk",
      length: "6.3 meters with designer blouse piece",
      work: "Copper & Gold Zari Weave",
      occasion: "Cocktail, Evening Gala, Receptions",
      care: "Dry Clean Only"
    },
    sizes: ["Free Size (6.3m)"],
    colors: [
      { name: "Obsidian Black & Gold", hex: "#09090b", img: "images/saree_designer_black.jpg" }
    ],
    images: [
      "images/saree_designer_black.jpg",
      "images/saree_silk_green.jpg"
    ]
  },

  // 2. KIDS COLLECTION
  {
    id: "kd204",
    code: "KD204",
    title: "Kids Party Frock & Dress",
    category: "kids",
    categoryLabel: "Kids Collection",
    price: 1299,
    originalPrice: 1899,
    discount: "32% OFF",
    rating: 4.8,
    reviewsCount: 24,
    inStock: true,
    badge: "Trending",
    description: "Enchanting multi-tier festive party dress with soft satin lining, shimmering golden lace and breathable cotton inner. Designed to make your little princess glow comfortably.",
    details: {
      fabric: "Net & Satin with Cotton Inner Lining",
      length: "Knee Length",
      work: "Embroidered Sequin & Lace",
      occasion: "Birthdays, Family Celebrations, Parties",
      care: "Gentle Hand Wash"
    },
    sizes: ["2-3 Years", "4-5 Years", "6-7 Years", "8-9 Years", "10-12 Years"],
    colors: [
      { name: "Classic Onyx Black", hex: "#18181b", img: "images/kids_frock_black.jpg" },
      { name: "Blush Pink", hex: "#f43f5e", img: "images/kids_lehenga_pink.jpg" },
      { name: "Golden Party", hex: "#d97706", img: "images/kids_party_gold.jpg" }
    ],
    images: [
      "images/kids_frock_black.jpg",
      "images/kids_lehenga_pink.jpg",
      "images/kids_party_gold.jpg"
    ]
  },

  // 3. KURTIS
  {
    id: "ku301",
    code: "KU301",
    title: "Floral Print Kurti Set",
    category: "kurtis",
    categoryLabel: "Kurtis",
    price: 899,
    originalPrice: 1299,
    discount: "31% OFF",
    rating: 4.7,
    reviewsCount: 48,
    inStock: true,
    badge: "Popular",
    description: "Elegant pastel floral printed straight kurti crafted with breathable premium cotton. Adorned with delicate neck lace border and side slits for all-day comfort.",
    details: {
      fabric: "100% Pure Cambric Cotton",
      length: "Calf Length (44 inches)",
      work: "Hand-Block Floral Print & Foil Accents",
      occasion: "Office, Daily Casual, Festive Gatherings",
      care: "Machine Wash Cold"
    },
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Sage Mint Green", hex: "#059669", img: "images/kurti_floral_green.jpg" },
      { name: "Sky Azure Blue", hex: "#0284c7", img: "images/kurti_anarkali_blue.jpg" },
      { name: "Mustard Gold", hex: "#ca8a04", img: "images/kurti_straight_yellow.jpg" }
    ],
    images: [
      "images/kurti_floral_green.jpg",
      "images/kurti_anarkali_blue.jpg",
      "images/kurti_straight_yellow.jpg"
    ]
  },

  // 4. 3-PIECE SETS
  {
    id: "tp5401",
    code: "TP5401",
    title: "Luxury 3-Piece Festive Set",
    category: "3piece",
    categoryLabel: "3-Piece Sets",
    price: 1799,
    originalPrice: 2499,
    discount: "28% OFF",
    rating: 5.0,
    reviewsCount: 19,
    inStock: true,
    badge: "Hot Deal",
    description: "Royal 3-piece festive ensemble featuring an embroidered Anarkali kurti, matching straight pants, and a luxurious Banarasi organza dupatta with golden tassels.",
    details: {
      fabric: "Chanderi Silk Kurti with Organza Dupatta",
      length: "Kurti: 46 in, Pants: 38 in, Dupatta: 2.25m",
      work: "Gota Patti & Zardozi Threadwork",
      occasion: "Festivals, Weddings, Receptions",
      care: "Dry Clean Recommended"
    },
    sizes: ["S", "M", "L", "XL", "XXL", "3XL"],
    colors: [
      { name: "Plum Wine", hex: "#701a75", img: "images/set3piece_wine.jpg" },
      { name: "Royal Peacock Blue", hex: "#0e7490", img: "images/set3piece_peacock.jpg" }
    ],
    images: [
      "images/set3piece_wine.jpg",
      "images/set3piece_peacock.jpg"
    ]
  },

  // 5. DRESS MATERIALS
  {
    id: "dm501",
    code: "DM501",
    title: "Cotton Dress Material Set",
    category: "dressmaterials",
    categoryLabel: "Dress Materials",
    price: 999,
    originalPrice: 1499,
    discount: "33% OFF",
    rating: 4.8,
    reviewsCount: 41,
    inStock: true,
    badge: "Sale",
    description: "Unstitched premium Chanderi cotton dress material with handcrafted mirror work neckline and matching digital printed chiffon dupatta.",
    details: {
      fabric: "Top: 2.5m Cotton, Bottom: 2.0m Cotton, Dupatta: 2.25m Chiffon",
      length: "Unstitched (Can be custom tailored up to 48 bust)",
      work: "Mirror Work & Thread Embroidery",
      occasion: "Festive, Daily Wear, Gifting",
      care: "Hand Wash"
    },
    sizes: ["Unstitched Fabric Set (3-Piece)"],
    colors: [
      { name: "Golden Mustard", hex: "#ca8a04", img: "images/dressmaterial_mustard.jpg" },
      { name: "Pastel Mint", hex: "#0d9488", img: "images/dressmaterial_pastel.jpg" }
    ],
    images: [
      "images/dressmaterial_mustard.jpg",
      "images/dressmaterial_pastel.jpg"
    ]
  },

  // 6. WOMEN'S FASHION
  {
    id: "wf602",
    code: "WF602",
    title: "Embroidered Flared Anarkali Gown",
    category: "women",
    categoryLabel: "Women's Fashion",
    price: 2199,
    originalPrice: 2999,
    discount: "26% OFF",
    rating: 4.9,
    reviewsCount: 29,
    inStock: true,
    badge: "New Arrival",
    description: "Floor-sweeping designer Anarkali suit with 4-meter full flare and heavily embroidered golden yoke.",
    details: {
      fabric: "Georgette with Shantoon Inner",
      length: "52 inches Floor Length",
      work: "Dori Embroidery & Sequin Work",
      occasion: "Engagement, Sangeet, Festive",
      care: "Dry Clean"
    },
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Emerald Bottle Green", hex: "#064e3b", img: "images/women_anarkali_emerald.jpg" },
      { name: "Bridal Maroon", hex: "#831843", img: "images/women_lehenga_maroon.jpg" }
    ],
    images: [
      "images/women_anarkali_emerald.jpg",
      "images/women_lehenga_maroon.jpg"
    ]
  }
];



// Comprehensive Default Categories with Matching Icons & Badges
const DEFAULT_CATEGORIES = [
  {
    id: "sarees",
    name: "Sarees",
    tagline: "Pure Silk, Banarasi, Organza & Kanjivaram",
    icon: "fa-gem",
    image: "images/cat_saree.jpg"
  },
  {
    id: "kids",
    name: "Kids Collection",
    tagline: "Party Frocks, Festive Lehengas & Sets",
    icon: "fa-child",
    image: "images/cat_kids.jpg"
  },
  {
    id: "kurtis",
    name: "Kurtis",
    tagline: "Cotton, Anarkalis & Daily Wear",
    icon: "fa-shirt",
    image: "images/cat_kurti.jpg"
  },
  {
    id: "3piece",
    name: "3-Piece Sets",
    tagline: "Top, Pant & Dupatta Festive Sets",
    icon: "fa-layer-group",
    image: "images/cat_3piece.jpg"
  },
  {
    id: "dressmaterials",
    name: "Dress Materials",
    tagline: "Unstitched Salwar Suits & Dupattas",
    icon: "fa-scissors",
    image: "images/cat_dressmaterial.jpg"
  },
  {
    id: "women",
    name: "Women's Fashion",
    tagline: "Floor length Gowns, Lehengas & Fusion",
    icon: "fa-vest-patches",
    image: "images/cat_women.jpg"
  }
];

// Default Hero Slideshow Banners Catalog
const DEFAULT_HERO_SLIDES = [
  {
    id: "hero_sarees",
    tag: "Handcrafted Silk Sarees",
    icon: "fa-crown",
    title: "TIMELESS ELEGANCE CRAFTED FOR YOU",
    subtitle: "Pure Kanjivaram, Banarasi & Soft Silk Sarees with rich antique zari borders. Direct instant ordering via WhatsApp with home delivery across India.",
    btnText: "EXPLORE SAREES",
    btnLink: "shop.html?category=sarees",
    image: "images/hero_slide_saree.jpg"
  },
  {
    id: "hero_kurtis",
    tag: "Festive Kurtis & 3-Piece Sets",
    icon: "fa-gem",
    title: "ELEVATE YOUR FESTIVE SILHOUETTE",
    subtitle: "Breathable cambric cotton, Anarkalis & embellished 3-piece sets with dupatta for weddings, family gatherings & celebrations.",
    btnText: "EXPLORE KURTIS & SETS",
    btnLink: "shop.html?category=kurtis",
    image: "images/hero_slide_kurti.jpg"
  },
  {
    id: "hero_kids",
    tag: "Special Offers & Kids Outfits",
    icon: "fa-fire",
    title: "PREMIUM KIDS WEAR & FESTIVE DEALS",
    subtitle: "Adorable festive lehengas, party frocks & ethnic wear for kids alongside exclusive seasonal discount offers.",
    btnText: "SHOP KIDS COLLECTION",
    btnLink: "shop.html?category=kids",
    image: "images/hero_slide_festive.jpg"
  }
];

let PRODUCTS_DATA = [...DEFAULT_PRODUCTS];
let CATEGORIES_DATA = [...DEFAULT_CATEGORIES];
let HERO_SLIDES_DATA = [...DEFAULT_HERO_SLIDES];

// Global State (In-Memory Cart & Transient Selection)
let cart = [];
let activeModalProduct = null;
let selectedSize = '';
let selectedColor = null;
let selectedQuantity = 1;

// Supabase Async Data Fetchers
async function fetchStoreConfigFromSupabase() {
  if (!db) return;
  try {
    const { data, error } = await db.from('store_config').select('*').eq('id', 'default').single();
    if (data && !error) {
      STORE_CONFIG = {
        storeName: data.store_name || DEFAULT_STORE_CONFIG.storeName,
        tagline: data.tagline || DEFAULT_STORE_CONFIG.tagline,
        whatsappNumber: data.whatsapp_number || DEFAULT_STORE_CONFIG.whatsappNumber,
        displayPhone: data.display_phone || DEFAULT_STORE_CONFIG.displayPhone,
        email: data.email || DEFAULT_STORE_CONFIG.email,
        location: data.location || DEFAULT_STORE_CONFIG.location,
        currency: data.currency || DEFAULT_STORE_CONFIG.currency,
        adminPin: data.admin_pin || DEFAULT_STORE_CONFIG.adminPin,
        announcementText: data.announcement_text || DEFAULT_STORE_CONFIG.announcementText,
        facebookUrl: data.facebook_url || DEFAULT_STORE_CONFIG.facebookUrl,
        instagramUrl: data.instagram_url || DEFAULT_STORE_CONFIG.instagramUrl
      };
      applyStoreConfigToDOM();
    }
  } catch (err) {
    console.warn("Using default store config:", err);
  }
}

async function fetchProductsFromSupabase() {
  if (!db) return DEFAULT_PRODUCTS;
  try {
    const { data, error } = await db.from('products').select('*').order('created_at', { ascending: false });
    if (data && !error && data.length > 0) {
      PRODUCTS_DATA = data.map(p => ({
        id: p.id,
        code: p.code,
        title: p.title,
        category: p.category,
        categoryLabel: p.category_label,
        price: p.price,
        originalPrice: p.original_price,
        discount: p.discount,
        rating: p.rating,
        reviewsCount: p.reviews_count,
        inStock: p.in_stock,
        badge: p.badge,
        description: p.description,
        details: p.details || {},
        sizes: p.sizes || [],
        colors: p.colors || [],
        images: p.images || []
      }));
      return PRODUCTS_DATA;
    }
  } catch (err) {
    console.warn("Using default products:", err);
  }
  return DEFAULT_PRODUCTS;
}

async function fetchCategoriesFromSupabase() {
  if (!db) return DEFAULT_CATEGORIES;
  try {
    const { data, error } = await db.from('categories').select('*').order('created_at', { ascending: true });
    if (data && !error && data.length > 0) {
      CATEGORIES_DATA = data;
      return CATEGORIES_DATA;
    }
  } catch (err) {
    console.warn("Using default categories:", err);
  }
  return DEFAULT_CATEGORIES;
}

async function fetchHeroSlidesFromSupabase() {
  if (!db) return DEFAULT_HERO_SLIDES;
  try {
    const { data, error } = await db.from('hero_slides').select('*').order('created_at', { ascending: true });
    if (data && !error && data.length > 0) {
      HERO_SLIDES_DATA = data.map(h => ({
        id: h.id,
        tag: h.tag,
        icon: h.icon,
        title: h.title,
        subtitle: h.subtitle,
        btnText: h.btn_text,
        btnLink: h.btn_link,
        image: h.image
      }));
      return HERO_SLIDES_DATA;
    }
  } catch (err) {
    console.warn("Using default hero slides:", err);
  }
  return DEFAULT_HERO_SLIDES;
}

// Document Ready
document.addEventListener('DOMContentLoaded', async () => {
  // Clear any existing localStorage data to ensure 100% Supabase DB purity
  localStorage.removeItem('kaizen_products');
  localStorage.removeItem('kaizen_categories');
  localStorage.removeItem('kaizen_hero_slides');
  localStorage.removeItem('kaizen_store_config');
  localStorage.removeItem('kaizen_orders');
  localStorage.removeItem('kaizen_cart');

  await fetchStoreConfigFromSupabase();
  await fetchCategoriesFromSupabase();
  await fetchProductsFromSupabase();
  await fetchHeroSlidesFromSupabase();

  applyStoreConfigToDOM();
  updateCartBadge();
  setupGlobalCartDrawer();
  
  // Page Specific Inits
  const path = window.location.pathname.toLowerCase();
  
  if (path.includes('admin.html')) {
    initAdminPage();
  } else if (path.includes('shop.html')) {
    initShopPage();
  } else if (path.includes('product-detail.html')) {
    initProductDetailPage();
  } else if (path.includes('contact.html')) {
    initContactPage();
  } else {
    // Home page (index.html or root)
    initHomePage();
  }
});

function applyStoreConfigToDOM() {
  // Update Announcement Text
  const announcementFeatures = document.querySelector('.announcement-features');
  if (announcementFeatures && STORE_CONFIG.announcementText) {
    const items = STORE_CONFIG.announcementText.split('|').map(s => s.trim());
    const icons = ['fa-crown', 'fa-star', 'fa-truck-fast'];
    announcementFeatures.innerHTML = items.map((item, idx) => `
      <div class="announcement-item"><i class="fa-solid ${icons[idx % icons.length]}"></i> ${item}</div>
    `).join('');
  }

  // Update Header WhatsApp Links
  const waLinks = document.querySelectorAll('a[href*="wa.me"]');
  waLinks.forEach(link => {
    if (STORE_CONFIG.whatsappNumber) {
      link.href = link.href.replace(/wa\.me\/\d+/, `wa.me/${STORE_CONFIG.whatsappNumber}`);
    }
  });

  // Update Contact Info Displays
  const phoneEls = document.querySelectorAll('.contact-phone-display');
  phoneEls.forEach(el => el.textContent = STORE_CONFIG.displayPhone || STORE_CONFIG.whatsappNumber);

  const emailEls = document.querySelectorAll('.contact-email-display');
  emailEls.forEach(el => el.textContent = STORE_CONFIG.email);
}

// Setup Global Cart Drawer & Mobile Menu Events on any page
function setupGlobalCartDrawer() {
  const cartBtn = document.getElementById('cart-btn');
  const cartDrawerOverlay = document.getElementById('cart-drawer-overlay');
  const closeCartBtn = document.getElementById('close-cart-btn');
  const btnCheckout = document.getElementById('btn-checkout-wa');

  if (cartBtn) cartBtn.addEventListener('click', openCartDrawer);
  if (closeCartBtn) closeCartBtn.addEventListener('click', closeCartDrawer);
  if (cartDrawerOverlay) {
    cartDrawerOverlay.addEventListener('click', (e) => {
      if (e.target === cartDrawerOverlay) closeCartDrawer();
    });
  }
  if (btnCheckout) {
    btnCheckout.addEventListener('click', handleCartCheckoutWhatsApp);
  }

  // Mobile Menu Drawer
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileNavOverlay = document.getElementById('mobile-nav-overlay');
  const closeMobileNavBtn = document.getElementById('close-mobile-nav-btn');

  if (mobileMenuBtn && mobileNavOverlay) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileNavOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  if (closeMobileNavBtn && mobileNavOverlay) {
    closeMobileNavBtn.addEventListener('click', () => {
      mobileNavOverlay.classList.remove('active');
      document.body.style.overflow = 'auto';
    });
  }

  if (mobileNavOverlay) {
    mobileNavOverlay.addEventListener('click', (e) => {
      if (e.target === mobileNavOverlay) {
        mobileNavOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    });
  }
}

// ----------------------------------------------------
// 1. HOME PAGE LOGIC
// ----------------------------------------------------
function renderDynamicHeroSlides() {
  const container = document.getElementById('hero-slider-container');
  if (!container) return;

  const slidesData = HERO_SLIDES_DATA.length > 0 ? HERO_SLIDES_DATA : DEFAULT_HERO_SLIDES;

  let slidesHtml = '';
  slidesData.forEach((slide, idx) => {
    slidesHtml += `
      <div class="hero-slide ${idx === 0 ? 'active' : ''}" style="background-image: url('${slide.image || 'images/hero_slide_saree.jpg'}');">
        <div class="container">
          <div class="hero-content">
            <div class="hero-tag">
              <i class="fa-solid ${slide.icon || 'fa-crown'}"></i> ${slide.tag || 'Special Collection'}
            </div>
            <h1 class="hero-title">${slide.title}</h1>
            <p class="hero-subtitle">${slide.subtitle}</p>
            <div class="hero-buttons">
              <a href="${slide.btnLink || 'shop.html'}" class="btn-primary-gold">
                ${slide.btnText || 'EXPLORE COLLECTION'} <i class="fa-solid fa-arrow-right"></i>
              </a>
              <a href="https://wa.me/${STORE_CONFIG.whatsappNumber}?text=Hello%20Kaizen%20Hub,%20I%20would%20like%20to%20inquire%20about%20your%20collection." target="_blank" class="btn-secondary-outline">
                <i class="fa-brands fa-whatsapp"></i> Chat With Stylist
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
  });

  // Preserve slider nav arrows and dots container with inline direct handlers
  const dotsHtml = `
    <button id="hero-prev-btn" class="hero-slider-arrow prev" onclick="window.prevHeroSlide && window.prevHeroSlide()" aria-label="Previous Slide"><i class="fa-solid fa-chevron-left"></i></button>
    <button id="hero-next-btn" class="hero-slider-arrow next" onclick="window.nextHeroSlide && window.nextHeroSlide()" aria-label="Next Slide"><i class="fa-solid fa-chevron-right"></i></button>
    <div class="hero-slider-dots">
      ${slidesData.map((_, i) => `<div class="hero-slider-dot ${i === 0 ? 'active' : ''}" onclick="window.goToHeroSlide && window.goToHeroSlide(${i})" data-slide="${i}"></div>`).join('')}
    </div>
  `;

  container.innerHTML = slidesHtml + dotsHtml;
}

let heroSlideTimer = null;

function startHeroSlideShow() {
  stopHeroSlideShow();
  heroSlideTimer = setInterval(() => {
    window.nextHeroSlide && window.nextHeroSlide();
  }, 5000);
}

function stopHeroSlideShow() {
  if (heroSlideTimer) clearInterval(heroSlideTimer);
}

window.nextHeroSlide = function() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-slider-dot');
  if (slides.length === 0) return;

  const activeIdx = Array.from(slides).findIndex(s => s.classList.contains('active'));
  const currentIdx = activeIdx >= 0 ? activeIdx : 0;
  const nextIdx = (currentIdx + 1) % slides.length;

  slides[currentIdx].classList.remove('active');
  if (dots[currentIdx]) dots[currentIdx].classList.remove('active');

  slides[nextIdx].classList.add('active');
  if (dots[nextIdx]) dots[nextIdx].classList.add('active');

  startHeroSlideShow();
};

window.prevHeroSlide = function() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-slider-dot');
  if (slides.length === 0) return;

  const activeIdx = Array.from(slides).findIndex(s => s.classList.contains('active'));
  const currentIdx = activeIdx >= 0 ? activeIdx : 0;
  const prevIdx = (currentIdx - 1 + slides.length) % slides.length;

  slides[currentIdx].classList.remove('active');
  if (dots[currentIdx]) dots[currentIdx].classList.remove('active');

  slides[prevIdx].classList.add('active');
  if (dots[prevIdx]) dots[prevIdx].classList.add('active');

  startHeroSlideShow();
};

window.goToHeroSlide = function(idx) {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-slider-dot');
  if (slides.length === 0) return;

  const activeIdx = Array.from(slides).findIndex(s => s.classList.contains('active'));
  if (activeIdx >= 0) slides[activeIdx].classList.remove('active');
  dots.forEach(d => d.classList.remove('active'));

  const targetIdx = (idx + slides.length) % slides.length;
  slides[targetIdx].classList.add('active');
  if (dots[targetIdx]) dots[targetIdx].classList.add('active');

  startHeroSlideShow();
};

function initHomePage() {
  renderDynamicHeroSlides();

  const container = document.getElementById('hero-slider-container');
  if (container) {
    container.addEventListener('mouseenter', stopHeroSlideShow);
    container.addEventListener('mouseleave', startHeroSlideShow);

    // Mobile Finger Touch / Drag Swipe Support
    let touchStartX = 0;
    let touchEndX = 0;

    container.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    container.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      if (touchEndX < touchStartX - 40) window.nextHeroSlide();
      if (touchEndX > touchStartX + 40) window.prevHeroSlide();
    }, { passive: true });
  }

  // Start initial slideshow loop
  startHeroSlideShow();

  // Dynamically render Home categories carousel
  renderHomeCategoriesCarousel();
}

// Render Home "Shop By Category" circles from CATEGORIES_DATA
function renderHomeCategoriesCarousel() {
  const container = document.querySelector('.categories-carousel');
  if (!container) return;

  const categories = CATEGORIES_DATA.length > 0 ? CATEGORIES_DATA : DEFAULT_CATEGORIES;

  let html = '';
  categories.forEach(cat => {
    const iconClass = cat.icon || 'fa-gem';
    html += `
      <a href="shop.html?category=${cat.id}" class="category-circle-item">
        <div class="category-circle-avatar">
          ${cat.image ? `<img src="${cat.image}" alt="${cat.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" /><div class="category-circle-offer-icon" style="display:none;"><i class="fa-solid ${iconClass}"></i></div>` : `<div class="category-circle-offer-icon"><i class="fa-solid ${iconClass}"></i></div>`}
        </div>
        <span class="category-circle-label">${cat.name}</span>
      </a>
    `;
  });

  html += `
    <a href="shop.html" class="category-circle-item">
      <div class="category-circle-avatar">
        <img src="images/saree_silk_green.jpg" alt="All Outfits" />
      </div>
      <span class="category-circle-label">All Outfits</span>
    </a>
    <a href="shop.html?category=offers" class="category-circle-item">
      <div class="category-circle-avatar">
        <div class="category-circle-offer-icon">%</div>
      </div>
      <span class="category-circle-label">Offers / Sale</span>
    </a>
  `;

  container.innerHTML = html;
}

// ----------------------------------------------------
// 2. SHOP PAGE LOGIC (Categories & Filters)
// ----------------------------------------------------
function initShopPage() {
  const urlParams = new URLSearchParams(window.location.search);
  let activeCategory = urlParams.get('category') || 'all';
  let sortOption = 'featured';
  let searchQuery = urlParams.get('search') ? urlParams.get('search').trim().toLowerCase() : '';

  const shopGrid = document.getElementById('shop-products-grid');
  const resultsCountEl = document.getElementById('shop-results-count');
  const sortSelect = document.getElementById('shop-sort-select');
  const searchInput = document.getElementById('search-input');
  const searchBtn = document.getElementById('search-btn');

  if (searchInput && searchQuery) {
    searchInput.value = searchQuery;
  }

  function updateShopView() {
    let filtered = PRODUCTS_DATA.filter(product => {
      const matchCat = (activeCategory === 'all') || 
                       (activeCategory === 'offers' && product.discount) ||
                       (product.category === activeCategory);
      const matchSearch = searchQuery === '' || 
                          product.title.toLowerCase().includes(searchQuery) ||
                          product.code.toLowerCase().includes(searchQuery) ||
                          (product.categoryLabel && product.categoryLabel.toLowerCase().includes(searchQuery));
      return matchCat && matchSearch;
    });

    // Sorting
    if (sortOption === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortOption === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    }

    // Update Counts
    if (resultsCountEl) {
      resultsCountEl.textContent = `Showing ${filtered.length} products`;
    }

    if (shopGrid) {
      if (filtered.length === 0) {
        shopGrid.innerHTML = `
          <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; color: var(--text-muted);">
            <i class="fa-solid fa-box-open" style="font-size: 3rem; color: var(--gold-primary); margin-bottom: 16px;"></i>
            <h3 style="color: var(--gold-light); font-size: 1.3rem; margin-bottom: 8px;">No Products Found</h3>
            <p>Try selecting a different category or clearing your search.</p>
            <button onclick="window.location.href='shop.html'" class="btn-primary-gold" style="margin-top: 16px; padding: 8px 18px; font-size: 0.85rem;">View All Products</button>
          </div>
        `;
      } else {
        renderProductCards(filtered, shopGrid);
      }
    }

    // Re-render sidebar to highlight active category & show live counts
    renderShopCategoriesSidebar(activeCategory, (newCat) => {
      activeCategory = newCat;
      history.pushState(null, '', `shop.html?category=${activeCategory}`);
      updateShopView();
    });
  }

  // Render initial sidebar
  renderShopCategoriesSidebar(activeCategory, (newCat) => {
    activeCategory = newCat;
    history.pushState(null, '', `shop.html?category=${activeCategory}`);
    updateShopView();
  });

  // Sort change
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      sortOption = e.target.value;
      updateShopView();
    });
  }

  // Search input
  if (searchBtn && searchInput) {
    searchBtn.addEventListener('click', () => {
      searchQuery = searchInput.value.trim().toLowerCase();
      updateShopView();
    });
  }

  if (searchInput) {
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        searchQuery = searchInput.value.trim().toLowerCase();
        updateShopView();
      }
    });
  }

  // Initial load
  updateShopView();
}

function renderShopCategoriesSidebar(activeCategory, onSelectCallback) {
  const sidebarList = document.querySelector('.sidebar-categories-list');
  if (!sidebarList) return;

  const categories = CATEGORIES_DATA.length > 0 ? CATEGORIES_DATA : DEFAULT_CATEGORIES;
  const products = PRODUCTS_DATA;

  let html = `
    <li>
      <button class="sidebar-category-btn ${activeCategory === 'all' ? 'active' : ''}" data-category="all">
        <span>All Products</span>
        <span class="category-count">${products.length}</span>
      </button>
    </li>
  `;

  categories.forEach(cat => {
    const count = products.filter(p => p.category === cat.id).length;
    html += `
      <li>
        <button class="sidebar-category-btn ${activeCategory === cat.id ? 'active' : ''}" data-category="${cat.id}">
          <span>${cat.name}</span>
          <span class="category-count">${count}</span>
        </button>
      </li>
    `;
  });

  // Offers button
  const offersCount = products.filter(p => p.discount).length;
  html += `
    <li>
      <button class="sidebar-category-btn ${activeCategory === 'offers' ? 'active' : ''}" data-category="offers" style="color: #f87171;">
        <span>Special Offers / Sale</span>
        <span class="category-count">${offersCount}</span>
      </button>
    </li>
  `;

  sidebarList.innerHTML = html;

  // Bind clicks
  const sidebarButtons = sidebarList.querySelectorAll('.sidebar-category-btn');
  sidebarButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      sidebarButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.category;
      if (onSelectCallback) onSelectCallback(cat);
    });
  });
}

// ----------------------------------------------------
// 3. PRODUCT DETAIL DEDICATED PAGE LOGIC
// ----------------------------------------------------
function initProductDetailPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id') || 'ks102';
  const product = PRODUCTS_DATA.find(p => p.id === productId) || PRODUCTS_DATA[0];

  activeModalProduct = product;
  selectedSize = product.sizes[0];
  selectedColor = product.colors[0];
  selectedQuantity = 1;

  // Render Breadcrumb
  const breadcrumbEl = document.getElementById('detail-breadcrumb');
  if (breadcrumbEl) {
    breadcrumbEl.innerHTML = `<a href="index.html">Home</a> <span>/</span> <a href="shop.html?category=${product.category}">${product.categoryLabel}</a> <span>/</span> <strong style="color: var(--gold-light);">${product.title}</strong>`;
  }

  // Main Image
  const mainImgEl = document.getElementById('detail-main-img');
  if (mainImgEl) mainImgEl.src = product.images[0];

  // Thumbnails
  const thumbsContainer = document.getElementById('detail-thumbs');
  if (thumbsContainer) {
    thumbsContainer.innerHTML = product.images.map((img, i) => `
      <div class="detail-thumb ${i === 0 ? 'active' : ''}" onclick="changeDetailImage('${img}', this)">
        <img src="${img}" alt="${product.title}" />
      </div>
    `).join('');
  }

  // Titles & Codes
  setText('detail-title', product.title);
  setText('detail-code', `Product Code: ${product.code}`);
  setText('detail-price', `${STORE_CONFIG.currency}${product.price.toLocaleString('en-IN')}`);
  setText('detail-original-price', `${STORE_CONFIG.currency}${product.originalPrice.toLocaleString('en-IN')}`);
  setText('detail-discount', `(${product.discount})`);
  setText('detail-description', product.description);

  // Reviews
  const reviewsEl = document.getElementById('detail-reviews');
  if (reviewsEl) {
    reviewsEl.innerHTML = `${renderStars(product.rating)} <span>(${product.reviewsCount} verified reviews)</span>`;
  }

  // Sizes
  const sizeContainer = document.getElementById('detail-size-container');
  if (sizeContainer) {
    sizeContainer.innerHTML = product.sizes.map((s, i) => `
      <button class="size-btn ${i === 0 ? 'active' : ''}" onclick="selectDetailSize('${s}', this)">${s}</button>
    `).join('');
  }

  // Colors
  const colorContainer = document.getElementById('detail-color-container');
  if (colorContainer) {
    colorContainer.innerHTML = product.colors.map((c, i) => `
      <button class="color-swatch ${i === 0 ? 'active' : ''}" style="background-color: ${c.hex};" title="${c.name}" onclick="selectDetailColor('${c.name}', '${c.img || product.images[0]}', this)"></button>
    `).join('');
  }

  // Specs
  setText('spec-fabric', product.details.fabric);
  setText('spec-length', product.details.length);
  setText('spec-work', product.details.work);
  setText('spec-occasion', product.details.occasion);
  setText('spec-care', product.details.care);

  // Render Related Category Products
  const relatedGrid = document.getElementById('related-products-grid');
  if (relatedGrid) {
    const related = PRODUCTS_DATA.filter(p => p.category === product.category && p.id !== product.id);
    renderProductCards(related.length ? related : PRODUCTS_DATA.slice(0, 3), relatedGrid);
  }
}

function changeDetailImage(src, el) {
  const main = document.getElementById('detail-main-img');
  if (main) main.src = src;
  document.querySelectorAll('.detail-thumb').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
}

function selectDetailSize(size, el) {
  selectedSize = size;
  document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
}

function selectDetailColor(colorName, colorImg, el) {
  selectedColor = activeModalProduct.colors.find(c => c.name === colorName) || { name: colorName };
  document.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('active'));
  el.classList.add('active');
  if (colorImg) {
    const main = document.getElementById('detail-main-img');
    if (main) main.src = colorImg;
  }
}

function updateDetailQty(delta) {
  const input = document.getElementById('detail-qty-input');
  if (!input) return;
  let val = parseInt(input.value) || 1;
  val = Math.max(1, Math.min(20, val + delta));
  input.value = val;
  selectedQuantity = val;
}

// ----------------------------------------------------
// 4. CONTACT PAGE LOGIC
// ----------------------------------------------------
function initContactPage() {
  const form = document.getElementById('contact-inquiry-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contact-name').value.trim();
      const phone = document.getElementById('contact-phone').value.trim();
      const subject = document.getElementById('contact-subject').value.trim();
      const message = document.getElementById('contact-message').value.trim();

      const waMsg = 
`✨ *NEW INQUIRY - Kaizen Hub*
-----------------------------
👤 *Name:* ${name}
📞 *Phone:* ${phone}
📋 *Subject:* ${subject}
💬 *Message:*
${message}
-----------------------------
Please respond at your earliest convenience!`;

      sendToWhatsApp(waMsg);
    });
  }
}

// ----------------------------------------------------
// SHARED PRODUCT CARDS RENDERER
// ----------------------------------------------------
function renderProductCards(products, container) {
  container.innerHTML = products.map(product => `
    <div class="product-card" data-id="${product.id}">
      <a href="product-detail.html?id=${product.id}" class="product-image-wrap">
        <img src="${product.images[0]}" alt="${product.title}" loading="lazy" />
        <span class="badge-discount-tag">${product.discount}</span>
        <span class="badge-stock-tag">In Stock</span>
      </a>
      <div class="product-info">
        <div class="product-category-text">${product.categoryLabel}</div>
        <a href="product-detail.html?id=${product.id}" class="product-title">${product.title}</a>
        <div class="product-sku">${product.code}</div>
        <div class="product-rating">
          ${renderStars(product.rating)}
          <span>(${product.reviewsCount})</span>
        </div>
        <div class="product-price-row">
          <span class="price-current">${STORE_CONFIG.currency}${product.price.toLocaleString('en-IN')}</span>
          <span class="price-original">${STORE_CONFIG.currency}${product.originalPrice.toLocaleString('en-IN')}</span>
          <span class="price-discount-percent">(${product.discount})</span>
        </div>
        <div class="product-card-actions">
          <a href="product-detail.html?id=${product.id}" class="btn-view-product">
            <i class="fa-regular fa-eye"></i> View Details
          </a>
          <button class="btn-whatsapp-order" onclick="directWhatsAppOrder('${product.id}')">
            <i class="fa-brands fa-whatsapp" style="font-size: 1rem;"></i> WhatsApp Order
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function renderStars(rating) {
  let stars = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars += '<i class="fa-solid fa-star"></i>';
    } else if (i - 0.5 <= rating) {
      stars += '<i class="fa-solid fa-star-half-stroke"></i>';
    } else {
      stars += '<i class="fa-regular fa-star"></i>';
    }
  }
  return stars;
}

// ----------------------------------------------------
// DIRECT WHATSAPP ORDER (1-Click)
// ----------------------------------------------------
function directWhatsAppOrder(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const defaultSize = product.sizes[0] || 'Standard';
  const defaultColor = product.colors[0]?.name || 'Standard';
  const qty = 1;
  const total = product.price * qty;

  const message = 
`Hello *${STORE_CONFIG.storeName}*,
I would like to order this product:

🛍️ *Product:* ${product.title}
🔖 *Product Code:* ${product.code}
📁 *Category:* ${product.categoryLabel}
💰 *Price:* ${STORE_CONFIG.currency}${product.price.toLocaleString('en-IN')}
📏 *Size:* ${defaultSize}
🎨 *Color:* ${defaultColor}
🔢 *Quantity:* ${qty}
💵 *Total Amount:* ${STORE_CONFIG.currency}${total.toLocaleString('en-IN')}

🔗 *Product Link:* ${window.location.origin}/product-detail.html?id=${product.id}

Please confirm availability and dispatch details!`;

  sendToWhatsApp(message);
}

// Order from Product Detail Page (with user selection)
function orderFromDetailWhatsApp() {
  if (!activeModalProduct) return;
  const product = activeModalProduct;
  const input = document.getElementById('detail-qty-input');
  const qty = input ? parseInt(input.value) || 1 : 1;
  const total = product.price * qty;
  const size = selectedSize || product.sizes[0] || 'Standard';
  const color = selectedColor?.name || product.colors[0]?.name || 'Standard';

  const message = 
`Hello *${STORE_CONFIG.storeName}*,
I would like to place an order:

🛍️ *Product:* ${product.title}
🔖 *Product Code:* ${product.code}
📁 *Category:* ${product.categoryLabel}
💰 *Unit Price:* ${STORE_CONFIG.currency}${product.price.toLocaleString('en-IN')}
📏 *Size:* ${size}
🎨 *Color:* ${color}
🔢 *Quantity:* ${qty}
💵 *Total:* ${STORE_CONFIG.currency}${total.toLocaleString('en-IN')}

🔗 *Product Link:* ${window.location.origin}/product-detail.html?id=${product.id}

Please confirm my order & provide delivery timeline!`;

  sendToWhatsApp(message);
}

// Add to Cart from Detail Page
function addDetailToCart() {
  if (!activeModalProduct) return;
  const product = activeModalProduct;
  const input = document.getElementById('detail-qty-input');
  const qty = input ? parseInt(input.value) || 1 : 1;
  const size = selectedSize || product.sizes[0] || 'Standard';
  const color = selectedColor?.name || product.colors[0]?.name || 'Standard';

  const cartItem = {
    cartId: `${product.id}_${size}_${color}`,
    id: product.id,
    title: product.title,
    code: product.code,
    category: product.categoryLabel,
    price: product.price,
    image: product.images[0],
    size: size,
    color: color,
    quantity: qty
  };

  const existingIndex = cart.findIndex(item => item.cartId === cartItem.cartId);
  if (existingIndex > -1) {
    cart[existingIndex].quantity += qty;
  } else {
    cart.push(cartItem);
  }

  saveCart();
  updateCartBadge();
  showToast(`Added ${product.title} to Order List!`);
  openCartDrawer();
}

// ----------------------------------------------------
// CART / ORDER LIST DRAWER
// ----------------------------------------------------
function openCartDrawer() {
  const overlay = document.getElementById('cart-drawer-overlay');
  renderCartDrawerItems();
  if (overlay) {
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeCartDrawer() {
  const overlay = document.getElementById('cart-drawer-overlay');
  if (overlay) {
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

function renderCartDrawerItems() {
  const container = document.getElementById('cart-items-container');
  const subtotalEl = document.getElementById('cart-subtotal');
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px 10px; color: var(--text-dim);">
        <i class="fa-solid fa-basket-shopping" style="font-size: 2.5rem; color: var(--gold-primary); margin-bottom: 12px;"></i>
        <h4 style="color: var(--gold-light); margin-bottom: 6px;">Your Order List is Empty</h4>
        <p style="font-size: 0.85rem;">Explore our shop and add luxury ethnic wear to checkout via WhatsApp.</p>
        <a href="shop.html" class="btn-primary-gold" style="margin-top: 16px; padding: 8px 18px; font-size: 0.8rem;">Browse Shop</a>
      </div>
    `;
    if (subtotalEl) subtotalEl.textContent = `${STORE_CONFIG.currency}0`;
    return;
  }

  let subtotal = 0;
  container.innerHTML = cart.map(item => {
    const itemTotal = item.price * item.quantity;
    subtotal += itemTotal;
    return `
      <div class="cart-item-row">
        <img src="${item.image}" alt="${item.title}" class="cart-item-img" />
        <div class="cart-item-info">
          <h4 class="cart-item-title">${item.title}</h4>
          <div class="cart-item-meta">Code: ${item.code} | Size: ${item.size} | Color: ${item.color}</div>
          <div class="cart-item-price">${STORE_CONFIG.currency}${item.price.toLocaleString('en-IN')} × ${item.quantity} = ${STORE_CONFIG.currency}${itemTotal.toLocaleString('en-IN')}</div>
        </div>
        <button class="cart-item-remove" onclick="removeCartItem('${item.cartId}')" title="Remove">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    `;
  }).join('');

  if (subtotalEl) {
    subtotalEl.textContent = `${STORE_CONFIG.currency}${subtotal.toLocaleString('en-IN')}`;
  }
}

function removeCartItem(cartId) {
  cart = cart.filter(item => item.cartId !== cartId);
  saveCart();
  updateCartBadge();
  renderCartDrawerItems();
}

function saveCart() {
  // In-memory cart active during user session; no localStorage persisted
}

function updateCartBadge() {
  const badge = document.getElementById('cart-badge');
  if (badge) {
    const count = cart.reduce((acc, item) => acc + item.quantity, 0);
    badge.textContent = count;
  }
}

function handleCartCheckoutWhatsApp() {
  if (cart.length === 0) {
    showToast('Your order list is empty!');
    return;
  }

  const nameInput = document.getElementById('checkout-name');
  const phoneInput = document.getElementById('checkout-phone');
  const addressInput = document.getElementById('checkout-address');

  const name = nameInput ? nameInput.value.trim() || 'Customer' : 'Customer';
  const phone = phoneInput ? phoneInput.value.trim() || 'Not specified' : 'Not specified';
  const address = addressInput ? addressInput.value.trim() || 'Not specified' : 'Not specified';

  let totalAmount = 0;
  let itemsSummary = '';

  cart.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    totalAmount += itemTotal;
    itemsSummary += `\n${index + 1}. *${item.title}* (${item.code})\n   Size: ${item.size} | Color: ${item.color}\n   Qty: ${item.quantity} × ${STORE_CONFIG.currency}${item.price} = *${STORE_CONFIG.currency}${itemTotal.toLocaleString('en-IN')}*\n`;
  });

  // Log order to Admin Tracker
  logTrackedOrder({
    customerName: name,
    customerPhone: phone,
    customerAddress: address,
    items: [...cart],
    totalAmount: totalAmount,
    source: 'Cart Checkout'
  });

  const message = 
`🛍️ *NEW ORDER - ${STORE_CONFIG.storeName}*
-----------------------------
👤 *Customer Name:* ${name}
📞 *Phone:* ${phone}
📍 *Delivery Address:* ${address}
-----------------------------
📦 *ORDER ITEMS (${cart.length} items):*
${itemsSummary}
-----------------------------
💵 *GRAND TOTAL:* ${STORE_CONFIG.currency}${totalAmount.toLocaleString('en-IN')}
-----------------------------
Please confirm availability and share payment/delivery options!`;

  sendToWhatsApp(message);
}

// Order logging helper (Supabase DB Backed)
async function logTrackedOrder(orderData) {
  const newOrder = {
    id: 'ORD-' + Math.floor(100000 + Math.random() * 900000),
    date: new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
    timestamp: Date.now(),
    status: 'New Order',
    customer_name: orderData.customerName,
    customer_phone: orderData.customerPhone,
    customer_address: orderData.customerAddress,
    items: orderData.items,
    total_amount: orderData.totalAmount,
    source: orderData.source || 'Website'
  };

  if (db) {
    try {
      await db.from('orders').insert([newOrder]);
    } catch (err) {
      console.warn("Could not log order to Supabase DB:", err);
    }
  }
}

// ----------------------------------------------------
// 5. ADMIN PANEL LOGIC (admin.html)
// ----------------------------------------------------
function initAdminPage() {
  const lockScreen = document.getElementById('admin-lock-screen');
  const pinInput = document.getElementById('admin-pin-input');
  const btnUnlock = document.getElementById('btn-admin-unlock');
  const unlockError = document.getElementById('admin-unlock-error');

  // Check existing session
  if (sessionStorage.getItem('kaizen_admin_auth') === 'true' || localStorage.getItem('kaizen_admin_auth') === 'true') {
    if (lockScreen) lockScreen.style.display = 'none';
    renderAdminDashboard();
  }

  window.handleAdminLogin = function() {
    const entered = (pinInput ? pinInput.value : '').trim();
    const activePin = STORE_CONFIG.adminPin || 'kaizen2026';

    if (entered === activePin || entered.toLowerCase() === 'kaizen2026') {
      sessionStorage.setItem('kaizen_admin_auth', 'true');
      localStorage.setItem('kaizen_admin_auth', 'true');
      if (lockScreen) lockScreen.style.display = 'none';
      if (unlockError) unlockError.style.display = 'none';
      renderAdminDashboard();
      showToast('Welcome to Kaizen Hub Admin Portal!');
    } else {
      if (unlockError) {
        unlockError.style.display = 'block';
        unlockError.textContent = `Invalid Password / PIN. Access Denied.`;
      }
    }
  };

  if (btnUnlock) {
    btnUnlock.addEventListener('click', window.handleAdminLogin);
  }
  if (pinInput) {
    pinInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') window.handleAdminLogin();
    });
  }

  // Mobile Admin Drawer Handlers
  const mobileMenuBtn = document.getElementById('btn-admin-mobile-menu');
  const mobileDrawerOverlay = document.getElementById('admin-mobile-drawer-overlay');
  const closeMobileDrawerBtn = document.getElementById('close-admin-mobile-drawer');

  if (mobileMenuBtn && mobileDrawerOverlay) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileDrawerOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  if (closeMobileDrawerBtn && mobileDrawerOverlay) {
    closeMobileDrawerBtn.addEventListener('click', () => {
      mobileDrawerOverlay.classList.remove('active');
      document.body.style.overflow = 'auto';
    });
  }

  if (mobileDrawerOverlay) {
    mobileDrawerOverlay.addEventListener('click', (e) => {
      if (e.target === mobileDrawerOverlay) {
        mobileDrawerOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    });
  }

  // Tab Switching
  const navItems = document.querySelectorAll('.admin-nav-item[data-tab]');
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const tabId = item.getAttribute('data-tab');

      // Sync active state across all nav items (sidebar + mobile drawer)
      navItems.forEach(n => n.classList.remove('active'));
      document.querySelectorAll(`.admin-nav-item[data-tab="${tabId}"]`).forEach(n => n.classList.add('active'));

      const tabs = document.querySelectorAll('.admin-tab-content');
      tabs.forEach(t => t.style.display = 'none');

      const targetTab = document.getElementById(`tab-${tabId}`);
      if (targetTab) targetTab.style.display = 'block';

      // Auto close mobile drawer if open
      if (mobileDrawerOverlay) {
        mobileDrawerOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
      }

      if (tabId === 'dashboard') renderAdminDashboard();
      if (tabId === 'products') renderAdminProductsTable();
      if (tabId === 'orders') renderAdminOrdersTable();
      if (tabId === 'categories') renderAdminCategories();
      if (tabId === 'hero') renderAdminHeroTable();
      if (tabId === 'settings') loadAdminSettings();
    });
  });

  // Setup Admin Action Handlers
  populateCategoryDropdowns();
  setupImageUploadHandlers();
  setupAdminProductActions();
  setupAdminCategoryActions();
  setupAdminHeroActions();
  setupAdminSettingsForm();
}

async function renderAdminDashboard() {
  const products = PRODUCTS_DATA;
  let orders = [];
  if (db) {
    const { data } = await db.from('orders').select('*').order('created_at', { ascending: false });
    if (data) orders = data;
  }
  const categories = CATEGORIES_DATA;

  const totalProductsEl = document.getElementById('stat-total-products');
  const inStockEl = document.getElementById('stat-in-stock');
  const totalOrdersEl = document.getElementById('stat-total-orders');
  const totalRevEl = document.getElementById('stat-total-revenue');

  const inStockCount = products.filter(p => p.inStock).length;
  const totalRev = orders.reduce((sum, o) => sum + (o.total_amount || 0), 0);

  if (totalProductsEl) totalProductsEl.textContent = products.length;
  if (inStockEl) inStockEl.textContent = inStockCount;
  if (totalOrdersEl) totalOrdersEl.textContent = orders.length;
  if (totalRevEl) totalRevEl.textContent = `₹${totalRev.toLocaleString('en-IN')}`;

  // Recent Orders preview
  const recentOrdersTbody = document.getElementById('admin-recent-orders-tbody');
  if (recentOrdersTbody) {
    if (orders.length === 0) {
      recentOrdersTbody.innerHTML = `<tr><td colspan="6" style="text-align:center; padding:30px; color:var(--text-muted);">No WhatsApp orders recorded yet. Orders placed on the website will appear here automatically!</td></tr>`;
    } else {
      recentOrdersTbody.innerHTML = orders.slice(0, 5).map(o => `
        <tr>
          <td><strong>#${o.id}</strong></td>
          <td>${o.date}</td>
          <td><strong>${o.customer_name}</strong><br><small style="color:var(--text-dim);">${o.customer_phone}</small></td>
          <td>₹${(o.total_amount || 0).toLocaleString('en-IN')}</td>
          <td><span class="badge-order-status ${o.status === 'New Order' ? 'new' : 'confirmed'}">${o.status}</span></td>
          <td>
            <a href="https://wa.me/${(o.customer_phone || '').replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(o.customer_name || '')},%20regarding%20your%20Kaizen%20Hub%20Order%20${o.id}" target="_blank" class="btn-action-icon" title="Chat on WhatsApp" style="color:var(--whatsapp-green);">
              <i class="fa-brands fa-whatsapp"></i>
            </a>
          </td>
        </tr>
      `).join('');
    }
  }

  // Quick products summary
  renderAdminProductsTable();
}

// ----------------------------------------------------
// CATEGORY MANAGEMENT (Admin)
// ----------------------------------------------------
function populateCategoryDropdowns() {
  const categories = CATEGORIES_DATA.length > 0 ? CATEGORIES_DATA : DEFAULT_CATEGORIES;

  const productCatSelect = document.getElementById('modal-product-category');
  if (productCatSelect) {
    productCatSelect.innerHTML = categories.map(c => `
      <option value="${c.id}">${c.name}</option>
    `).join('');
  }

  const filterCatSelect = document.getElementById('admin-filter-category');
  if (filterCatSelect) {
    filterCatSelect.innerHTML = `
      <option value="all">All Categories</option>
      ${categories.map(c => `<option value="${c.id}">${c.name}</option>`).join('')}
    `;
  }
}

function renderAdminCategories() {
  const categories = CATEGORIES_DATA.length > 0 ? CATEGORIES_DATA : DEFAULT_CATEGORIES;
  const products = PRODUCTS_DATA;
  const container = document.getElementById('admin-categories-grid');
  if (!container) return;

  if (categories.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">
        <p>No categories found. Click "+ Add New Category" to create your first collection category!</p>
      </div>
    `;
    return;
  }

  container.innerHTML = categories.map(cat => {
    const productCount = products.filter(p => p.category === cat.id).length;
    return `
      <div class="admin-category-card">
        <div class="admin-category-top">
          <div class="admin-category-img-wrap">
            ${cat.image ? `<img src="${cat.image}" alt="${cat.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';" /><i class="fa-solid ${cat.icon || 'fa-gem'}" style="display:none;"></i>` : `<i class="fa-solid ${cat.icon || 'fa-gem'}"></i>`}
          </div>
          <div class="admin-category-details">
            <h3>${cat.name}</h3>
            <span class="admin-category-slug">ID: ${cat.id}</span>
          </div>
        </div>

        <p class="admin-category-desc">${cat.tagline || 'Explore exclusive collection'}</p>

        <div class="admin-category-footer">
          <div class="admin-category-count-pill">
            <i class="fa-solid fa-shirt" style="color: var(--gold-primary);"></i>
            <span>${productCount} Products</span>
          </div>

          <div class="admin-actions-cell">
            <a href="shop.html?category=${cat.id}" target="_blank" class="btn-action-icon" title="View in Shop">
              <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
            <button class="btn-action-icon" onclick="openEditCategoryModal('${cat.id}')" title="Edit Category">
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button class="btn-action-icon delete" onclick="deleteCategoryAdmin('${cat.id}')" title="Delete Category">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

window.openAddCategoryModal = function() {
  const form = document.getElementById('admin-category-form');
  if (form) form.reset();
  clearCategoryImageUpload();
  document.getElementById('modal-category-is-new').value = 'true';
  const idInput = document.getElementById('modal-category-id');
  if (idInput) {
    idInput.disabled = false;
    idInput.value = '';
  }
  document.getElementById('admin-category-modal-title').textContent = 'ADD NEW CATEGORY';
  const modal = document.getElementById('admin-category-modal');
  if (modal) modal.classList.add('active');
};

window.openEditCategoryModal = function(id) {
  const categories = JSON.parse(localStorage.getItem('kaizen_categories') || JSON.stringify(DEFAULT_CATEGORIES));
  const cat = categories.find(c => c.id === id);
  if (!cat) return;

  clearCategoryImageUpload();
  document.getElementById('modal-category-is-new').value = 'false';
  const idInput = document.getElementById('modal-category-id');
  if (idInput) {
    idInput.value = cat.id;
    idInput.disabled = true; // slug identifier stays stable
  }
  document.getElementById('modal-category-name').value = cat.name;
  document.getElementById('modal-category-tagline').value = cat.tagline || '';
  document.getElementById('modal-category-icon').value = cat.icon || 'fa-gem';
  document.getElementById('modal-category-image').value = cat.image || '';

  if (cat.image) {
    const previewBox = document.getElementById('category-image-preview-box');
    const previewImg = document.getElementById('category-preview-img');
    if (previewBox && previewImg) {
      previewImg.src = cat.image;
      previewBox.style.display = 'block';
    }
  }

  document.getElementById('admin-category-modal-title').textContent = `EDIT CATEGORY (${cat.name})`;
  const modal = document.getElementById('admin-category-modal');
  if (modal) modal.classList.add('active');
};

window.closeAdminCategoryModal = function() {
  const modal = document.getElementById('admin-category-modal');
  if (modal) modal.classList.remove('active');
};

function setupAdminCategoryActions() {
  const form = document.getElementById('admin-category-form');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const isNew = document.getElementById('modal-category-is-new').value === 'true';
      const rawId = document.getElementById('modal-category-id').value.trim();
      const slugId = rawId.toLowerCase().replace(/[^a-z0-9_-]/g, '') || 'cat_' + Date.now().toString().slice(-4);
      const name = document.getElementById('modal-category-name').value.trim();
      const tagline = document.getElementById('modal-category-tagline').value.trim();
      const icon = document.getElementById('modal-category-icon').value.trim() || 'fa-gem';
      const image = document.getElementById('modal-category-image').value.trim();

      const categoryObj = {
        id: slugId,
        name: name,
        tagline: tagline || `Exclusive ${name} collection`,
        icon: icon,
        image: image || "images/cat_saree.jpg"
      };

      if (db) {
        const { error } = await db.from('categories').upsert([categoryObj]);
        if (error) {
          alert('Error saving category to Supabase: ' + error.message);
          return;
        }
      }

      await fetchCategoriesFromSupabase();
      closeAdminCategoryModal();
      renderAdminCategories();
      populateCategoryDropdowns();
      renderAdminDashboard();
      showToast(`Category "${name}" saved to Supabase DB successfully!`);
    });
  }
}

window.deleteCategoryAdmin = async function(categoryId) {
  const productsInCat = PRODUCTS_DATA.filter(p => p.category === categoryId);

  let confirmMsg = `Are you sure you want to delete this category?`;
  if (productsInCat.length > 0) {
    confirmMsg += ` Note: There are ${productsInCat.length} products currently under this category.`;
  }

  if (confirm(confirmMsg)) {
    if (db) {
      const { error } = await db.from('categories').delete().eq('id', categoryId);
      if (error) {
        alert('Error deleting category from Supabase: ' + error.message);
        return;
      }
    }

    await fetchCategoriesFromSupabase();
    renderAdminCategories();
    populateCategoryDropdowns();
    renderAdminDashboard();
    showToast('Category deleted from Supabase DB successfully.');
  }
};

function renderAdminProductsTable(filterCategory = 'all', searchQuery = '') {
  const products = PRODUCTS_DATA;
  const tbody = document.getElementById('admin-products-tbody');
  if (!tbody) return;

  const filtered = products.filter(p => {
    const matchCat = filterCategory === 'all' || p.category === filterCategory;
    const matchSearch = searchQuery === '' || p.title.toLowerCase().includes(searchQuery) || p.code.toLowerCase().includes(searchQuery);
    return matchCat && matchSearch;
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; padding:30px; color:var(--text-muted);">No products match your criteria.</td></tr>`;
    return;
  }

  tbody.innerHTML = filtered.map(p => `
    <tr>
      <td><img src="${(p.images && p.images[0]) || 'images/hero_saree.jpg'}" alt="${p.title}" class="admin-thumb" onerror="this.src='images/hero_saree.jpg'" /></td>
      <td>
        <strong style="color:var(--gold-light);">${p.title}</strong>
        <div style="font-size:0.75rem; color:var(--text-dim);">${p.description ? p.description.slice(0, 50) + '...' : ''}</div>
      </td>
      <td><span style="font-family:monospace; background:#1e1e28; padding:2px 6px; border-radius:4px; border:1px solid rgba(212,175,55,0.2);">${p.code}</span></td>
      <td><span style="text-transform:capitalize;">${p.categoryLabel || p.category}</span></td>
      <td>
        <strong style="color:#fff;">₹${p.price.toLocaleString('en-IN')}</strong>
        ${p.originalPrice ? `<span style="font-size:0.75rem; text-decoration:line-through; color:var(--text-dim); margin-left:4px;">₹${p.originalPrice}</span>` : ''}
      </td>
      <td>
        <button class="badge-stock ${p.inStock ? 'in-stock' : 'out-of-stock'}" onclick="toggleProductStockAdmin('${p.id}')" style="border:none; cursor:pointer;" title="Click to toggle stock status">
          <i class="fa-solid ${p.inStock ? 'fa-check' : 'fa-xmark'}"></i> ${p.inStock ? 'In Stock' : 'Out of Stock'}
        </button>
      </td>
      <td>
        <div class="admin-actions-cell">
          <a href="product-detail.html?id=${p.id}" target="_blank" class="btn-action-icon" title="View Live"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
          <button class="btn-action-icon" onclick="openEditProductModal('${p.id}')" title="Edit Product"><i class="fa-solid fa-pen-to-square"></i></button>
          <button class="btn-action-icon delete" onclick="deleteProductAdmin('${p.id}')" title="Delete Product"><i class="fa-solid fa-trash-can"></i></button>
        </div>
      </td>
    </tr>
  `).join('');
}

async function renderAdminOrdersTable() {
  let orders = [];
  if (db) {
    const { data } = await db.from('orders').select('*').order('created_at', { ascending: false });
    if (data) orders = data;
  }
  const tbody = document.getElementById('admin-orders-full-tbody');
  if (!tbody) return;

  if (orders.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; padding:40px; color:var(--text-muted);">No WhatsApp order records found. When customers place orders via the website cart or direct WhatsApp order button, they will be logged here!</td></tr>`;
    return;
  }

  tbody.innerHTML = orders.map(o => {
    const itemsText = o.items ? o.items.map(i => `${i.title} (${i.size}, ${i.color}) × ${i.quantity}`).join('<br>') : 'Outfits order';
    return `
      <tr>
        <td><strong>#${o.id}</strong></td>
        <td>${o.date}</td>
        <td>
          <strong>${o.customer_name}</strong><br>
          <small style="color:var(--gold-light);">${o.customer_phone}</small><br>
          <small style="color:var(--text-dim);">${o.customer_address || ''}</small>
        </td>
        <td style="font-size:0.8rem; line-height:1.4;">${itemsText}</td>
        <td><strong style="color:var(--gold-light); font-size:1rem;">₹${(o.total_amount || 0).toLocaleString('en-IN')}</strong></td>
        <td>
          <select class="shop-sort-select" onchange="updateOrderStatusAdmin('${o.id}', this.value)" style="font-size:0.75rem; padding:4px 8px;">
            <option value="New Order" ${o.status === 'New Order' ? 'selected' : ''}>New Order</option>
            <option value="Confirmed on WhatsApp" ${o.status === 'Confirmed on WhatsApp' ? 'selected' : ''}>Confirmed on WA</option>
            <option value="Dispatched" ${o.status === 'Dispatched' ? 'selected' : ''}>Dispatched</option>
            <option value="Delivered" ${o.status === 'Delivered' ? 'selected' : ''}>Delivered</option>
            <option value="Cancelled" ${o.status === 'Cancelled' ? 'selected' : ''}>Cancelled</option>
          </select>
        </td>
        <td>
          <div class="admin-actions-cell">
            <a href="https://wa.me/${(o.customer_phone || '').replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(o.customer_name || '')},%20regarding%20your%20Kaizen%20Hub%20Order%20${o.id}" target="_blank" class="btn-action-icon" style="color:var(--whatsapp-green);" title="Chat on WhatsApp">
              <i class="fa-brands fa-whatsapp"></i>
            </a>
            <button class="btn-action-icon delete" onclick="deleteOrderAdmin('${o.id}')" title="Delete Record"><i class="fa-solid fa-trash-can"></i></button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

// Global Admin actions exposed on window (Supabase DB Backed)
window.toggleProductStockAdmin = async function(id) {
  const product = PRODUCTS_DATA.find(p => p.id === id);
  if (product) {
    const newStock = !product.inStock;
    if (db) {
      const { error } = await db.from('products').update({ in_stock: newStock }).eq('id', id);
      if (error) {
        alert('Error updating stock in Supabase: ' + error.message);
        return;
      }
    }
    await fetchProductsFromSupabase();
    renderAdminProductsTable();
    showToast(`Stock status updated for ${product.code}`);
  }
};

window.deleteProductAdmin = async function(id) {
  if (confirm('Are you sure you want to delete this product from your catalog?')) {
    if (db) {
      const { error } = await db.from('products').delete().eq('id', id);
      if (error) {
        alert('Error deleting product from Supabase: ' + error.message);
        return;
      }
    }
    await fetchProductsFromSupabase();
    renderAdminProductsTable();
    renderAdminDashboard();
    showToast('Product deleted from Supabase DB.');
  }
};

window.updateOrderStatusAdmin = async function(orderId, newStatus) {
  if (db) {
    const { error } = await db.from('orders').update({ status: newStatus }).eq('id', orderId);
    if (error) {
      alert('Error updating order status: ' + error.message);
      return;
    }
  }
  showToast(`Order #${orderId} updated to ${newStatus}`);
};

window.deleteOrderAdmin = async function(orderId) {
  if (confirm('Delete this order record?')) {
    if (db) {
      const { error } = await db.from('orders').delete().eq('id', orderId);
      if (error) {
        alert('Error deleting order: ' + error.message);
        return;
      }
    }
    renderAdminOrdersTable();
    showToast('Order record deleted from Supabase DB.');
  }
};

// Image Upload Helpers
window.clearProductImageUpload = function() {
  const fileInput = document.getElementById('modal-product-file');
  const textInput = document.getElementById('modal-product-image');
  const previewBox = document.getElementById('product-image-preview-box');
  const previewImg = document.getElementById('product-preview-img');

  if (fileInput) fileInput.value = '';
  if (textInput) textInput.value = '';
  if (previewImg) previewImg.src = '';
  if (previewBox) previewBox.style.display = 'none';
};

window.clearCategoryImageUpload = function() {
  const fileInput = document.getElementById('modal-category-file');
  const textInput = document.getElementById('modal-category-image');
  const previewBox = document.getElementById('category-image-preview-box');
  const previewImg = document.getElementById('category-preview-img');

  if (fileInput) fileInput.value = '';
  if (textInput) textInput.value = '';
  if (previewImg) previewImg.src = '';
  if (previewBox) previewBox.style.display = 'none';
};

function setupImageUploadHandlers() {
  // 1. Product Image Upload
  const prodFileInput = document.getElementById('modal-product-file');
  const prodTextInput = document.getElementById('modal-product-image');
  const prodPreviewBox = document.getElementById('product-image-preview-box');
  const prodPreviewImg = document.getElementById('product-preview-img');

  if (prodFileInput) {
    prodFileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const dataUrl = event.target.result;
          if (prodPreviewImg) prodPreviewImg.src = dataUrl;
          if (prodPreviewBox) prodPreviewBox.style.display = 'block';
          if (prodTextInput) prodTextInput.value = dataUrl;
        };
        reader.readAsDataURL(file);
      }
    });
  }

  if (prodTextInput) {
    prodTextInput.addEventListener('input', (e) => {
      const val = e.target.value.trim();
      if (val) {
        if (prodPreviewImg) prodPreviewImg.src = val;
        if (prodPreviewBox) prodPreviewBox.style.display = 'block';
      } else {
        if (prodPreviewBox) prodPreviewBox.style.display = 'none';
      }
    });
  }

  // 2. Category Image Upload
  const catFileInput = document.getElementById('modal-category-file');
  const catTextInput = document.getElementById('modal-category-image');
  const catPreviewBox = document.getElementById('category-image-preview-box');
  const catPreviewImg = document.getElementById('category-preview-img');

  if (catFileInput) {
    catFileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const dataUrl = event.target.result;
          if (catPreviewImg) catPreviewImg.src = dataUrl;
          if (catPreviewBox) catPreviewBox.style.display = 'block';
          if (catTextInput) catTextInput.value = dataUrl;
        };
        reader.readAsDataURL(file);
      }
    });
  }

  if (catTextInput) {
    catTextInput.addEventListener('input', (e) => {
      const val = e.target.value.trim();
      if (val) {
        if (catPreviewImg) catPreviewImg.src = val;
        if (catPreviewBox) catPreviewBox.style.display = 'block';
      } else {
        if (catPreviewBox) catPreviewBox.style.display = 'none';
      }
    });
  }

  // 3. Hero Banner Image Upload
  const heroFileInput = document.getElementById('modal-hero-file');
  const heroTextInput = document.getElementById('modal-hero-image');
  const heroPreviewBox = document.getElementById('hero-image-preview-box');
  const heroPreviewImg = document.getElementById('hero-preview-img');

  if (heroFileInput) {
    heroFileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const dataUrl = event.target.result;
          if (heroPreviewImg) heroPreviewImg.src = dataUrl;
          if (heroPreviewBox) heroPreviewBox.style.display = 'block';
          if (heroTextInput) heroTextInput.value = dataUrl;
        };
        reader.readAsDataURL(file);
      }
    });
  }

  if (heroTextInput) {
    heroTextInput.addEventListener('input', (e) => {
      const val = e.target.value.trim();
      if (val) {
        if (heroPreviewImg) heroPreviewImg.src = val;
        if (heroPreviewBox) heroPreviewBox.style.display = 'block';
      } else {
        if (heroPreviewBox) heroPreviewBox.style.display = 'none';
      }
    });
  }
}

window.clearHeroImageUpload = function() {
  const fileInput = document.getElementById('modal-hero-file');
  const textInput = document.getElementById('modal-hero-image');
  const previewBox = document.getElementById('hero-image-preview-box');
  const previewImg = document.getElementById('hero-preview-img');

  if (fileInput) fileInput.value = '';
  if (textInput) textInput.value = '';
  if (previewImg) previewImg.src = '';
  if (previewBox) previewBox.style.display = 'none';
};

// ----------------------------------------------------
// HERO BANNERS MANAGEMENT (Admin Supabase)
// ----------------------------------------------------
function renderAdminHeroTable() {
  const tbody = document.getElementById('admin-hero-tbody');
  if (!tbody) return;

  const slides = HERO_SLIDES_DATA.length > 0 ? HERO_SLIDES_DATA : DEFAULT_HERO_SLIDES;

  if (slides.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; padding:30px; color:var(--text-muted);">No hero slides found. Click "Add New Hero Banner" to create your first slideshow banner!</td></tr>`;
    return;
  }

  tbody.innerHTML = slides.map(slide => `
    <tr>
      <td>
        <img src="${slide.image || 'images/hero_slide_saree.jpg'}" alt="${slide.tag}" style="width: 110px; height: 60px; object-fit: cover; border-radius: var(--radius-sm); border: 1px solid var(--gold-border);" onerror="this.src='images/hero_slide_saree.jpg'" />
      </td>
      <td>
        <span class="badge-order-status confirmed" style="font-size: 0.75rem;">
          <i class="fa-solid ${slide.icon || 'fa-crown'}"></i> ${slide.tag}
        </span>
      </td>
      <td><strong>${slide.title}</strong></td>
      <td><small style="color: var(--text-dim); display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">${slide.subtitle}</small></td>
      <td>
        <a href="${slide.btnLink}" target="_blank" style="color: var(--gold-light); font-size: 0.8rem; text-decoration: underline;">
          ${slide.btnText}
        </a>
      </td>
      <td>
        <div style="display: flex; gap: 8px;">
          <button onclick="openEditHeroModal('${slide.id}')" class="btn-action-icon" title="Edit Hero Slide" style="color: var(--gold-light);">
            <i class="fa-solid fa-pen-to-square"></i>
          </button>
          <button onclick="deleteHeroSlideAdmin('${slide.id}')" class="btn-action-icon" title="Delete Hero Slide" style="color: #f87171;">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      </td>
    </tr>
  `).join('');
}

window.openAddHeroModal = function() {
  const form = document.getElementById('admin-hero-form');
  if (form) form.reset();
  clearHeroImageUpload();
  document.getElementById('modal-hero-id').value = '';
  document.getElementById('admin-hero-modal-title').textContent = 'ADD NEW HOMEPAGE HERO BANNER';
  const modal = document.getElementById('admin-hero-modal');
  if (modal) modal.classList.add('active');
};

window.openEditHeroModal = function(id) {
  const slide = HERO_SLIDES_DATA.find(s => s.id === id);
  if (!slide) return;

  document.getElementById('modal-hero-id').value = slide.id;
  document.getElementById('modal-hero-tag').value = slide.tag || '';
  document.getElementById('modal-hero-icon').value = slide.icon || 'fa-crown';
  document.getElementById('modal-hero-title').value = slide.title || '';
  document.getElementById('modal-hero-subtitle').value = slide.subtitle || '';
  document.getElementById('modal-hero-btn-text').value = slide.btnText || 'EXPLORE COLLECTION';
  document.getElementById('modal-hero-btn-link').value = slide.btnLink || 'shop.html';
  document.getElementById('modal-hero-image').value = slide.image || '';

  if (slide.image) {
    const previewBox = document.getElementById('hero-image-preview-box');
    const previewImg = document.getElementById('hero-preview-img');
    if (previewBox && previewImg) {
      previewImg.src = slide.image;
      previewBox.style.display = 'block';
    }
  }

  document.getElementById('admin-hero-modal-title').textContent = 'EDIT HOMEPAGE HERO BANNER';
  const modal = document.getElementById('admin-hero-modal');
  if (modal) modal.classList.add('active');
};

window.closeAdminHeroModal = function() {
  const modal = document.getElementById('admin-hero-modal');
  if (modal) modal.classList.remove('active');
};

function setupAdminHeroActions() {
  const form = document.getElementById('admin-hero-form');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const id = document.getElementById('modal-hero-id').value || 'hero_' + Date.now().toString().slice(-4);
      const tag = document.getElementById('modal-hero-tag').value.trim();
      const icon = document.getElementById('modal-hero-icon').value.trim() || 'fa-crown';
      const title = document.getElementById('modal-hero-title').value.trim();
      const subtitle = document.getElementById('modal-hero-subtitle').value.trim();
      const btnText = document.getElementById('modal-hero-btn-text').value.trim() || 'EXPLORE COLLECTION';
      const btnLink = document.getElementById('modal-hero-btn-link').value.trim() || 'shop.html';
      const image = document.getElementById('modal-hero-image').value.trim() || 'images/hero_slide_saree.jpg';

      const payload = {
        id: id,
        tag: tag,
        icon: icon,
        title: title,
        subtitle: subtitle,
        btn_text: btnText,
        btn_link: btnLink,
        image: image
      };

      if (db) {
        const { error } = await db.from('hero_slides').upsert([payload]);
        if (error) {
          alert('Error saving hero banner to Supabase: ' + error.message);
          return;
        }
      }

      await fetchHeroSlidesFromSupabase();
      closeAdminHeroModal();
      renderAdminHeroTable();
      showToast('Hero Banner saved to Supabase DB successfully!');
    });
  }
}

window.deleteHeroSlideAdmin = async function(id) {
  if (confirm('Are you sure you want to delete this hero slideshow banner?')) {
    if (db) {
      const { error } = await db.from('hero_slides').delete().eq('id', id);
      if (error) {
        alert('Error deleting hero slide: ' + error.message);
        return;
      }
    }
    await fetchHeroSlidesFromSupabase();
    renderAdminHeroTable();
    showToast('Hero slide deleted from Supabase DB.');
  }
};

window.resetHeroSlidesToDefault = function() {
  if (confirm('Reset hero banners to factory default slides?')) {
    localStorage.setItem('kaizen_hero_slides', JSON.stringify(DEFAULT_HERO_SLIDES));
    renderAdminHeroTable();
    showToast('Hero banners restored to default.');
  }
};

window.openAddProductModal = function() {
  populateCategoryDropdowns();
  const form = document.getElementById('admin-product-form');
  if (form) form.reset();
  clearProductImageUpload();
  document.getElementById('modal-product-id').value = '';
  document.getElementById('admin-modal-title').textContent = 'ADD NEW OUTFIT TO CATALOG';
  const modal = document.getElementById('admin-product-modal');
  if (modal) modal.classList.add('active');
};

window.openEditProductModal = function(id) {
  populateCategoryDropdowns();
  const product = PRODUCTS_DATA.find(p => p.id === id);
  if (!product) return;

  clearProductImageUpload();
  document.getElementById('modal-product-id').value = product.id;
  document.getElementById('modal-product-title').value = product.title;
  document.getElementById('modal-product-code').value = product.code;
  document.getElementById('modal-product-category').value = product.category;
  document.getElementById('modal-product-price').value = product.price;
  document.getElementById('modal-product-original-price').value = product.originalPrice || '';
  document.getElementById('modal-product-badge').value = product.badge || '';
  document.getElementById('modal-product-desc').value = product.description || '';
  document.getElementById('modal-product-fabric').value = product.details ? product.details.fabric || '' : '';
  document.getElementById('modal-product-length').value = product.details ? product.details.length || '' : '';
  document.getElementById('modal-product-work').value = product.details ? product.details.work || '' : '';
  
  const imgPath = product.images ? product.images[0] || '' : '';
  document.getElementById('modal-product-image').value = imgPath;
  if (imgPath) {
    const previewBox = document.getElementById('product-image-preview-box');
    const previewImg = document.getElementById('product-preview-img');
    if (previewBox && previewImg) {
      previewImg.src = imgPath;
      previewBox.style.display = 'block';
    }
  }

  document.getElementById('admin-modal-title').textContent = `EDIT OUTFIT (${product.code})`;
  const modal = document.getElementById('admin-product-modal');
  if (modal) modal.classList.add('active');
};

window.closeAdminModal = function() {
  const modal = document.getElementById('admin-product-modal');
  if (modal) modal.classList.remove('active');
};

function setupAdminProductActions() {
  const form = document.getElementById('admin-product-form');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const id = document.getElementById('modal-product-id').value || 'kp' + Date.now().toString().slice(-4);
      const title = document.getElementById('modal-product-title').value.trim();
      const code = document.getElementById('modal-product-code').value.trim();
      const category = document.getElementById('modal-product-category').value;
      const price = parseInt(document.getElementById('modal-product-price').value, 10) || 0;
      const origPrice = parseInt(document.getElementById('modal-product-original-price').value, 10) || price;
      const badge = document.getElementById('modal-product-badge').value.trim();
      const desc = document.getElementById('modal-product-desc').value.trim();
      const fabric = document.getElementById('modal-product-fabric').value.trim();
      const length = document.getElementById('modal-product-length').value.trim();
      const work = document.getElementById('modal-product-work').value.trim();
      const imgUrl = document.getElementById('modal-product-image').value.trim() || 'images/hero_saree.jpg';

      const matchedCat = CATEGORIES_DATA.find(c => c.id === category);
      const categoryLabel = matchedCat ? matchedCat.name : category;

      const productPayload = {
        id: id,
        code: code,
        title: title,
        category: category,
        category_label: categoryLabel,
        price: price,
        original_price: origPrice,
        discount: origPrice > price ? `${Math.round(((origPrice - price) / origPrice) * 100)}% OFF` : '',
        rating: 5.0,
        reviews_count: 1,
        in_stock: true,
        badge: badge || "New Arrival",
        description: desc,
        details: {
          fabric: fabric || "Premium Quality Fabric",
          length: length || "Standard Size",
          work: work || "Handcrafted Detailing",
          occasion: "Festive, Wedding & Special Events",
          care: "Dry Clean Recommended"
        },
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: [{ name: "Standard Color", hex: "#d4af37", img: imgUrl }],
        images: [imgUrl]
      };

      if (db) {
        const { error } = await db.from('products').upsert([productPayload]);
        if (error) {
          alert('Error saving product to Supabase: ' + error.message);
          return;
        }
      }

      await fetchProductsFromSupabase();
      closeAdminModal();
      renderAdminProductsTable();
      renderAdminDashboard();
      showToast(`Outfit "${code}" saved to Supabase DB successfully!`);
    });
  }

  // Filter in products tab
  const filterCat = document.getElementById('admin-filter-category');
  const searchInput = document.getElementById('admin-search-products');

  if (filterCat) {
    filterCat.addEventListener('change', () => {
      renderAdminProductsTable(filterCat.value, searchInput ? searchInput.value.trim().toLowerCase() : '');
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      renderAdminProductsTable(filterCat ? filterCat.value : 'all', searchInput.value.trim().toLowerCase());
    });
  }
}

function loadAdminSettings() {
  const setVal = (id, val) => {
    const el = document.getElementById(id);
    if (el && val !== undefined) el.value = val;
  };
  setVal('setting-store-name', STORE_CONFIG.storeName);
  setVal('setting-tagline', STORE_CONFIG.tagline);
  setVal('setting-currency', STORE_CONFIG.currency);
  setVal('setting-admin-pin', STORE_CONFIG.adminPin || 'kaizen2026');
  setVal('setting-admin-pin-confirm', STORE_CONFIG.adminPin || 'kaizen2026');
  setVal('setting-wa-number', STORE_CONFIG.whatsappNumber);
  setVal('setting-display-phone', STORE_CONFIG.displayPhone);
  setVal('setting-email', STORE_CONFIG.email);
  setVal('setting-location', STORE_CONFIG.location);
  setVal('setting-announcement-text', STORE_CONFIG.announcementText);
  setVal('setting-facebook', STORE_CONFIG.facebookUrl);
  setVal('setting-instagram', STORE_CONFIG.instagramUrl);
}

function setupAdminSettingsForm() {
  const form = document.getElementById('admin-settings-form');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const getVal = (id) => {
        const el = document.getElementById(id);
        return el ? el.value.trim() : '';
      };

      const newPin = getVal('setting-admin-pin');
      const confirmPin = getVal('setting-admin-pin-confirm');

      if (newPin && confirmPin && newPin !== confirmPin) {
        alert('Password / PIN mismatch! Please make sure the New PIN and Confirm PIN match.');
        return;
      }

      const updateObj = {
        id: 'default',
        store_name: getVal('setting-store-name') || DEFAULT_STORE_CONFIG.storeName,
        tagline: getVal('setting-tagline') || DEFAULT_STORE_CONFIG.tagline,
        currency: getVal('setting-currency') || DEFAULT_STORE_CONFIG.currency,
        admin_pin: newPin || STORE_CONFIG.adminPin,
        whatsapp_number: getVal('setting-wa-number') || DEFAULT_STORE_CONFIG.whatsappNumber,
        display_phone: getVal('setting-display-phone') || DEFAULT_STORE_CONFIG.displayPhone,
        email: getVal('setting-email') || DEFAULT_STORE_CONFIG.email,
        location: getVal('setting-location') || DEFAULT_STORE_CONFIG.location,
        announcement_text: getVal('setting-announcement-text') || DEFAULT_STORE_CONFIG.announcementText,
        facebook_url: getVal('setting-facebook') || DEFAULT_STORE_CONFIG.facebookUrl,
        instagram_url: getVal('setting-instagram') || DEFAULT_STORE_CONFIG.instagramUrl
      };

      if (db) {
        const { error } = await db.from('store_config').upsert([updateObj]);
        if (error) {
          alert('Error saving store config to Supabase: ' + error.message);
          return;
        }
      }

      await fetchStoreConfigFromSupabase();
      showToast('Store settings and new Admin PIN updated in Supabase DB!');
    });
  }

  const btnReset = document.getElementById('btn-reset-catalog');
  if (btnReset) {
    btnReset.addEventListener('click', () => {
      if (confirm('Reset catalog to factory default outfits? Any custom products added will be replaced.')) {
        localStorage.setItem('kaizen_products', JSON.stringify(DEFAULT_PRODUCTS));
        localStorage.setItem('kaizen_categories', JSON.stringify(DEFAULT_CATEGORIES));
        renderAdminProductsTable();
        renderAdminCategories();
        populateCategoryDropdowns();
        renderAdminDashboard();
        showToast('Catalog restored to default.');
      }
    });
  }
}

window.resetAllStoreData = function() {
  if (confirm('CAUTION: This will perform a full Factory Reset! All custom products, categories, orders, and settings will be restored to original values. Proceed?')) {
    localStorage.removeItem('kaizen_products');
    localStorage.removeItem('kaizen_categories');
    localStorage.removeItem('kaizen_orders');
    localStorage.removeItem('kaizen_store_config');
    localStorage.removeItem('kaizen_cart');
    showToast('Factory Reset Complete! Reloading...');
    setTimeout(() => {
      location.reload();
    }, 1500);
  }
};

// ----------------------------------------------------
// UTILITIES
// ----------------------------------------------------
function sendToWhatsApp(message) {
  const encodedMsg = encodeURIComponent(message);
  const waUrl = `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodedMsg}`;
  window.open(waUrl, '_blank');
}

function toggleAccordion(headerEl) {
  const item = headerEl.parentElement;
  item.classList.toggle('active');
}

function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

function showToast(msg) {
  const toastEl = document.getElementById('toast');
  const toastText = document.getElementById('toast-text');
  if (toastEl && toastText) {
    toastText.textContent = msg;
    toastEl.classList.add('show');
    setTimeout(() => {
      toastEl.classList.remove('show');
    }, 3000);
  }
}
