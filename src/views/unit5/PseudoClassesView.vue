<script setup>
import CodeShowcase from '../../components/CodeShowcase.vue';

const code = {
  hoverState: `<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
  Hover Me
</button>

<div class="w-32 h-32 bg-gray-200 hover:bg-gray-400 transition-colors duration-300 flex items-center justify-center rounded">
  <p class="text-gray-700">Hover</p>
</div>`,

  focusState: `<input type="text" placeholder="Focus Me" class="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded px-3 py-2 outline-none transition-all duration-200 w-64">

<button class="bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-opacity-75 transition-all duration-200 mt-4">
  Focus Button
</button>`,

  activeState: `<button class="bg-purple-500 active:bg-purple-700 text-white font-bold py-2 px-4 rounded transition-colors duration-100">
  Active Me
</button>`,

  disabledState: `<button class="bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded cursor-not-allowed opacity-50" disabled>
  Disabled Button
</button>

<input type="text" placeholder="Disabled Input" class="border border-gray-300 rounded px-3 py-2 bg-gray-100 cursor-not-allowed" disabled>`
};
</script>

<template>
  <div class="space-y-12">
    <h2 class="text-2xl font-bold text-gray-900">5.1 偽類 (Pseudo-classes)</h2>

    <!-- Section: Hover State -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold text-gray-800 mb-4">Hover 狀態 (hover:*)</h3>
      <CodeShowcase :code-snippet="code.hoverState" />
    </div>

    <!-- Section: Focus State -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold text-gray-800 mb-4">Focus 狀態 (focus:*)</h3>
      <CodeShowcase :code-snippet="code.focusState" />
    </div>

    <!-- Section: Active State -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold text-gray-800 mb-4">Active 狀態 (active:*)</h3>
      <CodeShowcase :code-snippet="code.activeState" />
    </div>

    <!-- Section: Disabled State -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold text-gray-800 mb-4">Disabled 狀態 (disabled:*)</h3>
      <CodeShowcase :code-snippet="code.disabledState" />
    </div>
  </div>
</template>

<style scoped>
.hljs {
  height: 100%;
}
</style>