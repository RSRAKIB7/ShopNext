@extends('layouts.marketplace')

@section('content')
<section data-seller-dashboard class="seller-dashboard">
    <aside class="seller-sidebar">
        <a href="{{ route('home') }}" class="seller-brand">ShopNext <span>SELLER CENTER</span></a>
        <div class="seller-account-switcher">
            <label for="seller-account">Demo seller account</label>
            <select id="seller-account" data-seller-account>
                <option value="seller-dhaka">Dhaka Stationery House</option>
                <option value="seller-chattogram">RoboTech Bangladesh</option>
            </select>
        </div>
        <nav class="seller-navigation" aria-label="Seller dashboard">
            <a href="#overview" data-seller-page="overview">Dashboard Overview</a>
            <a href="#products" data-seller-page="products">My Products</a>
            <a href="#add-product" data-seller-page="add-product">Add New Product</a>
            <a href="#categories" data-seller-page="categories">Product Categories</a>
            <a href="#inventory" data-seller-page="inventory">Inventory Management</a>
            <a href="#store-profile" data-seller-page="store-profile">My Store</a>
            <a href="{{ route('seller.store') }}">View My Store <span>↗</span></a>
            <a href="#orders" data-seller-page="orders">Manage Orders</a>
            <a href="#sales" data-seller-page="sales">Sales and Revenue</a>
            <a href="#commission" data-seller-page="commission">Platform Commission</a>
            <a href="#reviews" data-seller-page="reviews">Reviews and Ratings</a>
            <a href="#analytics" data-seller-page="analytics">Sales Analytics</a>
            <a href="#store-profile" data-seller-page="store-profile">Store Profile</a>
            <a href="#store-profile" data-seller-page="store-profile">Edit Store Information</a>
            <a href="#notifications" data-seller-page="notifications">Notifications <span data-seller-notification-count></span></a>
            <a href="{{ route('login') }}" data-seller-logout>Logout</a>
        </nav>
        <div class="seller-demo-label">Frontend demo · Changes stay in this browser session</div>
    </aside>

    <div class="seller-workspace">
        <header class="seller-topbar">
            <div>
                <p class="seller-eyebrow">SHOPNEXT SELLER CENTER</p>
                <h1 data-seller-heading>Dashboard Overview</h1>
            </div>
            <div class="seller-topbar-actions">
                <span class="seller-session-pill"><span></span> Demo store active</span>
                <a href="{{ route('seller.store') }}" class="seller-primary-link">View My Store ↗</a>
            </div>
        </header>
        <main data-seller-content class="seller-content" aria-live="polite"></main>
    </div>
</section>
@endsection
