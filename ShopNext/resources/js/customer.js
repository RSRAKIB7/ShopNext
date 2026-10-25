const customerStorageKey = 'shopnext-customer-store';
const customerSellerStorageKey = 'shopnext-seller-data';
const customerCartKey = 'shopnext-cart';
const customerPageSize = 8;
const customerOrderStatuses = ['Pending', 'Payment Verification', 'Confirmed', 'Processing', 'Shipped', 'Delivered', 'Cancelled', 'Returned/Refunded'];
const customerCategories = ['Books', 'Electronics', 'Fashion', 'Home & Living', 'Learning Kits', 'Stationery & Tools'];
const customerStarterCatalog = [
    { id: 'SN-HM-5001', name: 'Minimal Ceramic Table Lamp', category: 'Home & Living', price: 1850, discountPrice: 1490, stock: 16, available: true, image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=900&auto=format&fit=crop&q=80', description: 'A warm, minimal ceramic lamp for quiet evenings and modern interiors.', specifications: 'Ceramic base | Warm LED bulb included', rating: 4.8, sellerId: 'seller-home', sellerName: 'Bengal Living' },
    { id: 'SN-FS-5002', name: 'Handwoven Cotton Panjabi', category: 'Fashion', price: 2600, discountPrice: 2250, stock: 9, available: true, image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=900&auto=format&fit=crop&q=80', description: 'Comfortable handwoven cotton with a clean, timeless silhouette.', specifications: '100% cotton | Sizes S to XXL', rating: 4.7, sellerId: 'seller-fashion', sellerName: 'Heritage Apparel' },
    { id: 'SN-EL-5003', name: 'Wireless Noise-Cancelling Headphones', category: 'Electronics', price: 4900, discountPrice: 4250, stock: 13, available: true, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900&auto=format&fit=crop&q=80', description: 'Comfortable wireless audio with clear sound and noise reduction.', specifications: 'Bluetooth 5.3 | 30-hour battery | USB-C', rating: 4.6, sellerId: 'seller-electronics', sellerName: 'Tech Avenue BD' },
    { id: 'SN-BK-5004', name: 'Bangla Literature Collection', category: 'Books', price: 1250, discountPrice: 1100, stock: 23, available: true, image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=900&auto=format&fit=crop&q=80', description: 'A carefully selected set of contemporary Bangla writing.', specifications: 'Set of 4 books | Paperback', rating: 4.9, sellerId: 'seller-books', sellerName: 'Bangladesh Book House' },
];

const customerSeedOrders = [
    { id: 'SN-2048', productId: 'SN-DH-1001', productName: 'ClassWiz Scientific Calculator', seller: 'Dhaka Stationery House', date: '2026-10-21', quantity: 1, subtotal: 2450, delivery: 80, total: 2530, paymentMethod: 'Cash on Delivery', paymentStatus: 'Pending', status: 'Shipped', address: 'House 12, Road 5, Dhaka' },
    { id: 'SN-2019', productId: 'SN-CT-2001', productName: 'Arduino Starter Kit', seller: 'RoboTech Bangladesh', date: '2026-10-16', quantity: 1, subtotal: 1690, delivery: 80, total: 1770, paymentMethod: 'bKash', paymentStatus: 'Verified', status: 'Delivered', address: 'Road 5, Chattogram' },
    { id: 'SN-1984', productId: 'SN-DH-1002', productName: 'Engineering Mechanics Textbook', seller: 'Dhaka Stationery House', date: '2026-10-10', quantity: 1, subtotal: 850, delivery: 80, total: 930, paymentMethod: 'Nagad', paymentStatus: 'Verified', status: 'Delivered', address: 'House 12, Road 5, Dhaka' },
];

function customerEscape(value) {
    return String(value ?? '').replace(/[&<>"']/g, (character) => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
    })[character]);
}

function customerMoney(value) {
    return `৳${Number(value || 0).toLocaleString('en-BD')}`;
}

function customerLoadState() {
    try {
        const saved = localStorage.getItem(customerStorageKey);
        const state = saved ? JSON.parse(saved) : {};
        return {
            profile: { name: 'Md. Rakibul Hasan', email: 'rakibul@example.com', phone: '01769662550', city: 'Dhaka', avatar: '', ...(state.profile || {}) },
            addresses: state.addresses || [{ id: 'ADDR-1', name: 'Md. Rakibul Hasan', phone: '01769662550', city: 'Dhaka', area: 'Dhanmondi', details: 'House 12, Road 5', default: true }],
            wishlist: state.wishlist || [],
            cart: state.cart || [],
            orders: state.orders || customerSeedOrders,
            reviews: state.reviews || [],
            notifications: state.notifications || [
                { id: 'CNOT-1', title: 'Your order is on the way', detail: 'Order SN-2048 has been shipped.', read: false },
                { id: 'CNOT-2', title: 'Weekend marketplace offers', detail: 'Explore fresh offers from sellers around Bangladesh.', read: false },
            ],
            recentlyViewed: state.recentlyViewed || [],
            comparisons: state.comparisons || [],
            returns: state.returns || [],
            selectedAddressId: state.selectedAddressId || 'ADDR-1',
            supportMessages: state.supportMessages || [],
            stockOverrides: state.stockOverrides || {},
        };
    } catch (error) {
        console.error('Unable to load ShopNext customer demo data.', error);
        return { profile: { name: 'ShopNext Customer', email: '', phone: '', city: 'Dhaka', avatar: '' }, addresses: [], wishlist: [], cart: [], orders: customerSeedOrders, reviews: [], notifications: [], recentlyViewed: [], comparisons: [], returns: [], selectedAddressId: '', supportMessages: [] };
    }
}

let customerState = customerLoadState();
let customerCatalog = [];
let customerFilterState = { search: '', category: '', seller: '', price: '', discounted: false, rating: '', availability: '', sort: 'recommended', page: 1 };
let customerNoticeTimeout;

function customerSaveState() {
    localStorage.setItem(customerStorageKey, JSON.stringify(customerState));
    localStorage.setItem(customerCartKey, JSON.stringify(customerState.cart));
    const quantity = customerState.cart.reduce((sum, item) => sum + item.quantity, 0);
    sessionStorage.setItem('shopnext-cart-count', String(quantity));
    document.querySelectorAll('[data-cart-count]').forEach((counter) => { counter.textContent = String(quantity); });
    document.querySelectorAll('[data-cart-label]').forEach((label) => { label.textContent = `Cart (${quantity})`; });
}

function customerBuildCatalog() {
    const seeded = [];
    try {
        const accounts = JSON.parse(sessionStorage.getItem(customerSellerStorageKey) || '{}');
        Object.values(accounts).forEach((seller) => {
            seller.products.forEach((product) => seeded.push({
                ...product,
                sellerId: seller.id,
                sellerName: seller.name,
                rating: Number(product.rating || 4.7),
                available: product.available !== false && product.status !== 'Hidden',
            }));
        });
    } catch (error) {
        console.error('Unable to read the seller demo catalog.', error);
    }
    const products = [...seeded, ...customerStarterCatalog];
    const uniqueProducts = new Map(products.map((product) => [product.id, product]));
    customerCatalog = [...uniqueProducts.values()].map((product) => ({
        ...product,
        stock: Object.hasOwn(customerState.stockOverrides, product.id) ? customerState.stockOverrides[product.id] : product.stock,
    }));
    return customerCatalog;
}

function customerGetProduct(productId) {
    return customerCatalog.find((product) => product.id === productId);
}

function customerToast(message) {
    let toast = document.querySelector('[data-customer-toast]');
    if (!toast) {
        toast = document.createElement('div');
        toast.className = 'customer-toast';
        toast.dataset.customerToast = '';
        toast.setAttribute('role', 'status');
        document.body.append(toast);
    }
    toast.textContent = message;
    window.clearTimeout(customerNoticeTimeout);
    customerNoticeTimeout = window.setTimeout(() => toast.remove(), 3000);
}

function customerStatus(status) {
    const className = status.toLowerCase().replace(/[^a-z]+/g, '-');
    return `<span class="customer-status customer-status-${customerEscape(className)}">${customerEscape(status)}</span>`;
}

function customerProductUrl(product) {
    return `/product-details?product_id=${encodeURIComponent(product.id)}`;
}

function customerDiscount(product) {
    if (!product.price || !product.discountPrice || product.discountPrice >= product.price) return 0;
    return Math.round((1 - product.discountPrice / product.price) * 100);
}

function customerProductCard(product) {
    const price = product.discountPrice || product.price;
    const inWishlist = customerState.wishlist.includes(product.id);
    const compareSelected = customerState.comparisons.includes(product.id);
    const productImage = product.image || '/images/product-placeholder.svg';
    const stockMessage = product.stock < 1 ? 'Out of stock' : `${product.stock} available`;
    return `<article class="customer-product-card" data-customer-product="${customerEscape(product.id)}" data-category="${customerEscape(product.category)}" data-seller="${customerEscape(product.sellerName)}" data-price="${Number(product.price)}" data-rating="${Number(product.rating || 0)}" data-stock="${Number(product.stock)}" data-discount="${customerDiscount(product)}" data-newest="${customerEscape(product.id)}">
        <div class="customer-product-image-wrap"><a href="${customerProductUrl(product)}"><img src="${customerEscape(productImage)}" alt="${customerEscape(product.name)}" loading="lazy"></a>${customerDiscount(product) ? `<span class="customer-discount-tag">-${customerDiscount(product)}%</span>` : ''}<button type="button" class="customer-heart ${inWishlist ? 'customer-heart-active' : ''}" data-customer-action="wishlist" data-product-id="${customerEscape(product.id)}" aria-label="${inWishlist ? 'Remove from' : 'Add to'} wishlist">${inWishlist ? '♥' : '♡'}</button></div>
        <div class="customer-product-copy"><span class="customer-product-category">${customerEscape(product.category)}</span><a class="customer-product-title" href="${customerProductUrl(product)}">${customerEscape(product.name)}</a><div class="customer-product-rating"><span>★★★★★</span><b>${Number(product.rating || 4.7).toFixed(1)}</b><small>(${Number(product.reviewCount || 20)} reviews)</small></div><div class="customer-product-prices"><strong>${customerMoney(price)}</strong>${customerDiscount(product) ? `<del>${customerMoney(product.price)}</del>` : ''}</div><a class="customer-product-store" href="/seller/store">${customerEscape(product.sellerName)}</a><div class="customer-product-stock ${product.stock < 1 ? 'customer-stock-out' : ''}">${stockMessage}</div></div>
        <div class="customer-product-actions"><button type="button" class="customer-button customer-button-orange" data-customer-action="add-cart" data-product-id="${customerEscape(product.id)}" ${product.stock < 1 ? 'disabled' : ''}>Add to cart</button><label class="customer-compare-check"><input type="checkbox" data-customer-action="compare" data-product-id="${customerEscape(product.id)}" ${compareSelected ? 'checked' : ''}> Compare</label></div>
    </article>`;
}

function customerProductGrid(products, className = '') {
    return products.length ? `<div class="customer-product-grid ${className}">${products.map(customerProductCard).join('')}</div>` : '<div class="customer-empty"><strong>No matching products</strong><span>Try changing your filters or search terms.</span></div>';
}

function customerSectionHeading(title, subtitle, link = '/products', label = 'View all products →') {
    return `<header class="customer-section-heading"><div><h2>${customerEscape(title)}</h2><p>${customerEscape(subtitle)}</p></div><a href="${link}">${customerEscape(label)}</a></header>`;
}

function customerRenderHome(root) {
    const newest = [...customerCatalog].reverse().slice(0, 4);
    const popular = [...customerCatalog].sort((first, second) => Number(second.rating || 0) - Number(first.rating || 0)).slice(0, 4);
    const discounts = [...customerCatalog].filter((product) => customerDiscount(product)).sort((first, second) => customerDiscount(second) - customerDiscount(first)).slice(0, 4);
    const stores = [...new Map(customerCatalog.map((product) => [product.sellerName, product])).values()].slice(0, 5);
    const categories = [
        ['📚', 'Books', 'Books and reading'],
        ['⚡', 'Electronics', 'Gadgets and devices'],
        ['🧩', 'Learning Kits', 'Creative learning'],
        ['📐', 'Stationery & Tools', 'Study and office'],
        ['👕', 'Fashion', 'Style for everyone'],
        ['🏠', 'Home & Living', 'Everyday home'],
    ];
    root.innerHTML = `<section class="customer-hero"><div class="customer-hero-copy"><span class="customer-eyebrow">SHOP WITH CONFIDENCE, ALL ACROSS BANGLADESH</span><h1>Good finds.<br><em>Great prices.</em><br>Delivered nationwide.</h1><p>Discover independent stores, everyday essentials and new favorites from trusted sellers around Bangladesh.</p><div class="customer-hero-actions"><a href="/products" class="customer-button customer-button-light">Explore the marketplace</a><a href="/help" class="customer-hero-text-link">How ShopNext works →</a></div><div class="customer-hero-proof"><span>✓ Curated local sellers</span><span>✓ Multiple payment choices</span><span>✓ Delivery across Bangladesh</span></div></div><div class="customer-hero-art"><div class="customer-hero-orbit"></div><img src="https://images.unsplash.com/photo-1607082349566-187342175e2f?w=900&auto=format&fit=crop&q=85" alt="Shop colorful marketplace finds"><div class="customer-floating-card"><span>THIS WEEK'S PICKS</span><strong>Offers up to 30% off</strong><a href="/products?offer=1">Shop selected offers ↗</a></div><div class="customer-hero-stamp">SHOP<br>NATIONWIDE<br><b>BD</b></div></div></section>
        <section class="customer-promise-strip"><div><span>🚚</span><b>Nationwide delivery</b><small>Dhaka to every division</small></div><div><span>🏪</span><b>Independent stores</b><small>Discover local businesses</small></div><div><span>💳</span><b>Payment choice</b><small>COD and demo digital options</small></div><div><span>↩</span><b>Order support</b><small>Track and manage demo orders</small></div></section>
        <section class="customer-home-section">${customerSectionHeading('Shop by category', 'Find something great in a few clicks.') }<div class="customer-category-grid">${categories.map(([icon, name, tagline], index) => `<a href="/products?category=${encodeURIComponent(name)}" class="customer-category-tile customer-category-${index}"><span>${icon}</span><strong>${customerEscape(name)}</strong><small>${customerEscape(tagline)}</small><b>Browse collection ↗</b></a>`).join('')}</div></section>
        <section class="customer-deal-banner"><div><span>THE DISCOVERY SALE</span><h2>Everyday favorites,<br>at feel-good prices.</h2><p>Fresh deals selected from ShopNext sellers.</p><a href="/products?offer=1" class="customer-button customer-button-light">Explore offers</a></div><div class="customer-deal-side"><span>DEALS ACROSS BANGLADESH</span><strong>Save up to<br>30%</strong><small>New picks added regularly</small></div></section>
        <section class="customer-home-section">${customerSectionHeading('Trending this week', 'Popular products shoppers are discovering right now.')}${customerProductGrid(popular)}</section>
        <section class="customer-home-section customer-home-split">${customerSectionHeading('Special offers', 'Good prices on selected products.')}${customerProductGrid(discounts, 'customer-product-grid-compact')}</section>
        <section class="customer-home-section">${customerSectionHeading('New arrivals', 'Fresh products from independent stores.')}${customerProductGrid(newest)}</section>
        <section class="customer-store-section">${customerSectionHeading('Popular stores', 'Meet the sellers behind the products.', '/products', 'Explore stores →')}<div class="customer-store-grid">${stores.map((product, index) => `<a href="/seller/store" class="customer-store-tile"><span class="customer-store-avatar customer-store-avatar-${index}">${customerEscape(product.sellerName.slice(0, 1))}</span><div><strong>${customerEscape(product.sellerName)}</strong><small>Independent ShopNext seller · ★ 4.${8 - index % 3}</small></div><b>Visit store →</b></a>`).join('')}</div></section>
        <section class="customer-newsletter"><div><span>THE SHOPNEXT EDIT</span><h2>Fresh finds, delivered to your inbox.</h2><p>Get occasional marketplace news and demo promotions.</p></div><form data-customer-form="newsletter"><input name="email" type="email" required placeholder="Your email address"><button class="customer-button customer-button-orange">Subscribe</button></form></section>`;
}

function customerFilterCatalog() {
    const searchInput = document.querySelector('[data-customer-search]');
    const cards = [...document.querySelectorAll('[data-customer-product]')];
    const visibleProducts = customerCatalog.filter((product) => {
        const query = customerFilterState.search.toLowerCase();
        const matchesSearch = !query || `${product.name} ${product.category} ${product.sellerName}`.toLowerCase().includes(query);
        const matchesVisibility = product.available !== false && product.status !== 'Hidden';
        const matchesCategory = !customerFilterState.category || product.category.toLowerCase().includes(customerFilterState.category.toLowerCase());
        const matchesSeller = !customerFilterState.seller || product.sellerName === customerFilterState.seller;
        const price = Number(product.discountPrice || product.price);
        const matchesPrice = customerFilterState.price === 'under500' ? price < 500
            : customerFilterState.price === '500to1500' ? price >= 500 && price <= 1500
                : customerFilterState.price === 'over1500' ? price > 1500
                    : true;
        const matchesDiscount = !customerFilterState.discounted || customerDiscount(product) > 0;
        const matchesRating = !customerFilterState.rating || Number(product.rating || 0) >= Number(customerFilterState.rating);
        const matchesAvailability = customerFilterState.availability !== 'in-stock' || Number(product.stock) > 0;
        return matchesVisibility && matchesSearch && matchesCategory && matchesSeller && matchesPrice && matchesDiscount && matchesRating && matchesAvailability;
    });
    const sortFunctions = {
        priceLow: (first, second) => Number(first.discountPrice || first.price) - Number(second.discountPrice || second.price),
        priceHigh: (first, second) => Number(second.discountPrice || second.price) - Number(first.discountPrice || first.price),
        rating: (first, second) => Number(second.rating || 0) - Number(first.rating || 0),
        popularity: (first, second) => Number(second.sold || 0) - Number(first.sold || 0),
        newest: (first, second) => second.id.localeCompare(first.id),
    };
    if (sortFunctions[customerFilterState.sort]) visibleProducts.sort(sortFunctions[customerFilterState.sort]);
    const pageCount = Math.max(1, Math.ceil(visibleProducts.length / customerPageSize));
    customerFilterState.page = Math.min(customerFilterState.page, pageCount);
    const paginatedProducts = visibleProducts.slice((customerFilterState.page - 1) * customerPageSize, customerFilterState.page * customerPageSize);
    cards.forEach((card) => {
        card.hidden = !paginatedProducts.some((product) => product.id === card.dataset.customerProduct);
    });
    const count = document.querySelector('[data-customer-result-count]');
    const pagination = document.querySelector('[data-customer-pagination]');
    if (count) count.textContent = `${visibleProducts.length} products found`;
    if (pagination) pagination.innerHTML = `<button type="button" data-customer-page-step="-1" ${customerFilterState.page <= 1 ? 'disabled' : ''}>Previous</button><span>Page ${customerFilterState.page} of ${pageCount}</span><button type="button" data-customer-page-step="1" ${customerFilterState.page >= pageCount ? 'disabled' : ''}>Next</button>`;
}

function customerRenderCatalog(root) {
    const sellers = [...new Set(customerCatalog.map((product) => product.sellerName))];
    const categories = [...new Set([...customerCategories, ...customerCatalog.map((product) => product.category)])];
    root.innerHTML = `<header class="customer-page-banner"><div><span class="customer-eyebrow">THE SHOPNEXT MARKETPLACE</span><h1>Find your next favorite.</h1><p>Explore products from independent sellers across Bangladesh.</p></div><div class="customer-breadcrumb"><a href="/">Home</a> / All products</div></header>
        <div class="customer-catalog-layout"><aside class="customer-filter-panel"><div class="customer-filter-title"><h2>Filter products</h2><button type="button" data-customer-action="reset-filters">Reset all</button></div>
            <label class="customer-filter-label">Category<select data-customer-filter="category"><option value="">All categories</option>${categories.map((category) => `<option>${customerEscape(category)}</option>`).join('')}</select></label>
            <label class="customer-filter-label">Seller<select data-customer-filter="seller"><option value="">All sellers</option>${sellers.map((seller) => `<option>${customerEscape(seller)}</option>`).join('')}</select></label>
            <fieldset class="customer-filter-group"><legend>Price range</legend><label><input type="radio" name="customer-price" value="" checked> All prices</label><label><input type="radio" name="customer-price" value="under500"> Under ৳500</label><label><input type="radio" name="customer-price" value="500to1500"> ৳500 – ৳1,500</label><label><input type="radio" name="customer-price" value="over1500"> Above ৳1,500</label></fieldset>
            <label class="customer-check-filter"><input type="checkbox" data-customer-filter="discounted"> Discounted items only</label>
            <label class="customer-filter-label">Customer rating<select data-customer-filter="rating"><option value="">All ratings</option><option value="4">4 stars &amp; up</option><option value="4.5">4.5 stars &amp; up</option></select></label>
            <label class="customer-filter-label">Availability<select data-customer-filter="availability"><option value="">All products</option><option value="in-stock">In stock</option></select></label>
            <div class="customer-filter-delivery"><strong>Delivery across Bangladesh</strong><span>Delivery estimates and charges are shown at checkout.</span></div>
        </aside><section class="customer-catalog-results"><div class="customer-catalog-toolbar"><div><span>SHOP ALL</span><p data-customer-result-count></p></div><label>Sort by<select data-customer-filter="sort"><option value="recommended">Recommended</option><option value="priceLow">Price: low to high</option><option value="priceHigh">Price: high to low</option><option value="popularity">Popularity</option><option value="newest">Newest arrivals</option><option value="rating">Customer rating</option></select></label></div><div class="customer-product-grid">${customerCatalog.map(customerProductCard).join('')}</div><div class="customer-pagination" data-customer-pagination></div></section></div>`;
    const params = new URLSearchParams(window.location.search);
    customerFilterState.search = params.get('search') || '';
    customerFilterState.category = params.get('category') || '';
    customerFilterState.discounted = params.get('offer') === '1';
    const search = root.querySelector('[data-customer-search]');
    if (search) search.value = customerFilterState.search;
    const categoryFilter = root.querySelector('[data-customer-filter="category"]');
    if ([...categoryFilter.options].some((option) => option.value === customerFilterState.category)) categoryFilter.value = customerFilterState.category;
    const discountedFilter = root.querySelector('[data-customer-filter="discounted"]');
    discountedFilter.checked = customerFilterState.discounted;
    customerFilterCatalog();
}

function customerCartItem(product, cartItem) {
    const linePrice = Number(product.discountPrice || product.price);
    return `<article class="customer-cart-item" data-cart-product="${customerEscape(product.id)}"><a href="${customerProductUrl(product)}" class="customer-cart-image"><img src="${customerEscape(product.image || '/images/product-placeholder.svg')}" alt="${customerEscape(product.name)}"></a><div class="customer-cart-product"><span>${customerEscape(product.category)} · ${customerEscape(product.sellerName)}</span><a href="${customerProductUrl(product)}"><strong>${customerEscape(product.name)}</strong></a><small>${customerMoney(linePrice)} each · ${product.stock} available</small></div><div class="customer-quantity-control"><button type="button" data-customer-action="quantity" data-product-id="${customerEscape(product.id)}" data-step="-1">−</button><span>${cartItem.quantity}</span><button type="button" data-customer-action="quantity" data-product-id="${customerEscape(product.id)}" data-step="1" ${cartItem.quantity >= product.stock ? 'disabled' : ''}>+</button></div><strong class="customer-cart-line">${customerMoney(linePrice * cartItem.quantity)}</strong><button class="customer-remove-button" type="button" data-customer-action="remove-cart" data-product-id="${customerEscape(product.id)}">Remove</button></article>`;
}

function customerCartTotals() {
    const availableItems = customerState.cart.map((item) => ({ item, product: customerGetProduct(item.productId) })).filter((entry) => entry.product);
    const subtotal = availableItems.reduce((sum, entry) => sum + Number(entry.product.discountPrice || entry.product.price) * entry.item.quantity, 0);
    const original = availableItems.reduce((sum, entry) => sum + Number(entry.product.price) * entry.item.quantity, 0);
    const discount = original - subtotal;
    const delivery = subtotal > 0 ? 80 : 0;
    return { subtotal, discount, delivery, total: subtotal + delivery, itemCount: availableItems.reduce((sum, entry) => sum + entry.item.quantity, 0), items: availableItems };
}

function customerRenderCart(root) {
    const totals = customerCartTotals();
    const rows = totals.items.map(({ item, product }) => customerCartItem(product, item)).join('');
    root.innerHTML = `<header class="customer-page-banner customer-page-banner-small"><div><span class="customer-eyebrow">YOUR SHOPPING BAG</span><h1>Shopping cart</h1><p>Review your items before checking out.</p></div><div class="customer-breadcrumb"><a href="/">Home</a> / Cart</div></header>
        ${totals.items.length ? `<div class="customer-cart-layout"><section class="customer-panel customer-cart-list"><header><strong>Your items <span>(${totals.itemCount})</span></strong><a href="/products">Continue shopping →</a></header>${rows}<button class="customer-link-button" type="button" data-customer-action="clear-cart">Clear cart</button></section><aside class="customer-panel customer-order-summary"><h2>Order summary</h2><div><span>Subtotal</span><strong>${customerMoney(totals.subtotal)}</strong></div><div><span>Discount savings</span><strong class="customer-green">−${customerMoney(totals.discount)}</strong></div><div><span>Delivery estimate</span><strong>${customerMoney(totals.delivery)}</strong></div><p>Final delivery options depend on your selected address.</p><div class="customer-total-line"><span>Total</span><strong>${customerMoney(totals.total)}</strong></div><a href="/checkout" class="customer-button customer-button-orange customer-button-wide">Continue to checkout</a><small>Checkout and payment are demo interfaces only.</small><div class="customer-payment-logos"><span>COD</span><span>bKash</span><span>Nagad</span><span>Card</span></div></aside></div>` : '<section class="customer-panel customer-empty customer-cart-empty"><span>🛍️</span><h2>Your cart is ready for a good find.</h2><p>Browse the marketplace and add products you love.</p><a class="customer-button customer-button-orange" href="/products">Explore products</a></section>'}`;
}

function customerAddToCart(productId, quantity = 1) {
    const product = customerGetProduct(productId);
    if (!product || product.stock < 1) {
        customerToast('This product is currently out of stock.');
        return;
    }
    const item = customerState.cart.find((entry) => entry.productId === productId);
    const nextQuantity = (item?.quantity || 0) + quantity;
    if (nextQuantity > product.stock) {
        customerToast(`Only ${product.stock} units are available.`);
        return;
    }
    if (item) item.quantity = nextQuantity;
    else customerState.cart.push({ productId, quantity });
    customerSaveState();
    customerToast(`${product.name} added to your cart.`);
}

function customerRenderProductDetails(root) {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('product_id') || 'SN-DH-1001';
    const product = customerGetProduct(productId);
    if (!product) {
        root.innerHTML = '<section class="customer-panel customer-empty"><h1>Product not found</h1><p>This product is not in the current demo catalog.</p><a class="customer-button customer-button-orange" href="/products">Browse products</a></section>';
        return;
    }
    customerState.recentlyViewed = [product.id, ...customerState.recentlyViewed.filter((id) => id !== product.id)].slice(0, 8);
    customerSaveState();
    const reviews = customerState.reviews.filter((review) => review.productId === product.id);
    const productReviews = [
        { name: 'Nusrat Jahan', rating: 5, title: 'A great everyday choice', text: 'Just as described, good quality and delivery was smooth.', date: '18 October 2026' },
        { name: 'Tanvir Ahmed', rating: 4, title: 'Good value', text: 'Happy with the product and the helpful seller.', date: '12 October 2026' },
        ...reviews.map((review) => ({ ...review, date: review.date || 'Today' })),
    ];
    const discount = customerDiscount(product);
    root.innerHTML = `<nav class="customer-breadcrumb"><a href="/">Home</a> / <a href="/products">Marketplace</a> / ${customerEscape(product.name)}</nav><section class="customer-detail-layout"><div class="customer-detail-gallery"><div class="customer-detail-main-image"><img data-detail-main src="${customerEscape(product.image || '/images/product-placeholder.svg')}" alt="${customerEscape(product.name)}"></div><div class="customer-gallery-thumbnails"><button type="button" data-customer-action="gallery" data-image="${customerEscape(product.image || '/images/product-placeholder.svg')}"><img src="${customerEscape(product.image || '/images/product-placeholder.svg')}" alt="Product view one"></button><button type="button" data-customer-action="gallery" data-image="${customerEscape(product.image || '/images/product-placeholder.svg')}"><img src="${customerEscape(product.image || '/images/product-placeholder.svg')}" alt="Product view two"></button><button type="button" data-customer-action="gallery" data-image="${customerEscape(product.image || '/images/product-placeholder.svg')}"><img src="${customerEscape(product.image || '/images/product-placeholder.svg')}" alt="Product view three"></button></div></div><div class="customer-detail-information"><span class="customer-detail-category">${customerEscape(product.category)}</span><div class="customer-detail-stock ${product.stock < 1 ? 'customer-stock-out' : ''}">${product.stock > 0 ? `● In stock · ${product.stock} available` : '● Out of stock'}</div><h1>${customerEscape(product.name)}</h1><a href="/seller/store" class="customer-detail-seller">Sold by <strong>${customerEscape(product.sellerName)}</strong> ↗</a><div class="customer-product-rating customer-detail-rating"><span>★★★★★</span><b>${Number(product.rating || 4.7).toFixed(1)}</b><a href="#customer-reviews">${productReviews.length} customer reviews</a></div><div class="customer-detail-prices"><strong>${customerMoney(product.discountPrice || product.price)}</strong>${discount ? `<del>${customerMoney(product.price)}</del><span>Save ${discount}%</span>` : ''}</div><p class="customer-detail-description">${customerEscape(product.description || 'Product details are provided by this ShopNext seller.')}</p><div class="customer-detail-specifications"><h2>Product information</h2><p>${customerEscape(product.specifications || 'See the product description for details.')}</p><p>Category: ${customerEscape(product.category)}</p><p>Delivery: Available across Bangladesh</p></div><div class="customer-detail-controls"><label>Quantity<div class="customer-quantity-control"><button type="button" data-customer-action="detail-quantity" data-step="-1">−</button><input data-detail-quantity value="1" min="1" max="${Math.max(product.stock, 1)}" readonly><button type="button" data-customer-action="detail-quantity" data-step="1">+</button></div></label><button type="button" class="customer-heart ${customerState.wishlist.includes(product.id) ? 'customer-heart-active' : ''}" data-customer-action="wishlist" data-product-id="${customerEscape(product.id)}">${customerState.wishlist.includes(product.id) ? '♥ Saved' : '♡ Save to wishlist'}</button></div><div class="customer-detail-actions"><button type="button" class="customer-button customer-button-orange" data-customer-action="detail-add-cart" data-product-id="${customerEscape(product.id)}" ${product.stock < 1 ? 'disabled' : ''}>Add to cart</button><button type="button" class="customer-button customer-button-outline" data-customer-action="buy-now" data-product-id="${customerEscape(product.id)}" ${product.stock < 1 ? 'disabled' : ''}>Buy now</button><label class="customer-compare-check"><input type="checkbox" data-customer-action="compare" data-product-id="${customerEscape(product.id)}" ${customerState.comparisons.includes(product.id) ? 'checked' : ''}> Compare</label></div><p class="customer-demo-disclaimer">Demo product preview. No order or payment is processed.</p></div></section><section id="customer-reviews" class="customer-panel customer-review-section">${customerSectionHeading('Customer reviews', `${productReviews.length} reviews · ${Number(product.rating || 4.7).toFixed(1)} average rating`, '#write-review', 'Write a review ↓')}<div class="customer-reviews-grid">${productReviews.map((review) => `<article><span class="customer-review-stars">${'★'.repeat(Number(review.rating))}${'☆'.repeat(5 - Number(review.rating))}</span><strong>${customerEscape(review.title || 'Customer review')}</strong><p>${customerEscape(review.text)}</p><small>${customerEscape(review.name || 'ShopNext customer')} · ${customerEscape(review.date)}</small><button type="button" data-customer-action="helpful-review">Helpful · ${Math.floor(Number(review.rating) * 3)}</button></article>`).join('')}</div><form id="write-review" data-customer-form="review" data-product-id="${customerEscape(product.id)}" class="customer-review-form"><h3>Share your experience</h3><label>Your rating<select name="rating" required><option value="">Select rating</option><option value="5">★★★★★ Excellent</option><option value="4">★★★★☆ Good</option><option value="3">★★★☆☆ Average</option><option value="2">★★☆☆☆ Below expectations</option><option value="1">★☆☆☆☆ Poor</option></select></label><label>Review title<input name="title" required maxlength="70"></label><label>Your review<textarea name="text" rows="3" required minlength="10"></textarea></label><button class="customer-button customer-button-orange">Submit demo review</button></form></section>`;
}

function customerAccountNavigation() {
    return `<aside class="customer-account-sidebar"><div class="customer-account-avatar">${customerState.profile.avatar ? `<img src="${customerEscape(customerState.profile.avatar)}" alt="Profile photo">` : customerEscape(customerState.profile.name.slice(0, 1) || 'C')}</div><strong>${customerEscape(customerState.profile.name)}</strong><small>ShopNext customer</small><nav><a href="/user/dashboard#overview">Account overview</a><a href="/user/orders#orders">My orders</a><a href="/user/wishlist">Wishlist</a><a href="/user/addresses">Delivery addresses</a><a href="/user/reviews">My reviews</a><a href="/user/notifications">Notifications</a><a href="/login">Log out</a></nav></aside>`;
}

function customerRenderAccount(root) {
    if (window.location.hash === '#orders') {
        customerRenderOrders(root);
        return;
    }
    const orders = customerState.orders.slice(0, 4);
    const orderCards = orders.map((order) => `<article class="customer-order-card"><div><span>${customerEscape(order.id)} · Placed ${customerEscape(order.date)}</span><strong>${customerEscape(order.productName)}</strong><small>Sold by ${customerEscape(order.seller)}</small></div><div><strong>${customerMoney(order.total)}</strong>${customerStatus(order.status)}</div><a href="/user/order-details?order_id=${encodeURIComponent(order.id)}">Order details →</a></article>`).join('');
    root.innerHTML = `<header class="customer-account-welcome"><div><span class="customer-eyebrow">YOUR SHOPNEXT ACCOUNT</span><h1>Good to see you, ${customerEscape(customerState.profile.name.split(' ')[0])}.</h1><p>Keep track of your orders and make your next discovery.</p></div><a href="/products" class="customer-button customer-button-orange">Continue shopping</a></header><div class="customer-account-layout">${customerAccountNavigation()}<div class="customer-account-main"><div class="customer-account-stats"><article><span>Orders placed</span><strong>${customerState.orders.length}</strong></article><article><span>In progress</span><strong>${customerState.orders.filter((order) => !['Delivered', 'Cancelled', 'Returned/Refunded'].includes(order.status)).length}</strong></article><article><span>Wishlist</span><strong>${customerState.wishlist.length}</strong></article><article><span>Reviews shared</span><strong>${customerState.reviews.length}</strong></article></div><section class="customer-panel"><header class="customer-panel-heading"><div><h2>Recent orders</h2><p>Your latest marketplace purchases</p></div><a href="/user/orders#orders">View order history →</a></header>${orderCards || '<div class="customer-empty">No demo orders yet. Your next great find could be here.</div>'}</section><section class="customer-panel customer-profile-panel"><header class="customer-panel-heading"><div><h2>Personal information</h2><p>Your saved customer profile</p></div><button type="button" data-customer-action="edit-profile">Edit profile</button></header><div class="customer-profile-details"><div><span>Full name</span><strong>${customerEscape(customerState.profile.name)}</strong></div><div><span>Email</span><strong>${customerEscape(customerState.profile.email)}</strong></div><div><span>Mobile</span><strong>${customerEscape(customerState.profile.phone)}</strong></div><div><span>Default delivery area</span><strong>${customerEscape(customerState.profile.city)}, Bangladesh</strong></div></div></section><section class="customer-panel customer-panel-heading customer-recently-viewed">${customerSectionHeading('Recently viewed', 'Products you have explored recently.', '/products')}${customerProductGrid(customerState.recentlyViewed.map(customerGetProduct).filter(Boolean))}</section></div></div>`;
}

function customerRenderWishlist(root) {
    const products = customerState.wishlist.map(customerGetProduct).filter(Boolean);
    root.innerHTML = `<header class="customer-page-banner customer-page-banner-small"><div><span class="customer-eyebrow">SAVED FOR LATER</span><h1>Your wishlist</h1><p>Keep your favorite finds close by.</p></div><div class="customer-breadcrumb"><a href="/user/dashboard">My account</a> / Wishlist</div></header><div class="customer-account-layout">${customerAccountNavigation()}<section class="customer-account-main customer-panel">${products.length ? customerProductGrid(products) : '<div class="customer-empty"><strong>Your wishlist is ready to fill.</strong><span>Tap the heart on a product to save it here.</span><a href="/products" class="customer-button customer-button-orange">Explore products</a></div>'}</section></div>`;
}

function customerRenderAddresses(root) {
    const addresses = customerState.addresses.map((address) => `<article class="customer-address-card"><div><strong>${customerEscape(address.name)}</strong>${address.default ? '<span class="customer-default-label">DEFAULT</span>' : ''}</div><p>${customerEscape(address.details)}, ${customerEscape(address.area)}, ${customerEscape(address.city)}</p><small>${customerEscape(address.phone)}</small><div class="customer-address-actions">${!address.default ? `<button type="button" data-customer-action="default-address" data-address-id="${customerEscape(address.id)}">Set as default</button>` : ''}<button type="button" data-customer-action="edit-address" data-address-id="${customerEscape(address.id)}">Edit</button><button type="button" data-customer-action="remove-address" data-address-id="${customerEscape(address.id)}">Remove</button></div></article>`).join('');
    root.innerHTML = `<header class="customer-page-banner customer-page-banner-small"><div><span class="customer-eyebrow">DELIVERY DESTINATIONS</span><h1>Saved addresses</h1><p>Choose a trusted place for your next delivery.</p></div><div class="customer-breadcrumb"><a href="/user/dashboard">My account</a> / Addresses</div></header><div class="customer-account-layout">${customerAccountNavigation()}<section class="customer-account-main"><div class="customer-address-grid">${addresses}<button class="customer-add-address" type="button" data-customer-action="new-address"><span>＋</span><strong>Add a new address</strong></button></div><form class="customer-panel customer-review-form" data-customer-form="address"><h2>Add delivery address</h2><label>Recipient name<input name="name" required></label><label>Mobile number<input name="phone" type="tel" required></label><label>Area or neighborhood<input name="area" required></label><label>City<select name="city" required>${['Dhaka', 'Chattogram', 'Rajshahi', 'Khulna', 'Sylhet', 'Barishal', 'Rangpur', 'Mymensingh'].map((city) => `<option>${city}</option>`).join('')}</select></label><label class="customer-field-wide">Street address<input name="details" required></label><button class="customer-button customer-button-orange">Save address</button></form></section></div>`;
}

function customerRenderOrders(root) {
    const rows = customerState.orders.map((order) => `<article class="customer-order-card"><div><span>${customerEscape(order.id)} · ${customerEscape(order.date)}</span><strong>${customerEscape(order.productName)}</strong><small>Seller: ${customerEscape(order.seller)} · Qty ${order.quantity}</small></div><div><strong>${customerMoney(order.total)}</strong>${customerStatus(order.status)}</div><div class="customer-order-links"><a href="/user/order-details?order_id=${encodeURIComponent(order.id)}">Details</a><a href="/user/order-tracking?order_id=${encodeURIComponent(order.id)}">Track order</a>${['Pending', 'Payment Verification', 'Confirmed'].includes(order.status) ? `<button type="button" data-customer-action="cancel-order" data-order-id="${customerEscape(order.id)}">Request cancellation</button>` : ''}</div></article>`).join('');
    root.innerHTML = `<header class="customer-page-banner customer-page-banner-small"><div><span class="customer-eyebrow">YOUR SHOPPING HISTORY</span><h1>My orders</h1><p>Track, review and manage your ShopNext demo orders.</p></div><div class="customer-breadcrumb"><a href="/user/dashboard">My account</a> / Orders</div></header><div class="customer-account-layout">${customerAccountNavigation()}<section class="customer-account-main customer-panel">${rows || '<div class="customer-empty">No orders found.</div>'}</section></div>`;
}

function customerRenderCheckout(root) {
    const totals = customerCartTotals();
    const selectedAddress = customerState.addresses.find((address) => address.id === customerState.selectedAddressId) || customerState.addresses[0];
    const items = totals.items.map(({ item, product }) => `<div class="customer-checkout-item"><span>${item.quantity} × ${customerEscape(product.name)}</span><strong>${customerMoney(Number(product.discountPrice || product.price) * item.quantity)}</strong></div>`).join('');
    const addressOptions = customerState.addresses.map((address) => `<option value="${customerEscape(address.id)}" ${address.id === selectedAddress?.id ? 'selected' : ''}>${customerEscape(address.name)} · ${customerEscape(address.area)}, ${customerEscape(address.city)}</option>`).join('');
    root.innerHTML = `<header class="customer-page-banner customer-page-banner-small"><div><span class="customer-eyebrow">A FEW DETAILS, THEN YOU'RE DONE</span><h1>Checkout</h1><p>Review your delivery details and choose a demo payment method.</p></div><div class="customer-breadcrumb"><a href="/cart">Cart</a> / Checkout</div></header><div class="customer-checkout-steps"><span class="customer-step-complete">1 <b>Cart</b></span><i></i><span class="customer-step-active">2 <b>Delivery &amp; payment</b></span><i></i><span>3 <b>Confirmation</b></span></div>${totals.items.length ? `<form data-customer-form="checkout" class="customer-checkout-layout"><div class="customer-checkout-main"><section class="customer-panel customer-checkout-section"><header class="customer-panel-heading"><div><h2>Contact information</h2><p>Where we can reach you about your order.</p></div><a href="/user/dashboard">Edit profile</a></header>${addressOptions ? `<label class="customer-saved-address-select">Choose a saved address<select name="savedAddress">${addressOptions}</select></label>` : ''}<div class="customer-form-grid"><label>Full name<input name="name" required value="${customerEscape(customerState.profile.name)}"></label><label>Mobile number<input name="phone" required value="${customerEscape(customerState.profile.phone)}"></label><label>Email address<input name="email" type="email" required value="${customerEscape(customerState.profile.email)}"></label><label>Delivery city<select name="city">${['Dhaka', 'Chattogram', 'Rajshahi', 'Khulna', 'Sylhet', 'Barishal', 'Rangpur', 'Mymensingh'].map((city) => `<option ${selectedAddress?.city === city ? 'selected' : ''}>${city}</option>`).join('')}</select></label><label class="customer-field-wide">Street address<input name="address" required value="${customerEscape(selectedAddress ? `${selectedAddress.details}, ${selectedAddress.area}` : '')}"></label></div><a class="customer-checkout-address-link" href="/user/addresses">Manage saved addresses →</a></section><section class="customer-panel customer-checkout-section"><header class="customer-panel-heading"><div><h2>Delivery option</h2><p>Select a sample delivery preference.</p></div></header><label class="customer-delivery-option"><input type="radio" name="delivery" value="standard" checked><span><strong>Standard delivery</strong><small>2–5 business days · ${customerMoney(totals.delivery)}</small></span></label><label class="customer-delivery-option"><input type="radio" name="delivery" value="express"><span><strong>Express delivery</strong><small>1–2 business days · ${customerMoney(totals.delivery + 60)}</small></span></label></section><section class="customer-panel customer-checkout-section"><header class="customer-panel-heading"><div><h2>Payment method</h2><p>Demo selection only. No payment will be collected.</p></div></header><div class="customer-payment-options"><label><input type="radio" name="payment" value="Cash on Delivery" checked><span><b>COD</b><strong>Cash on Delivery</strong><small>Pay product amount when your order arrives.</small></span></label><label><input type="radio" name="payment" value="bKash"><span><b class="customer-payment-bkash">bK</b><strong>bKash</strong><small>Demo payment interface.</small></span></label><label><input type="radio" name="payment" value="Nagad"><span><b class="customer-payment-nagad">N</b><strong>Nagad</strong><small>Demo payment interface.</small></span></label><label><input type="radio" name="payment" value="Card · SSLCommerz"><span><b>▰</b><strong>Card via SSLCommerz</strong><small>Demo card selection only; no gateway connection.</small></span></label></div><div class="customer-cod-note" data-cod-note><strong>Cash on Delivery payment breakdown</strong><p>Delivery charge of ${customerMoney(totals.delivery)} is required in advance in this demo. Product amount of ${customerMoney(totals.subtotal)} is payable upon delivery.</p></div></section></div><aside class="customer-panel customer-order-summary customer-checkout-summary"><h2>Your order</h2>${items}<div><span>Subtotal</span><strong>${customerMoney(totals.subtotal)}</strong></div><div><span>Delivery</span><strong data-checkout-delivery>${customerMoney(totals.delivery)}</strong></div><div><span>Savings</span><strong class="customer-green">−${customerMoney(totals.discount)}</strong></div><div class="customer-total-line"><span>Total</span><strong data-checkout-total>${customerMoney(totals.total)}</strong></div><button class="customer-button customer-button-orange customer-button-wide">Place demo order</button><small>No real order, payment or personal data is sent.</small></aside></form>` : '<section class="customer-panel customer-empty"><h2>Your cart is empty</h2><p>Add products before starting checkout.</p><a class="customer-button customer-button-orange" href="/products">Shop products</a></section>'}`;
}

function customerRenderConfirmation(root) {
    const order = customerState.orders[0];
    root.innerHTML = `<section class="customer-confirmation"><div class="customer-confirmation-check">✓</div><span class="customer-eyebrow">DEMO ORDER RECEIVED</span><h1>Thank you, ${customerEscape(customerState.profile.name.split(' ')[0])}.</h1><p>Your demo order has been added to My Orders. No seller, courier or payment provider has received it.</p><div class="customer-confirmation-number"><span>ORDER REFERENCE</span><strong>${customerEscape(order?.id || 'SN-DEMO')}</strong><span>${customerEscape(order?.date || new Date().toISOString().slice(0, 10))}</span></div><div class="customer-confirmation-actions"><a href="/user/order-tracking?order_id=${encodeURIComponent(order?.id || '')}" class="customer-button customer-button-orange">Track demo order</a><a href="/products" class="customer-button customer-button-outline">Continue shopping</a></div></section>`;
}

function customerRenderOrderDetails(root, tracking = false) {
    const orderId = new URLSearchParams(window.location.search).get('order_id');
    const order = customerState.orders.find((item) => item.id === orderId) || customerState.orders[0];
    if (!order) {
        root.innerHTML = '<section class="customer-panel customer-empty"><h1>Order not found</h1><a href="/user/orders">View your orders</a></section>';
        return;
    }
    const currentIndex = customerOrderStatuses.indexOf(order.status);
    const isClosed = ['Cancelled', 'Returned/Refunded'].includes(order.status);
    const timeline = (isClosed ? customerOrderStatuses.slice(0, currentIndex + 1) : customerOrderStatuses.slice(0, 6)).map((status, index) => `<div class="customer-timeline-item ${status === order.status ? 'customer-timeline-current' : index < currentIndex ? 'customer-timeline-done' : ''}"><span>${index < currentIndex ? '✓' : index + 1}</span><strong>${customerEscape(status)}</strong><small>${status === order.status ? 'Current status' : index < currentIndex ? 'Completed' : 'Upcoming'}</small></div>`).join('');
    root.innerHTML = `<header class="customer-page-banner customer-page-banner-small"><div><span class="customer-eyebrow">${tracking ? 'DELIVERY STATUS' : 'ORDER SUMMARY'}</span><h1>${tracking ? 'Track your order' : 'Order details'}</h1><p>Reference ${customerEscape(order.id)} · Placed ${customerEscape(order.date)}</p></div><div class="customer-breadcrumb"><a href="/user/orders">My orders</a> / ${tracking ? 'Tracking' : 'Details'}</div></header><section class="customer-panel customer-order-detail"><header class="customer-panel-heading"><div><h2>${customerEscape(order.productName)}</h2><p>Sold by ${customerEscape(order.seller)} · Quantity ${order.quantity}</p></div>${customerStatus(order.status)}</header>${tracking ? `<div class="customer-order-timeline">${timeline}</div>` : ''}<div class="customer-order-detail-grid"><div><span>Payment method</span><strong>${customerEscape(order.paymentMethod)}</strong></div><div><span>Payment status</span><strong>${customerEscape(order.paymentStatus)}</strong></div><div><span>Delivery address</span><strong>${customerEscape(order.address)}</strong></div><div><span>Subtotal</span><strong>${customerMoney(order.subtotal)}</strong></div><div><span>Delivery charge</span><strong>${customerMoney(order.delivery)}</strong></div><div><span>Total</span><strong>${customerMoney(order.total)}</strong></div></div><div class="customer-order-links"><a href="/user/order-tracking?order_id=${encodeURIComponent(order.id)}">Track order</a><a href="/user/returns">Request return/refund</a>${['Pending', 'Payment Verification', 'Confirmed'].includes(order.status) ? `<button type="button" data-customer-action="cancel-order" data-order-id="${customerEscape(order.id)}">Request cancellation</button>` : ''}</div></section>`;
}

function customerRenderReturns(root) {
    const records = customerState.returns.map((record) => `<article class="customer-order-card"><div><span>${customerEscape(record.id)} · ${customerEscape(record.date)}</span><strong>${customerEscape(record.productName)}</strong><small>${customerEscape(record.reason)}</small></div><div>${customerStatus(record.status)}</div></article>`).join('');
    const delivered = customerState.orders.filter((order) => order.status === 'Delivered');
    root.innerHTML = `<header class="customer-page-banner customer-page-banner-small"><div><span class="customer-eyebrow">AFTER-SALES SUPPORT</span><h1>Returns and refunds</h1><p>Submit a demo request and review its status.</p></div><div class="customer-breadcrumb"><a href="/user/dashboard">My account</a> / Returns</div></header><div class="customer-account-layout">${customerAccountNavigation()}<section class="customer-account-main"><form data-customer-form="return" class="customer-panel customer-review-form"><h2>Request a return or refund</h2><p>Demo requests are saved in this browser and are not sent to a seller.</p><label>Select delivered order<select name="orderId" required>${delivered.map((order) => `<option value="${customerEscape(order.id)}">${customerEscape(order.id)} · ${customerEscape(order.productName)}</option>`).join('')}</select></label><label>Reason<select name="reason" required><option value="">Choose a reason</option><option>Item arrived damaged</option><option>Wrong item received</option><option>Item not as described</option><option>Changed my mind</option></select></label><label>Details<textarea name="details" rows="3" required></textarea></label><button class="customer-button customer-button-orange" ${delivered.length ? '' : 'disabled'}>Submit demo request</button></form><section class="customer-panel"><header class="customer-panel-heading"><div><h2>Request history</h2><p>Status of your demo return requests.</p></div></header>${records || '<div class="customer-empty">No return requests have been submitted.</div>'}</section></section></div>`;
}

function customerRenderReviews(root) {
    const reviews = customerState.reviews.map((review) => `<article class="customer-order-card"><div><span>${customerEscape(review.date || 'Today')}</span><strong>${customerEscape(review.title)}</strong><small>${customerEscape(review.productName)}</small><p>${customerEscape(review.text)}</p></div><span class="customer-review-stars">${'★'.repeat(Number(review.rating))}${'☆'.repeat(5 - Number(review.rating))}</span></article>`).join('');
    root.innerHTML = `<header class="customer-page-banner customer-page-banner-small"><div><span class="customer-eyebrow">YOUR VOICE MATTERS</span><h1>My reviews</h1><p>Review products from your ShopNext demo orders.</p></div><div class="customer-breadcrumb"><a href="/user/dashboard">My account</a> / Reviews</div></header><div class="customer-account-layout">${customerAccountNavigation()}<section class="customer-account-main customer-panel">${reviews || '<div class="customer-empty"><strong>No reviews yet</strong><span>Visit a product page to share your experience.</span><a href="/products" class="customer-button customer-button-orange">Browse products</a></div>'}</section></div>`;
}

function customerRenderNotifications(root) {
    const rows = customerState.notifications.map((notification) => `<article class="customer-notification ${notification.read ? '' : 'customer-notification-unread'}"><span>${notification.read ? '○' : '●'}</span><div><strong>${customerEscape(notification.title)}</strong><p>${customerEscape(notification.detail)}</p></div><button type="button" data-customer-action="read-notification" data-notification-id="${customerEscape(notification.id)}">${notification.read ? 'Read' : 'Mark read'}</button></article>`).join('');
    root.innerHTML = `<header class="customer-page-banner customer-page-banner-small"><div><span class="customer-eyebrow">ACCOUNT UPDATES</span><h1>Notifications</h1><p>Order updates, promotions and helpful reminders.</p></div><div class="customer-breadcrumb"><a href="/user/dashboard">My account</a> / Notifications</div></header><div class="customer-account-layout">${customerAccountNavigation()}<section class="customer-account-main customer-panel">${rows || '<div class="customer-empty">You are all caught up.</div>'}</section></div>`;
}

function customerRenderHelp(root) {
    const questions = [
        ['How does ShopNext delivery work?', 'Sellers offer delivery across Bangladesh. Delivery options and sample charges appear during checkout.'],
        ['Can I pay by Cash on Delivery?', 'The demo checkout supports Cash on Delivery, bKash, Nagad and card selection. No actual payment is processed.'],
        ['How do I track a demo order?', 'Open My Account, choose My Orders, and use Track order to view its sample status timeline.'],
        ['How do wishlist and cart data work?', 'Your browser stores demo cart, wishlist and account preferences locally for this demonstration.'],
    ];
    root.innerHTML = `<header class="customer-page-banner"><div><span class="customer-eyebrow">HERE TO HELP</span><h1>Help center</h1><p>Answers for shopping with ShopNext across Bangladesh.</p></div></header><div class="customer-help-layout"><section class="customer-panel customer-faq-panel"><h2>Frequently asked questions</h2>${questions.map(([question, answer]) => `<details><summary>${customerEscape(question)}</summary><p>${customerEscape(answer)}</p></details>`).join('')}</section><aside class="customer-panel customer-support-card"><span>NEED A HAND?</span><h2>Our demo support team is here.</h2><p>Send a message in this browser demo. It will not be sent to a server.</p><a class="customer-button customer-button-orange" href="/support">Contact support</a><a href="/user/orders">Track an order →</a></aside></div>`;
}

function customerRenderSupport(root) {
    root.innerHTML = `<header class="customer-page-banner customer-page-banner-small"><div><span class="customer-eyebrow">CUSTOMER CARE</span><h1>Contact support</h1><p>Share your question with the local demo support form.</p></div><div class="customer-breadcrumb"><a href="/help">Help center</a> / Support</div></header><section class="customer-panel customer-support-form"><form data-customer-form="support"><label>Your name<input name="name" required value="${customerEscape(customerState.profile.name)}"></label><label>Email address<input name="email" type="email" required value="${customerEscape(customerState.profile.email)}"></label><label>Topic<select name="topic"><option>Order delivery</option><option>Payment question</option><option>Return or refund</option><option>Product information</option><option>Other</option></select></label><label>Message<textarea name="message" rows="5" required minlength="10"></textarea></label><button class="customer-button customer-button-orange">Save demo message</button></form><p>Messages remain in this browser only. This is not a live support service.</p></section>`;
}

function customerRenderPage(root, page) {
    const renderers = {
        checkout: customerRenderCheckout,
        confirmation: customerRenderConfirmation,
        addresses: customerRenderAddresses,
        wishlist: customerRenderWishlist,
        orders: customerRenderOrders,
        'order-details': (element) => customerRenderOrderDetails(element, false),
        tracking: (element) => customerRenderOrderDetails(element, true),
        returns: customerRenderReturns,
        reviews: customerRenderReviews,
        notifications: customerRenderNotifications,
        help: customerRenderHelp,
        support: customerRenderSupport,
    };
    (renderers[page] || customerRenderHelp)(root);
}

function customerShowProfileForm() {
    const root = document.querySelector('[data-customer-account]');
    const host = root?.querySelector('.customer-profile-panel');
    if (!host) return;
    host.innerHTML = `<header class="customer-panel-heading"><div><h2>Edit personal information</h2><p>Changes are stored locally in this browser.</p></div></header><form data-customer-form="profile" class="customer-form-grid"><label>Full name<input name="name" required value="${customerEscape(customerState.profile.name)}"></label><label>Email address<input name="email" type="email" required value="${customerEscape(customerState.profile.email)}"></label><label>Mobile number<input name="phone" required value="${customerEscape(customerState.profile.phone)}"></label><label>City<input name="city" required value="${customerEscape(customerState.profile.city)}"></label><label class="customer-field-wide">Profile image<input type="file" name="avatar" accept="image/*"><span>Choose an image file under 1 MB.</span></label><label class="customer-field-wide">Change password<input type="password" name="password" minlength="6" placeholder="Leave blank to keep the demo password"></label><div class="customer-field-wide customer-form-actions"><button class="customer-button customer-button-orange">Save changes</button><button type="button" data-customer-action="cancel-profile" class="customer-button customer-button-outline">Cancel</button></div></form>`;
}

function customerReadImage(file) {
    if (!file) return Promise.resolve('');
    if (!file.type.startsWith('image/') || file.size > 1024 * 1024) {
        return Promise.reject(new Error('Choose an image file smaller than 1 MB.'));
    }
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(String(reader.result));
        reader.onerror = () => reject(new Error('The selected image could not be read.'));
        reader.readAsDataURL(file);
    });
}

function customerHandleAction(actionElement) {
    const action = actionElement.dataset.customerAction;
    const productId = actionElement.dataset.productId;
    const product = customerGetProduct(productId);
    if (action === 'add-cart' && product) {
        customerAddToCart(productId);
        if (document.querySelector('[data-customer-cart]')) customerRenderCart(document.querySelector('[data-customer-cart]'));
    } else if (action === 'detail-add-cart' && product) {
        const amount = Number(document.querySelector('[data-detail-quantity]')?.value || 1);
        customerAddToCart(productId, amount);
    } else if (action === 'buy-now' && product) {
        customerAddToCart(productId, Number(document.querySelector('[data-detail-quantity]')?.value || 1));
        window.location.assign('/checkout');
    } else if (action === 'wishlist' && product) {
        customerState.wishlist = customerState.wishlist.includes(productId)
            ? customerState.wishlist.filter((id) => id !== productId)
            : [...customerState.wishlist, productId];
        customerSaveState();
        const currentRoot = document.querySelector('[data-customer-catalog], [data-customer-home], [data-customer-account], [data-customer-page]');
        if (currentRoot?.matches('[data-customer-catalog]')) customerRenderCatalog(currentRoot);
        else if (currentRoot?.matches('[data-customer-home]')) customerRenderHome(currentRoot);
        else if (currentRoot?.matches('[data-customer-account]')) customerRenderAccount(currentRoot);
        else if (currentRoot?.dataset.customerPage === 'wishlist') customerRenderWishlist(currentRoot);
        else {
            actionElement.classList.toggle('customer-heart-active', customerState.wishlist.includes(productId));
            actionElement.textContent = customerState.wishlist.includes(productId) ? '♥ Saved' : '♡ Save to wishlist';
        }
        customerToast(customerState.wishlist.includes(productId) ? 'Product saved to your wishlist.' : 'Product removed from your wishlist.');
    } else if (action === 'compare' && product) {
        if (actionElement.checked && customerState.comparisons.length >= 3) {
            actionElement.checked = false;
            customerToast('Compare up to three products at a time.');
            return;
        }
        customerState.comparisons = actionElement.checked
            ? [...new Set([...customerState.comparisons, productId])]
            : customerState.comparisons.filter((id) => id !== productId);
        customerSaveState();
        if (customerState.comparisons.length >= 2) customerRenderComparison();
        else customerToast('Select one more product to compare.');
    } else if (action === 'quantity' && product) {
        const item = customerState.cart.find((entry) => entry.productId === productId);
        if (item) {
            item.quantity = Math.min(product.stock, item.quantity + Number(actionElement.dataset.step));
            if (item.quantity < 1) customerState.cart = customerState.cart.filter((entry) => entry.productId !== productId);
            customerSaveState();
            customerRenderCart(document.querySelector('[data-customer-cart]'));
        }
    } else if (action === 'remove-cart') {
        customerState.cart = customerState.cart.filter((entry) => entry.productId !== productId);
        customerSaveState();
        customerRenderCart(document.querySelector('[data-customer-cart]'));
        customerToast('Product removed from your cart.');
    } else if (action === 'clear-cart' && window.confirm('Remove every item from your demo cart?')) {
        customerState.cart = [];
        customerSaveState();
        customerRenderCart(document.querySelector('[data-customer-cart]'));
    } else if (action === 'reset-filters') {
        customerFilterState = { search: '', category: '', seller: '', price: '', discounted: false, rating: '', availability: '', sort: 'recommended', page: 1 };
        customerRenderCatalog(document.querySelector('[data-customer-catalog]'));
    } else if (action === 'gallery') {
        const image = document.querySelector('[data-detail-main]');
        if (image) image.src = actionElement.dataset.image;
    } else if (action === 'detail-quantity') {
        const input = document.querySelector('[data-detail-quantity]');
        if (input) input.value = String(Math.max(1, Math.min(Number(input.max), Number(input.value) + Number(actionElement.dataset.step))));
    } else if (action === 'helpful-review') {
        const count = Number(actionElement.textContent.match(/\d+/)?.[0] || 0) + 1;
        actionElement.textContent = `Helpful · ${count}`;
        actionElement.disabled = true;
    } else if (action === 'edit-profile') {
        customerShowProfileForm();
    } else if (action === 'cancel-profile') {
        customerRenderAccount(document.querySelector('[data-customer-account]'));
    } else if (action === 'new-address') {
        document.querySelector('[data-customer-form="address"]')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        document.querySelector('[data-customer-form="address"] input[name="name"]')?.focus();
    } else if (action === 'default-address') {
        customerState.addresses.forEach((address) => { address.default = address.id === actionElement.dataset.addressId; });
        customerState.selectedAddressId = actionElement.dataset.addressId;
        customerSaveState();
        customerRenderAddresses(document.querySelector('[data-customer-page]'));
    } else if (action === 'remove-address') {
        if (window.confirm('Remove this saved address from the demo account?')) {
            customerState.addresses = customerState.addresses.filter((address) => address.id !== actionElement.dataset.addressId);
            if (customerState.selectedAddressId === actionElement.dataset.addressId) customerState.selectedAddressId = customerState.addresses[0]?.id || '';
            customerSaveState();
            customerRenderAddresses(document.querySelector('[data-customer-page]'));
            customerToast('Saved address removed.');
        }
    } else if (action === 'edit-address') {
        customerToast('Use the address form below to add a corrected delivery address.');
        document.querySelector('[data-customer-form="address"]')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else if (action === 'cancel-order') {
        const order = customerState.orders.find((item) => item.id === actionElement.dataset.orderId);
        if (order && window.confirm(`Request cancellation for order ${order.id}?`)) {
            order.status = 'Cancelled';
            customerSaveState();
            customerRenderPage(document.querySelector('[data-customer-page]'), document.querySelector('[data-customer-page]').dataset.customerPage);
            customerToast('Demo cancellation request recorded.');
        }
    } else if (action === 'read-notification') {
        const notification = customerState.notifications.find((item) => item.id === actionElement.dataset.notificationId);
        if (notification) {
            notification.read = true;
            customerSaveState();
            customerRenderNotifications(document.querySelector('[data-customer-page]'));
        }
    } else if (action === 'page-step') {
        customerFilterState.page = Math.max(1, customerFilterState.page + Number(actionElement.dataset.customerPageStep));
        customerFilterCatalog();
    }
}

function customerRenderComparison() {
    let modal = document.querySelector('[data-customer-compare-modal]');
    if (!modal) {
        modal = document.createElement('div');
        modal.className = 'customer-modal-backdrop';
        modal.dataset.customerCompareModal = '';
        document.body.append(modal);
    }
    const products = customerState.comparisons.map(customerGetProduct).filter(Boolean);
    modal.innerHTML = `<section class="customer-compare-modal"><header><div><span class="customer-eyebrow">SHOP SMARTER</span><h2>Compare products</h2></div><button type="button" data-customer-action="close-compare">×</button></header><div class="customer-compare-grid">${products.map((product) => `<article><img src="${customerEscape(product.image)}" alt="${customerEscape(product.name)}"><h3>${customerEscape(product.name)}</h3><p>${customerEscape(product.sellerName)}</p><strong>${customerMoney(product.discountPrice || product.price)}</strong><dl><dt>Category</dt><dd>${customerEscape(product.category)}</dd><dt>Rating</dt><dd>${Number(product.rating || 0).toFixed(1)} / 5</dd><dt>Available stock</dt><dd>${product.stock}</dd><dt>Specifications</dt><dd>${customerEscape(product.specifications || 'Seller details available')}</dd></dl><button type="button" class="customer-button customer-button-orange" data-customer-action="add-cart" data-product-id="${customerEscape(product.id)}">Add to cart</button></article>`).join('')}</div></section>`;
    modal.hidden = false;
    modal.addEventListener('click', (event) => {
        if (event.target === modal || event.target.closest('[data-customer-action="close-compare"]')) modal.remove();
    }, { once: true });
}

function customerHandleForm(form) {
    const values = new FormData(form);
    const field = (name) => String(values.get(name) || '').trim();
    const formType = form.dataset.customerForm;
    if (formType === 'profile') {
        return customerReadImage(values.get('avatar')).then((avatar) => {
            customerState.profile = { ...customerState.profile, name: field('name'), email: field('email'), phone: field('phone'), city: field('city'), avatar: avatar || customerState.profile.avatar };
            customerSaveState();
            customerRenderAccount(document.querySelector('[data-customer-account]'));
            customerToast('Your demo customer profile has been updated.');
        });
    }
    if (formType === 'address') {
        const address = { id: `ADDR-${Date.now()}`, name: field('name'), phone: field('phone'), area: field('area'), city: field('city'), details: field('details'), default: customerState.addresses.length === 0 };
        customerState.addresses.push(address);
        if (address.default) customerState.selectedAddressId = address.id;
        customerSaveState();
        customerRenderAddresses(document.querySelector('[data-customer-page]'));
        customerToast('Delivery address saved in this browser.');
        return Promise.resolve();
    }
    if (formType === 'review') {
        customerState.reviews.push({ id: `REV-${Date.now()}`, productId: form.dataset.productId, productName: customerGetProduct(form.dataset.productId)?.name || 'ShopNext product', rating: Number(field('rating')), title: field('title'), text: field('text'), date: new Date().toLocaleDateString('en-GB') });
        customerSaveState();
        customerToast('Your demo review has been saved.');
        customerRenderProductDetails(document.querySelector('[data-customer-product-detail]'));
        return Promise.resolve();
    }
    if (formType === 'checkout') {
        const totals = customerCartTotals();
        const unavailableItem = totals.items.find(({ item, product }) => item.quantity > product.stock);
        if (unavailableItem) {
            customerToast(`Only ${unavailableItem.product.stock} units of ${unavailableItem.product.name} remain.`);
            return Promise.resolve();
        }
        const delivery = field('delivery') === 'express' ? totals.delivery + 60 : totals.delivery;
        const paymentMethod = field('payment');
        const orderId = `SN-${Math.floor(20000 + Math.random() * 70000)}`;
        const order = { id: orderId, productId: totals.items[0]?.product.id, productName: totals.items.map(({ product, item }) => `${product.name} × ${item.quantity}`).join(', '), seller: totals.items.map(({ product }) => product.sellerName).join(', '), date: new Date().toISOString().slice(0, 10), quantity: totals.itemCount, subtotal: totals.subtotal, delivery, total: totals.subtotal + delivery, paymentMethod, paymentStatus: paymentMethod === 'Cash on Delivery' ? 'Due on delivery' : 'Demo selection only', status: 'Pending', address: `${field('address')}, ${field('city')}` };
        customerState.orders.unshift(order);
        totals.items.forEach(({ item, product }) => {
            const remainingStock = Math.max(0, Number(product.stock) - item.quantity);
            customerState.stockOverrides[product.id] = remainingStock;
            product.stock = remainingStock;
        });
        try {
            const sellerData = JSON.parse(sessionStorage.getItem(customerSellerStorageKey) || '{}');
            Object.values(sellerData).forEach((seller) => seller.products.forEach((sellerProduct) => {
                if (Object.hasOwn(customerState.stockOverrides, sellerProduct.id)) {
                    sellerProduct.stock = customerState.stockOverrides[sellerProduct.id];
                }
            }));
            sessionStorage.setItem(customerSellerStorageKey, JSON.stringify(sellerData));
        } catch (error) {
            console.error('Unable to sync checkout stock with the seller demo catalog.', error);
        }
        customerState.notifications.unshift({ id: `CNOT-${Date.now()}`, title: `Order ${orderId} received`, detail: 'Your frontend demo order has been created.', read: false });
        customerState.cart = [];
        customerSaveState();
        window.location.assign(`/order-confirmation?order_id=${encodeURIComponent(orderId)}`);
        return Promise.resolve();
    }
    if (formType === 'return') {
        const order = customerState.orders.find((item) => item.id === field('orderId'));
        if (!order) {
            customerToast('Choose a delivered demo order to request a return.');
            return Promise.resolve();
        }
        customerState.returns.unshift({ id: `RET-${Date.now()}`, orderId: order.id, productName: order.productName, reason: field('reason'), details: field('details'), date: new Date().toISOString().slice(0, 10), status: 'Request received' });
        customerSaveState();
        customerRenderReturns(document.querySelector('[data-customer-page]'));
        customerToast('Demo return request recorded.');
        return Promise.resolve();
    }
    if (formType === 'support') {
        customerState.supportMessages.unshift({ id: `SUP-${Date.now()}`, name: field('name'), email: field('email'), topic: field('topic'), message: field('message'), date: new Date().toISOString().slice(0, 10) });
        customerSaveState();
        form.reset();
        customerToast('Your support message is saved locally in this demo.');
        return Promise.resolve();
    }
    if (formType === 'newsletter') {
        customerToast('You are subscribed to demo ShopNext updates.');
        form.reset();
    }
    if (formType === 'register') {
        customerState.profile = { ...customerState.profile, name: field('name'), email: field('email'), phone: field('phone'), city: field('city') };
        customerSaveState();
        customerToast('Your demo profile is ready. Opening your customer account.');
        window.setTimeout(() => window.location.assign('/user/dashboard'), 400);
    }
    return Promise.resolve();
}

function formDeliveryCharge() {
    const totals = customerCartTotals();
    return document.querySelector('[name="delivery"]:checked')?.value === 'express' ? totals.delivery + 60 : totals.delivery;
}

function customerInitialize() {
    customerBuildCatalog();
    customerSaveState();
    document.querySelectorAll('[data-cart-count]').forEach((counter) => { counter.textContent = String(customerState.cart.reduce((sum, item) => sum + item.quantity, 0)); });
    document.querySelectorAll('[data-cart-label]').forEach((label) => { label.textContent = `Cart (${customerState.cart.reduce((sum, item) => sum + item.quantity, 0)})`; });

    const home = document.querySelector('[data-customer-home]');
    const catalog = document.querySelector('[data-customer-catalog]');
    const cart = document.querySelector('[data-customer-cart]');
    const detail = document.querySelector('[data-customer-product-detail]');
    const account = document.querySelector('[data-customer-account]');
    const page = document.querySelector('[data-customer-page]');
    if (home) customerRenderHome(home);
    if (catalog) customerRenderCatalog(catalog);
    if (cart) customerRenderCart(cart);
    if (detail) customerRenderProductDetails(detail);
    if (account) customerRenderAccount(account);
    if (page) customerRenderPage(page, page.dataset.customerPage);

    const globalSearch = document.querySelector('input[name="search"]');
    if (globalSearch && catalog) {
        globalSearch.value = new URLSearchParams(window.location.search).get('search') || '';
        globalSearch.addEventListener('input', () => {
            customerFilterState.search = globalSearch.value;
            customerFilterState.page = 1;
            customerFilterCatalog();
        });
    }

    const loginForm = document.querySelector('[data-login-form]');
    if (loginForm) {
        loginForm.addEventListener('submit', () => {
            const customerRole = document.querySelector('[data-login-role="user"][aria-pressed="true"]');
            const email = loginForm.querySelector('[data-login-email]')?.value.trim();
            if (customerRole && email) {
                customerState.profile.email = email;
                customerSaveState();
            }
        }, true);
    }

    const registrationForm = document.querySelector('[data-customer-form="register"]');
    if (registrationForm) {
        registrationForm.addEventListener('submit', (event) => {
            event.preventDefault();
            if (!registrationForm.reportValidity()) return;
            const password = registrationForm.querySelector('[name="password"]');
            const passwordConfirmation = registrationForm.querySelector('[name="password_confirmation"]');
            passwordConfirmation.setCustomValidity(password.value === passwordConfirmation.value ? '' : 'Passwords do not match.');
            if (!registrationForm.reportValidity()) return;
            Promise.resolve(customerHandleForm(registrationForm)).catch((error) => {
                console.error('Unable to create the customer demo profile.', error);
                customerToast(error.message || 'The customer demo profile could not be created.');
            });
        });
    }

    const customerRoot = home || catalog || cart || detail || account || page;
    if (!customerRoot) {
        window.shopNextAddToCart = customerAddToCart;
        return;
    }
    window.shopNextAddToCart = customerAddToCart;
    document.addEventListener('click', (event) => {
        const modalAction = event.target.closest('[data-customer-action]');
        if (modalAction?.closest('[data-customer-compare-modal]')) {
            event.preventDefault();
            if (modalAction.dataset.customerAction === 'close-compare') {
                document.querySelector('[data-customer-compare-modal]')?.remove();
            } else if (modalAction.dataset.customerAction === 'add-cart') {
                customerAddToCart(modalAction.dataset.productId);
            }
            return;
        }
    });
    customerRoot.addEventListener('click', (event) => {
        const actionElement = event.target.closest('[data-customer-action]');
        const paginationButton = event.target.closest('[data-customer-page-step]');
        if (actionElement) {
            if (actionElement.dataset.customerAction === 'compare') return;
            event.preventDefault();
            event.stopPropagation();
            customerHandleAction(actionElement);
        } else if (paginationButton) {
            customerFilterState.page = Math.max(1, customerFilterState.page + Number(paginationButton.dataset.customerPageStep));
            customerFilterCatalog();
        }
    });
    customerRoot.addEventListener('input', (event) => {
        if (event.target.matches('[data-customer-search]')) {
            customerFilterState.search = event.target.value;
            customerFilterState.page = 1;
            customerFilterCatalog();
        }
    });
    customerRoot.addEventListener('change', (event) => {
        if (event.target.matches('[data-customer-action="compare"]')) {
            customerHandleAction(event.target);
        }
        const filter = event.target.dataset.customerFilter;
        if (filter) {
            customerFilterState[filter] = filter === 'discounted' ? event.target.checked : event.target.value;
            customerFilterState.page = 1;
            customerFilterCatalog();
        }
        if (event.target.name === 'customer-price') {
            customerFilterState.price = event.target.value;
            customerFilterState.page = 1;
            customerFilterCatalog();
        }
        if (event.target.matches('[name="savedAddress"]')) {
            const address = customerState.addresses.find((item) => item.id === event.target.value);
            const checkoutForm = event.target.closest('form');
            if (address && checkoutForm) {
                checkoutForm.elements.namedItem('name').value = address.name;
                checkoutForm.elements.namedItem('phone').value = address.phone;
                checkoutForm.elements.namedItem('city').value = address.city;
                checkoutForm.elements.namedItem('address').value = `${address.details}, ${address.area}`;
                customerState.selectedAddressId = address.id;
                customerSaveState();
            }
        }
        if (event.target.matches('[name="payment"]')) {
            const note = document.querySelector('[data-cod-note]');
            if (note) note.hidden = event.target.value !== 'Cash on Delivery';
            if (note && !note.hidden) {
                const totals = customerCartTotals();
                const delivery = formDeliveryCharge();
                note.querySelector('p').textContent = `Delivery charge of ${customerMoney(delivery)} is required in advance in this demo. Product amount of ${customerMoney(totals.subtotal)} is payable upon delivery.`;
            }
        }
        if (event.target.matches('[name="delivery"]')) {
            const totals = customerCartTotals();
            const delivery = event.target.value === 'express' ? totals.delivery + 60 : totals.delivery;
            const deliveryLabel = document.querySelector('[data-checkout-delivery]');
            const totalLabel = document.querySelector('[data-checkout-total]');
            if (deliveryLabel) deliveryLabel.textContent = customerMoney(delivery);
            if (totalLabel) totalLabel.textContent = customerMoney(totals.subtotal + delivery);
            const codNote = document.querySelector('[data-cod-note]:not([hidden]) p');
            if (codNote) codNote.textContent = `Delivery charge of ${customerMoney(delivery)} is required in advance in this demo. Product amount of ${customerMoney(totals.subtotal)} is payable upon delivery.`;
        }
    });
    customerRoot.addEventListener('submit', (event) => {
        const form = event.target.closest('[data-customer-form]');
        if (!form) return;
        event.preventDefault();
        event.stopPropagation();
        if (!form.reportValidity()) return;
        Promise.resolve(customerHandleForm(form)).catch((error) => {
            console.error('Unable to save the customer demo form.', error);
            customerToast(error.message || 'The demo form could not be saved.');
        });
    });

    document.querySelectorAll('input[name="search"]').forEach((input) => {
        const form = input.closest('form');
        if (form) {
            form.addEventListener('submit', (event) => {
                if (catalog) {
                    event.preventDefault();
                    customerFilterState.search = input.value;
                    customerFilterState.page = 1;
                    customerFilterCatalog();
                }
            });
        }
    });
}

document.addEventListener('DOMContentLoaded', customerInitialize);
