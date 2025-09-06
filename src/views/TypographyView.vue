<script setup>
import CodeShowcase from '../components/CodeShowcase.vue';

const code = {
  textSize: `<p class="text-sm">這是一段小號字體 (text-sm)。<\/p>
<p class="text-base">這是一段預設大小的字體 (text-base)。<\/p>
<p class="text-lg">這是一段大號字體 (text-lg)。<\/p>
<p class="text-2xl">這是一段超大號字體 (text-2xl)。<\/p>`,

  textColor: `<p class="text-gray-500">這是灰色字體 (text-gray-500)。<\/p>
<p class="text-red-600">這是紅色字體 (text-red-600)。<\/p>
<p class="text-blue-700">這是藍色字體 (text-blue-700)。<\/p>`,

  textStyle: `<p class="font-light">這是細體字 (font-light)。<\/p>
<p class="font-normal">這是正常字體 (font-normal)。<\/p>
<p class="font-semibold">這是半粗體字 (font-semibold)。<\/p>
<p class="font-bold">這是粗體字 (font-bold)。<\/p>
<p class="italic">這是斜體字 (italic)。<\/p>`
};
</script>

<template>
  <div class="space-y-12">
    <h2 class="text-2xl font-bold text-gray-900">1.1 文字與顏色 (Typography & Colors)</h2>

    <!-- Section: 文字大小 -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold text-gray-800 mb-4">文字大小 (text-*)</h3>
      <CodeShowcase :code-snippet="code.textSize" />
    </div>

    <!-- Section: 文字顏色 -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold text-gray-800 mb-4">文字顏色 (text-*-*)</h3>
      <CodeShowcase :code-snippet="code.textColor" />
    </div>

    <!-- Section: 字體粗細與樣式 -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold text-gray-800 mb-4">字體粗細與樣式 (font-* & italic)</h3>
      <CodeShowcase :code-snippet="code.textStyle" />
    </div>
  </div>
</template>

<style scoped>
.hljs {
  height: 100%;
}
</style>