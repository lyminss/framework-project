<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="container-fluid p-0 d-flex flex-column min-vh-100">
    <Header />

    <main class="container">
      <RouterView />
    </main>

    <Footer />
  </div>
</template>