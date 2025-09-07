<script setup>
import CodeShowcase from '../../components/CodeShowcase.vue';

const sections = [
  {
    title: '基本 Grid 容器 (grid, grid-cols-*, gap-*)',
    code: `<div class="grid grid-cols-3 gap-4 bg-gray-100 p-4">
  <div class="bg-blue-300 p-4">1<\/div>
  <div class="bg-green-300 p-4">2<\/div>
  <div class="bg-red-300 p-4">3<\/div>
  <div class="bg-purple-300 p-4">4<\/div>
  <div class="bg-yellow-300 p-4">5<\/div>
  <div class="bg-indigo-300 p-4">6<\/div>
<\/div>`
  },
  {
    title: '欄位跨度 (col-span-*)',
    code: `<div class="grid grid-cols-3 gap-4 bg-gray-100 p-4">
  <div class="col-span-2 bg-blue-300 p-4">col-span-2<\/div>
  <div class="bg-green-300 p-4">1<\/div>
  <div class="bg-red-300 p-4">2<\/div>
  <div class="bg-purple-300 p-4">3<\/div>
<\/div>`
  },
  {
    title: '列跨度 (row-span-*)',
    code: `<div class="grid grid-rows-3 grid-flow-col gap-4 bg-gray-100 p-4 h-48">
  <div class="row-span-2 bg-blue-300 p-4">row-span-2<\/div>
  <div class="bg-green-300 p-4">1<\/div>
  <div class="bg-red-300 p-4">2<\/div>
  <div class="bg-purple-300 p-4">3<\/div>
<\/div>`
  },
  {
    title: '項目對齊 (place-items-*)',
    code: `<div class="grid grid-cols-2 gap-4 bg-gray-100 p-4 h-48 place-items-center">
  <div class="w-16 h-16 bg-blue-300">1<\/div>
  <div class="w-16 h-16 bg-green-300">2<\/div>
<\/div>`
  }
];
</script>

<template>
  <div class="space-y-12">
    <h2 class="text-2xl font-bold text-gray-900">2.3 Grid</h2>

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