@extends('layouts.marketplace')

@section('content')
<section data-admin-dashboard class="admin-dashboard">
    <aside class="admin-sidebar">
        <a class="admin-brand" href="{{ route('home') }}">ShopNext <span>MAIN ADMIN</span></a>
        <div class="admin-account">
            <span class="admin-account-avatar">SA</span>
            <div><strong>System Administrator</strong><small>Main Admin · Demo access</small></div>
        </div>
        <nav class="admin-navigation" aria-label="Admin dashboard">
            <a href="#overview" data-admin-page="overview">Dashboard Overview</a>
            <a href="#sellers" data-admin-page="sellers">Seller Management</a>
            <a href="#customers" data-admin-page="customers">Customer Management</a>
            <a href="#products" data-admin-page="products">Product Management</a>
            <a href="#categories" data-admin-page="categories">Category Management</a>
            <a href="#orders" data-admin-page="orders">Order Management</a>
            <a href="#payments" data-admin-page="payments">Payment Management</a>
            <a href="#commissions" data-admin-page="commissions">Seller Commission &amp; Fees</a>
            <a href="#analytics" data-admin-page="analytics">Sales Analytics</a>
            <a href="#reports" data-admin-page="reports">Revenue Reports</a>
            <a href="#reviews" data-admin-page="reviews">Reviews &amp; Ratings</a>
            <a href="#reports-center" data-admin-page="reports-center">Reports</a>
            <a href="#notifications" data-admin-page="notifications">Notifications <span data-admin-notification-count></span></a>
            <a href="#profile" data-admin-page="profile">Admin Profile</a>
            <a href="#settings" data-admin-page="settings">Website Settings</a>
            <a href="{{ route('login') }}">Logout</a>
        </nav>
        <div class="admin-demo-label">Frontend demo only · No real payments or account security</div>
    </aside>
    <div class="admin-workspace">
        <header class="admin-topbar">
            <div>
                <p class="admin-eyebrow">SHOPNEXT MARKETPLACE CONTROL</p>
                <h1 data-admin-heading>Dashboard Overview</h1>
            </div>
            <div class="admin-topbar-actions">
                <a href="{{ route('products') }}" class="admin-button admin-button-light">View storefront ↗</a>
                <span class="admin-status-pill"><i></i> Demo environment</span>
            </div>
        </header>
        <main class="admin-content" data-admin-content aria-live="polite"></main>
    </div>
</section>
<div class="admin-modal-backdrop" data-admin-modal hidden>
    <section class="admin-modal" role="dialog" aria-modal="true" aria-labelledby="admin-modal-title">
        <header><h2 id="admin-modal-title" data-admin-modal-title></h2><button type="button" data-admin-close aria-label="Close dialog">×</button></header>
        <div data-admin-modal-content></div>
    </section>
</div>
@endsection
