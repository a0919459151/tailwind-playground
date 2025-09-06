<script setup>
import CodeShowcase from '../../components/CodeShowcase.vue';

const code = {
  basicGrid: `<div class="grid grid-cols-3 gap-4 bg-gray-100 p-4">
  <div class="bg-blue-300 p-4">1</div>
  <div class="bg-green-300 p-4">2</div>
  <div class="bg-red-300 p-4">3</div>
  <div class="bg-purple-300 p-4">4</div>
  <div class="bg-yellow-300 p-4">5</div>
  <div class="bg-indigo-300 p-4">6</div>
</div>`,

  colSpan: `<div class="grid grid-cols-3 gap-4 bg-gray-100 p-4">
  <div class="col-span-2 bg-blue-300 p-4">col-span-2</div>
  <div class="bg-green-300 p-4">1</div>
  <div class="bg-red-300 p-4">2</div>
  <div class="bg-purple-300 p-4">3</div>
</div>`,

  rowSpan: `<div class="grid grid-rows-3 grid-flow-col gap-4 bg-gray-100 p-4 h-48">
  <div class="row-span-2 bg-blue-300 p-4">row-span-2</div>
  <div class="bg-green-300 p-4">1</div>
  <div class="bg-red-300 p-4">2</div>
  <div class="bg-purple-300 p-4">3</div>
</div>`,

  placeItems: `<div class="grid grid-cols-2 gap-4 bg-gray-100 p-4 h-48 place-items-center">
  <div class="w-16 h-16 bg-blue-300">1</div>
  <div class="w-16 h-16 bg-green-300">2</div>
</div>`
};
</script>

<template>
  <div class="space-y-12">
    <h2 class="text-2xl font-bold text-gray-900">2.3 Grid</h2>

    <!-- Section: Basic Grid -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold text-gray-800 mb-4">基本 Grid 容器 (grid, grid-cols-*, gap-*)</h3>
      <CodeShowcase :code-snippet="code.basicGrid" />
    </div>

    <!-- Section: Column Span -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold text-gray-800 mb-4">欄位跨度 (col-span-*)</h3>
      <CodeShowcase :code-snippet="code.colSpan" />
    </div>

    <!-- Section: Row Span -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold text-gray-800 mb-4">列跨度 (row-span-*)</h3>
      <CodeShowcase :code-snippet="code.rowSpan" />
    </div>

    <!-- Section: Place Items -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold text-gray-800 mb-4">項目對齊 (place-items-*)</h3>
      <CodeShowcase :code-snippet="code.placeItems" />
    </div>
  </div>
</template>

<style scoped>
.hljs {
  height: 100%;
}
</style>