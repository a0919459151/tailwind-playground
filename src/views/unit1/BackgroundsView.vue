<script setup>
import CodeShowcase from '../../components/CodeShowcase.vue';

const code = {
  backgrounds: `<div class="w-24 h-24 bg-blue-500"><\/div>
<div class="w-24 h-24 bg-green-300"><\/div>
<div class="w-24 h-24 bg-red-100"><\/div>`,

  borders: `<div class="w-24 h-24 border border-gray-400"><\/div>
<div class="w-24 h-24 border-2 border-blue-500"><\/div>
<div class="w-24 h-24 border-4 border-dashed border-red-500"><\/div>`,

  roundedCorners: `<div class="w-24 h-24 bg-purple-200 rounded"><\/div>
<div class="w-24 h-24 bg-purple-200 rounded-lg"><\/div>
<div class="w-24 h-24 bg-purple-200 rounded-full"><\/div>
<div class="w-24 h-24 bg-purple-200 rounded-t-xl"><\/div>`
};
</script>

<template>
  <div class="space-y-12">
    <h2 class="text-2xl font-bold text-gray-900">1.2 背景、邊框與圓角 (Backgrounds, Borders & Rounded Corners)</h2>

    <!-- Section: 背景顏色 -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold text-gray-800 mb-4">背景顏色 (bg-*)</h3>
      <CodeShowcase :code-snippet="code.backgrounds" />
    </div>

    <!-- Section: 邊框 -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold text-gray-800 mb-4">邊框 (border-*)</h3>
      <CodeShowcase :code-snippet="code.borders" />
    </div>

    <!-- Section: 圓角 -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold text-gray-800 mb-4">圓角 (rounded-*)</h3>
      <CodeShowcase :code-snippet="code.roundedCorners" />
    </div>
  </div>
</template>

<style scoped>
.hljs {
  height: 100%;
}
</style>