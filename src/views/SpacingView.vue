<script setup>
import CodeShowcase from '../components/CodeShowcase.vue';

const code = {
  margin: `<div class="bg-blue-200 p-4 m-4">外邊距 (m-4)<\/div>
<div class="bg-green-200 p-4 mx-auto w-48">水平置中 (mx-auto)<\/div>
<div class="bg-red-200 p-4 mt-8">上外邊距 (mt-8)<\/div>`,

  padding: `<div class="bg-blue-200 p-4">內邊距 (p-4)<\/div>
<div class="bg-green-200 py-2">垂直內邊距 (py-2)<\/div>
<div class="bg-red-200 px-6">水平內邊距 (px-6)<\/div>`,

  spaceBetween: `<div class="flex space-x-4 bg-gray-100 p-4">
  <div class="w-16 h-16 bg-blue-300"><\/div>
  <div class="w-16 h-16 bg-green-300"><\/div>
  <div class="w-16 h-16 bg-red-300"><\/div>
<\/div>
<div class="flex flex-col space-y-4 bg-gray-100 p-4 mt-4">
  <div class="w-16 h-16 bg-blue-300"><\/div>
  <div class="w-16 h-16 bg-green-300"><\/div>
  <div class="w-16 h-16 bg-red-300"><\/div>
<\/div>`
};
</script>

<template>
  <div class="space-y-12">
    <h2 class="text-2xl font-bold text-gray-900">2.1 間距與佈局 (Spacing & Layout)</h2>

    <!-- Section: Margin -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold text-gray-800 mb-4">外邊距 (Margin)</h3>
      <CodeShowcase :code-snippet="code.margin" />
    </div>

    <!-- Section: Padding -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold text-gray-800 mb-4">內邊距 (Padding)</h3>
      <CodeShowcase :code-snippet="code.padding" />
    </div>

    <!-- Section: Space Between -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold text-gray-800 mb-4">元素間距 (Space Between)</h3>
      <CodeShowcase :code-snippet="code.spaceBetween" />
    </div>
  </div>
</template>

<style scoped>
.hljs {
  height: 100%;
}
</style>