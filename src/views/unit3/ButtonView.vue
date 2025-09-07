<script setup>
import CodeShowcase from '../../components/CodeShowcase.vue';

const sections = [
  {
    title: '基本按鈕樣式',
    code: `<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  基本按鈕
<\/button>
<button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
  圓角按鈕
<\/button>
<button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed" disabled>
  禁用按鈕
<\/button>`
  },
  {
    title: '外框按鈕',
    code: `<button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  外框按鈕
<\/button>`
  },
  {
    title: '帶圖示按鈕',
    code: `<button class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
  <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/><\/svg>
  下載
<\/button>`
  }
];
</script>

<template>
  <div class="space-y-12">
    <h2 class="text-2xl font-bold text-gray-900">3.1 按鈕 (Button)</h2>

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