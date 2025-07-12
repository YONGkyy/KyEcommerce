

<template>
  <header class="bg-white shadow-lg sticky top-0 z-50">
    <div class="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex-shrink-0 flex items-center">
          <h1 class="text-2xl font-bold text-gray-900">KYShop</h1>
        </div>

        <!-- Navigation Menu -->
        <nav class="hidden md:flex space-x-8">
          <NuxtLink
            to="/"
            class="text-gray-700 hover:text-blue-600 transition-colors"
            >Home</NuxtLink
          >
          <NuxtLink
            to="/product"
            class="text-gray-700 hover:text-blue-600 transition-colors"
            >Products</NuxtLink
          >
          <a
            href="#"
            class="text-gray-700 hover:text-blue-600 transition-colors"
            >Categories</a
          >
          <NuxtLink
            to="/about"
            class="text-gray-700 hover:text-blue-600 transition-colors"
            >About</NuxtLink
          >
          <a
            href="#"
            class="text-gray-700 hover:text-blue-600 transition-colors"
            >Contact</a
          >
        </nav>

        <!-- Search Bar -->
        <div class="flex-1 max-w-lg mx-8">
          <div class="relative">
            <input
              type="text"
              placeholder="Search products..."
              class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <div class="absolute left-3 top-2.5">
              <svg
                class="h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        <!-- Cart & User Actions -->
        <div class="flex items-center space-x-4">
          <button
            class="relative p-2 text-gray-700 hover:text-blue-600 transition-colors"
          >
            <svg
              class="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <span
              class="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center"
              >{{ wishlistCount }}</span
            >
          </button>
          <button
            class="relative p-2 text-gray-700 hover:text-blue-600 transition-colors"
          >
            <svg
              class="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0L17 18m0 0v2a2 2 0 01-2 2H9a2 2 0 01-2-2v-2m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v9.03"
              />
            </svg>
            <span
              class="absolute -top-1 -right-1 bg-blue-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center"
              >{{ cartCount }}</span
            >
          </button>
          <button
            class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  </header>

  <!-- <header class="bg-gray-950 shadow-md">
    <div class="container mx-auto flex justify-between items-center p-4">
      <h1 class="text-xl font-bold text-white">My Portfolio</h1>

      <nav class="flex gap-6">
        <NuxtLink
          to="/"
          class="text-gray-300 hover:text-white transition"
        >
          Home
        </NuxtLink>
        <NuxtLink
          to="/about"
          class="text-gray-300 hover:text-white transition"
        >
          About
        </NuxtLink>
        <NuxtLink
          to="/projects"
          class="text-gray-300 hover:text-white transition"
        >
          Projects
        </NuxtLink>
        <NuxtLink
          to="/contact"
          class="text-gray-300 hover:text-white transition"
        >
          Contact
        </NuxtLink>
      </nav>
    </div>
  </header> -->
</template>

