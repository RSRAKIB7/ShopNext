@extends('layouts.marketplace')

@section('content')


        <section id="signup" class="max-w-xl mx-auto my-8 bg-white p-8 rounded-lg border border-slate-200 shadow-xs space-y-6">
<div class="text-center space-y-2">
          <div class="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
            📝
          </div>
          <h1 class="text-xl font-bold text-slate-900">
            Create a ShopNext account
          </h1>
          <p class="text-xs text-slate-500">
            Join shoppers and sellers from across Bangladesh.
          </p>
        </div>

        <div class="rounded-lg border border-orange-100 bg-orange-50 p-3 text-xs text-orange-900">
          Customer demo account · Details stay in this browser and are not sent to ShopNext.
        </div>

        <form data-customer-form="register" action="{{ route('user.dashboard') }}" method="get" class="space-y-4 text-xs">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block font-semibold text-slate-700 mb-1">Full Name:</label>
              <input type="text" name="name" required placeholder="e.g. Md. Rakibul Hasan" class="w-full border border-slate-300 px-3 py-2 rounded outline-none" />
            </div>
            <div>
              <label class="block font-semibold text-slate-700 mb-1">City:</label>
              <input type="text" name="city" required placeholder="e.g. Dhaka" class="w-full border border-slate-300 px-3 py-2 rounded outline-none" />
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block font-semibold text-slate-700 mb-1">Email address:</label>
              <input type="email" name="email" required placeholder="you@example.com" class="w-full border border-slate-300 px-3 py-2 rounded outline-none" />
            </div>
            <div>
              <label class="block font-semibold text-slate-700 mb-1">Mobile Phone:</label>
              <input type="tel" name="phone" required placeholder="017XXXXXXXX" class="w-full border border-slate-300 px-3 py-2 rounded outline-none" />
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block font-semibold text-slate-700 mb-1">Password:</label>
              <input type="password" name="password" required minlength="6" placeholder="Min. 6 characters" class="w-full border border-slate-300 px-3 py-2 rounded outline-none" />
            </div>
            <div>
              <label class="block font-semibold text-slate-700 mb-1">Confirm Password:</label>
              <input type="password" name="password_confirmation" required minlength="6" placeholder="Re-enter password" class="w-full border border-slate-300 px-3 py-2 rounded outline-none" />
            </div>
          </div>

          <div class="flex items-center gap-2 pt-1">
            <input type="checkbox" id="signup-agree" required class="rounded text-orange-600" />
            <label for="signup-agree" class="text-[11px] text-slate-600 cursor-pointer">
              I agree to the ShopNext marketplace guidelines.
            </label>
          </div>

          <button
            type="submit"
            class="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-2.5 rounded text-center block transition text-xs cursor-pointer shadow-xs"
          >
            Create ShopNext Account →
          </button>
        </form>

        <div class="pt-4 border-t border-slate-100 text-center text-xs text-slate-500">
          Already registered?
          <a href="{{ route('user.login') }}" class="text-blue-600 font-bold hover:underline">
            Log In Here
          </a>
        </div>
</section>

      
@endsection
