<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-4xl md:text-6xl font-bold mb-6">
              Discover Amazing Products
            </h2>
            <p class="text-xl mb-8 text-blue-100">
              Shop the latest trends with unbeatable prices and fast delivery. Your satisfaction is our priority.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <button class="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Shop Now
              </button>
              <button class="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Learn More
              </button>
            </div>
          </div>
          <div class="relative">
            <div class="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-8">
              <div class="text-center">
                <div class="w-32 h-32 bg-white bg-opacity-30 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <h3 class="text-2xl font-bold mb-2">Free Shipping</h3>
                <p class="text-blue-100">On orders over $50</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Categories Section -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Shop by Category</h2>
          <p class="text-gray-600 text-lg">Explore our wide range of product categories</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div 
            v-for="category in categories" 
            :key="category.id"
            class="group cursor-pointer"
            @click="selectCategory(category.id)"
          >
            <div class="bg-gray-100 rounded-2xl p-8 text-center group-hover:bg-blue-50 transition-colors">
              <div class="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-blue-700 transition-colors">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="category.icon" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ category.name }}</h3>
              <p class="text-gray-600">{{ category.count }} items</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Products -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
          <p class="text-gray-600 text-lg">Handpicked items just for you</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <div 
            v-for="product in featuredProducts" 
            :key="product.id"
            class="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow"
          >
            <div class="relative overflow-hidden">
              <img 
                :src="product.image" 
                :alt="product.name"
                class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div class="absolute top-4 left-4">
                <span v-if="product.isNew" class="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  New
                </span>
                <span v-if="product.discount" class="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold ml-2">
                  -{{ product.discount }}%
                </span>
              </div>
              <button class="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors">
                <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>
            
            <div class="p-6">
              <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ product.name }}</h3>
              <p class="text-gray-600 text-sm mb-4">{{ product.description }}</p>
              
              <div class="flex items-center mb-4">
                <div class="flex items-center">
                  <span v-for="star in 5" :key="star" class="text-yellow-400">
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </span>
                </div>
                <span class="text-sm text-gray-500 ml-2">({{ product.reviews }})</span>
              </div>

              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-2">
                  <span class="text-2xl font-bold text-gray-900">${{ product.price }}</span>
                  <span v-if="product.originalPrice" class="text-lg text-gray-500 line-through">
                    ${{ product.originalPrice }}
                  </span>
                </div>
                <button 
                  @click="addToCart(product.id)"
                  class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0L17 18m0 0v2a2 2 0 01-2 2H9a2 2 0 01-2-2v-2m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v9.03" />
                  </svg>
                  <span>Add</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter Section -->
    <section class="py-16 bg-blue-600">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Stay Updated</h2>
          <p class="text-blue-100 text-lg mb-8">Subscribe to our newsletter for exclusive deals and updates</p>
          
          <div class="max-w-md mx-auto">
            <div class="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                v-model="newsletter.email"
                class="flex-1 px-4 py-3 rounded-lg border border-blue-500 focus:ring-2 focus:ring-blue-300 focus:border-transparent"
              />
              <button 
                @click="subscribeNewsletter"
                class="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

// Types
interface Product {
  id: number
  name: string
  description: string
  price: number
  originalPrice?: number
  image: string
  isNew?: boolean
  discount?: number
  reviews: number
}

interface Category {
  id: number
  name: string
  count: number
  icon: string
}


const cartCount = ref(3)

const newsletter = reactive({
  email: ''
})

// Categories data
const categories = ref<Category[]>([
  {
    id: 1,
    name: 'Electronics',
    count: 245,
    icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z'
  },
  {
    id: 2,
    name: 'Fashion',
    count: 189,
    icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4z'
  },
  {
    id: 3,
    name: 'Home & Garden',
    count: 156,
    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m0 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
  },
  {
    id: 4,
    name: 'Sports',
    count: 98,
    icon: 'M8 13v-1m4 1v-3m4 3V8M8 21l4-7 4 7M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z'
  }
])

// Featured products data
const featuredProducts = ref<Product[]>([
  {
    id: 1,
    name: 'Wireless Headphones',
    description: 'Premium noise-cancelling headphones with 30-hour battery life',
    price: 199.99,
    originalPrice: 249.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
    isNew: true,
    discount: 20,
    reviews: 156
  },
  {
    id: 2,
    name: 'Smart Watch',
    description: 'Advanced fitness tracking with heart rate monitoring',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop',
    isNew: true,
    reviews: 89
  },
  {
    id: 3,
    name: 'Laptop Backpack',
    description: 'Waterproof laptop backpack with USB charging port',
    price: 79.99,
    originalPrice: 99.99,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop',
    discount: 20,
    reviews: 234
  },
  {
    id: 4,
    name: 'Bluetooth Speaker',
    description: 'Portable speaker with 360° sound and waterproof design',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop',
    reviews: 167
  },
  {
    id: 5,
    name: 'Fitness Tracker',
    description: 'Ultra-thin fitness tracker with sleep monitoring',
    price: 129.99,
    originalPrice: 159.99,
    image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&h=300&fit=crop',
    discount: 19,
    reviews: 203
  },
  {
    id: 6,
    name: 'Wireless Charger',
    description: 'Fast wireless charging pad compatible with all devices',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop',
    isNew: true,
    reviews: 78
  },
  {
    id: 7,
    name: 'Gaming Mouse',
    description: 'High-precision gaming mouse with RGB lighting',
    price: 69.99,
    originalPrice: 89.99,
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=300&fit=crop',
    discount: 22,
    reviews: 145
  },
  {
    id: 8,
    name: 'Phone Case',
    description: 'Protective phone case with built-in card holder',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&h=300&fit=crop',
    reviews: 312
  }
])

// Methods
const selectCategory = (categoryId: number) => {
  console.log('Selected category:', categoryId)
  // Navigate to category page
}

const addToCart = (productId: number) => {
  console.log('Added to cart:', productId)
  cartCount.value++
}

const subscribeNewsletter = () => {
  if (newsletter.email) {
    console.log('Subscribed:', newsletter.email)
    newsletter.email = ''
    alert('Thank you for subscribing!')
  }
}
</script>
