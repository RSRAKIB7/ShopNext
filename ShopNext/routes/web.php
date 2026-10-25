<?php

use Illuminate\Support\Facades\Route;

Route::view('/', 'store.home')->name('home');
Route::view('/login', 'user.login')->name('login');
Route::view('/products', 'store.products')->name('products');
Route::view('/product-details', 'store.product-details')->name('product.details');
Route::view('/cart', 'store.cart')->name('cart');
Route::view('/checkout', 'user.customer-page', ['page' => 'checkout'])->name('checkout');
Route::view('/order-confirmation', 'user.customer-page', ['page' => 'confirmation'])->name('order.confirmation');
Route::view('/help', 'user.customer-page', ['page' => 'help'])->name('help');
Route::view('/support', 'user.customer-page', ['page' => 'support'])->name('support');

Route::prefix('user')->name('user.')->group(function () {
    Route::view('/login', 'user.login')->name('login');
    Route::view('/register', 'user.register')->name('register');
    Route::view('/dashboard', 'user.dashboard')->name('dashboard');
    Route::view('/orders', 'user.dashboard')->name('orders');
    Route::view('/wishlist', 'user.customer-page', ['page' => 'wishlist'])->name('wishlist');
    Route::view('/addresses', 'user.customer-page', ['page' => 'addresses'])->name('addresses');
    Route::view('/order-details', 'user.customer-page', ['page' => 'order-details'])->name('order.details');
    Route::view('/order-tracking', 'user.customer-page', ['page' => 'tracking'])->name('order.tracking');
    Route::view('/returns', 'user.customer-page', ['page' => 'returns'])->name('returns');
    Route::view('/reviews', 'user.customer-page', ['page' => 'reviews'])->name('reviews');
    Route::view('/notifications', 'user.customer-page', ['page' => 'notifications'])->name('notifications');
});

