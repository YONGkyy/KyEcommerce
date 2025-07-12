<script setup lang="ts">
import { ref } from 'vue'

const currentPage = ref('home')
const mobileMenuOpen = ref(false)

const featuredProducts = ref([
  { id: 1, name: 'Wireless Headphones', description: 'Premium sound quality', price: 99.99 },
  { id: 2, name: 'Smart Watch', description: 'Track your fitness goals', price: 199.99 },
  { id: 3, name: 'Laptop Backpack', description: 'Durable and stylish', price: 49.99 },
  { id: 4, name: 'Coffee Maker', description: 'Perfect morning brew', price: 79.99 }
])

const allProducts = ref([
  { id: 1, name: 'Wireless Headphones', description: 'Premium sound quality', price: 99.99 },
  { id: 2, name: 'Smart Watch', description: 'Track your fitness goals', price: 199.99 },
  { id: 3, name: 'Laptop Backpack', description: 'Durable and stylish', price: 49.99 },
  { id: 4, name: 'Coffee Maker', description: 'Perfect morning brew', price: 79.99 },
  { id: 5, name: 'Bluetooth Speaker', description: 'Portable audio solution', price: 59.99 },
  { id: 6, name: 'Desk Lamp', description: 'Modern LED lighting', price: 39.99 },
  { id: 7, name: 'Phone Case', description: 'Ultimate protection', price: 24.99 },
  { id: 8, name: 'Yoga Mat', description: 'Non-slip exercise mat', price: 34.99 },
  { id: 9, name: 'Water Bottle', description: 'Insulated stainless steel', price: 29.99 }
])
</script>

<template>
  <section class="py-16">
    <div class="container mx-auto px-4">
      <div class="flex flex-col lg:flex-row gap-8">
        <!-- Filters Sidebar -->
        <div class="lg:w-1/4">
          <div class="bg-white rounded-lg shadow-md p-6">
            <h3 class="text-lg font-semibold mb-4">Filters</h3>

            <!-- Category Filter -->
            <div class="mb-6">
              <h4 class="font-medium mb-2">Category</h4>
              <div class="space-y-2">
                <label class="flex items-center">
                  <input type="checkbox" class="mr-2" />
                  <span class="text-sm">Fashion</span>
                </label>
                <label class="flex items-center">
                  <input type="checkbox" class="mr-2" />
                  <span class="text-sm">Electronics</span>
                </label>
                <label class="flex items-center">
                  <input type="checkbox" class="mr-2" />
                  <span class="text-sm">Home & Garden</span>
                </label>
              </div>
            </div>

            <!-- Price Range -->
            <div class="mb-6">
              <h4 class="font-medium mb-2">Price Range</h4>
              <div class="space-y-2">
                <label class="flex items-center">
                  <input type="radio" name="price" class="mr-2" />
                  <span class="text-sm">Under $25</span>
                </label>
                <label class="flex items-center">
                  <input type="radio" name="price" class="mr-2" />
                  <span class="text-sm">$25 - $50</span>
                </label>
                <label class="flex items-center">
                  <input type="radio" name="price" class="mr-2" />
                  <span class="text-sm">$50 - $100</span>
                </label>
                <label class="flex items-center">
                  <input type="radio" name="price" class="mr-2" />
                  <span class="text-sm">Over $100</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <!-- Products Grid -->
        <div class="lg:w-3/4">
          <div class="flex justify-between items-center mb-6">
            <h1 class="text-2xl font-bold">All Products</h1>
            <select class="border rounded-lg px-3 py-2">
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
            </select>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              v-for="product in allProducts"
              :key="product.id"
              class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div
                class="h-48 bg-gradient-to-br from-gray-200 to-gray-300"
              ></div>
              <div class="p-4">
                <h3 class="font-semibold mb-2">{{ product.name }}</h3>
                <p class="text-gray-600 text-sm mb-2">
                  {{ product.description }}
                </p>
                <div class="flex items-center justify-between">
                  <span class="text-lg font-bold text-blue-600"
                    >${{ product.price }}</span
                  >
                  <button
                    class="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
