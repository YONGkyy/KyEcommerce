<script setup lang="ts">
import AppFooter from './AppFooter.vue';
import AppHeader from './AppHeader.vue';

</script>

<template>
  <div >
    <AppHeader />

    <main class="min-h-screen">
      <slot />
    </main>

    <AppFooter />
  </div>
</template>
