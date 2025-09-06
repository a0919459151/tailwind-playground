<script setup>
import CodeShowcase from '../../components/CodeShowcase.vue';

const code = {
  basicFlex: `<div class="flex bg-gray-100 p-4 space-x-4">
  <div class="w-16 h-16 bg-blue-300"></div>
  <div class="w-16 h-16 bg-green-300"></div>
  <div class="w-16 h-16 bg-red-300"></div>
</div>`,

  flexDirection: `<div class="flex flex-row bg-gray-100 p-4 space-x-4">
  <div class="w-16 h-16 bg-blue-300">row</div>
  <div class="w-16 h-16 bg-green-300">row</div>
</div>
<div class="flex flex-col bg-gray-100 p-4 space-y-4 mt-4">
  <div class="w-16 h-16 bg-blue-300">col</div>
  <div class="w-16 h-16 bg-green-300">col</div>
</div>`,

  justifyContent: `<div class="flex justify-start bg-gray-100 p-4 w-full h-24 border border-gray-300">
  <div class="w-16 h-16 bg-blue-300"></div>
  <div class="w-16 h-16 bg-green-300"></div>
</div>
<div class="flex justify-center bg-gray-100 p-4 w-full h-24 border border-gray-300 mt-4">
  <div class="w-16 h-16 bg-blue-300"></div>
  <div class="w-16 h-16 bg-green-300"></div>
</div>
<div class="flex justify-between bg-gray-100 p-4 w-full h-24 border border-gray-300 mt-4">
  <div class="w-16 h-16 bg-blue-300"></div>
  <div class="w-16 h-16 bg-green-300"></div>
</div>`,

  alignItems: `<div class="flex items-start bg-gray-100 p-4 w-full h-24 border border-gray-300">
  <div class="w-16 h-16 bg-blue-300"></div>
  <div class="w-16 h-16 bg-green-300"></div>
</div>
<div class="flex items-center bg-gray-100 p-4 w-full h-24 border border-gray-300 mt-4">
  <div class="w-16 h-16 bg-blue-300"></div>
  <div class="w-16 h-16 bg-green-300"></div>
</div>
<div class="flex items-end bg-gray-100 p-4 w-full h-24 border border-gray-300 mt-4">
  <div class="w-16 h-16 bg-blue-300"></div>
  <div class="w-16 h-16 bg-green-300"></div>
</div>`,

  flexWrap: `<div class="flex flex-wrap bg-gray-100 p-4 w-64 border border-gray-300">
  <div class="w-24 h-16 bg-blue-300">1</div>
  <div class="w-24 h-16 bg-green-300">2</div>
  <div class="w-24 h-16 bg-red-300">3</div>
  <div class="w-24 h-16 bg-purple-300">4</div>
</div>`
};
</script>

<template>
  <div class="space-y-12">
    <h2 class="text-2xl font-bold text-gray-900">2.2 Flexbox</h2>

    <!-- Section: Basic Flex -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold text-gray-800 mb-4">基本 Flex 容器 (flex)</h3>
      <CodeShowcase :code-snippet="code.basicFlex" />
    </div>

    <!-- Section: Flex Direction -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold text-gray-800 mb-4">主軸方向 (flex-row, flex-col)</h3>
      <CodeShowcase :code-snippet="code.flexDirection" />
    </div>

    <!-- Section: Justify Content -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold text-gray-800 mb-4">主軸對齊 (justify-*)</h3>
      <CodeShowcase :code-snippet="code.justifyContent" />
    </div>

    <!-- Section: Align Items -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold text-gray-800 mb-4">交叉軸對齊 (items-*)</h3>
      <CodeShowcase :code-snippet="code.alignItems" />
    </div>

    <!-- Section: Flex Wrap -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold text-gray-800 mb-4">換行 (flex-wrap)</h3>
      <CodeShowcase :code-snippet="code.flexWrap" />
    </div>
  </div>
</template>

<style scoped>
.hljs {
  height: 100%;
}
</style>