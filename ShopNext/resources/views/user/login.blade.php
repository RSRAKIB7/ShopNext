@extends('layouts.marketplace')

@section('content')
<section class="mx-auto my-8 grid max-w-5xl grid-cols-2 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
    <div class="bg-gradient-to-br from-orange-600 via-orange-500 to-amber-400 p-12 text-white">
        <span class="rounded-full bg-white/15 px-4 py-2 text-sm font-semibold">SHOPNEXT BANGLADESH</span>
        <h1 class="mt-12 text-4xl font-bold leading-tight">One marketplace.<br>Every kind of account.</h1>
        <p class="mt-5 max-w-md text-lg leading-8 text-orange-50">Shop from trusted sellers across Bangladesh, manage your store, or access marketplace operations from one secure demo sign-in.</p>
        <div class="mt-12 space-y-4 text-sm text-orange-50">
            <p>✓ Products from sellers nationwide</p>
            <p>✓ Shop, sell and manage in one place</p>
            <p>✓ A demo experience with no real transactions</p>
        </div>
    </div>

    <div class="p-12">
        <p class="text-sm font-bold uppercase tracking-[0.18em] text-orange-600">Welcome to ShopNext</p>
        <h2 class="mt-2 text-3xl font-bold text-slate-900">Log in to your account</h2>
        <p class="mt-2 text-slate-500">Choose your account type to continue.</p>

        <div class="mt-7 grid grid-cols-3 gap-3" role="group" aria-label="Choose account type">
            <button type="button" data-login-role="user" data-dashboard-url="{{ route('user.dashboard') }}" aria-pressed="true" class="rounded-xl border-2 border-orange-500 bg-orange-50 px-3 py-4 text-center text-sm font-bold text-orange-800">
                <span class="mb-2 block text-2xl">🛍️</span>
                Customer
            </button>
            <button type="button" data-login-role="seller" data-dashboard-url="{{ route('seller.dashboard') }}" aria-pressed="false" class="rounded-xl border border-slate-200 bg-white px-3 py-4 text-center text-sm font-bold text-slate-600 hover:border-emerald-400">
                <span class="mb-2 block text-2xl">🏪</span>
                Seller
            </button>
            <button type="button" data-login-role="admin" data-dashboard-url="{{ route('admin.dashboard') }}" aria-pressed="false" class="rounded-xl border border-slate-200 bg-white px-3 py-4 text-center text-sm font-bold text-slate-600 hover:border-purple-400">
                <span class="mb-2 block text-2xl">🛡️</span>
                Admin
            </button>
        </div>

        <div data-login-demo class="mt-5 rounded-lg bg-slate-50 px-4 py-3 text-sm text-slate-600">
            Customer login selected. This demo will not verify or save your details.
        </div>
        <label data-seller-login-picker class="mt-4 hidden text-sm font-semibold text-slate-700">
            Choose a demo seller
            <select data-login-seller class="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 font-normal">
                <option value="seller-dhaka">Dhaka Stationery House</option>
                <option value="seller-chattogram">RoboTech Bangladesh</option>
            </select>
        </label>

        <form data-login-form action="{{ route('user.dashboard') }}" method="get" class="mt-6 space-y-5">
            <label class="block text-sm font-semibold text-slate-700">
                Email address
                <input data-login-email type="email" required autocomplete="username" placeholder="you@example.com" class="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 font-normal outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100">
            </label>
            <label class="block text-sm font-semibold text-slate-700">
                Password
                <input type="password" required autocomplete="current-password" placeholder="Enter your password" class="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 font-normal outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100">
            </label>
            <div class="flex items-center justify-between text-sm">
                <label class="flex items-center gap-2 text-slate-600"><input type="checkbox" class="rounded border-slate-300"> Remember me</label>
                <button type="button" data-demo-action class="font-semibold text-orange-600">Forgot password?</button>
            </div>
            <button type="submit" class="w-full rounded-lg bg-orange-600 px-5 py-3.5 font-bold text-white shadow-sm transition hover:bg-orange-700">Continue as customer</button>
            <p class="text-center text-xs text-slate-400">Demo interface only. No authentication, personal data, or transactions are processed.</p>
        </form>

        <div class="mt-7 border-t border-slate-100 pt-5 text-center text-sm text-slate-500">
            New to ShopNext?
            <a href="{{ route('user.register') }}" class="font-bold text-orange-600 no-underline hover:underline">Create an account</a>
            <span class="mx-2 text-slate-300">·</span>
            <a href="{{ route('seller.register') }}" class="font-semibold text-emerald-700 no-underline hover:underline">Register as a seller</a>
        </div>
    </div>
</section>
@endsection
