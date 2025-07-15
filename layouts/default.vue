<script setup lang="ts">
import AppFooter from './appFooter.vue';
import AppHeader from './appHeader.vue';



</script>

<template>
  <div >
    <AppHeader />

    <main class="min-h-screen bg-white">
      <slot />
    </main>

    <AppFooter />
  </div>
</template>
