<script setup lang="ts">
  import { NuxtLink } from "#components";
  import { SquareArrowOutUpRight } from "lucide-vue-next";
</script>

<template>
  <!-- Footer -->
  <footer class="bg-gray-900 text-white py-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Company Info -->
        <div>
          <h3 class="text-xl font-bold mb-4">KYStore</h3>
          <p class="text-gray-400 mb-4">
            Your trusted online marketplace for quality products at unbeatable
            prices.
          </p>
          <div class="flex space-x-4">
            <button class="text-gray-400 hover:text-white transition-colors">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                />
              </svg>
            </button>
            <button class="text-gray-400 hover:text-white transition-colors">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"
                />
              </svg>
            </button>
            <button class="text-gray-400 hover:text-white transition-colors">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"
                />
              </svg>
            </button>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
          <ul class="space-y-2">
            <li>
              <NuxtLink
                to="/"
                class="text-gray-400 hover:text-white transition-colors"
              >
                Home
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/product"
                class="text-gray-400 hover:text-white transition-colors"
              >
                Products
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/about-us"
                class="text-gray-400 hover:text-white transition-colors"
              >
                About Us
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/contact-us"
                class="text-gray-400 hover:text-white transition-colors"
                >Contact</NuxtLink
              >
            </li>
          </ul>
        </div>

        <!-- Customer Service -->
        <div>
          <h4 class="text-lg font-semibold mb-4">Customer Service</h4>
          <ul class="space-y-2">
            <li>
              <a
                href="#"
                class="text-gray-400 hover:text-white transition-colors"
                >Help Center</a
              >
            </li>
            <li>
              <a
                href="#"
                class="text-gray-400 hover:text-white transition-colors"
                >Shipping Info</a
              >
            </li>
            <li>
              <a
                href="#"
                class="text-gray-400 hover:text-white transition-colors"
                >Returns</a
              >
            </li>
            <li>
              <a
                href="#"
                class="text-gray-400 hover:text-white transition-colors"
                >Size Guide</a
              >
            </li>
          </ul>
        </div>

        <!-- Maps -->
        <div>
          <h2 class="text-lg font-semibold mb-4">Find Our Store</h2>

          <!-- Map with hover-reveal button -->
          <div class="relative group rounded-xl overflow-hidden shadow-lg mb-4">
            <!-- Embedded Map -->
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11055.014913125777!2d104.93304273287254!3d11.584940632868319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310953fd9f9a51e9%3A0xc26eafcd2ed5ca29!2sNorton%20University!5e0!3m2!1sen!2skh!4v1752554793775!5m2!1sen!2skh"
              class="w-full h-44"
              style="border: 0"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>

            <!-- Button appears on hover -->
            <div
              class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center"
            >
              <a
                href="https://www.google.com/maps/place/Norton+University/@11.58494,104.93304,15z"
                target="_blank"
                class="btn btn-primary gap-2 shadow-lg"
              >
                <SquareArrowOutUpRight class="w-4 h-4" />
                Open in Maps
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Footer -->
      <div
        class="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
      >
        <p class="text-gray-400 text-sm">
          © 2024 ShopVue. All rights reserved.
        </p>
        <div class="flex space-x-6 mt-4 md:mt-0">
          <a
            href="#"
            class="text-gray-400 hover:text-white text-sm transition-colors"
            >Privacy Policy</a
          >
          <a
            href="#"
            class="text-gray-400 hover:text-white text-sm transition-colors"
            >Terms of Service</a
          >
          <a
            href="#"
            class="text-gray-400 hover:text-white text-sm transition-colors"
            >Cookie Policy</a
          >
        </div>
      </div>
    </div>
  </footer>
</template>
