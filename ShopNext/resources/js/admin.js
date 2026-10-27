const adminStorageKey = 'shopnext-admin-marketplace';
const adminPageTitles = {
    overview: 'Dashboard Overview',
    sellers: 'Seller Management',
    customers: 'Customer Management',
    products: 'Product Management',
    categories: 'Category Management',
    orders: 'Order Management',
    payments: 'Payment Management',
    commissions: 'Seller Commission and Platform Fees',
    analytics: 'Sales Analytics',
    reports: 'Revenue Reports',
    'reports-center': 'Reports',
    reviews: 'Reviews and Ratings Management',
    notifications: 'Notifications',
    profile: 'Admin Profile',
    settings: 'Website Settings',
};
const adminOrderStatuses = ['Pending', 'Payment Verification', 'Confirmed', 'Processing', 'Shipped', 'Delivered', 'Cancelled', 'Returned/Refunded'];

const adminStarterData = {
    commissionRate: 5,
    sellers: [
        { id: 'SEL-1001', store: 'Dhaka Stationery House', owner: 'Shafiqul Islam', email: 'seller.dhaka@example.com', phone: '+880 1712-345678', city: 'Dhaka', date: '2026-03-14', status: 'Approved', sales: 89400, products: [{ id: 'SN-DH-1001', name: 'ClassWiz Scientific Calculator', category: 'Electronics', price: 2800, discountPrice: 2450, stock: 18, sold: 42, status: 'Active' }, { id: 'SN-DH-1002', name: 'Engineering Mechanics Textbook', category: 'Books', price: 950, discountPrice: 850, stock: 7, sold: 27, status: 'Active' }] },
        { id: 'SEL-1002', store: 'RoboTech Bangladesh', owner: 'Ariful Karim', email: 'seller.ctg@example.com', phone: '+880 1812-223344', city: 'Chattogram', date: '2026-04-02', status: 'Approved', sales: 76200, products: [{ id: 'SN-CT-2001', name: 'Arduino Starter Kit', category: 'Learning Kits', price: 1850, discountPrice: 1690, stock: 12, sold: 36, status: 'Active' }, { id: 'SN-CT-2002', name: 'Digital Multimeter', category: 'Electronics', price: 1250, discountPrice: 1100, stock: 5, sold: 22, status: 'Active' }] },
        { id: 'SEL-1003', store: 'Bangladesh Book House', owner: 'Kabir Hossain', email: 'books@example.com', phone: '+880 1911-778899', city: 'Rajshahi', date: '2026-06-18', status: 'Pending', sales: 135000, products: [{ id: 'SN-RJ-3001', name: 'Bangla Literature Collection', category: 'Books', price: 1250, discountPrice: 1100, stock: 23, sold: 31, status: 'Pending approval' }, { id: 'SN-RJ-3002', name: 'University Study Planner', category: 'Stationery & Tools', price: 350, discountPrice: 300, stock: 14, sold: 18, status: 'Active' }] },
        { id: 'SEL-1004', store: 'Heritage Apparel', owner: 'Tahmidur Rahman', email: 'heritage@example.com', phone: '+880 1611-555222', city: 'Sylhet', date: '2026-07-03', status: 'Suspended', sales: 38900, products: [{ id: 'SN-SY-4001', name: 'Handwoven Cotton Panjabi', category: 'Fashion', price: 2600, discountPrice: 2250, stock: 9, sold: 15, status: 'Hidden' }] },
    ],
    customers: [
        { id: 'CUS-2001', name: 'Nusrat Jahan', email: 'nusrat@example.com', phone: '+880 1710-123456', city: 'Dhaka', date: '2026-02-10', orders: 8, spending: 18450, status: 'Active' },
        { id: 'CUS-2002', name: 'Tanvir Ahmed', email: 'tanvir@example.com', phone: '+880 1810-234567', city: 'Chattogram', date: '2026-03-22', orders: 5, spending: 12600, status: 'Active' },
        { id: 'CUS-2003', name: 'Samira Rahman', email: 'samira@example.com', phone: '+880 1910-345678', city: 'Rajshahi', date: '2026-05-04', orders: 3, spending: 7350, status: 'Active' },
        { id: 'CUS-2004', name: 'Rafi Chowdhury', email: 'rafi@example.com', phone: '+880 1610-456789', city: 'Khulna', date: '2026-08-16', orders: 1, spending: 1690, status: 'Inactive' },
        { id: 'CUS-2005', name: 'Maliha Islam', email: 'maliha@example.com', phone: '+880 1510-567890', city: 'Sylhet', date: '2026-09-30', orders: 4, spending: 9800, status: 'Active' },
    ],
    orders: [
        { id: 'ORD-5308', customerId: 'CUS-2004', sellerId: 'SEL-1002', product: 'Arduino Starter Kit', date: '2026-10-23', subtotal: 1690, delivery: 80, total: 1770, method: 'bKash', paymentStatus: 'Verified', status: 'Processing' },
        { id: 'ORD-5302', customerId: 'CUS-2005', sellerId: 'SEL-1002', product: 'Digital Multimeter', date: '2026-10-22', subtotal: 1100, delivery: 80, total: 1180, method: 'Cash on Delivery', paymentStatus: 'Pending', status: 'Shipped' },
        { id: 'ORD-5294', customerId: 'CUS-2001', sellerId: 'SEL-1001', product: 'ClassWiz Scientific Calculator', date: '2026-10-21', subtotal: 2450, delivery: 80, total: 2530, method: 'Nagad', paymentStatus: 'Verified', status: 'Delivered' },
        { id: 'ORD-5288', customerId: 'CUS-2002', sellerId: 'SEL-1003', product: 'Bangla Literature Collection', date: '2026-10-20', subtotal: 1100, delivery: 80, total: 1180, method: 'Card · SSLCommerz', paymentStatus: 'Under review', status: 'Payment Verification' },
        { id: 'ORD-5275', customerId: 'CUS-2003', sellerId: 'SEL-1001', product: 'Engineering Mechanics Textbook', date: '2026-10-18', subtotal: 850, delivery: 80, total: 930, method: 'Cash on Delivery', paymentStatus: 'Pending', status: 'Pending' },
        { id: 'ORD-5260', customerId: 'CUS-2001', sellerId: 'SEL-1004', product: 'Handwoven Cotton Panjabi', date: '2026-10-15', subtotal: 2250, delivery: 80, total: 2330, method: 'bKash', paymentStatus: 'Refunded', status: 'Returned/Refunded' },
        { id: 'ORD-5251', customerId: 'CUS-2002', sellerId: 'SEL-1001', product: 'A4 Premium Notebook Pack', date: '2026-10-12', subtotal: 250, delivery: 80, total: 330, method: 'Nagad', paymentStatus: 'Cancelled', status: 'Cancelled' },
        { id: 'ORD-5238', customerId: 'CUS-2005', sellerId: 'SEL-1001', product: 'Engineering Mechanics Textbook', date: '2026-09-28', subtotal: 850, delivery: 80, total: 930, method: 'Nagad', paymentStatus: 'Verified', status: 'Delivered' },
    ],
    payments: [
        { id: 'PAY-7101', orderId: 'ORD-5308', transaction: 'BKX-8F32A19', method: 'bKash', amount: 1770, date: '2026-10-23', status: 'Verified' },
        { id: 'PAY-7102', orderId: 'ORD-5302', transaction: 'COD-5302', method: 'Cash on Delivery', amount: 1180, date: '2026-10-22', status: 'Pending' },
        { id: 'PAY-7103', orderId: 'ORD-5294', transaction: 'NGD-66Q7B21', method: 'Nagad', amount: 2530, date: '2026-10-21', status: 'Verified' },
        { id: 'PAY-7104', orderId: 'ORD-5288', transaction: 'SSLC-9Z5M2P', method: 'Card · SSLCommerz', amount: 1180, date: '2026-10-20', status: 'Under review' },
        { id: 'PAY-7105', orderId: 'ORD-5260', transaction: 'BKX-4T8L0C', method: 'bKash', amount: 2330, date: '2026-10-15', status: 'Refunded' },
        { id: 'PAY-7106', orderId: 'ORD-5238', transaction: 'NGD-9K4V7B', method: 'Nagad', amount: 930, date: '2026-09-28', status: 'Verified' },
    ],
    feePayments: [
        { id: 'FEE-8001', sellerId: 'SEL-1001', month: '2026-10', sales: 28400, status: 'Pending' },
        { id: 'FEE-8002', sellerId: 'SEL-1002', month: '2026-10', sales: 32100, status: 'Pending' },
        { id: 'FEE-7901', sellerId: 'SEL-1001', month: '2026-09', sales: 24800, status: 'Paid' },
        { id: 'FEE-7902', sellerId: 'SEL-1002', month: '2026-09', sales: 30200, status: 'Paid' },
        { id: 'FEE-7903', sellerId: 'SEL-1003', month: '2026-09', sales: 19500, status: 'Paid' },
    ],
    categories: ['Books', 'Electronics', 'Fashion', 'Home & Living', 'Learning Kits', 'Stationery & Tools'],
    reviews: [
        { id: 'REV-1001', customer: 'Nusrat Jahan', product: 'ClassWiz Scientific Calculator', seller: 'Dhaka Stationery House', rating: 5, date: '2026-10-22', text: 'Arrived quickly and works perfectly.', visible: true },
        { id: 'REV-1002', customer: 'Tanvir Ahmed', product: 'Digital Multimeter', seller: 'RoboTech Bangladesh', rating: 4, date: '2026-10-21', text: 'Good quality and carefully packed.', visible: true },
        { id: 'REV-1003', customer: 'Samira Rahman', product: 'Bangla Literature Collection', seller: 'Bangladesh Book House', rating: 2, date: '2026-10-20', text: 'The package was damaged on arrival.', visible: true },
        { id: 'REV-1004', customer: 'Rafi Chowdhury', product: 'Arduino Starter Kit', seller: 'RoboTech Bangladesh', rating: 5, date: '2026-10-19', text: 'Everything needed to get started. Great value.', visible: false },
    ],
    notifications: [
        { id: 'NOT-1', title: 'Seller application awaiting review', detail: 'Bangladesh Book House submitted a new application.', read: false },
        { id: 'NOT-2', title: 'Commission fees due', detail: 'Two October seller fee records are pending.', read: false },
        { id: 'NOT-3', title: 'Payment needs verification', detail: 'Order ORD-5288 has a card payment under review.', read: false },
    ],
    settings: { marketplaceName: 'ShopNext Bangladesh', contactEmail: 'support@shopnext.bd', contactPhone: '+880 2 5500 1000', deliveryCharge: 80, storefrontMessage: 'Discover trusted sellers across Bangladesh.' },
    profile: { name: 'System Administrator', email: 'admin@shopnext.bd', phone: '+880 1700-000000', role: 'Main Admin' },
};

function adminEscape(value) {
    return String(value ?? '').replace(/[&<>"']/g, (character) => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
    })[character]);
}

function adminMoney(value) {
    return `৳${Number(value || 0).toLocaleString('en-BD')}`;
}

function loadAdminData() {
    try {
        const saved = localStorage.getItem(adminStorageKey);
        const data = saved ? { ...structuredClone(adminStarterData), ...JSON.parse(saved) } : structuredClone(adminStarterData);
        const seedProducts = new Map(adminStarterData.sellers.flatMap((seller) => seller.products.map((product) => [product.id, product])));
        data.sellers.forEach((seller) => seller.products.forEach((product) => {
            if (!Number.isFinite(product.sold)) product.sold = seedProducts.get(product.id)?.sold || 0;
        }));
        return data;
    } catch (error) {
        console.error('Unable to load ShopNext admin demo data.', error);
        return structuredClone(adminStarterData);
    }
}

let adminData = loadAdminData();
let activeAdminPage = 'overview';
let activeAnalyticsPeriod = 'month';
let activeReportRange = 'This month';
let activeProductSort = 'name';
let adminToastTimeout;

function saveAdminData() {
    localStorage.setItem(adminStorageKey, JSON.stringify(adminData));
}

function adminSeller(sellerId) {
    return adminData.sellers.find((seller) => seller.id === sellerId);
}

function adminCustomer(customerId) {
    return adminData.customers.find((customer) => customer.id === customerId);
}

function adminStatus(status) {
    const className = String(status).toLowerCase().replace(/[^a-z]+/g, '-');
    return `<span class="admin-badge admin-badge-${className}">${adminEscape(status)}</span>`;
}

function adminButton(label, action, id, style = 'secondary') {
    return `<button type="button" class="admin-button admin-button-${style}" data-admin-action="${action}" data-admin-id="${adminEscape(id)}">${adminEscape(label)}</button>`;
}

function adminStat(label, value, hint, color = 'orange') {
    return `<article class="admin-stat admin-stat-${color}"><span>${adminEscape(label)}</span><strong>${adminEscape(value)}</strong><small>${adminEscape(hint)}</small></article>`;
}

function adminTable(title, description, tools, headings, rows, emptyMessage = 'No records match these filters.') {
    return `<section class="admin-panel">
        <header class="admin-panel-header"><div><h2>${adminEscape(title)}</h2><p>${adminEscape(description)}</p></div>${tools || ''}</header>
        <div class="admin-table-wrap"><table class="admin-table"><thead><tr>${headings.map((heading) => `<th>${adminEscape(heading)}</th>`).join('')}</tr></thead>
            <tbody data-admin-table-body>${rows || `<tr><td colspan="${headings.length}" class="admin-empty">${adminEscape(emptyMessage)}</td></tr>`}</tbody></table></div>
        <footer class="admin-table-footer"><span data-admin-row-count>${rows ? `${(rows.match(/data-admin-row/g) || []).length} demo records` : '0 demo records'}</span><span>Frontend sample data · Changes save in this browser</span></footer>
    </section>`;
}

function adminTools(placeholder, filters = [], extraControl = '') {
    return `<div class="admin-table-tools"><label class="admin-search"><span>⌕</span><input type="search" data-admin-search aria-label="${adminEscape(placeholder)}" placeholder="${adminEscape(placeholder)}"></label>${filters.map((filter) => `<select data-admin-filter="${adminEscape(filter.key)}"><option value="">${adminEscape(filter.label)}</option>${filter.options.map((option) => `<option value="${adminEscape(option)}">${adminEscape(option)}</option>`).join('')}</select>`).join('')}${extraControl}</div>`;
}

function adminRow(searchValue, filterValues, cells) {
    const filterAttributes = Object.entries(filterValues || {}).map(([key, value]) => {
        const attributeKey = key.replace(/[A-Z]/g, (character) => `-${character.toLowerCase()}`);
        return `data-filter-${adminEscape(attributeKey)}="${adminEscape(value)}"`;
    }).join(' ');
    return `<tr data-admin-row data-search="${adminEscape(searchValue.toLowerCase())}" ${filterAttributes}>${cells.map((cell) => `<td>${cell}</td>`).join('')}</tr>`;
}

function adminApplyFilters() {
    const content = document.querySelector('[data-admin-content]');
    if (!content) return;
    const query = (content.querySelector('[data-admin-search]')?.value || '').trim().toLowerCase();
    const selectedFilters = [...content.querySelectorAll('[data-admin-filter]')].map((select) => [select.dataset.adminFilter, select.value]);
    let visibleCount = 0;
    const rows = [...content.querySelectorAll('[data-admin-row]')];

    rows.forEach((row) => {
        const matchesSearch = !query || row.dataset.search.includes(query);
        const matchesFilters = selectedFilters.every(([key, value]) => !value || row.dataset[`filter${key[0].toUpperCase()}${key.slice(1)}`] === value);
        row.hidden = !(matchesSearch && matchesFilters);
        if (!row.hidden) visibleCount += 1;
    });

    const countLabel = content.querySelector('[data-admin-row-count]');
    if (countLabel && rows.length) countLabel.textContent = `${visibleCount} of ${rows.length} demo records`;
}

function adminChart(values, labels, title) {
    const maximum = Math.max(...values, 1);
    return `<section class="admin-panel admin-chart-panel"><header class="admin-panel-header"><div><h2>${adminEscape(title)}</h2><p>Monthly sample marketplace sales</p></div><span class="admin-chart-key"><i></i> Sales revenue</span></header>
        <div class="admin-chart">${values.map((value, index) => `<div class="admin-chart-column"><strong>${adminMoney(value)}</strong><span style="height:${Math.max(8, value / maximum * 100)}%"></span><small>${adminEscape(labels[index])}</small></div>`).join('')}</div></section>`;
}

function adminOverview() {
    const products = adminData.sellers.flatMap((seller) => seller.products.map((product) => ({ ...product, seller })));
    const sellersByStatus = (status) => adminData.sellers.filter((seller) => seller.status === status).length;
    const ordersByStatus = (status) => adminData.orders.filter((order) => order.status === status).length;
    const totalSales = adminData.sellers.reduce((sum, seller) => sum + seller.sales, 0);
    const monthlySales = adminData.orders.filter((order) => order.date.startsWith('2026-10') && !['Cancelled', 'Returned/Refunded'].includes(order.status)).reduce((sum, order) => sum + order.subtotal, 0);
    const feeDue = adminData.feePayments.filter((fee) => fee.status === 'Pending').reduce((sum, fee) => sum + fee.sales * adminData.commissionRate / 100, 0);
    const feePaid = adminData.feePayments.filter((fee) => fee.status === 'Paid').reduce((sum, fee) => sum + fee.sales * adminData.commissionRate / 100, 0);
    const cards = [
        ['Total sellers', adminData.sellers.length, 'All demo accounts', 'purple'],
        ['Pending applications', sellersByStatus('Pending'), 'Awaiting review', 'amber'],
        ['Approved sellers', sellersByStatus('Approved'), 'Active marketplace shops', 'green'],
        ['Suspended sellers', sellersByStatus('Suspended'), 'Restricted demo accounts', 'red'],
        ['Total customers', adminData.customers.length, 'Registered demo shoppers', 'blue'],
        ['Total products', products.length, 'Across all demo sellers', 'purple'],
        ['Active products', products.filter((product) => product.status === 'Active').length, 'Visible and available', 'green'],
        ['Pending orders', ordersByStatus('Pending') + ordersByStatus('Payment Verification'), 'Need admin or seller action', 'amber'],
        ['Total orders', adminData.orders.length, 'All order statuses', 'blue'],
        ['Completed orders', ordersByStatus('Delivered'), 'Successfully delivered', 'green'],
        ['Cancelled orders', ordersByStatus('Cancelled') + ordersByStatus('Returned/Refunded'), 'Cancelled or refunded', 'red'],
        ['Marketplace sales', adminMoney(totalSales), 'Lifetime seller sales', 'orange'],
        ['Monthly sales', adminMoney(monthlySales), 'October demo orders', 'orange'],
        ['Platform commission', adminMoney(feeDue + feePaid), `Rate set to ${adminData.commissionRate}%`, 'purple'],
        ['Seller fees pending', adminMoney(feeDue), 'Awaiting seller payment', 'amber'],
        ['Seller fees paid', adminMoney(feePaid), 'Completed demo fee payments', 'green'],
    ].map(([label, value, hint, color]) => adminStat(label, value, hint, color)).join('');
    const recentOrders = adminData.orders.slice(0, 5).map((order) => {
        const customer = adminCustomer(order.customerId);
        const seller = adminSeller(order.sellerId);
        return adminRow(`${order.id} ${customer?.name} ${seller?.store} ${order.product} ${order.status}`, {}, [
            `<strong>${adminEscape(order.id)}</strong>`, adminEscape(customer?.name || 'Customer'), adminEscape(seller?.store || 'Seller'), adminEscape(order.product), adminMoney(order.total), adminStatus(order.status),
        ]);
    }).join('');
    const bestProducts = products.sort((first, second) => second.sold - first.sold).slice(0, 4).map((product) => `<li><div><strong>${adminEscape(product.name)}</strong><small>${adminEscape(product.seller.store)} · ${adminEscape(product.category)}</small></div><b>${product.sold} sold</b></li>`).join('');
    const topSellers = [...adminData.sellers].sort((first, second) => second.sales - first.sales).slice(0, 4).map((seller) => `<li><div><strong>${adminEscape(seller.store)}</strong><small>${adminEscape(seller.city)} · ${seller.products.length} products</small></div><b>${adminMoney(seller.sales)}</b></li>`).join('');
    const approvals = adminData.sellers.filter((seller) => seller.status === 'Pending').map((seller) => `<li><div><strong>${adminEscape(seller.store)}</strong><small>Application · ${adminEscape(seller.date)}</small></div>${adminButton('Review', 'seller-view', seller.id)}</li>`).join('') || '<li class="admin-empty">No seller applications need review.</li>';
    const registrations = [...adminData.customers].sort((first, second) => second.date.localeCompare(first.date)).slice(0, 3).map((customer) => `<li><div><strong>${adminEscape(customer.name)}</strong><small>${adminEscape(customer.city)} · ${adminEscape(customer.date)}</small></div>${adminStatus(customer.status)}</li>`).join('');
    return `<div class="admin-welcome"><div><span>MONDAY, OCTOBER 23, 2026</span><h2>Marketplace at a glance</h2><p>Manage sellers, customers, catalog, orders and platform revenue from one workspace.</p></div><a href="#sellers" data-admin-page="sellers" class="admin-button admin-button-primary">Review seller applications <b>${sellersByStatus('Pending')}</b></a></div>
        <div class="admin-stat-grid">${cards}</div>
        <div class="admin-overview-grid">${adminChart([48200, 52600, 61800, 58300, 71400, 89400], ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'], 'Sales performance')}
            <section class="admin-panel admin-finance-panel"><header class="admin-panel-header"><div><h2>Platform finance</h2><p>Demo marketplace fee snapshot</p></div></header><div class="admin-finance-list"><div><span>Gross marketplace sales</span><strong>${adminMoney(totalSales)}</strong></div><div><span>Commission rate</span><strong>${adminData.commissionRate}%</strong></div><div><span>Pending fee payments</span><strong class="admin-text-amber">${adminMoney(feeDue)}</strong></div><div><span>Completed fee payments</span><strong class="admin-text-green">${adminMoney(feePaid)}</strong></div></div><a href="#commissions" data-admin-page="commissions">Manage commissions →</a></section>
        </div>
        <div class="admin-overview-grid admin-overview-grid-bottom">
            ${adminTable('Recent orders', 'Latest demo transactions across the marketplace.', '<a href="#orders" data-admin-page="orders" class="admin-inline-link">All orders →</a>', ['Order', 'Customer', 'Seller', 'Product', 'Total', 'Status'], recentOrders)}
            <section class="admin-panel admin-list-panel"><header class="admin-panel-header"><div><h2>Top-selling products</h2><p>Popular items across the demo catalog</p></div></header><ul class="admin-compact-list">${bestProducts}</ul></section>
            <section class="admin-panel admin-list-panel"><header class="admin-panel-header"><div><h2>Top-performing sellers</h2><p>Ranked by lifetime sales</p></div></header><ul class="admin-compact-list">${topSellers}</ul></section>
            <section class="admin-panel admin-list-panel"><header class="admin-panel-header"><div><h2>Recent registrations</h2><p>Latest customer accounts</p></div></header><ul class="admin-compact-list">${registrations}</ul></section>
            <section class="admin-panel admin-list-panel"><header class="admin-panel-header"><div><h2>Pending approvals</h2><p>Seller applications requiring review</p></div></header><ul class="admin-compact-list">${approvals}</ul></section>
        </div>`;
}

function adminSellersPage() {
    const rows = adminData.sellers.map((seller) => {
        const commissionDue = adminData.feePayments.filter((fee) => fee.sellerId === seller.id && fee.status === 'Pending').reduce((sum, fee) => sum + fee.sales * adminData.commissionRate / 100, 0);
        const orders = adminData.orders.filter((order) => order.sellerId === seller.id).length;
        const actions = `<div class="admin-action-group">${adminButton('View Details', 'seller-view', seller.id)}${seller.status === 'Pending' ? adminButton('Approve', 'seller-status-Approved', seller.id, 'success') : ''}${seller.status === 'Approved' ? adminButton('Suspend', 'seller-status-Suspended', seller.id, 'danger') : ''}${seller.status === 'Suspended' ? adminButton('Reactivate', 'seller-status-Approved', seller.id, 'success') : ''}${seller.status === 'Inactive' ? adminButton('Activate', 'seller-status-Approved', seller.id, 'success') : ''}${seller.status === 'Approved' ? adminButton('Deactivate', 'seller-status-Inactive', seller.id) : ''}${seller.status === 'Pending' ? adminButton('Reject', 'seller-status-Rejected', seller.id, 'danger') : ''}</div>`;
        return adminRow(`${seller.id} ${seller.store} ${seller.owner} ${seller.email} ${seller.phone}`, { status: seller.status }, [
            `<strong>${adminEscape(seller.id)}</strong>`, `<strong>${adminEscape(seller.store)}</strong><small class="admin-cell-note">${adminEscape(seller.owner)}</small>`, `<span>${adminEscape(seller.email)}</span><small class="admin-cell-note">${adminEscape(seller.phone)}</small>`, adminEscape(seller.date), String(seller.products.length), String(orders), adminMoney(seller.sales), adminMoney(commissionDue), adminStatus(seller.status), actions,
        ]);
    }).join('');
    return adminTable('Seller accounts', 'Review applications, account status, sales and platform fees.', adminTools('Search name, email, seller ID…', [{ key: 'status', label: 'All seller statuses', options: ['Pending', 'Approved', 'Suspended', 'Inactive', 'Rejected'] }]), ['Seller ID', 'Store and owner', 'Contact', 'Registered', 'Products', 'Orders', 'Sales revenue', 'Commission due', 'Status', 'Actions'], rows);
}

function adminSellerDetails(seller) {
    const sellerOrders = adminData.orders.filter((order) => order.sellerId === seller.id);
    const fees = adminData.feePayments.filter((fee) => fee.sellerId === seller.id);
    const products = seller.products.map((product) => `<li>${adminEscape(product.name)} <span>${adminEscape(product.id)} · ${adminMoney(product.discountPrice || product.price)} · ${product.stock} in stock</span></li>`).join('');
    const orders = sellerOrders.map((order) => `<li>${adminEscape(order.id)} · ${adminEscape(order.product)} <span>${adminEscape(order.date)} · ${adminStatus(order.status)}</span></li>`).join('') || '<li>No demo orders recorded.</li>';
    const feeRows = fees.map((fee) => `<li>${adminEscape(fee.month)} · ${adminMoney(fee.sales * adminData.commissionRate / 100)} <span>${adminStatus(fee.status)}</span></li>`).join('');
    const salesHistory = fees.map((fee) => `<li>${adminEscape(fee.month)} · ${adminMoney(fee.sales)} sales <span>Commission ${adminMoney(fee.sales * adminData.commissionRate / 100)}</span></li>`).join('') || '<li>No monthly sales history is available.</li>';
    adminOpenModal(seller.store, `<div class="admin-detail-grid"><div><span>Seller ID</span><strong>${adminEscape(seller.id)}</strong></div><div><span>Owner</span><strong>${adminEscape(seller.owner)}</strong></div><div><span>Contact</span><strong>${adminEscape(seller.email)}<br>${adminEscape(seller.phone)}</strong></div><div><span>Location</span><strong>${adminEscape(seller.city)}, Bangladesh</strong></div><div><span>Registration date</span><strong>${adminEscape(seller.date)}</strong></div><div><span>Account status</span><strong>${adminStatus(seller.status)}</strong></div><div><span>Total sales</span><strong>${adminMoney(seller.sales)}</strong></div><div><span>Current commission rate</span><strong>${adminData.commissionRate}%</strong></div></div><h3>Seller products</h3><ul class="admin-detail-list">${products}</ul><h3>Recent orders</h3><ul class="admin-detail-list">${orders}</ul><h3>Sales history</h3><ul class="admin-detail-list">${salesHistory}</ul><h3>Commission and fee records</h3><ul class="admin-detail-list">${feeRows || '<li>No fee records yet.</li>'}</ul>`);
}

function adminCustomersPage() {
    const rows = adminData.customers.map((customer) => {
        const action = `<div class="admin-action-group">${adminButton('View Profile', 'customer-view', customer.id)}${adminButton(customer.status === 'Active' ? 'Deactivate' : 'Activate', `customer-status-${customer.status === 'Active' ? 'Inactive' : 'Active'}`, customer.id)}${adminButton('Remove', 'customer-remove', customer.id, 'danger')}</div>`;
        return adminRow(`${customer.id} ${customer.name} ${customer.email} ${customer.phone} ${customer.city}`, { status: customer.status }, [`<strong>${adminEscape(customer.id)}</strong>`, `<strong>${adminEscape(customer.name)}</strong><small class="admin-cell-note">${adminEscape(customer.email)}</small>`, adminEscape(customer.city), adminEscape(customer.date), String(customer.orders), adminMoney(customer.spending), adminStatus(customer.status), action]);
    }).join('');
    return adminTable('Customer accounts', 'Manage registered shoppers and review their demo activity.', adminTools('Search name, email, customer ID…', [{ key: 'status', label: 'All customer statuses', options: ['Active', 'Inactive'] }]), ['Customer ID', 'Customer', 'City', 'Registered', 'Orders', 'Total spending', 'Status', 'Actions'], rows);
}

function adminCustomerDetails(customer) {
    const orders = adminData.orders.filter((order) => order.customerId === customer.id).map((order) => `<li>${adminEscape(order.id)} · ${adminEscape(order.product)} <span>${adminMoney(order.total)} · ${adminStatus(order.status)}</span></li>`).join('');
    adminOpenModal(customer.name, `<div class="admin-detail-grid"><div><span>Customer ID</span><strong>${adminEscape(customer.id)}</strong></div><div><span>Email</span><strong>${adminEscape(customer.email)}</strong></div><div><span>Phone</span><strong>${adminEscape(customer.phone)}</strong></div><div><span>City</span><strong>${adminEscape(customer.city)}</strong></div><div><span>Registration date</span><strong>${adminEscape(customer.date)}</strong></div><div><span>Account status</span><strong>${adminStatus(customer.status)}</strong></div><div><span>Orders placed</span><strong>${customer.orders}</strong></div><div><span>Total spending</span><strong>${adminMoney(customer.spending)}</strong></div></div><h3>Order history</h3><ul class="admin-detail-list">${orders || '<li>No demo orders found.</li>'}</ul>`);
}

function adminProductsPage() {
    const products = adminData.sellers.flatMap((seller) => seller.products.map((product) => ({ ...product, seller })));
    products.sort((first, second) => {
        if (activeProductSort === 'price-low') return first.price - second.price;
        if (activeProductSort === 'price-high') return second.price - first.price;
        if (activeProductSort === 'stock') return first.stock - second.stock;
        return first.name.localeCompare(second.name);
    });
    const categoryOptions = adminData.categories;
    const sellerOptions = adminData.sellers.map((seller) => seller.store);
    const rows = products.map(({ seller, ...product }) => {
        const actions = `<div class="admin-action-group">${adminButton('Details', 'product-view', product.id)}${adminButton('Edit', 'product-edit', product.id)}${adminButton('Update', 'product-update', product.id)}${product.status === 'Active' ? adminButton('Hide', 'product-status-Hidden', product.id) : adminButton('Restore', 'product-status-Active', product.id, 'success')}${product.status === 'Pending approval' ? adminButton('Approve', 'product-status-Active', product.id, 'success') : ''}${adminButton('Delete', 'product-delete', product.id, 'danger')}</div>`;
        const priceRange = product.price < 500 ? 'Under ৳500' : product.price <= 1500 ? '৳500–৳1500' : 'Above ৳1500';
        return adminRow(`${product.id} ${product.name} ${seller.store} ${product.category}`, { seller: seller.store, category: product.category, availability: product.status, priceRange }, [`<strong>${adminEscape(product.id)}</strong>`, `<strong>${adminEscape(product.name)}</strong><small class="admin-cell-note">${adminEscape(seller.store)}</small>`, adminEscape(product.category), adminMoney(product.price), adminMoney(product.discountPrice || product.price), String(product.stock), adminStatus(product.status), actions]);
    }).join('');
    const sortControl = `<select data-admin-product-sort aria-label="Sort products"><option value="name" ${activeProductSort === 'name' ? 'selected' : ''}>Sort: Name</option><option value="price-low" ${activeProductSort === 'price-low' ? 'selected' : ''}>Price: low to high</option><option value="price-high" ${activeProductSort === 'price-high' ? 'selected' : ''}>Price: high to low</option><option value="stock" ${activeProductSort === 'stock' ? 'selected' : ''}>Stock: low to high</option></select>`;
    const tools = adminTools('Search product name or ID…', [{ key: 'seller', label: 'All sellers', options: sellerOptions }, { key: 'category', label: 'All categories', options: categoryOptions }, { key: 'priceRange', label: 'All price ranges', options: ['Under ৳500', '৳500–৳1500', 'Above ৳1500'] }, { key: 'availability', label: 'All availability', options: [...new Set(products.map((product) => product.status))] }], sortControl);
    return adminTable('Marketplace catalog', 'Inspect and manage products submitted by every demo seller.', tools, ['Product ID', 'Product and seller', 'Category', 'Price', 'Discount price', 'Stock', 'Availability', 'Actions'], rows);
}

function adminProductForm(product) {
    const seller = adminData.sellers.find((item) => item.products.some((entry) => entry.id === product.id));
    adminOpenModal('Edit marketplace product', `<form data-admin-form="product" data-admin-product-id="${adminEscape(product.id)}"><label class="admin-form-field">Product name<input name="name" required value="${adminEscape(product.name)}"></label><label class="admin-form-field">Category<select name="category">${adminData.categories.map((category) => `<option ${category === product.category ? 'selected' : ''}>${adminEscape(category)}</option>`).join('')}</select></label><label class="admin-form-field">Seller<input value="${adminEscape(seller?.store || '')}" disabled></label><label class="admin-form-field">Regular price (৳)<input name="price" type="number" min="1" required value="${product.price}"></label><label class="admin-form-field">Discount price (৳)<input name="discountPrice" type="number" min="1" required value="${product.discountPrice || product.price}"></label><label class="admin-form-field">Stock quantity<input name="stock" type="number" min="0" required value="${product.stock}"></label><label class="admin-form-field">Availability<select name="status">${['Active', 'Hidden', 'Pending approval'].map((status) => `<option ${status === product.status ? 'selected' : ''}>${status}</option>`).join('')}</select></label>    <div class="admin-modal-actions"><button type="button" class="admin-button admin-button-light" data-admin-close>Cancel</button><button class="admin-button admin-button-primary">Update product</button></div></form>`);
}

function adminCategoriesPage() {
    const rows = adminData.categories.map((category, index) => {
        const count = adminData.sellers.flatMap((seller) => seller.products).filter((product) => product.category === category).length;
        return adminRow(`${category}`, {}, [`<strong>${adminEscape(category)}</strong>`, String(count), `<div class="admin-action-group">${adminButton('Edit', 'category-edit', String(index))}${adminButton('Delete', 'category-delete', String(index), 'danger')}</div>`]);
    }).join('');
    return `<div class="admin-page-heading"><div><h2>Product categories</h2><p>Organize the nationwide marketplace catalog.</p></div>${adminButton('+ Add category', 'category-add', '', 'primary')}</div>${adminTable('Category directory', 'The product count updates as the demo catalog changes.', adminTools('Search category…'), ['Category name', 'Products', 'Actions'], rows)}`;
}

function adminOrdersPage() {
    const rows = adminData.orders.map((order) => {
        const customer = adminCustomer(order.customerId);
        const seller = adminSeller(order.sellerId);
        const statusOptions = adminOrderStatuses.map((status) => `<option ${status === order.status ? 'selected' : ''}>${adminEscape(status)}</option>`).join('');
        const statusControl = `<select data-admin-order-status="${adminEscape(order.id)}" aria-label="Order status for ${adminEscape(order.id)}">${statusOptions}</select>`;
        return adminRow(`${order.id} ${customer?.name} ${seller?.store} ${order.product} ${order.method} ${order.status}`, { status: order.status, payment: order.paymentStatus }, [`<strong>${adminEscape(order.id)}</strong>`, adminEscape(customer?.name || 'Customer'), adminEscape(seller?.store || 'Seller'), adminEscape(order.product), adminEscape(order.date), adminMoney(order.subtotal), adminMoney(order.delivery), `<strong>${adminMoney(order.total)}</strong>`, adminEscape(order.method), adminStatus(order.paymentStatus), statusControl, adminButton('Details', 'order-view', order.id)]);
    }).join('');
    return adminTable('Marketplace orders', 'Search order records and update the frontend demo order lifecycle.', adminTools('Search order, customer, seller…', [{ key: 'status', label: 'All order statuses', options: adminOrderStatuses }, { key: 'payment', label: 'All payment statuses', options: [...new Set(adminData.orders.map((order) => order.paymentStatus))] }]), ['Order ID', 'Customer', 'Seller', 'Product', 'Date', 'Subtotal', 'Delivery', 'Total', 'Payment method', 'Payment status', 'Order status', 'Details'], rows);
}

function adminPaymentsPage() {
    const rows = adminData.payments.map((payment) => {
        const order = adminData.orders.find((item) => item.id === payment.orderId);
        const verify = ['Pending', 'Under review'].includes(payment.status) ? adminButton('Verify payment', 'payment-verify', payment.id, 'success') : '';
        return adminRow(`${payment.id} ${payment.orderId} ${payment.transaction} ${payment.method} ${payment.status}`, { method: payment.method, status: payment.status }, [`<strong>${adminEscape(payment.id)}</strong>`, adminEscape(payment.orderId), `<code>${adminEscape(payment.transaction)}</code>`, adminEscape(payment.date), adminEscape(payment.method), adminMoney(payment.amount), adminStatus(payment.status), `<div class="admin-action-group">${adminButton('View details', 'payment-view', payment.id)}${verify}</div>`]);
    }).join('');
    return adminTable('Payment records', 'Demo records only; no payment gateway or real transaction is connected.', adminTools('Search payment, order, transaction…', [{ key: 'method', label: 'All payment methods', options: [...new Set(adminData.payments.map((payment) => payment.method))] }, { key: 'status', label: 'All payment statuses', options: [...new Set(adminData.payments.map((payment) => payment.status))] }]), ['Payment ID', 'Order ID', 'Transaction ID', 'Date', 'Method', 'Amount', 'Status', 'Actions'], rows);
}

function adminCommissionsPage() {
    const pendingTotal = adminData.feePayments.filter((fee) => fee.status === 'Pending').reduce((sum, fee) => sum + fee.sales * adminData.commissionRate / 100, 0);
    const paidTotal = adminData.feePayments.filter((fee) => fee.status === 'Paid').reduce((sum, fee) => sum + fee.sales * adminData.commissionRate / 100, 0);
    const rows = adminData.feePayments.map((fee) => {
        const seller = adminSeller(fee.sellerId);
        const commission = fee.sales * adminData.commissionRate / 100;
        return adminRow(`${fee.id} ${seller?.store} ${fee.month} ${fee.status}`, { seller: seller?.store, month: fee.month, status: fee.status }, [`<strong>${adminEscape(fee.id)}</strong>`, adminEscape(seller?.store || 'Seller'), adminEscape(fee.month), adminMoney(fee.sales), `${adminData.commissionRate}%`, `<strong>${adminMoney(commission)}</strong>`, adminStatus(fee.status), fee.status === 'Pending' ? adminButton('Mark as paid', 'fee-paid', fee.id, 'success') : '—']);
    }).join('');
    return `<div class="admin-commission-summary">${adminStat('Commission rate', `${adminData.commissionRate}%`, 'Applies to fee calculations', 'purple')} ${adminStat('Pending seller fees', adminMoney(pendingTotal), 'Awaiting completion', 'amber')} ${adminStat('Completed fee payments', adminMoney(paidTotal), 'Marked paid in demo', 'green')} ${adminStat('Total platform revenue', adminMoney(pendingTotal + paidTotal), 'Calculated from fee records', 'orange')}</div><section class="admin-panel admin-rate-panel"><form data-admin-form="commission-rate"><div><h2>Platform commission rate</h2><p>Update the demo rate used to calculate seller commission records.</p></div><label>Commission percentage <span><input type="number" name="rate" min="0" max="100" step="0.1" required value="${adminData.commissionRate}"> %</span></label><button class="admin-button admin-button-primary">Save rate</button></form></section>${adminTable('Seller commission records', 'Filter by billing month, seller, and payment completion status.', adminTools('Search seller or fee ID…', [{ key: 'seller', label: 'All sellers', options: adminData.sellers.map((seller) => seller.store) }, { key: 'month', label: 'All months', options: [...new Set(adminData.feePayments.map((fee) => fee.month))] }, { key: 'status', label: 'All payment statuses', options: ['Pending', 'Paid'] }]), ['Fee record', 'Seller', 'Month', 'Sales basis', 'Rate', 'Commission due', 'Payment status', 'Action'], rows)}`;
}

function adminAnalyticsPage() {
    const paidOrders = getAdminPeriodOrders(activeAnalyticsPeriod);
    const sellerRows = [...adminData.sellers].sort((first, second) => second.sales - first.sales).map((seller) => adminRow(`${seller.store} ${seller.city}`, {}, [`<strong>${adminEscape(seller.store)}</strong>`, adminEscape(seller.city), String(seller.products.length), String(adminData.orders.filter((order) => order.sellerId === seller.id).length), adminMoney(seller.sales), adminMoney(seller.sales * adminData.commissionRate / 100)] )).join('');
    const productRows = adminData.sellers.flatMap((seller) => seller.products.map((product) => ({ seller, product }))).sort((first, second) => second.product.sold - first.product.sold).map(({ seller, product }) => adminRow(`${product.name} ${seller.store}`, {}, [`<strong>${adminEscape(product.name)}</strong>`, adminEscape(seller.store), adminEscape(product.category), String(product.sold), String(product.stock), adminMoney(product.discountPrice || product.price), adminStatus(product.status)])).join('');
    const chartValues = activeAnalyticsPeriod === 'quarter'
        ? [152600, 141200, 210800, 236400]
        : activeAnalyticsPeriod === 'year'
            ? [38400, 42700, 51600, 48200, 52600, 61800, 58300, 71400, 89400, 93000, 101200, 112800]
            : [48200, 52600, 61800, 58300, 71400, 89400];
    const chartLabels = activeAnalyticsPeriod === 'quarter'
        ? ['Q1', 'Q2', 'Q3', 'Q4']
        : activeAnalyticsPeriod === 'year'
            ? ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct']
            : ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];
    return `<div class="admin-filter-banner"><div><h2>Marketplace performance</h2><p>Showing ${paidOrders.length} eligible demo orders for the selected reporting period.</p></div><label>Reporting period<select data-admin-period><option value="month" ${activeAnalyticsPeriod === 'month' ? 'selected' : ''}>This month</option><option value="quarter" ${activeAnalyticsPeriod === 'quarter' ? 'selected' : ''}>This quarter</option><option value="year" ${activeAnalyticsPeriod === 'year' ? 'selected' : ''}>This year</option></select></label></div>${adminChart([4200, 6800, 5200, 9100, 7800, 10400], ['18 Oct', '19 Oct', '20 Oct', '21 Oct', '22 Oct', '23 Oct'], 'Daily sales')} ${adminChart(chartValues, chartLabels, 'Monthly sales')}<div class="admin-stat-grid admin-stat-grid-compact">${adminStat('Orders in report', paidOrders.length, 'Excludes cancellations', 'blue')}${adminStat('Sales in report', adminMoney(paidOrders.reduce((sum, order) => sum + order.subtotal, 0)), 'Product subtotal', 'orange')}${adminStat('Average order value', adminMoney(paidOrders.length ? paidOrders.reduce((sum, order) => sum + order.total, 0) / paidOrders.length : 0), 'Includes delivery charge', 'purple')}${adminStat('Commission rate', `${adminData.commissionRate}%`, 'Current platform setting', 'green')}</div><div class="admin-overview-grid">${adminTable('Seller-wise revenue', 'Sales and estimated commission by seller.', adminTools('Search seller…'), ['Seller', 'City', 'Products', 'Orders', 'Sales', 'Estimated commission'], sellerRows)}${adminTable('Product performance', 'Best-selling products ranked by sample units sold.', adminTools('Search product…'), ['Product', 'Seller', 'Category', 'Units sold', 'Stock', 'Price', 'Status'], productRows)}</div>`;
}

function getAdminPeriodOrders(period) {
    const eligibleOrders = adminData.orders.filter((order) => !['Cancelled', 'Returned/Refunded'].includes(order.status));
    if (period === 'month') return eligibleOrders.filter((order) => order.date.startsWith('2026-10'));
    if (period === 'quarter') return eligibleOrders.filter((order) => ['2026-10', '2026-11', '2026-12'].some((month) => order.date.startsWith(month)));
    return eligibleOrders;
}

function adminReportsPage() {
    const paidOrders = getAdminPeriodOrders(activeReportRange === 'Last month' ? 'previous-month' : activeReportRange === 'This quarter' ? 'quarter' : activeReportRange === 'This year' ? 'year' : 'month');
    const productSales = paidOrders.reduce((sum, order) => sum + order.subtotal, 0);
    const deliverySales = paidOrders.reduce((sum, order) => sum + order.delivery, 0);
    const commission = adminData.feePayments.reduce((sum, fee) => sum + fee.sales * adminData.commissionRate / 100, 0);
    const reportOrders = activeReportRange === 'Last month'
        ? adminData.orders.filter((order) => order.date.startsWith('2026-09') && !['Cancelled', 'Returned/Refunded'].includes(order.status))
        : paidOrders;
    return `<div class="admin-filter-banner"><div><h2>Revenue reports</h2><p>Showing ${reportOrders.length} eligible demo orders for ${adminEscape(activeReportRange.toLowerCase())}.</p></div><label>Date range<select data-admin-report-range><option ${activeReportRange === 'This month' ? 'selected' : ''}>This month</option><option ${activeReportRange === 'Last month' ? 'selected' : ''}>Last month</option><option ${activeReportRange === 'This quarter' ? 'selected' : ''}>This quarter</option><option ${activeReportRange === 'This year' ? 'selected' : ''}>This year</option></select></label></div><div class="admin-report-cards">${adminStat('Product sales', adminMoney(reportOrders.reduce((sum, order) => sum + order.subtotal, 0)), 'Eligible orders in selected range', 'orange')}${adminStat('Delivery charges', adminMoney(reportOrders.reduce((sum, order) => sum + order.delivery, 0)), 'Demo delivery collected', 'blue')}${adminStat('Platform commission', adminMoney(commission), 'Current rate applied to fee records', 'purple')}${adminStat('Net seller sales', adminMoney(reportOrders.reduce((sum, order) => sum + order.subtotal, 0) - commission), 'Before operational costs', 'green')}</div>${adminChart([48200, 52600, 61800, 58300, 71400, 89400], ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'], 'Revenue by month')}<section class="admin-panel"><header class="admin-panel-header"><div><h2>Order status summary</h2><p>Current sample order lifecycle distribution.</p></div></header><div class="admin-status-summary">${adminOrderStatuses.map((status) => `<div><span>${adminEscape(status)}</span><strong>${reportOrders.filter((order) => order.status === status).length}</strong></div>`).join('')}</div></section>`;
}

function adminReportsCenter() {
    const pendingFees = adminData.feePayments.filter((fee) => fee.status === 'Pending').length;
    const unverifiedPayments = adminData.payments.filter((payment) => ['Pending', 'Under review'].includes(payment.status)).length;
    return `<div class="admin-welcome"><div><span>MARKETPLACE REPORTS</span><h2>Reports and exports</h2><p>Create downloadable summaries from the browser demo records.</p></div></div><div class="admin-report-cards">${adminStat('Seller accounts', adminData.sellers.length, 'Includes every account status', 'purple')}${adminStat('Marketplace orders', adminData.orders.length, 'All demo order statuses', 'blue')}${adminStat('Pending fee records', pendingFees, 'Require fee follow-up', 'amber')}${adminStat('Payments to review', unverifiedPayments, 'Pending or under review', 'orange')}</div><section class="admin-panel"><header class="admin-panel-header"><div><h2>Download report data</h2><p>Files are generated locally from the current browser demo state.</p></div></header><div class="admin-report-actions">${adminButton('Download orders CSV', 'report-export-orders', '', 'primary')}${adminButton('Download seller revenue CSV', 'report-export-sellers', '', 'secondary')}${adminButton('Download fee records CSV', 'report-export-fees', '', 'secondary')}</div></section><section class="admin-panel"><header class="admin-panel-header"><div><h2>Report coverage</h2><p>Available summary sections in this admin workspace.</p></div></header><div class="admin-report-coverage"><a href="#analytics" data-admin-page="analytics">Sales analytics <span>Daily and monthly sales, seller and product rankings</span></a><a href="#reports" data-admin-page="reports">Revenue reports <span>Date filtered sales, delivery and fee summaries</span></a><a href="#commissions" data-admin-page="commissions">Commission ledger <span>Seller-wise commission and payment records</span></a></div></section>`;
}

function adminReviewsPage() {
    const rows = adminData.reviews.map((review) => adminRow(`${review.id} ${review.customer} ${review.product} ${review.seller} ${review.text}`, { visibility: review.visible ? 'Visible' : 'Hidden', rating: `${review.rating} stars` }, [`<strong>${adminEscape(review.customer)}</strong><small class="admin-cell-note">${adminEscape(review.date)}</small>`, adminEscape(review.product), adminEscape(review.seller), `<span class="admin-stars">${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</span><small class="admin-cell-note">${review.rating}/5</small>`, `<span class="admin-review-text">${adminEscape(review.text)}</span>`, adminStatus(review.visible ? 'Visible' : 'Hidden'), adminButton(review.visible ? 'Hide review' : 'Restore review', 'review-toggle', review.id, review.visible ? 'danger' : 'success')])).join('');
    return adminTable('Customer reviews', 'Moderate demo reviews while preserving the underlying sample record.', adminTools('Search customer, product, review…', [{ key: 'visibility', label: 'All review statuses', options: ['Visible', 'Hidden'] }, { key: 'rating', label: 'All ratings', options: ['1 stars', '2 stars', '3 stars', '4 stars', '5 stars'] }]), ['Customer', 'Product', 'Seller', 'Rating', 'Review', 'Visibility', 'Action'], rows);
}

function adminNotificationsPage() {
    const rows = adminData.notifications.map((notification) => adminRow(`${notification.title} ${notification.detail}`, { status: notification.read ? 'Read' : 'Unread' }, [`<strong>${adminEscape(notification.title)}</strong><small class="admin-cell-note">${adminEscape(notification.detail)}</small>`, adminStatus(notification.read ? 'Read' : 'Unread'), adminButton(notification.read ? 'Read' : 'Mark as read', 'notification-read', notification.id, notification.read ? 'secondary' : 'primary')])).join('');
    return adminTable('Admin notifications', 'Marketplace alerts and pending action reminders.', adminTools('Search notifications…', [{ key: 'status', label: 'All notifications', options: ['Unread', 'Read'] }]), ['Notification', 'Status', 'Action'], rows);
}

function adminProfilePage() {
    const profile = adminData.profile;
    return `<section class="admin-panel admin-form-panel"><header class="admin-panel-header"><div><h2>Administrator profile</h2><p>Update the local demo profile shown in this admin workspace.</p></div></header><form data-admin-form="profile" class="admin-form-grid"><label class="admin-form-field">Full name<input name="name" required value="${adminEscape(profile.name)}"></label><label class="admin-form-field">Email address<input name="email" type="email" required value="${adminEscape(profile.email)}"></label><label class="admin-form-field">Phone number<input name="phone" required value="${adminEscape(profile.phone)}"></label><label class="admin-form-field">Role<input name="role" value="${adminEscape(profile.role)}" disabled></label><div class="admin-modal-actions admin-field-wide"><button class="admin-button admin-button-primary">Save profile</button></div></form></section>`;
}

function adminSettingsPage() {
    const settings = adminData.settings;
    return `<section class="admin-panel admin-form-panel"><header class="admin-panel-header"><div><h2>Marketplace settings</h2><p>These values are a local demo preview and do not change server configuration.</p></div></header><form data-admin-form="settings" class="admin-form-grid"><label class="admin-form-field">Marketplace name<input name="marketplaceName" required value="${adminEscape(settings.marketplaceName)}"></label><label class="admin-form-field">Logo image URL<input name="logo" type="text" value="${adminEscape(settings.logo || '')}" placeholder="https://example.com/logo.png"></label><label class="admin-form-field">Contact email<input name="contactEmail" type="email" required value="${adminEscape(settings.contactEmail)}"></label><label class="admin-form-field">Contact phone<input name="contactPhone" required value="${adminEscape(settings.contactPhone)}"></label><label class="admin-form-field">Default delivery charge (৳)<input name="deliveryCharge" type="number" min="0" required value="${settings.deliveryCharge}"></label><label class="admin-form-field admin-field-wide">Storefront message<textarea name="storefrontMessage" rows="4">${adminEscape(settings.storefrontMessage)}</textarea></label><div class="admin-modal-actions admin-field-wide"><button class="admin-button admin-button-primary">Save website settings</button></div></form></section>`;
}

function renderAdminPage(page) {
    const content = document.querySelector('[data-admin-content]');
    if (!content) return;
    activeAdminPage = adminPageTitles[page] ? page : 'overview';
    const renderers = {
        overview: adminOverview,
        sellers: adminSellersPage,
        customers: adminCustomersPage,
        products: adminProductsPage,
        categories: adminCategoriesPage,
        orders: adminOrdersPage,
        payments: adminPaymentsPage,
        commissions: adminCommissionsPage,
        analytics: adminAnalyticsPage,
        reports: adminReportsPage,
        'reports-center': adminReportsCenter,
        reviews: adminReviewsPage,
        notifications: adminNotificationsPage,
        profile: adminProfilePage,
        settings: adminSettingsPage,
    };
    document.querySelector('[data-admin-heading]').textContent = adminPageTitles[activeAdminPage];
    document.querySelectorAll('[data-admin-page]').forEach((link) => {
        link.classList.toggle('admin-navigation-active', link.dataset.adminPage === activeAdminPage);
    });
    content.innerHTML = renderers[activeAdminPage]();
    adminApplyFilters();
    const unreadCount = adminData.notifications.filter((notification) => !notification.read).length;
    document.querySelector('[data-admin-notification-count]').textContent = unreadCount || '';
}

function adminToast(message) {
    let toast = document.querySelector('[data-admin-toast]');
    if (!toast) {
        toast = document.createElement('div');
        toast.className = 'admin-toast';
        toast.dataset.adminToast = '';
        toast.setAttribute('role', 'status');
        document.body.append(toast);
    }
    toast.textContent = message;
    window.clearTimeout(adminToastTimeout);
    adminToastTimeout = window.setTimeout(() => toast.remove(), 3200);
}

function adminOpenModal(title, body) {
    const modal = document.querySelector('[data-admin-modal]');
    modal.querySelector('[data-admin-modal-title]').textContent = title;
    modal.querySelector('[data-admin-modal-content]').innerHTML = body;
    modal.hidden = false;
    modal.querySelector('[data-admin-close]')?.focus();
}

function adminCloseModal() {
    document.querySelector('[data-admin-modal]').hidden = true;
}

function adminConfirm(message) {
    return window.confirm(message);
}

function adminDownloadCsv(filename, headings, records) {
    const csvCell = (value) => {
        let cell = String(value ?? '');
        if (/^[=+\-@]/.test(cell)) cell = `'${cell}`;
        return `"${cell.replace(/"/g, '""')}"`;
    };
    const csv = [headings, ...records].map((record) => record.map(csvCell).join(',')).join('\r\n');
    const file = new Blob([csv], { type: 'text/csv;charset=utf-8' });
    const link = document.createElement('a');
    const fileUrl = URL.createObjectURL(file);
    link.href = fileUrl;
    link.download = filename;
    document.body.append(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(fileUrl), 1000);
}

function adminHandleAction(action, id) {
    const product = adminData.sellers.flatMap((seller) => seller.products).find((item) => item.id === id);

    if (action === 'seller-view') {
        const seller = adminSeller(id);
        if (seller) adminSellerDetails(seller);
    } else if (action.startsWith('seller-status-')) {
        const seller = adminSeller(id);
        const status = action.replace('seller-status-', '');
        if (!seller) return;
        if (['Suspended', 'Rejected', 'Inactive'].includes(status) && !adminConfirm(`${status} ${seller.store}? This change affects the admin demo account status.`)) return;
        seller.status = status;
        saveAdminData();
        renderAdminPage(activeAdminPage);
        adminToast(`${seller.store} status updated to ${status}.`);
    } else if (action === 'customer-view') {
        const customer = adminCustomer(id);
        if (customer) adminCustomerDetails(customer);
    } else if (action.startsWith('customer-status-')) {
        const customer = adminCustomer(id);
        if (customer) {
            customer.status = action.replace('customer-status-', '');
            saveAdminData();
            renderAdminPage(activeAdminPage);
            adminToast(`${customer.name} account status updated.`);
        }
    } else if (action === 'customer-remove') {
        const customer = adminCustomer(id);
        if (customer && adminConfirm(`Remove ${customer.name} from the demo customer list?`)) {
            adminData.customers = adminData.customers.filter((item) => item.id !== id);
            saveAdminData();
            renderAdminPage(activeAdminPage);
            adminToast('Customer removed from the demo list.');
        }
    } else if (action === 'product-view' && product) {
        const seller = adminData.sellers.find((item) => item.products.includes(product));
        adminOpenModal(product.name, `<div class="admin-detail-grid"><div><span>Product ID</span><strong>${adminEscape(product.id)}</strong></div><div><span>Seller</span><strong>${adminEscape(seller?.store)}</strong></div><div><span>Category</span><strong>${adminEscape(product.category)}</strong></div><div><span>Regular price</span><strong>${adminMoney(product.price)}</strong></div><div><span>Discount price</span><strong>${adminMoney(product.discountPrice || product.price)}</strong></div><div><span>Stock</span><strong>${product.stock}</strong></div><div><span>Availability</span><strong>${adminStatus(product.status)}</strong></div></div>`);
    } else if (['product-edit', 'product-update'].includes(action) && product) {
        adminProductForm(product);
    } else if (action.startsWith('product-status-') && product) {
        product.status = action.replace('product-status-', '');
        saveAdminData();
        renderAdminPage(activeAdminPage);
        adminToast(`${product.name} availability updated.`);
    } else if (action === 'product-delete' && product && adminConfirm(`Delete ${product.name} from the marketplace demo catalog?`)) {
        adminData.sellers.forEach((seller) => {
            seller.products = seller.products.filter((item) => item.id !== id);
        });
        saveAdminData();
        renderAdminPage(activeAdminPage);
        adminToast('Product removed from the demo catalog.');
    } else if (action === 'category-add') {
        adminOpenModal('Add product category', '<form data-admin-form="category"><label class="admin-form-field">Category name<input name="name" required maxlength="50"></label><div class="admin-modal-actions"><button type="button" class="admin-button admin-button-light" data-admin-close>Cancel</button><button class="admin-button admin-button-primary">Add category</button></div></form>');
    } else if (action === 'category-edit') {
        const category = adminData.categories[Number(id)];
        if (category !== undefined) adminOpenModal('Edit product category', `<form data-admin-form="category-edit" data-admin-category-index="${Number(id)}"><label class="admin-form-field">Category name<input name="name" required maxlength="50" value="${adminEscape(category)}"></label><div class="admin-modal-actions"><button type="button" class="admin-button admin-button-light" data-admin-close>Cancel</button><button class="admin-button admin-button-primary">Save category</button></div></form>`);
    } else if (action === 'category-delete') {
        const category = adminData.categories[Number(id)];
        const inUse = adminData.sellers.some((seller) => seller.products.some((item) => item.category === category));
        if (category && inUse) {
            adminToast('This category has products assigned. Move those products before deleting it.');
        } else if (category && adminConfirm(`Delete the ${category} category?`)) {
            adminData.categories.splice(Number(id), 1);
            saveAdminData();
            renderAdminPage(activeAdminPage);
            adminToast('Category deleted.');
        }
    } else if (action === 'order-view') {
        const order = adminData.orders.find((item) => item.id === id);
        if (order) {
            const customer = adminCustomer(order.customerId);
            const seller = adminSeller(order.sellerId);
            adminOpenModal(`Order ${order.id}`, `<div class="admin-detail-grid"><div><span>Customer</span><strong>${adminEscape(customer?.name)}</strong></div><div><span>Seller</span><strong>${adminEscape(seller?.store)}</strong></div><div><span>Ordered product</span><strong>${adminEscape(order.product)}</strong></div><div><span>Order date</span><strong>${adminEscape(order.date)}</strong></div><div><span>Subtotal</span><strong>${adminMoney(order.subtotal)}</strong></div><div><span>Delivery charge</span><strong>${adminMoney(order.delivery)}</strong></div><div><span>Total</span><strong>${adminMoney(order.total)}</strong></div><div><span>Payment</span><strong>${adminEscape(order.method)} · ${adminEscape(order.paymentStatus)}</strong></div><div><span>Order status</span><strong>${adminStatus(order.status)}</strong></div></div>`);
        }
    } else if (action === 'payment-view') {
        const payment = adminData.payments.find((item) => item.id === id);
        if (payment) adminOpenModal(`Payment ${payment.id}`, `<div class="admin-detail-grid"><div><span>Transaction ID</span><strong>${adminEscape(payment.transaction)}</strong></div><div><span>Order</span><strong>${adminEscape(payment.orderId)}</strong></div><div><span>Payment method</span><strong>${adminEscape(payment.method)}</strong></div><div><span>Amount</span><strong>${adminMoney(payment.amount)}</strong></div><div><span>Date</span><strong>${adminEscape(payment.date)}</strong></div><div><span>Status</span><strong>${adminStatus(payment.status)}</strong></div></div><p class="admin-demo-note">Demo verification only. No payment provider has been contacted.</p>`);
    } else if (action === 'payment-verify') {
        const payment = adminData.payments.find((item) => item.id === id);
        if (payment && adminConfirm(`Mark demo payment ${payment.id} as verified?`)) {
            payment.status = 'Verified';
            const order = adminData.orders.find((item) => item.id === payment.orderId);
            if (order) order.paymentStatus = 'Verified';
            saveAdminData();
            renderAdminPage(activeAdminPage);
            adminToast('Demo payment marked as verified.');
        }
    } else if (action === 'fee-paid') {
        const fee = adminData.feePayments.find((item) => item.id === id);
        if (fee && adminConfirm(`Mark ${fee.id} as paid in the demo records?`)) {
            fee.status = 'Paid';
            saveAdminData();
            renderAdminPage(activeAdminPage);
            adminToast('Demo seller fee marked as paid.');
        }
    } else if (action === 'review-toggle') {
        const review = adminData.reviews.find((item) => item.id === id);
        if (review) {
            review.visible = !review.visible;
            saveAdminData();
            renderAdminPage(activeAdminPage);
            adminToast(`Review ${review.visible ? 'restored to' : 'hidden from'} the demo storefront.`);
        }
    } else if (action === 'notification-read') {
        const notification = adminData.notifications.find((item) => item.id === id);
        if (notification) {
            notification.read = true;
            saveAdminData();
            renderAdminPage(activeAdminPage);
            adminToast('Notification marked as read.');
        }
    } else if (action === 'report-export-orders') {
        const rows = adminData.orders.map((order) => [order.id, adminCustomer(order.customerId)?.name, adminSeller(order.sellerId)?.store, order.product, order.date, order.subtotal, order.delivery, order.total, order.method, order.paymentStatus, order.status]);
        adminDownloadCsv('shopnext-demo-orders.csv', ['Order ID', 'Customer', 'Seller', 'Product', 'Date', 'Subtotal', 'Delivery', 'Total', 'Payment method', 'Payment status', 'Order status'], rows);
        adminToast('Orders report downloaded.');
    } else if (action === 'report-export-sellers') {
        const rows = adminData.sellers.map((seller) => [seller.id, seller.store, seller.owner, seller.email, seller.status, seller.sales, seller.sales * adminData.commissionRate / 100]);
        adminDownloadCsv('shopnext-demo-seller-revenue.csv', ['Seller ID', 'Store', 'Owner', 'Email', 'Status', 'Sales', 'Estimated commission'], rows);
        adminToast('Seller revenue report downloaded.');
    } else if (action === 'report-export-fees') {
        const rows = adminData.feePayments.map((fee) => [fee.id, adminSeller(fee.sellerId)?.store, fee.month, fee.sales, adminData.commissionRate, fee.sales * adminData.commissionRate / 100, fee.status]);
        adminDownloadCsv('shopnext-demo-platform-fees.csv', ['Fee ID', 'Seller', 'Month', 'Sales basis', 'Rate', 'Commission', 'Status'], rows);
        adminToast('Platform fee report downloaded.');
    }
}

function adminHandleForm(form) {
    const values = new FormData(form);
    const value = (name) => String(values.get(name) || '').trim();

    if (form.dataset.adminForm === 'product') {
        const product = adminData.sellers.flatMap((seller) => seller.products).find((item) => item.id === form.dataset.adminProductId);
        const price = Number(value('price'));
        const discountPrice = Number(value('discountPrice'));
        if (!product || discountPrice > price) {
            adminToast('Discount price must not exceed the regular price.');
            return;
        }
        Object.assign(product, { name: value('name'), category: value('category'), price, discountPrice, stock: Number(value('stock')), status: value('status') });
        saveAdminData();
        adminCloseModal();
        renderAdminPage(activeAdminPage);
        adminToast('Product details updated across the admin catalog.');
    } else if (form.dataset.adminForm === 'category' || form.dataset.adminForm === 'category-edit') {
        const category = value('name');
        const index = Number(form.dataset.adminCategoryIndex);
        if (!category) return;
        if (form.dataset.adminForm === 'category-edit') {
            const oldName = adminData.categories[index];
            if (adminData.categories.some((item, itemIndex) => itemIndex !== index && item.toLowerCase() === category.toLowerCase())) {
                adminToast('A category with that name already exists.');
                return;
            }
            adminData.categories[index] = category;
            adminData.sellers.forEach((seller) => seller.products.forEach((product) => {
                if (product.category === oldName) product.category = category;
            }));
        } else {
            if (adminData.categories.some((item) => item.toLowerCase() === category.toLowerCase())) {
                adminToast('That category already exists.');
                return;
            }
            adminData.categories.push(category);
        }
        saveAdminData();
        adminCloseModal();
        renderAdminPage(activeAdminPage);
        adminToast('Product category saved.');
    } else if (form.dataset.adminForm === 'commission-rate') {
        const rate = Number(value('rate'));
        if (!Number.isFinite(rate) || rate < 0 || rate > 100) {
            adminToast('Enter a commission percentage from 0 to 100.');
            return;
        }
        adminData.commissionRate = rate;
        saveAdminData();
        renderAdminPage(activeAdminPage);
        adminToast('Commission rate and fee calculations updated.');
    } else if (form.dataset.adminForm === 'profile') {
        adminData.profile = { ...adminData.profile, name: value('name'), email: value('email'), phone: value('phone') };
        saveAdminData();
        renderAdminPage(activeAdminPage);
        adminToast('Admin demo profile updated.');
    } else if (form.dataset.adminForm === 'settings') {
        adminData.settings = { ...adminData.settings, marketplaceName: value('marketplaceName'), logo: value('logo'), contactEmail: value('contactEmail'), contactPhone: value('contactPhone'), deliveryCharge: Number(value('deliveryCharge')), storefrontMessage: value('storefrontMessage') };
        saveAdminData();
        renderAdminPage(activeAdminPage);
        adminToast('Demo website settings saved in this browser.');
    }
}

function initializeAdminDashboard() {
    const root = document.querySelector('[data-admin-dashboard]');
    if (!root) return;

    root.addEventListener('click', (event) => {
        const actionButton = event.target.closest('[data-admin-action]');
        const closeButton = event.target.closest('[data-admin-close]');
        const navigationLink = event.target.closest('[data-admin-page]');
        if (actionButton) {
            event.preventDefault();
            event.stopPropagation();
            adminHandleAction(actionButton.dataset.adminAction, actionButton.dataset.adminId);
        } else if (closeButton) {
            event.stopPropagation();
            adminCloseModal();
        } else if (navigationLink) {
            const targetPage = navigationLink.dataset.adminPage;
            if (targetPage) {
                event.stopPropagation();
                renderAdminPage(targetPage);
            }
        }
    });

    root.addEventListener('input', (event) => {
        if (event.target.matches('[data-admin-search]')) adminApplyFilters();
    });
    root.addEventListener('change', (event) => {
        if (event.target.matches('[data-admin-filter]')) adminApplyFilters();
        if (event.target.matches('[data-admin-product-sort]')) {
            activeProductSort = event.target.value;
            renderAdminPage(activeAdminPage);
        }
        if (event.target.matches('[data-admin-period]')) {
            activeAnalyticsPeriod = event.target.value;
            renderAdminPage(activeAdminPage);
        }
        if (event.target.matches('[data-admin-report-range]')) {
            activeReportRange = event.target.value;
            renderAdminPage(activeAdminPage);
        }
        if (event.target.matches('[data-admin-order-status]')) {
            const order = adminData.orders.find((item) => item.id === event.target.dataset.adminOrderStatus);
            if (order) {
                order.status = event.target.value;
                saveAdminData();
                renderAdminPage(activeAdminPage);
                adminToast(`Order ${order.id} status updated to ${order.status}.`);
            }
        }
    });
    root.addEventListener('submit', (event) => {
        const form = event.target.closest('[data-admin-form]');
        if (!form) return;
        event.preventDefault();
        event.stopPropagation();
        if (!form.reportValidity()) return;
        adminHandleForm(form);
    });

    const modal = document.querySelector('[data-admin-modal]');
    modal.addEventListener('click', (event) => {
        if (event.target === modal || event.target.closest('[data-admin-close]')) adminCloseModal();
    });
    modal.addEventListener('submit', (event) => {
        const form = event.target.closest('[data-admin-form]');
        if (!form) return;
        event.preventDefault();
        event.stopPropagation();
        if (!form.reportValidity()) return;
        adminHandleForm(form);
    });
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && !modal.hidden) adminCloseModal();
    });
    window.addEventListener('hashchange', () => renderAdminPage(window.location.hash.slice(1) || 'overview'));
    renderAdminPage(window.location.hash.slice(1) || 'overview');
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('[data-admin-dashboard]')) {
        saveAdminData();
        initializeAdminDashboard();
    }
});
