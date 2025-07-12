<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Animated Hero Slideshow Section -->
    <section class="relative h-screen overflow-hidden">
      <!-- Slideshow Container -->
      <div class="relative h-full">
        <!-- Slides -->
        <div 
          v-for="(slide, index) in heroSlides" 
          :key="slide.id"
          class="absolute inset-0 transition-all duration-1000 ease-in-out"
          :class="[
            currentSlide === index 
              ? 'opacity-100 translate-x-0' 
              : index < currentSlide 
                ? 'opacity-0 -translate-x-full' 
                : 'opacity-0 translate-x-full'
          ]"
        >
          <!-- Background Image with Overlay -->
          <div class="absolute inset-0">
            <img 
              :src="slide.image" 
              :alt="slide.title"
              class="w-full h-full object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
          </div>

          <!-- Slide Content -->
          <div class="relative z-10 h-full flex items-center">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div class="max-w-2xl">
                <!-- Animated Content -->
                <div 
                  class="transform transition-all duration-1000 delay-300"
                  :class="currentSlide === index ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'"
                >
                  <h1 class="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                    {{ slide.title }}
                  </h1>
                  <p class="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                    {{ slide.subtitle }}
                  </p>
                  <div class="flex flex-col sm:flex-row gap-4">
                    <button 
                      class="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                      @click="scrollToProducts"
                    >
                      {{ slide.ctaText }}
                    </button>
                    <button class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Navigation Dots -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div class="flex space-x-3">
          <button
            v-for="(slide, index) in heroSlides"
            :key="index"
            @click="goToSlide(index)"
            class="w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-125"
            :class="currentSlide === index ? 'bg-white' : 'bg-white/50'"
          ></button>
        </div>
      </div>

      <!-- Navigation Arrows -->
      <button
        @click="previousSlide"
        class="absolute left-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 group"
      >
        <svg class="w-6 h-6 transform group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        @click="nextSlide"
        class="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 group"
      >
        <svg class="w-6 h-6 transform group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div class="text-white text-center">
          <svg class="w-6 h-6 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
          <span class="text-sm">Scroll</span>
        </div>
      </div>
    </section>

    <!-- Floating Stats -->
    <section class="relative -mt-32 z-30 mb-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            v-for="(stat, index) in stats" 
            :key="index"
            class="bg-white rounded-2xl p-8 shadow-xl transform hover:scale-105 transition-all duration-300 text-center"
          >
            <div class="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="stat.icon" />
              </svg>
            </div>
            <h3 class="text-3xl font-bold text-gray-900 mb-2">{{ stat.number }}</h3>
            <p class="text-gray-600">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Categories Section -->
    <section class="py-16 bg-white" id="categories">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Shop by Category</h2>
          <p class="text-gray-600 text-xl max-w-2xl mx-auto">Explore our wide range of product categories designed for every lifestyle</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div 
            v-for="(category, index) in categories" 
            :key="category.id"
            class="group cursor-pointer transform hover:scale-105 transition-all duration-300"
            :style="`animation-delay: ${index * 100}ms`"
            @click="selectCategory(category.id)"
          >
            <div class="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 text-center group-hover:from-blue-50 group-hover:to-purple-50 transition-all duration-300 shadow-lg group-hover:shadow-xl">
              <div class="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:from-blue-600 group-hover:to-purple-700 transition-all duration-300 transform group-hover:rotate-12">
                <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="category.icon" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{{ category.name }}</h3>
              <p class="text-gray-600 group-hover:text-blue-500 transition-colors">{{ category.count }} items</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Products -->
    <section class="py-16 bg-gray-50" id="products">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Featured Products</h2>
          <p class="text-gray-600 text-xl max-w-2xl mx-auto">Handpicked items just for you with unbeatable quality and prices</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <div 
            v-for="(product, index) in featuredProducts" 
            :key="product.id"
            class="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            :style="`animation-delay: ${index * 100}ms`"
          >
            <div class="relative overflow-hidden">
              <img 
                :src="product.image" 
                :alt="product.name"
                class="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div class="absolute top-4 left-4 flex gap-2">
                <span v-if="product.isNew" class="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  New
                </span>
                <span v-if="product.discount" class="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  -{{ product.discount }}%
                </span>
              </div>
              <button class="absolute top-4 right-4 p-3 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-110">
                <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>
            
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-2">{{ product.name }}</h3>
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
                  class="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 shadow-lg"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    <section class="py-16 bg-gradient-to-r from-blue-600 to-purple-700">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">Stay Updated</h2>
          <p class="text-blue-100 text-xl mb-12 max-w-2xl mx-auto">Subscribe to our newsletter for exclusive deals, early access to sales, and the latest product updates</p>
          
          <div class="max-w-md mx-auto">
            <div class="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                v-model="newsletter.email"
                class="flex-1 px-6 py-4 rounded-lg border-0 focus:ring-4 focus:ring-blue-300 focus:outline-none text-gray-900 placeholder-gray-500"
              />
              <button 
                @click="subscribeNewsletter"
                class="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
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
import { ref, reactive, onMounted, onUnmounted } from 'vue'

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

interface HeroSlide {
  id: number
  title: string
  subtitle: string
  ctaText: string
  image: string
}

interface Stat {
  number: string
  label: string
  icon: string
}

// Reactive data
const cartCount = ref(3)
const currentSlide = ref(0)
const slideInterval = ref<NodeJS.Timeout | null>(null)

const newsletter = reactive({
  email: ''
})

// Hero slides data
const heroSlides = ref<HeroSlide[]>([
  {
    id: 1,
    title: 'Discover Amazing Products',
    subtitle: 'Shop the latest trends with unbeatable prices and fast delivery. Your satisfaction is our priority.',
    ctaText: 'Shop Now',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&h=1080&fit=crop'
  },
  {
    id: 2,
    title: 'Premium Electronics',
    subtitle: 'Experience cutting-edge technology with our premium collection of electronics and gadgets.',
    ctaText: 'Explore Tech',
    image: 'https://www.boydcorp.com/wp-content/uploads/Industries/Consumer-Electronics/Consumer-Electronics-1920x656-1.jpg'
  },
  {
    id: 3,
    title: 'Fashion Forward',
    subtitle: 'Stay ahead of the trends with our curated collection of fashion and lifestyle products.',
    ctaText: 'Shop Fashion',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=1920&h=1080&fit=crop'
  }
])

// Stats data
const stats = ref<Stat[]>([
  {
    number: '50K+',
    label: 'Happy Customers',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
  },
  {
    number: '24/7',
    label: 'Customer Support',
    icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25A9.75 9.75 0 1 0 21.75 12c0-1.052-.17-2.062-.487-3.011.016-.227.013-.442.013-.489z'
  },
  {
    number: '99%',
    label: 'Satisfaction Rate',
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
  }
])

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

// Slideshow methods
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % heroSlides.value.length
}

const previousSlide = () => {
  currentSlide.value = currentSlide.value === 0 ? heroSlides.value.length - 1 : currentSlide.value - 1
}

const goToSlide = (index: number) => {
  currentSlide.value = index
}

const startSlideshow = () => {
  slideInterval.value = setInterval(nextSlide, 5000)
}

const stopSlideshow = () => {
  if (slideInterval.value) {
    clearInterval(slideInterval.value)
    slideInterval.value = null
  }
}

// Other methods
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

const scrollToProducts = () => {
  const productsSection = document.getElementById('products')
  if (productsSection) {
    productsSection.scrollIntoView({ behavior: 'smooth' })
  }
}

// Lifecycle hooks
onMounted(() => {
  startSlideshow()
})

onUnmounted(() => {
  stopSlideshow()
})
</script>

<style scoped>
/* Custom animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Loading animation for images */
img {
  transition: opacity 0.3s ease;
}

img:not([src]) {
  opacity: 0;
}
</style>