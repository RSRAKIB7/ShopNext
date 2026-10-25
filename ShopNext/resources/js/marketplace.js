const cartCountKey = 'shopnext-cart-count';
let noticeTimeout;

function useProductImagePlaceholder(image) {
    if (image.tagName === 'IMG' && !image.dataset.fallback) {
        image.dataset.fallback = 'true';
        image.src = '/images/product-placeholder.svg';
    }
}

function showDemoNotice(message) {
    let notice = document.querySelector('[data-demo-notice]');

    if (!notice) {
        notice = document.createElement('div');
        notice.dataset.demoNotice = '';
        notice.setAttribute('role', 'status');
        document.body.append(notice);
    }

    notice.textContent = message;
    window.clearTimeout(noticeTimeout);
    noticeTimeout = window.setTimeout(() => notice.remove(), 3200);
}

function getCartCount() {
    return Number(sessionStorage.getItem(cartCountKey) || 2);
}

function updateCartCount(count) {
    sessionStorage.setItem(cartCountKey, String(count));

    document.querySelectorAll('[data-cart-count]').forEach((counter) => {
        counter.textContent = String(count);
    });

    document.querySelectorAll('[data-cart-label]').forEach((label) => {
        label.textContent = `Cart (${count})`;
    });
}

function updateCartSummary() {
    const cartItems = Array.from(document.querySelectorAll('[data-cart-item]'));
    const subtotal = cartItems.reduce((sum, item) => {
        const quantityLabel = item.querySelector('[data-cart-quantity]');
        const quantity = quantityLabel ? Number(quantityLabel.textContent) || 0 : 0;
        const unitPrice = Number(item.dataset.unitPrice) || 0;
        const lineTotal = item.querySelector('[data-cart-line-total]');

        if (lineTotal) {
            lineTotal.textContent = `৳${(unitPrice * quantity).toLocaleString('en-BD')}`;
        }

        return sum + unitPrice * quantity;
    }, 0);
    const itemCount = cartItems.reduce((sum, item) => {
        const quantityLabel = item.querySelector('[data-cart-quantity]');
        return sum + (quantityLabel ? Number(quantityLabel.textContent) || 0 : 0);
    }, 0);
    const total = Math.round(subtotal * 0.9);
    const subtotalLabel = document.querySelector('[data-cart-subtotal]');
    const totalLabel = document.querySelector('[data-cart-total]');
    const itemCountLabel = document.querySelector('[data-cart-item-count]');

    if (subtotalLabel) {
        subtotalLabel.textContent = `৳${subtotal.toLocaleString('en-BD')}`;
    }

    if (totalLabel) {
        totalLabel.textContent = `৳${total.toLocaleString('en-BD')}`;
    }

    if (itemCountLabel) {
        itemCountLabel.textContent = String(itemCount);
    }
}

function getProductPrice(card) {
    const price = card.querySelector('.price-tag');
    return Number((price ? price.textContent : '').replace(/[^\d]/g, '')) || 0;
}

function filterProducts(searchText, category, priceRange) {
    const catalog = document.querySelector('#products aside');

    if (!catalog || !catalog.nextElementSibling) {
        return;
    }

    catalog.nextElementSibling.querySelectorAll('.daraz-card').forEach((card) => {
        const cardText = card.textContent.toLowerCase();
        const matchesSearch = cardText.includes(searchText.toLowerCase());
        const matchesCategory = !category || cardText.includes(category.toLowerCase());
        const price = getProductPrice(card);
        const matchesPrice = priceRange === 'under' ? price < 500
            : priceRange === 'middle' ? price >= 500 && price <= 1500
                : priceRange === 'above' ? price > 1500
                    : true;

        card.hidden = !(matchesSearch && matchesCategory && matchesPrice);
    });
}

function sortProducts(sortOrder) {
    const catalog = document.querySelector('#products aside');
    const productGrid = catalog && catalog.nextElementSibling;

    if (!productGrid) {
        return;
    }

    const cards = Array.from(productGrid.querySelectorAll('.daraz-card'));
    const ratingValue = (card) => {
        const rating = card.textContent.match(/(\d(?:\.\d)?)\s*\/\s*5/);
        return rating ? Number(rating[1]) : 0;
    };

    cards.sort((first, second) => {
        if (sortOrder === 'low') {
            return getProductPrice(first) - getProductPrice(second);
        }

        if (sortOrder === 'high') {
            return getProductPrice(second) - getProductPrice(first);
        }

        if (sortOrder === 'rating') {
            return ratingValue(second) - ratingValue(first);
        }

        return 0;
    });

    cards.forEach((card) => productGrid.append(card));
}

document.addEventListener('error', (event) => {
    useProductImagePlaceholder(event.target);
}, true);

document.addEventListener('DOMContentLoaded', () => {
    updateCartCount(getCartCount());
    updateCartSummary();
    document.querySelectorAll('img').forEach((image) => {
        if (image.complete && image.naturalWidth === 0) {
            useProductImagePlaceholder(image);
        }
    });

    const searchInput = document.querySelector('input[name="search"]');
    const searchForm = searchInput ? searchInput.closest('form') : null;
    const productSearch = new URLSearchParams(window.location.search).get('search') || '';
    let activeCategory = '';
    let activePriceRange = 'all';

    if (searchInput && productSearch) {
        searchInput.value = productSearch;
    }

    if (document.querySelector('#products')) {
        filterProducts(productSearch, activeCategory, activePriceRange);
    }

    const loginForm = document.querySelector('[data-login-form]');
    const loginButtons = Array.from(document.querySelectorAll('[data-login-role]'));
    const loginDescriptions = {
        user: 'Customer login selected. This demo will not verify or save your details.',
        seller: 'Seller login selected. This demo will not verify or save your details.',
        admin: 'Admin login selected. This demo will not verify or save your details.',
    };
    const loginLabels = {
        user: 'Continue as customer',
        seller: 'Continue as seller',
        admin: 'Continue as admin',
    };
    const loginStyles = {
        user: ['border-orange-500', 'bg-orange-50', 'text-orange-800'],
        seller: ['border-emerald-500', 'bg-emerald-50', 'text-emerald-800'],
        admin: ['border-purple-500', 'bg-purple-50', 'text-purple-800'],
    };

    loginButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const selectedRole = button.dataset.loginRole;

            loginButtons.forEach((roleButton) => {
                const selected = roleButton === button;
                roleButton.setAttribute('aria-pressed', String(selected));
                Object.values(loginStyles).flat().forEach((className) => {
                    roleButton.classList.remove(className);
                });
                roleButton.classList.toggle('border-slate-200', !selected);
                roleButton.classList.toggle('text-slate-600', !selected);

                if (selected) {
                    roleButton.classList.add(...loginStyles[selectedRole]);
                }
            });

            const notice = document.querySelector('[data-login-demo]');
            const submitButton = loginForm ? loginForm.querySelector('button[type="submit"]') : null;

            if (notice) {
                notice.textContent = loginDescriptions[selectedRole];
            }

            if (submitButton) {
                submitButton.textContent = loginLabels[selectedRole];
            }

            if (loginForm) {
                loginForm.dataset.dashboardUrl = button.dataset.dashboardUrl;
            }
        });
    });

    if (loginButtons[0]) {
        loginForm.dataset.dashboardUrl = loginButtons[0].dataset.dashboardUrl;
    }

    if (searchInput) {
        searchInput.addEventListener('input', () => {
            filterProducts(searchInput.value, activeCategory, activePriceRange);
        });
    }

    if (searchForm) {
        searchForm.addEventListener('submit', (event) => {
            if (document.querySelector('#products')) {
                event.preventDefault();
                filterProducts(searchInput.value, activeCategory, activePriceRange);
            }
        });
    }

    document.querySelectorAll('#products aside a').forEach((categoryLink) => {
        categoryLink.addEventListener('click', (event) => {
            event.preventDefault();
            const selectedCategory = categoryLink.textContent.trim().replace(/\s+\(\d+\)$/, '');
            activeCategory = selectedCategory.includes('All Categories') || selectedCategory === 'Reset'
                ? ''
                : selectedCategory.replace(/^✓\s*/, '');
            filterProducts(searchInput ? searchInput.value : '', activeCategory, activePriceRange);
        });
    });

    document.querySelectorAll('input[name="catalog-price"]').forEach((priceOption) => {
        priceOption.addEventListener('change', () => {
            const label = priceOption.closest('label');
            const optionText = label ? label.textContent : '';
            activePriceRange = optionText.includes('Under') ? 'under'
                : optionText.includes('500 -') ? 'middle'
                    : optionText.includes('Above') ? 'above'
                        : 'all';
            filterProducts(searchInput ? searchInput.value : '', activeCategory, activePriceRange);
        });
    });

    const sortSelect = document.querySelector('#products select');

    if (sortSelect) {
        sortSelect.addEventListener('change', () => {
            const sortOrder = sortSelect.selectedIndex === 1 ? 'low'
                : sortSelect.selectedIndex === 2 ? 'high'
                    : sortSelect.selectedIndex === 3 ? 'rating'
                        : 'default';
            sortProducts(sortOrder);
        });
    }

    document.addEventListener('click', (event) => {
        const galleryButton = event.target.closest('[data-gallery-image]');

        if (galleryButton) {
            const mainImage = document.querySelector('#product-main-image');

            if (mainImage) {
                mainImage.src = galleryButton.dataset.galleryImage;
                document.querySelectorAll('[data-gallery-image]').forEach((button) => {
                    button.classList.remove('border-orange-500');
                    button.classList.add('border-slate-200');
                });
                galleryButton.classList.add('border-orange-500');
                galleryButton.classList.remove('border-slate-200');
            }

            return;
        }

        const quantityButton = event.target.closest('[data-quantity-step]');

        if (quantityButton) {
            const quantityInput = document.getElementById(quantityButton.dataset.quantityTarget);
            const step = Number(quantityButton.dataset.quantityStep);

            if (quantityInput) {
                const minimum = Number(quantityInput.min) || 1;
                const maximum = Number(quantityInput.max) || 99;
                const currentQuantity = Number(quantityInput.value) || minimum;
                quantityInput.value = String(Math.min(maximum, Math.max(minimum, currentQuantity + step)));
            }

            return;
        }

        const cartQuantityButton = event.target.closest('[data-cart-quantity-step]');

        if (cartQuantityButton) {
            const cartItem = cartQuantityButton.closest('[data-cart-item]');
            const quantityLabel = cartItem ? cartItem.querySelector('[data-cart-quantity]') : null;

            if (quantityLabel) {
                const quantity = Number(quantityLabel.textContent) || 1;
                quantityLabel.textContent = String(Math.max(1, quantity + Number(cartQuantityButton.dataset.cartQuantityStep)));
                updateCartSummary();
            }

            return;
        }

        const removeCartItem = event.target.closest('[data-remove-cart-item]');

        if (removeCartItem) {
            event.preventDefault();
            const cartItem = removeCartItem.closest('[data-cart-item]');

            if (cartItem) {
                cartItem.remove();
                updateCartCount(Math.max(0, getCartCount() - 1));
                updateCartSummary();
                showDemoNotice('Item removed from your demo cart.');
            }

            return;
        }

        const cartLink = event.target.closest('a[data-add-to-cart], a[href*="/cart"]');

        if (cartLink && cartLink.textContent.toLowerCase().includes('add to cart')) {
            updateCartCount(getCartCount() + 1);
            showDemoNotice('Added to your demo cart. No order has been placed.');
            return;
        }

        const demoAction = event.target.closest('[data-demo-action]');

        if (demoAction) {
            showDemoNotice('This is a demo action. No account data has been changed.');
            return;
        }

        const button = event.target.closest('button:not([type="submit"])');

        if (button && !button.matches('[data-gallery-image], [data-quantity-step]')) {
            if (button.closest('[data-seller-dashboard], [data-seller-store-page], [data-product-detail-root], [data-admin-dashboard], [data-admin-modal]')) {
                return;
            }

            showDemoNotice('This control is for demonstration only.');
        }
    });

    document.addEventListener('submit', (event) => {
        const form = event.target;

        if (form.matches('[data-login-form]')) {
            event.preventDefault();

            if (!form.reportValidity()) {
                return;
            }

            const destination = form.dataset.dashboardUrl;
            showDemoNotice('Demo login only. Opening the selected sample dashboard.');
            window.setTimeout(() => {
                window.location.assign(destination);
            }, 500);
            return;
        }

        if (form.matches('form') && !form.querySelector('input[name="search"]')
            && !form.matches('[data-seller-form], [data-login-form]')) {
            event.preventDefault();

            const password = form.querySelector('input[name="password"]');
            const passwordConfirmation = form.querySelector('input[name="password_confirmation"]');

            if (password && passwordConfirmation && password.value !== passwordConfirmation.value) {
                showDemoNotice('The password fields do not match.');
                passwordConfirmation.focus();
                return;
            }

            showDemoNotice('Demo only. Your information has not been saved or sent.');
        }
    });

});
