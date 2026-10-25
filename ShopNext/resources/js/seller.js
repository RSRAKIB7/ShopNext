const sellerDataKey = 'shopnext-seller-data';
const activeSellerKey = 'shopnext-active-seller';
const productPlaceholder = '/images/product-placeholder.svg';

const starterSellers = {
    'seller-dhaka': {
        id: 'seller-dhaka',
        name: 'Dhaka Stationery House',
        city: 'Dhaka',
        email: 'seller.dhaka@example.com',
        description: 'Study tools, office supplies and everyday essentials, delivered across Bangladesh.',
        logo: '',
        banner: '',
        categories: ['Stationery & Tools', 'Books', 'Electronics'],
        products: [
            { id: 'SN-DH-1001', name: 'ClassWiz Scientific Calculator', category: 'Electronics', price: 2800, discountPrice: 2450, stock: 18, available: true, image: 'https://images.unsplash.com/photo-1594980596870-8aa52a78d8cd?w=700&auto=format&fit=crop&q=80', description: 'A dependable scientific calculator for school, university and professional study.', specifications: 'Model: CW-991 | Warranty: 1 year', rating: 4.9 },
            { id: 'SN-DH-1002', name: 'Engineering Mechanics Textbook', category: 'Books', price: 950, discountPrice: 850, stock: 7, available: true, image: 'https://images.unsplash.com/photo-1532012164546-f432f2e3edd9?w=700&auto=format&fit=crop&q=80', description: 'A comprehensive mechanics textbook with worked examples.', specifications: 'Paperback | 480 pages', rating: 4.7 },
            { id: 'SN-DH-1003', name: 'Premium Drawing Instruments Set', category: 'Stationery & Tools', price: 620, discountPrice: 550, stock: 2, available: true, image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=700&auto=format&fit=crop&q=80', description: 'Precision tools for drawing, design and technical coursework.', specifications: '12-piece set | Metal case', rating: 4.8 },
            { id: 'SN-DH-1004', name: 'A4 Premium Notebook Pack', category: 'Stationery & Tools', price: 280, discountPrice: 250, stock: 0, available: true, image: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=700&auto=format&fit=crop&q=80', description: 'Smooth ruled pages for notes and daily planning.', specifications: 'Pack of 3 | 120 pages each', rating: 4.5 },
        ],
        orders: [
            { id: 'ORD-4201', customer: 'Nusrat Jahan', area: 'Dhanmondi, Dhaka', product: 'ClassWiz Scientific Calculator', total: 2450, status: 'Processing', date: '22 Oct 2026' },
            { id: 'ORD-4198', customer: 'Tanvir Ahmed', area: 'Uttara, Dhaka', product: 'Engineering Mechanics Textbook', total: 850, status: 'Packed', date: '21 Oct 2026' },
            { id: 'ORD-4187', customer: 'Samira Rahman', area: 'Agrabad, Chattogram', product: 'Premium Drawing Instruments Set', total: 550, status: 'Delivered', date: '19 Oct 2026' },
        ],
        reviews: [
            { id: 'REV-1001', customer: 'Nusrat Jahan', product: 'ClassWiz Scientific Calculator', rating: 5, text: 'Arrived quickly and works perfectly.', visible: true },
            { id: 'REV-1002', customer: 'Tanvir Ahmed', product: 'Engineering Mechanics Textbook', rating: 4, text: 'Good print quality and carefully packed.', visible: true },
        ],
        monthlySales: [24000, 31500, 28700, 42000, 38600, 52800],
        commissionRate: 5,
    },
    'seller-chattogram': {
        id: 'seller-chattogram',
        name: 'RoboTech Bangladesh',
        city: 'Chattogram',
        email: 'seller.ctg@example.com',
        description: 'Electronics, components and creative tech kits from a local specialist seller.',
        logo: '',
        banner: '',
        categories: ['Electronics', 'Components', 'Learning Kits'],
        products: [
            { id: 'SN-CT-2001', name: 'Arduino Starter Kit', category: 'Learning Kits', price: 1850, discountPrice: 1690, stock: 12, available: true, image: 'https://images.unsplash.com/photo-1553406830-ef2513450d76?w=700&auto=format&fit=crop&q=80', description: 'A starter kit for building practical electronics and programming projects.', specifications: 'Board, cable and 35 components', rating: 4.8 },
            { id: 'SN-CT-2002', name: 'Digital Multimeter', category: 'Electronics', price: 1250, discountPrice: 1100, stock: 5, available: true, image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=700&auto=format&fit=crop&q=80', description: 'Compact multimeter for everyday electronics testing.', specifications: 'Auto range | Test leads included', rating: 4.6 },
            { id: 'SN-CT-2003', name: 'Breadboard Components Bundle', category: 'Components', price: 480, discountPrice: 420, stock: 0, available: true, image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=700&auto=format&fit=crop&q=80', description: 'A useful selection of parts for prototyping and hobby projects.', specifications: '120 components | Storage box', rating: 4.5 },
        ],
        orders: [
            { id: 'ORD-5308', customer: 'Rafi Chowdhury', area: 'GEC Circle, Chattogram', product: 'Arduino Starter Kit', total: 1690, status: 'Processing', date: '23 Oct 2026' },
            { id: 'ORD-5302', customer: 'Maliha Islam', area: 'Mirpur, Dhaka', product: 'Digital Multimeter', total: 1100, status: 'Shipped', date: '21 Oct 2026' },
        ],
        reviews: [
            { id: 'REV-2001', customer: 'Rafi Chowdhury', product: 'Arduino Starter Kit', rating: 5, text: 'Everything needed to get started. Great value.', visible: true },
        ],
        monthlySales: [16500, 19800, 22400, 20800, 29300, 34700],
        commissionRate: 5,
    },
};

const sellerPageTitles = {
    overview: 'Dashboard Overview',
    products: 'My Products',
    'add-product': 'Add New Product',
    'edit-product': 'Edit Product',
    categories: 'Product Categories',
    inventory: 'Inventory Management',
    'store-profile': 'Store Profile',
    orders: 'Manage Orders',
    sales: 'Sales and Revenue',
    commission: 'Platform Commission',
    reviews: 'Reviews and Ratings',
    analytics: 'Sales Analytics',
    notifications: 'Notifications',
};

function sellerEscape(value) {
    return String(value ?? '').replace(/[&<>"']/g, (character) => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
    })[character]);
}

function sellerMoney(value) {
    return `৳${Number(value || 0).toLocaleString('en-BD')}`;
}

function loadSellerData() {
    const savedData = sessionStorage.getItem(sellerDataKey);

    if (!savedData) {
        return structuredClone(starterSellers);
    }

    try {
        const sellers = JSON.parse(savedData);
        return sellers && typeof sellers === 'object' ? sellers : structuredClone(starterSellers);
    } catch (error) {
        console.error('Unable to load ShopNext seller demo data.', error);
        return structuredClone(starterSellers);
    }
}

let sellerAccounts = loadSellerData();

function saveSellerData() {
    sessionStorage.setItem(sellerDataKey, JSON.stringify(sellerAccounts));
}

function getActiveSellerId() {
    const savedSeller = sessionStorage.getItem(activeSellerKey);
    return sellerAccounts[savedSeller] ? savedSeller : 'seller-dhaka';
}

function getActiveSeller() {
    return sellerAccounts[getActiveSellerId()];
}

function sellerProductStatus(product) {
    if (product.stock < 1) {
        return { label: 'Out of stock', className: 'seller-status-out' };
    }

    if (product.stock <= 3) {
        return { label: 'Low stock', className: 'seller-status-low' };
    }

    return product.available
        ? { label: 'Active', className: 'seller-status-active' }
        : { label: 'Hidden', className: 'seller-status-hidden' };
}

function sellerCard(label, value, hint, color = '') {
    return `<article class="seller-stat-card ${color}"><span>${sellerEscape(label)}</span><strong>${sellerEscape(value)}</strong><small>${sellerEscape(hint)}</small></article>`;
}

function sellerChart(values) {
    const months = ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];
    const maximum = Math.max(...values, 1);

    return `<div class="seller-chart">${values.map((value, index) => `
        <div class="seller-chart-column">
            <strong>${sellerMoney(value)}</strong>
            <div class="seller-chart-bar" style="height:${Math.max(8, Math.round((value / maximum) * 100))}%"></div>
            <span>${months[index]}</span>
        </div>`).join('')}</div>`;
}

function sellerPanel(title, description, body, action = '') {
    return `<section class="seller-panel">
        <div class="seller-panel-heading"><div><h2>${sellerEscape(title)}</h2><p>${sellerEscape(description)}</p></div>${action}</div>
        ${body}
    </section>`;
}

function sellerProductTable(products, showActions = true) {
    if (!products.length) {
        return '<div class="seller-empty-state"><strong>No products found</strong><span>Try changing the search, filter, or seller account.</span></div>';
    }

    return `<div class="seller-table-wrap"><table class="seller-table">
        <thead><tr><th>Product</th><th>Product ID</th><th>Category</th><th>Price</th><th>Discount price</th><th>Stock</th><th>Status</th>${showActions ? '<th>Actions</th>' : ''}</tr></thead>
        <tbody>${products.map((product) => {
            const status = sellerProductStatus(product);
            return `<tr>
                <td><div class="seller-product-cell"><img src="${sellerEscape(product.image || productPlaceholder)}" alt=""><strong>${sellerEscape(product.name)}</strong></div></td>
                <td>${sellerEscape(product.id)}</td>
                <td>${sellerEscape(product.category)}</td>
                <td>${sellerMoney(product.price)}</td>
                <td>${sellerMoney(product.discountPrice)}</td>
                <td><strong>${product.stock}</strong>${product.stock > 0 && product.stock <= 3 ? '<small class="seller-low-stock-note">Low stock</small>' : ''}</td>
                <td><span class="seller-status ${status.className}">${status.label}</span></td>
                ${showActions ? `<td><div class="seller-row-actions">
                    <button type="button" data-seller-action="view-product" data-product-id="${sellerEscape(product.id)}">View</button>
                    <button type="button" data-seller-action="edit-product" data-product-id="${sellerEscape(product.id)}">Edit</button>
                    <button type="button" data-seller-action="toggle-product" data-product-id="${sellerEscape(product.id)}">${product.available ? 'Update' : 'Activate'}</button>
                    <button type="button" data-seller-action="delete-product" data-product-id="${sellerEscape(product.id)}" class="seller-delete-action">Delete</button>
                </div></td>` : ''}
            </tr>`;
        }).join('')}</tbody>
    </table></div>`;
}

function sellerOrderTable(orders) {
    if (!orders.length) {
        return '<div class="seller-empty-state"><strong>No orders yet</strong><span>New demo orders will appear here.</span></div>';
    }

    return `<div class="seller-table-wrap"><table class="seller-table">
        <thead><tr><th>Order ID</th><th>Customer</th><th>Delivery area</th><th>Product</th><th>Total</th><th>Order date</th><th>Status</th><th>Details</th></tr></thead>
        <tbody>${orders.map((order) => `<tr>
            <td><strong>${sellerEscape(order.id)}</strong></td>
            <td>${sellerEscape(order.customer)}</td>
            <td>${sellerEscape(order.area)}</td>
            <td>${sellerEscape(order.product)}</td>
            <td>${sellerMoney(order.total)}</td>
            <td>${sellerEscape(order.date)}</td>
            <td><select data-order-status="${sellerEscape(order.id)}" class="seller-status-select">${['Processing', 'Packed', 'Shipped', 'Delivered', 'Cancelled'].map((status) => `<option ${order.status === status ? 'selected' : ''}>${status}</option>`).join('')}</select></td>
            <td><button type="button" data-seller-action="order-details" data-order-id="${sellerEscape(order.id)}" class="seller-link-button">View details</button></td>
        </tr>`).join('')}</tbody>
    </table></div>`;
}

function renderSellerOverview(seller) {
    const products = seller.products;
    const active = products.filter((product) => product.available && product.stock > 0).length;
    const outOfStock = products.filter((product) => product.stock < 1).length;
    const pending = seller.orders.filter((order) => ['Processing', 'Packed'].includes(order.status)).length;
    const totalSales = seller.monthlySales.reduce((sum, amount) => sum + amount, 0);
    const monthlyRevenue = seller.monthlySales[seller.monthlySales.length - 1] || 0;
    const commission = Math.round(totalSales * seller.commissionRate / 100);

    return `<div class="seller-stat-grid">
        ${sellerCard('Total products', products.length, 'In your catalogue')}
        ${sellerCard('Active products', active, 'Available to customers', 'seller-stat-green')}
        ${sellerCard('Out of stock', outOfStock, 'Needs restocking', 'seller-stat-red')}
        ${sellerCard('Total orders', seller.orders.length, 'Sample orders for this store')}
        ${sellerCard('Pending orders', pending, 'Ready for your attention', 'seller-stat-amber')}
        ${sellerCard('Total sales', sellerMoney(totalSales), 'Sample order value')}
        ${sellerCard('Monthly revenue', sellerMoney(monthlyRevenue), 'Current month sample', 'seller-stat-green')}
        ${sellerCard('Estimated profit', sellerMoney(Math.round(monthlyRevenue * 0.7)), 'After estimated costs')}
        ${sellerCard('Platform commission', sellerMoney(commission), `${seller.commissionRate}% demo rate`, 'seller-stat-purple')}
    </div>
    <div class="seller-overview-grid">
        ${sellerPanel('Sales performance', 'Six-month sample revenue · BDT', sellerChart(seller.monthlySales))}
        ${sellerPanel('Recent orders', 'Latest demo orders and delivery status', sellerOrderTable(seller.orders.slice(0, 3)))}
    </div>
    ${sellerPanel('Products needing attention', 'Review low stock and availability before your next sale.', sellerProductTable(products.filter((product) => product.stock <= 3)))}`;
}

function renderSellerProducts(seller, page = 1) {
    const search = document.querySelector('[data-product-search]')?.value.toLowerCase() || '';
    const category = document.querySelector('[data-product-category]')?.value || '';
    const sortOrder = document.querySelector('[data-product-order]')?.value || 'name';
    const filtered = seller.products.filter((product) => {
        return `${product.name} ${product.id} ${product.category}`.toLowerCase().includes(search)
            && (!category || product.category === category);
    });

    filtered.sort((first, second) => {
        if (sortOrder === 'price-low') {
            return first.discountPrice - second.discountPrice;
        }

        if (sortOrder === 'price-high') {
            return second.discountPrice - first.discountPrice;
        }

        if (sortOrder === 'stock') {
            return first.stock - second.stock;
        }

        return first.name.localeCompare(second.name);
    });

    const pageSize = 5;
    const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize));
    const currentPage = Math.min(page, pageCount);
    const visibleProducts = filtered.slice((currentPage - 1) * pageSize, currentPage * pageSize);
    const categories = [...new Set(seller.categories)];
    const filters = `<div class="seller-toolbar">
        <input data-product-search type="search" value="${sellerEscape(search)}" placeholder="Search products by name or ID">
        <select data-product-category><option value="">All categories</option>${categories.map((item) => `<option ${category === item ? 'selected' : ''}>${sellerEscape(item)}</option>`).join('')}</select>
        <select data-product-order><option value="name" ${sortOrder === 'name' ? 'selected' : ''}>Sort: Name</option><option value="price-low" ${sortOrder === 'price-low' ? 'selected' : ''}>Price: low to high</option><option value="price-high" ${sortOrder === 'price-high' ? 'selected' : ''}>Price: high to low</option><option value="stock" ${sortOrder === 'stock' ? 'selected' : ''}>Stock: low to high</option></select>
        <span>${filtered.length} products</span>
    </div>`;
    const pagination = `<div class="seller-pagination"><span>Page ${currentPage} of ${pageCount}</span><div><button type="button" data-product-page="${Math.max(1, currentPage - 1)}" ${currentPage === 1 ? 'disabled' : ''}>Previous</button><button type="button" data-product-page="${Math.min(pageCount, currentPage + 1)}" ${currentPage === pageCount ? 'disabled' : ''}>Next</button></div></div>`;

    return `${sellerPanel('My Products', 'Only products for the selected demo seller are shown here.', filters + sellerProductTable(visibleProducts) + pagination,
        '<button type="button" data-seller-action="new-product" class="seller-button seller-button-primary">＋ Add New Product</button>')}`;
}

function renderProductForm(seller, product = null) {
    const editing = Boolean(product);
    const formTitle = editing ? 'Edit product details' : 'Add a product to your store';
    const categoryOptions = [...new Set(seller.categories)].map((category) => `<option ${product?.category === category ? 'selected' : ''}>${sellerEscape(category)}</option>`).join('');

    return sellerPanel(formTitle, 'Product changes are saved in this browser session and shown in your store preview.', `
        <form data-seller-form="product" class="seller-form-grid">
            <input type="hidden" name="productId" value="${sellerEscape(product?.id || '')}">
            <label class="seller-field seller-field-wide">Product name<input name="name" required maxlength="100" value="${sellerEscape(product?.name || '')}" placeholder="e.g. Premium Wireless Headphones"></label>
            <label class="seller-field">Category<select name="category" required>${categoryOptions}<option value="new-category">＋ Add a new category</option></select></label>
            <label class="seller-field">Availability status<select name="available"><option value="true" ${product?.available !== false ? 'selected' : ''}>Active</option><option value="false" ${product?.available === false ? 'selected' : ''}>Hidden</option></select></label>
            <label class="seller-field">Regular price (৳)<input name="price" type="number" required min="1" value="${sellerEscape(product?.price ?? '')}"></label>
            <label class="seller-field">Discount price (৳)<input name="discountPrice" type="number" required min="1" value="${sellerEscape(product?.discountPrice ?? '')}"></label>
            <label class="seller-field">Stock quantity<input name="stock" type="number" required min="0" value="${sellerEscape(product?.stock ?? 0)}"></label>
            <label class="seller-field">Product image<input name="imageFile" type="file" accept="image/*"><span class="seller-field-hint">Choose an image under 1 MB, or add an image URL below.</span></label>
            <label class="seller-field">Image URL<input name="image" type="text" value="${sellerEscape(product?.image || '')}" placeholder="https://example.com/product.jpg"></label>
            <label class="seller-field seller-field-wide">Description<textarea name="description" rows="4" required placeholder="Describe the product clearly">${sellerEscape(product?.description || '')}</textarea></label>
            <label class="seller-field seller-field-wide">Specifications<textarea name="specifications" rows="3" placeholder="Materials, size, warranty or other specifications">${sellerEscape(product?.specifications || '')}</textarea></label>
            <div class="seller-form-actions seller-field-wide"><button type="button" data-seller-action="products" class="seller-button seller-button-light">Cancel</button><button type="submit" class="seller-button seller-button-primary">${editing ? 'Save product changes' : 'Add product'}</button></div>
        </form>`);
}

function renderCategories(seller) {
    const rows = seller.categories.map((category, index) => `<tr><td>${sellerEscape(category)}</td><td>${seller.products.filter((product) => product.category === category).length}</td><td><button type="button" data-seller-action="delete-category" data-category-index="${index}" class="seller-link-button seller-delete-action">Remove</button></td></tr>`).join('');

    return sellerPanel('Product Categories', 'Organize your catalogue using categories from this seller account.', `
        <form data-seller-form="category" class="seller-inline-form"><input name="category" required maxlength="40" placeholder="New category name"><button class="seller-button seller-button-primary">Add category</button></form>
        <div class="seller-table-wrap"><table class="seller-table"><thead><tr><th>Category</th><th>Products</th><th>Action</th></tr></thead><tbody>${rows || '<tr><td colspan="3">No categories yet</td></tr>'}</tbody></table></div>`);
}

function renderInventory(seller) {
    const inventory = seller.products.map((product) => {
        const status = sellerProductStatus(product);
        return `<tr><td>${sellerEscape(product.name)}</td><td>${sellerEscape(product.id)}</td><td><strong>${product.stock}</strong>${product.stock > 0 && product.stock <= 3 ? '<span class="seller-status seller-status-low">Low stock</span>' : ''}</td><td><span class="seller-status ${status.className}">${status.label}</span></td><td><button type="button" data-seller-action="stock-down" data-product-id="${sellerEscape(product.id)}" class="seller-stock-button">−</button><button type="button" data-seller-action="stock-up" data-product-id="${sellerEscape(product.id)}" class="seller-stock-button">＋ Restock</button></td></tr>`;
    }).join('');

    return sellerPanel('Inventory Management', 'Track stock levels and restock products in your selected store.', `<div class="seller-table-wrap"><table class="seller-table"><thead><tr><th>Product</th><th>Product ID</th><th>Available quantity</th><th>Stock status</th><th>Update stock</th></tr></thead><tbody>${rows}</tbody></table></div>`);
}

function renderStoreProfile(seller) {
    return sellerPanel('Store Profile', 'Edit the information customers see on your public storefront.', `
        <form data-seller-form="store" class="seller-form-grid">
            <label class="seller-field">Store name<input name="name" required value="${sellerEscape(seller.name)}"></label>
            <label class="seller-field">City<input name="city" required value="${sellerEscape(seller.city)}"></label>
            <label class="seller-field seller-field-wide">Store description<textarea name="description" rows="4" required>${sellerEscape(seller.description)}</textarea></label>
            <label class="seller-field">Store logo<input name="logoFile" type="file" accept="image/*"><span class="seller-field-hint">Image file under 1 MB.</span></label>
            <label class="seller-field">Logo image URL<input name="logo" type="text" value="${sellerEscape(seller.logo)}" placeholder="https://example.com/logo.png"></label>
            <label class="seller-field">Store banner<input name="bannerFile" type="file" accept="image/*"><span class="seller-field-hint">Image file under 1 MB.</span></label>
            <label class="seller-field">Banner image URL<input name="banner" type="text" value="${sellerEscape(seller.banner)}" placeholder="https://example.com/banner.jpg"></label>
            <div class="seller-form-actions seller-field-wide"><a href="/seller/store" class="seller-button seller-button-light">Preview public store</a><button class="seller-button seller-button-primary">Save store information</button></div>
        </form>`);
}

function renderOrders(seller) {
    return sellerPanel('Manage Orders', 'Review order details and update the sample fulfillment status.', sellerOrderTable(seller.orders));
}

function renderSales(seller) {
    const completed = seller.orders.filter((order) => order.status === 'Delivered').reduce((sum, order) => sum + order.total, 89400);
    const commission = Math.round(completed * seller.commissionRate / 100);

    return `<div class="seller-stat-grid seller-stat-grid-three">
        ${sellerCard('Gross sales', sellerMoney(completed), 'Sample completed orders')}
        ${sellerCard('Estimated commission', sellerMoney(commission), `${seller.commissionRate}% of eligible sales`, 'seller-stat-purple')}
        ${sellerCard('Estimated seller revenue', sellerMoney(completed - commission), 'After platform commission', 'seller-stat-green')}
    </div>${sellerPanel('Sales and Revenue', 'Monthly sample revenue for this seller account.', sellerChart(seller.monthlySales))}${sellerPanel('Recent sales', 'Completed seller order values.', sellerOrderTable(seller.orders.filter((order) => order.status === 'Delivered')))}`;
}

function renderCommission(seller) {
    const rate = seller.commissionRate;
    const eligibleOrders = seller.orders.filter((order) => ['Delivered', 'Shipped'].includes(order.status));
    const commissionRows = eligibleOrders.map((order) => `<tr><td>${sellerEscape(order.id)}</td><td>${sellerEscape(order.date)}</td><td>${sellerMoney(order.total)}</td><td>${rate}%</td><td>${sellerMoney(Math.round(order.total * rate / 100))}</td><td><span class="seller-status seller-status-active">${order.status === 'Delivered' ? 'Settled' : 'Pending'}</span></td></tr>`).join('');

    return sellerPanel('Platform Commission', `Demo commission rate: ${rate}%. No payments or settlements are processed.`, `<div class="seller-table-wrap"><table class="seller-table"><thead><tr><th>Order</th><th>Date</th><th>Order total</th><th>Rate</th><th>Commission</th><th>Record status</th></tr></thead><tbody>${commissionRows || '<tr><td colspan="6">No commission records yet</td></tr>'}</tbody></table></div>`);
}

function renderReviews(seller) {
    const reviews = seller.reviews.map((review) => `<article class="seller-review-card">
        <div class="seller-review-heading"><div><strong>${sellerEscape(review.customer)}</strong><span>${sellerEscape(review.product)}</span></div><span class="seller-review-stars">${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</span></div>
        <p>${sellerEscape(review.text)}</p>
        ${review.reply ? `<div class="seller-review-reply"><strong>Your reply</strong><p>${sellerEscape(review.reply)}</p></div>` : ''}
        <div class="seller-review-footer"><span class="seller-status ${review.visible ? 'seller-status-active' : 'seller-status-hidden'}">${review.visible ? 'Visible' : 'Hidden'}</span><button type="button" data-seller-action="toggle-review" data-review-id="${sellerEscape(review.id)}" class="seller-link-button">${review.visible ? 'Hide review' : 'Show review'}</button><button type="button" data-seller-action="reply-review" data-review-id="${sellerEscape(review.id)}" class="seller-link-button">Reply</button></div>
    </article>`).join('');

    return sellerPanel('Reviews and Ratings', 'Manage customer feedback for products sold by this store.', reviews || '<div class="seller-empty-state"><strong>No reviews yet</strong></div>');
}

function renderNotifications(seller) {
    const lowStock = seller.products.filter((product) => product.stock <= 3);
    const messages = [
        ...lowStock.map((product) => ({ title: `${product.name} needs restocking`, text: product.stock === 0 ? 'This product is out of stock.' : `Only ${product.stock} units remain.`, date: 'Today', type: 'Inventory' })),
        ...seller.orders.filter((order) => ['Processing', 'Packed'].includes(order.status)).map((order) => ({ title: `Order ${order.id} needs attention`, text: `${order.customer} · ${order.area} · ${order.status}`, date: order.date, type: 'Order' })),
    ];

    return sellerPanel('Notifications', 'Stock and order reminders for this demo seller.', messages.map((message) => `<article class="seller-notification"><span class="seller-notification-type">${sellerEscape(message.type)}</span><div><strong>${sellerEscape(message.title)}</strong><p>${sellerEscape(message.text)}</p></div><time>${sellerEscape(message.date)}</time></article>`).join('') || '<div class="seller-empty-state"><strong>You are all caught up</strong></div>');
}

function renderSellerPage(pageName) {
    const root = document.querySelector('[data-seller-content]');

    if (!root) {
        return;
    }

    const seller = getActiveSeller();
    const heading = document.querySelector('[data-seller-heading]');
    const selector = document.querySelector('[data-seller-account]');
    const page = sellerPageTitles[pageName] ? pageName : 'overview';

    if (heading) {
        heading.textContent = sellerPageTitles[page];
    }

    if (selector) {
        selector.value = seller.id;
    }

    document.querySelectorAll('[data-seller-page]').forEach((link) => {
        link.classList.toggle('seller-navigation-active', link.dataset.sellerPage === page);
    });

    if (page === 'overview') {
        root.innerHTML = renderSellerOverview(seller);
    } else if (page === 'products') {
        root.innerHTML = renderSellerProducts(seller);
    } else if (page === 'add-product') {
        root.innerHTML = renderProductForm(seller);
    } else if (page === 'edit-product') {
        const product = seller.products.find((item) => item.id === sessionStorage.getItem('shopnext-edit-product'));
        root.innerHTML = renderProductForm(seller, product);
    } else if (page === 'categories') {
        root.innerHTML = renderCategories(seller);
    } else if (page === 'inventory') {
        root.innerHTML = renderInventory(seller);
    } else if (page === 'store-profile') {
        root.innerHTML = renderStoreProfile(seller);
    } else if (page === 'orders') {
        root.innerHTML = renderOrders(seller);
    } else if (page === 'sales') {
        root.innerHTML = renderSales(seller);
    } else if (page === 'commission') {
        root.innerHTML = renderCommission(seller);
    } else if (page === 'reviews') {
        root.innerHTML = renderReviews(seller);
    } else if (page === 'analytics') {
        root.innerHTML = sellerPanel('Sales Analytics', 'Visual comparison of this seller account’s monthly sample revenue.', sellerChart(seller.monthlySales));
    } else {
        root.innerHTML = renderNotifications(seller);
    }

    updateSellerNotificationCount(seller);
    renderSellerProductList();
}

function updateSellerNotificationCount(seller) {
    const count = seller.products.filter((product) => product.stock <= 3).length
        + seller.orders.filter((order) => ['Processing', 'Packed'].includes(order.status)).length;
    const badge = document.querySelector('[data-seller-notification-count]');

    if (badge) {
        badge.textContent = count ? String(count) : '';
    }
}

function sellerFormValue(form, fieldName) {
    return form.elements.namedItem(fieldName)?.value.trim() || '';
}

function readSellerImage(file) {
    if (!file) {
        return Promise.resolve('');
    }

    if (!file.type.startsWith('image/') || file.size > 1024 * 1024) {
        return Promise.reject(new Error('Choose an image file smaller than 1 MB.'));
    }

    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => resolve(String(reader.result)));
        reader.addEventListener('error', () => reject(new Error('The selected image could not be read.')));
        reader.readAsDataURL(file);
    });
}

function setSellerPage(pageName) {
    const page = sellerPageTitles[pageName] ? pageName : 'overview';
    window.location.hash = page;
    renderSellerPage(page);
}

function saveSellerProduct(form) {
    const seller = getActiveSeller();
    const productId = sellerFormValue(form, 'productId');
    const existingProduct = seller.products.find((product) => product.id === productId);
    const file = form.elements.namedItem('imageFile').files[0];

    Promise.resolve(readSellerImage(file)).then((uploadedImage) => {
        const name = sellerFormValue(form, 'name');
        const categoryValue = sellerFormValue(form, 'category');
        let category = categoryValue;

        if (categoryValue === 'new-category') {
            category = window.prompt('Enter a name for the new category:')?.trim() || '';

            if (!category) {
                return;
            }

            if (!seller.categories.includes(category)) {
                seller.categories.push(category);
            }
        }

        const price = Number(sellerFormValue(form, 'price'));
        const discountPrice = Number(sellerFormValue(form, 'discountPrice'));
        const stock = Number(sellerFormValue(form, 'stock'));

        if (!name || !category || !Number.isFinite(price) || !Number.isFinite(discountPrice) || discountPrice > price) {
            window.alert('Enter a valid product name, category, and price. Discount price must not exceed regular price.');
            return;
        }

        const product = {
            id: productId || `SN-${seller.id.slice(-3).toUpperCase()}-${Date.now().toString().slice(-6)}`,
            name,
            category,
            price,
            discountPrice,
            stock: Math.max(0, stock),
            available: sellerFormValue(form, 'available') !== 'false',
            image: uploadedImage || sellerFormValue(form, 'image') || existingProduct?.image || productPlaceholder,
            description: sellerFormValue(form, 'description'),
            specifications: sellerFormValue(form, 'specifications'),
            rating: existingProduct?.rating || 5,
        };

        if (existingProduct) {
            Object.assign(existingProduct, product);
        } else {
            seller.products.unshift(product);
            seller.reviews.unshift({
                id: `REV-${Date.now()}`,
                customer: 'Demo customer',
                product: product.name,
                rating: 5,
                text: 'New product added to the seller demo catalogue.',
                visible: true,
            });
        }

        saveSellerData();
        window.alert(existingProduct ? 'Product updated in your demo store.' : 'Product added to your demo store.');
        setSellerPage('products');
    }).catch((error) => {
        window.alert(error.message);
    });
}

function saveSellerProfile(form) {
    const seller = getActiveSeller();
    const logoFile = form.elements.namedItem('logoFile').files[0];
    const bannerFile = form.elements.namedItem('bannerFile').files[0];

    Promise.all([readSellerImage(logoFile), readSellerImage(bannerFile)]).then(([logo, banner]) => {
        seller.name = sellerFormValue(form, 'name');
        seller.city = sellerFormValue(form, 'city');
        seller.description = sellerFormValue(form, 'description');
        seller.logo = logo || sellerFormValue(form, 'logo') || seller.logo;
        seller.banner = banner || sellerFormValue(form, 'banner') || seller.banner;
        saveSellerData();
        renderSellerPage('store-profile');
        window.alert('Store information updated for this browser session.');
    }).catch((error) => {
        window.alert(error.message);
    });
}

function sellerProductCard(product) {
    const status = sellerProductStatus(product);
    const price = product.discountPrice || product.price;

    return `<article class="seller-public-product">
        <img src="${sellerEscape(product.image || productPlaceholder)}" alt="${sellerEscape(product.name)}">
        <div class="seller-public-product-body">
            <span class="seller-public-category">${sellerEscape(product.category)}</span>
            <h3>${sellerEscape(product.name)}</h3>
            <div class="seller-public-price">${sellerMoney(price)} ${product.discountPrice < product.price ? `<del>${sellerMoney(product.price)}</del>` : ''}</div>
            <div class="seller-public-stock ${status.className}">${product.stock ? `${product.stock} in stock` : 'Out of stock'}</div>
            <div class="seller-public-product-actions">
                <a href="/product-details?product_id=${encodeURIComponent(product.id)}" class="seller-button seller-button-light">View details</a>
                <button type="button" data-seller-add-to-cart="${sellerEscape(product.id)}" class="seller-button seller-button-primary" ${product.stock < 1 || !product.available ? 'disabled' : ''}>Add to cart</button>
            </div>
        </div>
    </article>`;
}

function renderSellerProductList() {
    const root = document.querySelector('[data-seller-product-list]');

    if (!root) {
        return;
    }

    const allProducts = Object.values(sellerAccounts).flatMap((seller) => seller.products.map((product) => ({ ...product, sellerName: seller.name, sellerId: seller.id })));
    root.innerHTML = `<div class="seller-marketplace-products">
        <div class="seller-marketplace-heading"><div><span>FROM OUR SELLERS</span><h2>More products from ShopNext stores</h2><p>Demo products from each seller account are kept separate.</p></div><a href="/seller/store">View selected seller store →</a></div>
        <div class="seller-public-product-grid">${allProducts.filter((product) => product.available).map((product) => sellerProductCard(product)).join('')}</div>
    </div>`;
}

function renderPublicStore() {
    const root = document.querySelector('[data-seller-store-page]');

    if (!root) {
        return;
    }

    const seller = getActiveSeller();
    const activeProducts = seller.products.filter((product) => product.available);
    const bannerStyle = seller.banner ? `style="background-image:linear-gradient(90deg,rgba(6,78,59,.92),rgba(15,118,110,.55)),url('${sellerEscape(seller.banner)}')"` : '';
    const logo = seller.logo
        ? `<img src="${sellerEscape(seller.logo)}" alt="${sellerEscape(seller.name)} logo">`
        : `<span>${sellerEscape(seller.name.slice(0, 1).toUpperCase())}</span>`;

    root.innerHTML = `<header class="seller-public-banner" ${bannerStyle}>
        <div class="seller-public-store-heading">
            <div class="seller-public-logo">${logo}</div>
            <div><span class="seller-public-verified">✓ VERIFIED SHOPNEXT SELLER</span><h1>${sellerEscape(seller.name)}</h1><p>${sellerEscape(seller.description)}</p><span class="seller-public-location">📍 ${sellerEscape(seller.city)}, Bangladesh · ★ 4.8 store rating · ${activeProducts.length} products</span></div>
        </div>
        <a href="/seller/dashboard#store-profile" class="seller-button seller-button-light">Edit store profile</a>
    </header>
    <div class="seller-public-store-toolbar"><div><span>SHOP THIS STORE</span><h2>Products by ${sellerEscape(seller.name)}</h2></div><a href="/seller/dashboard#products">Manage your products →</a></div>
    ${activeProducts.length ? `<div class="seller-public-product-grid">${activeProducts.map((product) => sellerProductCard(product)).join('')}</div>` : '<div class="seller-empty-state"><strong>No products available</strong><span>Add products from the seller dashboard to populate your store.</span></div>'}
    <div class="seller-demo-note">This is a public-facing demo storefront. Orders and payments are not processed.</div>`;
}

function renderDynamicProductDetails() {
    const root = document.querySelector('[data-product-detail-root]');

    if (!root) {
        return;
    }

    const productId = new URLSearchParams(window.location.search).get('product_id');

    if (!productId) {
        return;
    }

    const seller = Object.values(sellerAccounts).find((account) => account.products.some((item) => item.id === productId));
    const product = seller?.products.find((item) => item.id === productId);

    if (!seller || !product) {
        root.innerHTML = '<div class="seller-empty-state"><strong>Product not found</strong><a href="/products">Return to the product catalogue</a></div>';
        return;
    }

    const status = sellerProductStatus(product);
    const price = product.discountPrice || product.price;

    root.innerHTML = `<nav class="text-sm text-slate-500"><a href="/" class="text-slate-500 no-underline">Home</a> / <a href="/products" class="text-slate-500 no-underline">Products</a> / ${sellerEscape(product.name)}</nav>
        <div class="seller-detail-layout">
            <div><img class="seller-detail-image" src="${sellerEscape(product.image || productPlaceholder)}" alt="${sellerEscape(product.name)}"></div>
            <div class="seller-detail-information">
                <span class="seller-status ${status.className}">${product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}</span>
                <h1>${sellerEscape(product.name)}</h1>
                <p>Sold by <a href="/seller/store" class="seller-detail-store-link">${sellerEscape(seller.name)}</a></p>
                <div class="seller-detail-rating">★★★★★ <strong>${sellerEscape(product.rating || 5)}</strong> <span>Seller demo rating</span></div>
                <div class="seller-detail-price">${sellerMoney(price)} ${product.discountPrice < product.price ? `<del>${sellerMoney(product.price)}</del>` : ''}</div>
                <p class="seller-detail-description">${sellerEscape(product.description || 'Product information provided by the seller.')}</p>
                <div class="seller-detail-specifications"><h2>Specifications</h2><p>${sellerEscape(product.specifications || 'See product description for details.')}</p><p>Category: ${sellerEscape(product.category)}</p><p>Delivery: Nationwide delivery options</p></div>
                <div class="seller-detail-actions"><button type="button" data-seller-add-to-cart="${sellerEscape(product.id)}" class="seller-button seller-button-primary" ${product.stock < 1 || !product.available ? 'disabled' : ''}>Add to cart</button><a href="/seller/store" class="seller-button seller-button-light">Visit seller store</a></div>
            </div>
        </div>
        <div class="seller-demo-note">Product preview shown with seller demo data. Checkout is not a real transaction.</div>`;
}

function sellerAddToCart(productId) {
    if (typeof window.shopNextAddToCart === 'function') {
        window.shopNextAddToCart(productId);
        return;
    }

    const count = Number(sessionStorage.getItem('shopnext-cart-count') || 2) + 1;
    sessionStorage.setItem('shopnext-cart-count', String(count));
    document.querySelectorAll('[data-cart-count]').forEach((item) => { item.textContent = String(count); });
    document.querySelectorAll('[data-cart-label]').forEach((item) => { item.textContent = `Cart (${count})`; });
    window.alert(`Product ${productId} added to the demo cart.`);
}

function initializeSellerDashboard() {
    const root = document.querySelector('[data-seller-dashboard]');

    if (!root) {
        return;
    }

    const selector = root.querySelector('[data-seller-account]');
    selector.value = getActiveSellerId();
    root.addEventListener('click', (event) => {
        if (event.target.closest('[data-seller-logout]')) {
            sessionStorage.removeItem(activeSellerKey);
        }
    }, true);

    selector.addEventListener('change', () => {
        sessionStorage.setItem(activeSellerKey, selector.value);
        setSellerPage('overview');
    });

    root.addEventListener('input', (event) => {
        if (event.target.matches('[data-product-search]')) {
            renderSellerPage('products');
            const search = document.querySelector('[data-product-search]');
            search.focus();
            search.setSelectionRange(search.value.length, search.value.length);
        }
    });

    root.addEventListener('change', (event) => {
        if (event.target.matches('[data-product-category], [data-product-order]')) {
            renderSellerPage('products');
        }

        if (event.target.matches('[data-order-status]')) {
            const order = getActiveSeller().orders.find((item) => item.id === event.target.dataset.orderStatus);

            if (order) {
                order.status = event.target.value;
                saveSellerData();
                renderSellerPage(window.location.hash.slice(1) || 'overview');
            }
        }
    });

    root.addEventListener('submit', (event) => {
        const form = event.target;

        if (!form.matches('[data-seller-form]')) {
            return;
        }

        event.preventDefault();
        event.stopPropagation();

        if (form.dataset.sellerForm === 'product') {
            saveSellerProduct(form);
        } else if (form.dataset.sellerForm === 'store') {
            saveSellerProfile(form);
        } else if (form.dataset.sellerForm === 'category') {
            const category = sellerFormValue(form, 'category');

            if (category && !getActiveSeller().categories.includes(category)) {
                getActiveSeller().categories.push(category);
                saveSellerData();
                renderSellerPage('categories');
            }
        }
    });

    root.addEventListener('click', (event) => {
        event.stopPropagation();
        const pageLink = event.target.closest('[data-seller-page]');

        if (pageLink) {
            event.preventDefault();
            setSellerPage(pageLink.dataset.sellerPage);
            return;
        }

        const action = event.target.closest('[data-seller-action]');

        if (!action) {
            return;
        }

        const seller = getActiveSeller();
        const product = seller.products.find((item) => item.id === action.dataset.productId);
        const command = action.dataset.sellerAction;

        if (command === 'new-product') {
            setSellerPage('add-product');
        } else if (command === 'products') {
            setSellerPage('products');
        } else if (command === 'edit-product' && product) {
            sessionStorage.setItem('shopnext-edit-product', product.id);
            setSellerPage('edit-product');
        } else if (command === 'view-product' && product) {
            window.location.assign(`/product-details?product_id=${encodeURIComponent(product.id)}`);
        } else if (command === 'toggle-product' && product) {
            product.available = !product.available;
            saveSellerData();
            renderSellerPage('products');
        } else if (command === 'delete-product' && product) {
            if (window.confirm(`Delete "${product.name}" from this seller's demo store?`)) {
                seller.products = seller.products.filter((item) => item.id !== product.id);
                saveSellerData();
                renderSellerPage('products');
            }
        } else if (command === 'stock-up' && product) {
            product.stock += 5;
            saveSellerData();
            renderSellerPage('inventory');
        } else if (command === 'stock-down' && product) {
            product.stock = Math.max(0, product.stock - 1);
            saveSellerData();
            renderSellerPage('inventory');
        } else if (command === 'delete-category') {
            const index = Number(action.dataset.categoryIndex);
            const category = seller.categories[index];

            if (category && !seller.products.some((item) => item.category === category) && window.confirm(`Remove the ${category} category?`)) {
                seller.categories.splice(index, 1);
                saveSellerData();
                renderSellerPage('categories');
            } else if (category && seller.products.some((item) => item.category === category)) {
                window.alert('Move or delete products in this category before removing it.');
            }
        } else if (command === 'order-details') {
            const order = seller.orders.find((item) => item.id === action.dataset.orderId);
            if (order) {
                window.alert(`Order ${order.id}\nCustomer: ${order.customer}\nDelivery area: ${order.area}\nProduct: ${order.product}\nTotal: ${sellerMoney(order.total)}\nStatus: ${order.status}`);
            }
        } else if (command === 'toggle-review') {
            const review = seller.reviews.find((item) => item.id === action.dataset.reviewId);
            if (review) {
                review.visible = !review.visible;
                saveSellerData();
                renderSellerPage('reviews');
            }
        } else if (command === 'reply-review') {
            const review = seller.reviews.find((item) => item.id === action.dataset.reviewId);
            const reply = window.prompt('Write a public reply to this review:');
            if (review && reply?.trim()) {
                review.reply = reply.trim();
                saveSellerData();
                window.alert('Your demo reply has been saved with this review.');
            }
        }
    });

    root.addEventListener('click', (event) => {
        const pageButton = event.target.closest('[data-product-page]');

        if (pageButton) {
            renderSellerPage('products', Number(pageButton.dataset.productPage));
        }
    });

    renderSellerPage(window.location.hash.slice(1) || 'overview');
    window.addEventListener('hashchange', () => renderSellerPage(window.location.hash.slice(1) || 'overview'));
}

function initializeSellerProductActions() {
    document.addEventListener('click', (event) => {
        const addButton = event.target.closest('[data-seller-add-to-cart]');

        if (addButton && !addButton.disabled) {
            event.preventDefault();
            event.stopImmediatePropagation();
            sellerAddToCart(addButton.dataset.sellerAddToCart);
        }
    }, true);
}

function initializeSellerLogin() {
    const picker = document.querySelector('[data-seller-login-picker]');
    const selector = document.querySelector('[data-login-seller]');
    const loginButtons = document.querySelectorAll('[data-login-role]');

    if (!picker || !selector) {
        return;
    }

    loginButtons.forEach((button) => {
        button.addEventListener('click', () => {
            picker.classList.toggle('hidden', button.dataset.loginRole !== 'seller');
        });
    });

    selector.addEventListener('change', () => {
        const selected = starterSellers[selector.value];
        const emailInput = document.querySelector('[data-login-email]');

        if (selected && emailInput) {
            emailInput.value = selected.email;
        }
    });

    const loginForm = document.querySelector('[data-login-form]');

    if (loginForm) {
        loginForm.addEventListener('submit', () => {
            if (!picker.classList.contains('hidden')) {
                sessionStorage.setItem(activeSellerKey, selector.value);
            }
        }, true);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    saveSellerData();
    initializeSellerLogin();
    initializeSellerProductActions();
    initializeSellerDashboard();
    renderPublicStore();
    renderSellerProductList();
    renderDynamicProductDetails();
});
