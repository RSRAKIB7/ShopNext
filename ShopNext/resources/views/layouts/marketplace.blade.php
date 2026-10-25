<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=1360" />
    <title>ShopNext | Bangladesh's Online Marketplace</title>
    <meta name="description" content="Shop products from trusted sellers across Bangladesh. Discover fashion, electronics, home essentials and more on ShopNext." />
    <meta property="og:title" content="ShopNext | Bangladesh's Online Marketplace" />
    <meta property="og:description" content="A multi-vendor marketplace connecting shoppers and sellers across Bangladesh." />
    <meta property="og:type" content="website" />
    @vite(['resources/css/index.css', 'resources/js/app.js'])
  </head>
  <body class="bg-slate-50 text-slate-800 antialiased flex flex-col min-h-screen">
<header class="w-full bg-white shadow-xs border-b border-slate-200 sticky top-0 z-50">

      <div class="bg-slate-100 border-b border-slate-200 text-xs text-slate-600 px-6 py-1.5 flex justify-between items-center">
        <div class="flex items-center gap-3">
          <span class="font-bold text-orange-600">
            🇧🇩 ShopNext — Bangladesh's online marketplace
          </span>
          <span class="text-slate-300">|</span>
          <span class="text-slate-600">Discover great deals from sellers nationwide</span>
        </div>
        <div class="flex items-center gap-4">
          <a href="{{ route('seller.register') }}" class="hover:text-orange-600 font-medium">Become a seller</a>
          <span>Nationwide delivery</span>
          <a href="{{ route('help') }}" class="hover:text-orange-600 font-medium">Help &amp; support</a>
        </div>
      </div>

      <div class="bg-orange-600 text-white px-6 py-3.5">
        <div class="max-w-7xl mx-auto flex items-center justify-between gap-6">

          <a href="{{ route('home') }}" class="flex items-center gap-3 shrink-0 text-white no-underline">
            <div class="bg-white text-orange-600 font-black text-2xl px-2.5 py-1 rounded shadow-xs tracking-tight">
              ShopNext
            </div>
            <div class="leading-tight">
              <div class="text-xs font-bold text-orange-100 uppercase tracking-wide">
                Shop across Bangladesh
              </div>
              <div class="text-[11px] text-white/80">
                Bangladesh's multi-vendor marketplace
              </div>
            </div>
          </a>

          <form action="{{ route('products') }}" method="get" class="flex-1 max-w-2xl flex items-center">
            <input
              data-customer-search
              type="text"
              name="search"
              placeholder="Search products, brands and more..."
              class="w-full bg-white text-slate-800 placeholder-slate-400 text-sm px-4 py-2.5 rounded-l outline-none border-0"
            />
            <button
              type="submit"
              class="bg-orange-700 hover:bg-orange-800 text-white px-5 py-2.5 rounded-r text-sm font-semibold transition cursor-pointer shrink-0"
            >
              Search
            </button>
          </form>

          <div class="flex items-center gap-4 shrink-0">
            <a
              href="{{ route('cart') }}"
              class="flex items-center gap-2 hover:bg-orange-700 px-3 py-2 rounded transition text-white no-underline relative"
            >
              <div class="relative text-xl">
                🛒
                <span data-cart-count class="absolute -top-1.5 -right-2 bg-yellow-300 text-slate-900 font-bold text-[10px] rounded-full w-4 h-4 flex items-center justify-center shadow-xs">
                  2
                </span>
              </div>
              <span class="font-bold text-sm">Cart</span>
            </a>

            <div class="bg-orange-700/90 px-3 py-1.5 rounded border border-orange-500 text-xs">
              <span class="text-orange-200">Mode: </span>
              <span class="font-bold uppercase tracking-wider text-yellow-300">Bangladesh</span>
            </div>
          </div>
        </div>
      </div>

      <nav class="bg-white border-b border-slate-200 px-6 py-2">
        <div class="max-w-7xl mx-auto flex items-center justify-between text-sm font-medium gap-4">

          <div class="flex items-center gap-2 shrink-0">
            <a href="{{ route('home') }}" class="px-3 py-1.5 rounded hover:bg-orange-50 hover:text-orange-600 transition text-slate-700 font-semibold no-underline">
              Home
            </a>
            <a href="{{ route('products') }}" class="px-3 py-1.5 rounded hover:bg-orange-50 hover:text-orange-600 transition text-slate-700 font-semibold no-underline">
              All Products
            </a>
            <a href="{{ route('cart') }}" class="px-3 py-1.5 rounded hover:bg-orange-50 hover:text-orange-600 transition text-slate-700 font-semibold no-underline flex items-center gap-1">
              <span data-cart-label>Cart (2)</span>
            </a>
          </div>

          <div class="flex items-center gap-2 border-l border-slate-200 pl-3 shrink-0">
            <a href="{{ route('user.register') }}" class="px-3 py-1.5 rounded text-orange-600 border border-orange-500 hover:bg-orange-50 transition font-semibold no-underline">
              Create Account
            </a>
            <a href="{{ route('login') }}" class="px-4 py-2 rounded text-sm font-bold text-white bg-slate-900 hover:bg-slate-700 transition no-underline">
              Log in
            </a>
          </div>
        </div>
      </nav>
    </header>
<main class="flex-1 max-w-7xl w-full mx-auto px-6 pt-7 pb-12">
    @yield('content')
</main>
<footer class="bg-slate-900 text-slate-400 text-xs border-t border-slate-800 mt-auto">
      <div class="max-w-7xl mx-auto px-6 py-10 grid grid-cols-4 gap-8">

        <div class="space-y-3">
          <div class="text-white font-bold text-base flex items-center gap-1.5">
            <span class="text-orange-500 font-black">ShopNext</span>
            <span>· Bangladesh</span>
          </div>
          <p class="text-[11px] leading-relaxed text-slate-400">
            ShopNext brings shoppers and trusted sellers together across Bangladesh with great deals on products for everyday life.
          </p>
          <div class="text-[11px] text-slate-300">
            📍 Connecting shoppers and sellers across Bangladesh
          </div>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-semibold uppercase text-xs tracking-wider">
            Customer Care
          </h4>
          <ul class="space-y-1.5 text-[11px]">
            <li><a href="{{ route('cart') }}" class="hover:text-white transition">Shopping cart &amp; checkout</a></li>
            <li><a href="{{ route('products') }}" class="hover:text-white transition">Browse all products</a></li>
            <li><a href="{{ route('help') }}" class="hover:text-white">Delivery information &amp; FAQs</a></li>
            <li><a href="{{ route('user.returns') }}" class="hover:text-white">Returns &amp; refunds</a></li>
            <li><a href="{{ route('support') }}" class="hover:text-white">Contact support</a></li>
          </ul>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-semibold uppercase text-xs tracking-wider">
            Seller &amp; customer tools
          </h4>
          <ul class="space-y-1.5 text-[11px]">
            <li><a href="{{ route('seller.register') }}" class="hover:text-emerald-400 transition">Start selling</a></li>
            <li><a href="{{ route('user.dashboard') }}" class="hover:text-purple-400 transition">Customer account</a></li>
            <li><a href="{{ route('user.register') }}" class="hover:text-orange-400 transition">Create an account</a></li>
          </ul>
        </div>

        <div class="space-y-3">
          <h4 class="text-white font-semibold uppercase text-xs tracking-wider">
            Delivery across Bangladesh
          </h4>
          <p class="text-[11px] text-slate-400 leading-relaxed">
            Shop from trusted sellers and get orders delivered to your address in cities and towns nationwide.
          </p>
          <div class="bg-slate-800 p-2.5 rounded border border-slate-700 text-[11px] text-slate-300">
            Payment options include Cash on Delivery and supported digital methods.
          </div>
        </div>

      </div>

      <div class="bg-slate-950 py-4 px-6 border-t border-slate-800/80 text-center text-[11px] text-slate-500">
        © 2026 ShopNext Bangladesh. Your marketplace for everyday discoveries.
      </div>
    </footer>
</body>
</html>