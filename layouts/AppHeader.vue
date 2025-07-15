<template>
  <header class="bg-white dark:bg-gray-900 shadow-lg sticky top-0 z-50 border-b border-gray-200 dark:border-gray-700">
    <div class="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Mobile menu button & Logo -->
        <div class="flex items-center">
          <button 
            @click="toggleMobileMenu"
            class="lg:hidden p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-blue-600 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <Menu class="w-6 h-6" />
          </button>
          
          <NuxtLink to="/" class="ml-2 lg:ml-0 text-2xl font-bold text-blue-600 hover:text-blue-700">
            KYShop
          </NuxtLink>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex space-x-8">
          <NuxtLink to="/" class="text-gray-700 dark:text-gray-200 hover:text-blue-600 transition-colors font-medium">
            Home
          </NuxtLink>
          <NuxtLink to="/product" class="text-gray-700 dark:text-gray-200 hover:text-blue-600 transition-colors font-medium">
            Products
          </NuxtLink>
          <div class="relative group">
            <button class="flex items-center text-gray-700 dark:text-gray-200 hover:text-blue-600 transition-colors font-medium">
              Categories
              <ChevronDown class="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" />
            </button>
            <div class="absolute top-full left-0 mt-1 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-blue-600">Electronics</a>
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-blue-600">Clothing</a>
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-blue-600">Home & Garden</a>
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-blue-600">Sports</a>
            </div>
          </div>
          <NuxtLink to="/about-us" class="text-gray-700 dark:text-gray-200 hover:text-blue-600 transition-colors font-medium">
            About
          </NuxtLink>
          <NuxtLink to="/contact-us" class="text-gray-700 dark:text-gray-200 hover:text-blue-600 transition-colors font-medium">
            Contact
          </NuxtLink>
        </nav>

        <!-- Right side actions -->
        <div class="flex items-center space-x-4">
          <!-- Search Bar (Desktop) -->
          <div class="hidden md:flex relative">
            <input 
              type="text" 
              placeholder="Search products..." 
              class="w-64 px-4 py-2 pr-10 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              v-model="searchQuery"
              @keyup.enter="handleSearch"
            />
            <button 
              @click="handleSearch"
              class="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-600"
            >
              <Search class="w-4 h-4" />
            </button>
          </div>

          <!-- Mobile Search Button -->
          <button 
            @click="toggleMobileSearch"
            class="md:hidden p-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
          >
            <Search class="w-5 h-5" />
          </button>

          <!-- Wishlist -->
          <button class="relative p-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
            <Heart class="w-5 h-5" />
            <span class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
              {{ wishlistCount }}
            </span>
          </button>

          <!-- Cart -->
          <button class="relative p-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
            <ShoppingCart class="w-5 h-5" />
            <span class="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
              {{ cartCount }}
            </span>
          </button>

          <!-- User Menu -->
          <div class="relative">
            <button 
              @click="toggleUserMenu"
              class="flex items-center p-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
            >
              <User class="w-5 h-5" />
            </button>
            <div v-if="showUserMenu" class="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 z-50">
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Profile</a>
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Settings</a>
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Orders</a>
              <hr class="border-gray-200 dark:border-gray-700">
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Sign Out</a>
            </div>
          </div>

          <!-- Theme Toggle -->
          <button 
            @click="toggleDarkMode" 
            class="p-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
          >
            <Moon v-if="!isDark" class="w-5 h-5" />
            <Sun v-else class="w-5 h-5" />
          </button>
        </div>
      </div>

      <!-- Mobile Search Bar -->
      <div v-if="showMobileSearch" class="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
        <div class="relative">
          <input 
            type="text" 
            placeholder="Search products..." 
            class="w-full px-4 py-2 pr-10 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            v-model="searchQuery"
            @keyup.enter="handleSearch"
            ref="mobileSearchInput"
          />
          <button 
            @click="handleSearch"
            class="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-600"
          >
            <Search class="w-4 h-4" />
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-if="showMobileMenu" class="lg:hidden py-4 border-t border-gray-200 dark:border-gray-700">
        <nav class="flex flex-col space-y-2">
          <NuxtLink to="/" class="px-4 py-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
            Home
          </NuxtLink>
          <NuxtLink to="/product" class="px-4 py-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
            Products
          </NuxtLink>
          <button 
            @click="toggleMobileCategories"
            class="flex items-center justify-between px-4 py-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
          >
            Categories
            <ChevronDown class="w-4 h-4 transition-transform" :class="{ 'rotate-180': showMobileCategories }" />
          </button>
          <div v-if="showMobileCategories" class="ml-4 space-y-1">
            <a href="#" class="block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">Electronics</a>
            <a href="#" class="block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">Clothing</a>
            <a href="#" class="block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">Home & Garden</a>
            <a href="#" class="block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">Sports</a>
          </div>
          <NuxtLink to="/about" class="px-4 py-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
            About
          </NuxtLink>
          <a href="#" class="px-4 py-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
            Contact
          </a>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import { 
  Moon, 
  Sun, 
  Heart, 
  ShoppingCart, 
  Search, 
  Menu, 
  ChevronDown,
  User
} from 'lucide-vue-next'

const isDark = ref(false)
const wishlistCount = ref(2)
const cartCount = ref(3)
const searchQuery = ref('')
const showMobileSearch = ref(false)
const showMobileMenu = ref(false)
const showUserMenu = ref(false)
const showMobileCategories = ref(false)
const mobileSearchInput = ref(null)

const toggleDarkMode = () => {
  isDark.value = !isDark.value
  const root = document.documentElement
  root.classList.toggle('dark', isDark.value)
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

const handleSearch = () => {
  if (searchQuery.value.trim()) {
    console.log('Searching for:', searchQuery.value)
    // Add your search logic here
    // For example: navigateTo(`/search?q=${encodeURIComponent(searchQuery.value)}`)
    showMobileSearch.value = false
  }
}

const toggleMobileSearch = async () => {
  showMobileSearch.value = !showMobileSearch.value
  if (showMobileSearch.value) {
    await nextTick()
    mobileSearchInput.value?.focus()

  }
}

const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value
  if (showMobileMenu.value) {
    showMobileSearch.value = false
  }
}

const toggleUserMenu = () => {
  showUserMenu.value = !showUserMenu.value
}

const toggleMobileCategories = () => {
  showMobileCategories.value = !showMobileCategories.value
}

// Close menus when clicking outside
const handleClickOutside = (event) => {
  if (!event.target.closest('.relative')) {
    showUserMenu.value = false
  }
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  isDark.value = savedTheme === 'dark'
  if (isDark.value) document.documentElement.classList.add('dark')
  
  document.addEventListener('click', handleClickOutside)
})
</script>