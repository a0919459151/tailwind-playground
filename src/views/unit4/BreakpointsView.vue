<script setup>
import CodeShowcase from '../../components/CodeShowcase.vue';

const sections = [
  {
    title: '響應式寬度',
    code: `<div class="w-full md:w-1/2 lg:w-1/3 bg-blue-200 p-4 text-center">
  <p>我會根據螢幕寬度改變寬度</p>
  <p class="text-sm">(w-full md:w-1/2 lg:w-1/3)</p>
</div>`
  },
  {
    title: '響應式顯示/隱藏',
    code: `<div class="hidden md:block bg-green-200 p-4 text-center">
  <p>我在小螢幕上會隱藏</p>
  <p class="text-sm">(hidden md:block)</p>
</div>
<div class="block md:hidden bg-red-200 p-4 text-center mt-4">
  <p>我在大螢幕上會隱藏</p>
  <p class="text-sm">(block md:hidden)</p>
</div>`
  },
  {
    title: '響應式 Flexbox',
    code: `<div class="flex flex-col md:flex-row items-center justify-center bg-gray-100 p-4 space-y-4 md:space-y-0 md:space-x-4">
  <div class="w-24 h-24 bg-blue-300">1</div>
  <div class="w-24 h-24 bg-green-300">2</div>
  <div class="w-24 h-24 bg-red-300">3</div>
</div>
<p class="mt-4 text-sm text-gray-600">在小螢幕上垂直排列，大螢幕上水平排列。</p>`
  }
];
</script>

<template>
  <div class="space-y-12">
    <h2 class="text-2xl font-bold text-gray-900">4.1 斷點練習 (Breakpoint Practice)</h2>

    <div v-for="section in sections" :key="section.title" class="mb-8">
      <h3 class="text-xl font-semibold text-gray-800 mb-4">{{ section.title }}</h3>
      <CodeShowcase :code-snippet="section.code" />
    </div>
  </div>
</template>

<style scoped>
.hljs {
  height: 100%;
}
</style>