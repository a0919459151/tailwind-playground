<script setup>
import CodeShowcase from '../../components/CodeShowcase.vue';

const sections = [
  {
    title: 'Hover 狀態 (hover:*)',
    code: `<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
  Hover Me
<\/button>
<div class="w-32 h-32 bg-gray-200 hover:bg-gray-400 transition-colors duration-300 flex items-center justify-center rounded">
  <p class="text-gray-700">Hover<\/p>
<\/div>`
  },
  {
    title: 'Focus 狀態 (focus:*)',
    code: `<input type="text" placeholder="Focus Me" class="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded px-3 py-2 outline-none transition-all duration-200 w-64">
<button class="bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-opacity-75 transition-all duration-200 mt-4">
  Focus Button
<\/button>`
  },
  {
    title: 'Active 狀態 (active:*)',
    code: `<button class="bg-purple-500 active:bg-purple-700 text-white font-bold py-2 px-4 rounded transition-colors duration-100">
  Active Me
<\/button>`
  },
  {
    title: 'Disabled 狀態 (disabled:*)',
    code: `<button class="bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded cursor-not-allowed opacity-50" disabled>
  Disabled Button
<\/button>
<input type="text" placeholder="Disabled Input" class="border border-gray-300 rounded px-3 py-2 bg-gray-100 cursor-not-allowed" disabled>`
  }
];
</script>

<template>
  <div class="space-y-12">
    <h2 class="text-2xl font-bold text-gray-900">5.1 偽類 (Pseudo-classes)</h2>

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