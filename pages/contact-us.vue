<template>
  <div class="min-h-screen bg-base-100">
    <!-- Hero Section -->
    <section
      class="hero min-h-full bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 relative overflow-hidden"
    >
      <div class="absolute inset-0 bg-grid-white/[0.02] bg-grid-16"></div>
      <div class="hero-content text-center relative z-10">
        <div class="max-w-5xl">
          <div class="mb-8">
            <h1
              class="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-pulse"
            >
              Contact KYStore
            </h1>
            <div
              class="w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6"
            ></div>
          </div>
          <p
            class="text-xl md:text-2xl text-base-content/80 max-w-4xl mx-auto leading-relaxed font-light"
          >
            We're here to help you find exactly what you need. Get in touch with
            our dedicated team for personalized support, product inquiries, or
            just to say hello!
          </p>
          <div class="flex flex-wrap justify-center gap-4 mt-8">
            <div class="badge badge-primary badge-lg">24/7 Support</div>
            <div class="badge badge-secondary badge-lg">Fast Response</div>
            <div class="badge badge-accent badge-lg">Expert Team</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Content Section -->
    <section class="py-24 bg-base-100">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 xl:grid-cols-3 gap-12">
          <!-- Contact Form -->
          <div class="xl:col-span-2 order-2 xl:order-1">
            <div
              class="card bg-base-200/50 shadow-2xl border border-base-300/50 backdrop-blur-sm"
            >
              <div class="card-body p-8">
                <div class="flex items-center gap-4 mb-8">
                  <div
                    class="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h2 class="text-3xl font-bold">Let's Talk</h2>
                    <p class="text-base-content/60">
                      Send us a message and we'll respond promptly
                    </p>
                  </div>
                </div>

                <form @submit.prevent="submitForm" class="space-y-6">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="form-control">
                      <label class="label">
                        <span class="label-text font-semibold text-base"
                          >First Name *</span
                        >
                      </label>
                      <input
                        v-model="form.firstName"
                        type="text"
                        placeholder="John"
                        class="input input-bordered input-primary w-full focus:input-primary transition-all duration-200"
                        required
                      />
                    </div>
                    <div class="form-control">
                      <label class="label">
                        <span class="label-text font-semibold text-base"
                          >Last Name *</span
                        >
                      </label>
                      <input
                        v-model="form.lastName"
                        type="text"
                        placeholder="Doe"
                        class="input input-bordered input-primary w-full focus:input-primary transition-all duration-200"
                        required
                      />
                    </div>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="form-control">
                      <label class="label">
                        <span class="label-text font-semibold text-base"
                          >Email Address *</span
                        >
                      </label>
                      <input
                        v-model="form.email"
                        type="email"
                        placeholder="john@example.com"
                        class="input input-bordered input-primary w-full focus:input-primary transition-all duration-200"
                        required
                      />
                    </div>
                    <div class="form-control">
                      <label class="label">
                        <span class="label-text font-semibold text-base"
                          >Phone Number</span
                        >
                      </label>
                      <input
                        v-model="form.phone"
                        type="tel"
                        placeholder="+855 12 345 678"
                        class="input input-bordered input-primary w-full focus:input-primary transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div class="form-control">
                    <label class="label">
                      <span class="label-text font-semibold text-base"
                        >What can we help you with? *</span
                      >
                    </label>
                    <select
                      v-model="form.subject"
                      class="select select-bordered select-primary w-full focus:select-primary transition-all duration-200"
                      required
                    >
                      <option value="">Choose a topic...</option>
                      <option value="general">General Questions</option>
                      <option value="order">Order Support</option>
                      <option value="return">Returns & Exchanges</option>
                      <option value="payment">Payment Help</option>
                      <option value="shipping">Shipping Inquiries</option>
                      <option value="product">Product Information</option>
                      <option value="partnership">Business Partnership</option>
                      <option value="feedback">Feedback & Suggestions</option>
                      <option value="technical">Technical Support</option>
                      <option value="other">Something Else</option>
                    </select>
                  </div>

                  <div class="form-control">
                    <label class="label">
                      <span class="label-text font-semibold text-base"
                        >Your Message *</span
                      >
                    </label>
                    <textarea
                      v-model="form.message"
                      class="textarea textarea-bordered textarea-primary h-40 w-full focus:textarea-primary transition-all duration-200 resize-none"
                      placeholder="Tell us more about how we can help you. The more details you provide, the better we can assist you!"
                      required
                    ></textarea>
                  </div>

                  <div class="form-control">
                    <label class="cursor-pointer label justify-start gap-4">
                      <input
                        v-model="form.newsletter"
                        type="checkbox"
                        class="checkbox checkbox-primary checkbox-lg"
                      />
                      <span class="label-text"
                        >I'd like to receive updates about new products,
                        promotions, and exclusive offers from KYStore</span
                      >
                    </label>
                  </div>

                  <div class="form-control mt-8">
                    <button
                      type="submit"
                      class="btn btn-primary btn-lg w-full gap-3 shadow-lg hover:shadow-xl transition-all duration-200"
                      :class="{ loading: isSubmitting }"
                      :disabled="isSubmitting"
                    >
                      <span
                        v-if="!isSubmitting"
                        class="flex items-center gap-2"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                          />
                        </svg>
                        Send Message
                      </span>
                      <span v-else>Sending your message...</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <!-- Contact Information & Quick Actions -->
          <div class="order-1 xl:order-2">
            <div class="space-y-6">
              <!-- Get in Touch Header -->
              <div class="text-center xl:text-left">
                <h2 class="text-4xl font-bold mb-4">Get in Touch</h2>
                <p class="text-base-content/70 text-lg leading-relaxed">
                  Ready to enhance your shopping experience? We're here to make
                  it happen.
                </p>
              </div>

              <!-- Contact Methods -->
              <div class="space-y-4">
                <!-- Store Location -->
                <div
                  class="card bg-gradient-to-br from-primary/10 to-primary/5 shadow-xl border border-primary/20 hover:shadow-2xl transition-all duration-300"
                >
                  <div class="card-body p-6">
                    <div class="flex items-start gap-4">
                      <div
                        class="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center flex-shrink-0"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-7 w-7 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 class="font-bold text-xl mb-2">Visit Our Store</h3>
                        <p class="text-base-content/70 leading-relaxed">
                          Street 123, Sangkat Tonle Bassac<br />
                          Khan Chamkar Mon<br />
                          Phnom Penh, Cambodia
                        </p>
                        <div class="mt-3">
                          <span class="badge badge-primary badge-outline"
                            >Open Daily</span
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Phone Support -->
                <div
                  class="card bg-gradient-to-br from-secondary/10 to-secondary/5 shadow-xl border border-secondary/20 hover:shadow-2xl transition-all duration-300"
                >
                  <div class="card-body p-6">
                    <div class="flex items-start gap-4">
                      <div
                        class="w-14 h-14 bg-secondary/20 rounded-2xl flex items-center justify-center flex-shrink-0"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-7 w-7 text-secondary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 class="font-bold text-xl mb-2">Call Us</h3>
                        <div class="space-y-1">
                          <p class="text-base-content/70">
                            <a
                              href="tel:+85512345678"
                              class="hover:text-secondary transition-colors font-medium"
                            >
                              +855 12 345 678
                            </a>
                          </p>
                          <p class="text-base-content/70">
                            <a
                              href="tel:+85523456789"
                              class="hover:text-secondary transition-colors font-medium"
                            >
                              +855 23 456 789
                            </a>
                          </p>
                        </div>
                        <div class="mt-3 space-y-1">
                          <p class="text-sm text-base-content/60">
                            <span class="font-semibold">Mon - Fri:</span> 8:00
                            AM - 6:00 PM
                          </p>
                          <p class="text-sm text-base-content/60">
                            <span class="font-semibold">Weekends:</span> 9:00 AM
                            - 5:00 PM
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Email Support -->
                <div
                  class="card bg-gradient-to-br from-accent/10 to-accent/5 shadow-xl border border-accent/20 hover:shadow-2xl transition-all duration-300"
                >
                  <div class="card-body p-6">
                    <div class="flex items-start gap-4">
                      <div
                        class="w-14 h-14 bg-accent/20 rounded-2xl flex items-center justify-center flex-shrink-0"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-7 w-7 text-accent"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 class="font-bold text-xl mb-2">Email Us</h3>
                        <div class="space-y-1">
                          <p class="text-base-content/70">
                            <a
                              href="mailto:hello@kystore.com"
                              class="hover:text-accent transition-colors font-medium"
                            >
                              hello@kystore.com
                            </a>
                          </p>
                          <p class="text-base-content/70">
                            <a
                              href="mailto:support@kystore.com"
                              class="hover:text-accent transition-colors font-medium"
                            >
                              support@kystore.com
                            </a>
                          </p>
                        </div>
                        <div class="mt-3">
                          <span class="badge badge-accent badge-outline"
                            >< 24h Response</span
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Social Media -->
              <div
                class="card bg-gradient-to-br from-info/10 to-info/5 shadow-xl border border-info/20"
              >
                <div class="card-body p-6">
                  <h3 class="font-bold text-xl mb-4">Follow Our Journey</h3>
                  <p class="text-base-content/70 mb-4">
                    Stay connected for the latest updates, behind-the-scenes
                    content, and exclusive offers.
                  </p>
                  <div class="flex flex-wrap gap-3">
                    <a
                      href="#"
                      class="btn btn-circle btn-primary btn-sm hover:btn-primary hover:scale-110 transition-all"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                        />
                      </svg>
                    </a>
                    <a
                      href="#"
                      class="btn btn-circle btn-secondary btn-sm hover:btn-secondary hover:scale-110 transition-all"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.749.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-12.013C24.007 5.367 18.641.001 12.017.001z"
                        />
                      </svg>
                    </a>
                    <a
                      href="#"
                      class="btn btn-circle btn-accent btn-sm hover:btn-accent hover:scale-110 transition-all"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                        />
                      </svg>
                    </a>
                    <a
                      href="#"
                      class="btn btn-circle btn-info btn-sm hover:btn-info hover:scale-110 transition-all"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Interactive Map Section -->
    <section class="py-20 bg-base-200">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold mb-4">Find Our Store</h2>
          <p class="text-xl text-base-content/70">
            Located in the heart of Phnom Penh's shopping district
          </p>
        </div>

        <div
          class="card bg-base-100 shadow-2xl overflow-hidden max-w-4xl mx-auto"
        >
          <div
            class="h-96 bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/30 relative flex items-center justify-center"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11055.014913125777!2d104.93304273287254!3d11.584940632868319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310953fd9f9a51e9%3A0xc26eafcd2ed5ca29!2sNorton%20University!5e0!3m2!1sen!2skh!4v1752554793775!5m2!1sen!2skh"
              class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.1),transparent_70%)]"
              style="border: 0"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <div
              class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.1),transparent_70%)]"
            ></div>
            <div class="text-center relative z-10">
              <div
                class="w-20 h-20 bg-primary/30 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-primary/50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-10 w-10 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 class="text-2xl font-bold mb-4">KYStore Flagship Location</h3>
              <p class="text-base-content/70 mb-6 max-w-sm mx-auto">
                Street 123, Sangkat Tonle Bassac<br />
                Khan Chamkar Mon, Phnom Penh, Cambodia
              </p>
              <div class="flex flex-wrap gap-3 justify-center">
                <button
                  class="btn btn-primary gap-2 shadow-lg hover:shadow-xl transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  Open in Maps
                </button>
                <button class="btn btn-outline btn-primary gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m0 0L9 7"
                    />
                  </svg>
                  Get Directions
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Success Modal -->
    <div v-if="showSuccessModal" class="modal modal-open">
      <div class="modal-box">
        <div class="text-center">
          <div
            class="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8 text-success"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 class="text-2xl font-bold mb-2">Message Sent!</h3>
          <p class="text-base-content/70 mb-6">
            Thank you for reaching out! We'll get back to you within 24 hours.
          </p>
          <button class="btn btn-primary" @click="showSuccessModal = false">
            Got it!
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, reactive } from "vue";

  // Form data
  const form = reactive({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    newsletter: false,
  });

  // Form state
  const isSubmitting = ref(false);
  const showSuccessModal = ref(false);

  // Submit form
  const submitForm = async () => {
    isSubmitting.value = true;

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Reset form
      Object.keys(form).forEach((key) => {
        if (typeof form[key] === "boolean") {
          form[key] = false;
        } else {
          form[key] = "";
        }
      });

      // Show success modal
      showSuccessModal.value = true;
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      isSubmitting.value = false;
    }
  };

  // SEO Meta
  useHead({
    title: "Contact Us - KYStore | Get in Touch with Our Team",
    meta: [
      {
        name: "description",
        content:
          "Contact KYStore for any questions, support, or feedback. Our friendly customer service team is ready to help you with your shopping needs.",
      },
      {
        name: "keywords",
        content:
          "KYStore contact, customer service, support, Cambodia, Phnom Penh, help, contact form",
      },
    ],
  });
</script>
