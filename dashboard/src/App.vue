<script setup>
import { createRouter, createWebHistory } from 'vue-router'
import HeaderPage from './components/HeaderPage.vue';
import SiderBar from './components/SiderBar.vue';
</script>

<template>
  <div>

    <SiderBar/>
    
    <main class="w-full md:w-[calc(100%-256px)] md:ml-64 bg-gray-50 min-h-screen transition-all main">
    <HeaderPage/>
    <router-view></router-view>
    </main> 
  </div>

  
  
</template>