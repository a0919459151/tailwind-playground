<script setup>
import CodeShowcase from '../../components/CodeShowcase.vue';

const sections = [
  {
    title: '背景顏色 (bg-*)',
    code: `<div class="w-24 h-24 bg-blue-500"><\/div>
<div class="w-24 h-24 bg-green-300"><\/div>
<div class="w-24 h-24 bg-red-100"><\/div>`
  },
  {
    title: '邊框 (border-*)',
    code: `<div class="w-24 h-24 border border-gray-400"><\/div>
<div class="w-24 h-24 border-2 border-blue-500"><\/div>
<div class="w-24 h-24 border-4 border-dashed border-red-500"><\/div>`
  },
  {
    title: '圓角 (rounded-*)',
    code: `<div class="w-24 h-24 bg-purple-200 rounded"><\/div>
<div class="w-24 h-24 bg-purple-200 rounded-lg"><\/div>
<div class="w-24 h-24 bg-purple-200 rounded-full"><\/div>
<div class="w-24 h-24 bg-purple-200 rounded-t-xl"><\/div>`
  }
];
</script>

<template>
  <div class="space-y-12">
    <h2 class="text-2xl font-bold text-gray-900">1.2 背景、邊框與圓角 (Backgrounds, Borders & Rounded Corners)</h2>

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