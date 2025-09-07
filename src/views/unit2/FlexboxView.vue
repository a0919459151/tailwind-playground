<script setup>
import CodeShowcase from '../../components/CodeShowcase.vue';

const sections = [
  {
    title: '基本 Flex 容器 (flex)',
    code: `<div class="flex bg-gray-100 p-4 space-x-4">
  <div class="w-16 h-16 bg-blue-300"></div>
  <div class="w-16 h-16 bg-green-300"></div>
  <div class="w-16 h-16 bg-red-300"></div>
</div>`
  },
  {
    title: '主軸方向 (flex-row, flex-col)',
    code: `<div class="flex flex-row bg-gray-100 p-4 space-x-4">
  <div class="w-16 h-16 bg-blue-300">row</div>
  <div class="w-16 h-16 bg-green-300">row</div>
</div>
<div class="flex flex-col bg-gray-100 p-4 space-y-4 mt-4">
  <div class="w-16 h-16 bg-blue-300">col</div>
  <div class="w-16 h-16 bg-green-300">col</div>
</div>`
  },
  {
    title: '主軸對齊 (justify-*)',
    code: `<div class="flex justify-start bg-gray-100 p-4 w-full h-24 border border-gray-300">
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
</div>`
  },
  {
    title: '交叉軸對齊 (items-*)',
    code: `<div class="flex items-start bg-gray-100 p-4 w-full h-24 border border-gray-300">
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
</div>`
  },
  {
    title: '換行 (flex-wrap)',
    code: `<div class="flex flex-wrap bg-gray-100 p-4 w-64 border border-gray-300">
  <div class="w-24 h-16 bg-blue-300">1</div>
  <div class="w-24 h-16 bg-green-300">2</div>
  <div class="w-24 h-16 bg-red-300">3</div>
  <div class="w-24 h-16 bg-purple-300">4</div>
</div>`
  }
];
</script>

<template>
  <div class="space-y-12">
    <h2 class="text-2xl font-bold text-gray-900">2.2 Flexbox</h2>

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