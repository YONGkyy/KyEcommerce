<template>
  <div class="min-h-screen bg-base-100">
    <!-- Hero Section -->
    <section
      class="hero min-h-96 bg-gradient-to-br from-primary/10 to-secondary/10"
    >
      <div class="hero-content text-center">
        <div class="max-w-4xl">
           <div class="mb-8">
            <h1 class="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-pulse">
                 About KYStore
            </h1>
            <div class="w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6"></div>
          </div>
        
                    <p class="text-xl md:text-2xl text-base-content/80 max-w-4xl mx-auto leading-relaxed font-light">

            Your trusted partner in bringing quality products to your doorstep.
            We're passionate about creating exceptional shopping experiences
            with unbeatable prices and outstanding customer service.
          </p>
          <div class="mt-8">
            <div class="stats stats-vertical lg:stats-horizontal shadow-lg">
              <div class="stat">
                <div class="stat-figure text-primary">
                 <CircleAlert class="h-8 w-8 text-primary" />
                </div>
                <div class="stat-title">Years of Service</div>
                <div class="stat-value text-primary">5+</div>
              </div>
              <div class="stat">
                <div class="stat-figure text-secondary">
                <SmilePlus class="h-8 w-8 text-secondary" />
                </div>
                <div class="stat-title">Happy Customers</div>
                <div class="stat-value text-secondary">50K+</div>
              </div>
              <div class="stat">
                <div class="stat-figure text-accent">
                 <Archive class="h-8 w-8 text-accent" />
                </div>
                <div class="stat-title">Products</div>
                <div class="stat-value text-accent">10K+</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>



    <!-- Story Section -->
    <section class="py-20 bg-base-200">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="order-2 lg:order-1">
            <div class="badge badge-primary badge-lg mb-4">Our Journey</div>
            <h2 class="text-4xl font-bold mb-6">The KYStore Story</h2>
            <div class="prose prose-lg max-w-none">
              <p class="text-base-content/80 mb-4">
                Founded in 2025, KYStore began as a vision to revolutionize
                online shopping in Cambodia. What started as a small startup
                with big dreams has evolved into one of the most trusted
                e-commerce platforms in the region.
              </p>
              <p class="text-base-content/80 mb-4">
                We believe that everyone deserves access to quality products at
                fair prices, backed by exceptional customer service. Our
                commitment to innovation and customer satisfaction has helped us
                build lasting relationships with thousands of happy customers.
              </p>
              <p class="text-base-content/80">
                Today, KYStore proudly serves customers across Cambodia and
                beyond, offering everything from electronics and fashion to home
                essentials and beauty products – all curated with care and
                delivered with love.
              </p>
            </div>
            <div class="mt-8">
              <NuxtLink to="/products" class="btn btn-primary btn-lg">
                Explore Our Products
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </NuxtLink>
            </div>
          </div>
          <div class="order-1 lg:order-2">
            <div
              class="card bg-gradient-to-br from-primary/20 to-secondary/20 shadow-2xl"
            >
              <div class="card-body h-96 flex items-center justify-center">
                <div class="text-center">
                  <div
                    class="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-16 w-16 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>
                  </div>
                  <h3 class="text-2xl font-bold">KYStore</h3>
                  <p class="text-base-content/60">Your Shopping Destination</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="py-20 bg-base-100">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <div class="badge badge-secondary badge-lg mb-4">Our Values</div>
          <h2 class="text-4xl font-bold mb-6">What We Stand For</h2>
          <p class="text-xl text-base-content/70 max-w-2xl mx-auto">
            These core principles guide everything we do at KYStore
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            class="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            <div class="card-body text-center">
              <div
                class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"
              >
              <CheckCircle class="h-8 w-8 text-primary" />
              </div>
              <h3 class="card-title justify-center text-lg">Quality First</h3>
              <p class="text-base-content/70">
                Every product is carefully selected and tested to ensure it
                meets our high standards of excellence.
              </p>
            </div>
          </div>

          <div
            class="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            <div class="card-body text-center">
              <div
                class="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4"
              >
              <CircleDollarSign class="h-8 w-8 text-secondary" />
               
              </div>
              <h3 class="card-title justify-center text-lg">Fair Pricing</h3>
              <p class="text-base-content/70">
                We believe great products shouldn't break the bank. Honest
                pricing for everyone, always.
              </p>
            </div>
          </div>

          <div
            class="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            <div class="card-body text-center">
              <div
                class="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4"
              >
              <Heart class="h-8 w-8 text-accent" />
               
              </div>
              <h3 class="card-title justify-center text-lg">Customer Love</h3>
              <p class="text-base-content/70">
                Your satisfaction is our top priority. We're here to help every
                step of your shopping journey.
              </p>
            </div>
          </div>

          <div
            class="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            <div class="card-body text-center">
              <div
                class="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <Zap class="h-8 w-8 text-success" />
              </div>
              <h3 class="card-title justify-center text-lg">Fast Delivery</h3>
              <p class="text-base-content/70">
                Quick and reliable shipping to get your favorite products to you
                as soon as possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="py-20 bg-base-200">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <div class="badge badge-accent badge-lg mb-4">Our Team</div>
          <h2 class="text-4xl font-bold mb-6">Meet the KYStore Family</h2>
          <p class="text-xl text-base-content/70 max-w-2xl mx-auto">
            The passionate people behind your amazing shopping experience
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <div class="card-body text-center">
              <div class="avatar mb-4">
                <div
                  class="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center mx-auto"
                >
                  <span class="text-2xl font-bold text-white">KY</span>
                </div>
              </div>
              <h3 class="card-title justify-center text-xl">Kimheng Yun</h3>
              <div class="badge badge-primary badge-sm mb-2">Founder & CEO</div>
              <p class="text-base-content/70 text-sm">
                Visionary leader passionate about revolutionizing e-commerce in
                Cambodia and creating exceptional shopping experiences.
              </p>
           <div class="card-actions justify-center mt-6">
                <div class="flex flex-wrap justify-center gap-3">
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    class="btn btn-circle btn-sm btn-ghost hover:bg-primary hover:text-white transition"
                  >
                    <Twitter class="h-4 w-4 text-primary" />
                  </a>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    class="btn btn-circle btn-sm btn-ghost hover:bg-primary hover:text-white transition"
                  >
                    <Linkedin class="h-4 w-4 text-primary" />
                  </a>
                  <a
                    href="https://facebook.com/"
                    target="_blank"
                    class="btn btn-circle btn-sm btn-ghost hover:bg-primary hover:text-white transition"
                  >
                    <Facebook class="h-4 w-4 text-primary" />
                  </a>
                  <a
                    href="https://instagram.com/"
                    target="_blank"
                    class="btn btn-circle btn-sm btn-ghost hover:bg-primary hover:text-white transition"
                  >
                    <Instagram class="h-4 w-4 text-primary" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <div class="card-body text-center">
              <div class="avatar mb-4">
                <div
                  class="w-24 h-24 rounded-full bg-gradient-to-br from-secondary to-secondary/60 flex items-center justify-center mx-auto"
                >
                  <span class="text-2xl font-bold text-white">SV</span>
                </div>
              </div>
              <h3 class="card-title justify-center text-xl">Sopheavy Kem</h3>
              <div class="badge badge-secondary badge-sm mb-2">
                Head of Operations
              </div>
              <p class="text-base-content/70 text-sm">
                Operations expert ensuring smooth processes and timely delivery
                of products to our valued customers.
              </p>
               <div class="card-actions justify-center mt-6">
                <div class="flex flex-wrap justify-center gap-3">
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    class="btn btn-circle btn-sm btn-ghost hover:bg-primary hover:text-white transition"
                  >
                    <Twitter class="h-4 w-4 text-primary" />
                  </a>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    class="btn btn-circle btn-sm btn-ghost hover:bg-primary hover:text-white transition"
                  >
                    <Linkedin class="h-4 w-4 text-primary" />
                  </a>
                  <a
                    href="https://facebook.com/"
                    target="_blank"
                    class="btn btn-circle btn-sm btn-ghost hover:bg-primary hover:text-white transition"
                  >
                    <Facebook class="h-4 w-4 text-primary" />
                  </a>
                  <a
                    href="https://instagram.com/"
                    target="_blank"
                    class="btn btn-circle btn-sm btn-ghost hover:bg-primary hover:text-white transition"
                  >
                    <Instagram class="h-4 w-4 text-primary" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <div class="card-body text-center">
              <div class="avatar mb-4">
                <div
                  class="w-24 h-24 rounded-full bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center mx-auto"
                >
                  <span class="text-2xl font-bold text-white">CH</span>
                </div>
              </div>
              <h3 class="card-title justify-center text-xl">Chanmony Lim</h3>
              <div class="badge badge-accent badge-sm mb-2">
                Customer Success
              </div>
              <p class="text-base-content/70 text-sm">
                Customer success specialist dedicated to ensuring every customer
                has an exceptional shopping experience with us.
              </p>
              <div class="card-actions justify-center mt-6">
                <div class="flex flex-wrap justify-center gap-3">
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    class="btn btn-circle btn-sm btn-ghost hover:bg-primary hover:text-white transition"
                  >
                    <Twitter class="h-4 w-4 text-primary" />
                  </a>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    class="btn btn-circle btn-sm btn-ghost hover:bg-primary hover:text-white transition"
                  >
                    <Linkedin class="h-4 w-4 text-primary" />
                  </a>
                  <a
                    href="https://facebook.com/"
                    target="_blank"
                    class="btn btn-circle btn-sm btn-ghost hover:bg-primary hover:text-white transition"
                  >
                    <Facebook class="h-4 w-4 text-primary" />
                  </a>
                  <a
                    href="https://instagram.com/"
                    target="_blank"
                    class="btn btn-circle btn-sm btn-ghost hover:bg-primary hover:text-white transition"
                  >
                    <Instagram class="h-4 w-4 text-primary" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-br from-primary to-secondary">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-4xl font-bold text-white mb-6">
          Ready to Experience KYStore?
        </h2>
        <p class="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Join thousands of satisfied customers who trust us for their shopping
          needs. Start your journey with us today!
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/product" class="btn btn-white btn-lg">
            Shop Now
            <ShoppingBag class="h-5 w-5 ml-2" />
          </NuxtLink>
          <NuxtLink to="/contact-us" class="btn btn-outline btn-white btn-lg">
            Contact Us
            <MessageCircleMore class="h-5 w-5 ml-2" />
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
  import {
    Archive,
    Check,
    CheckCircle,
    CircleAlert,
    CircleDollarSign,
    Currency,
    DollarSign,
    Facebook,
    Heart,
    Instagram,
    Linkedin,
    MessageCircleMore,
    ShoppingBag,
    SmilePlus,
    Sticker,
    Twitter,
    Zap,
  } from "lucide-vue-next";

  // SEO Meta
  useHead({
    title: "About Us - KYStore | Your Trusted Online Shopping Partner",
    meta: [
      {
        name: "description",
        content:
          "Learn about KYStore - Cambodia's trusted e-commerce platform. Discover our story, values, and the passionate team behind your exceptional shopping experience.",
      },
      {
        name: "keywords",
        content:
          "KYStore, about us, Cambodia ecommerce, online shopping, company story, our values, team",
      },
    ],
  });
</script>
