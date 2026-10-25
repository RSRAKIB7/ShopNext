@extends('layouts.marketplace')

@section('content')
<section class="mx-auto my-10 max-w-3xl rounded-2xl border border-slate-200 bg-white p-9 shadow-sm">
    <div class="mb-8">
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Seller application</p>
        <h1 class="mt-2 text-3xl font-bold text-slate-900">Open your ShopNext store</h1>
        <p class="mt-2 text-slate-500">This is a frontend demo. No application or account information is sent.</p>
    </div>
    <form data-demo-form class="grid grid-cols-2 gap-5">
        <label class="text-sm font-semibold text-slate-700">Store name<input required class="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 font-normal" placeholder="Your campus store"></label>
        <label class="text-sm font-semibold text-slate-700">Contact person<input required class="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 font-normal" placeholder="Full name"></label>
        <label class="text-sm font-semibold text-slate-700">Email address<input type="email" required class="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 font-normal" placeholder="seller@example.com"></label>
        <label class="text-sm font-semibold text-slate-700">Phone number<input type="tel" required class="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 font-normal" placeholder="01XXXXXXXXX"></label>
        <label class="col-span-2 text-sm font-semibold text-slate-700">Store category<select class="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 font-normal"><option>Books and stationery</option><option>Electronics</option><option>Clothing and merchandise</option><option>Food and daily essentials</option></select></label>
        <label class="col-span-2 text-sm font-semibold text-slate-700">Short store description<textarea rows="4" class="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 font-normal" placeholder="What will you offer to the campus community?"></textarea></label>
        <div class="col-span-2 flex items-center gap-3"><input id="seller-guidelines" type="checkbox" required><label for="seller-guidelines" class="text-sm text-slate-600">I agree to follow the ShopNext campus seller guidelines.</label></div>
        <button class="col-span-2 rounded-lg bg-emerald-600 px-5 py-3 font-bold text-white hover:bg-emerald-700">Preview seller application</button>
    </form>
    <p class="mt-6 text-center text-sm text-slate-500">Already have a store? <a href="{{ route('seller.login') }}" class="font-semibold text-emerald-700 no-underline">Seller login</a></p>
</section>
@endsection
