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
<p class="italic">這是斜體字 (italic)。<\/p>`,

  // 1.2 Backgrounds, Borders & Rounded Corners
  backgrounds: `<div class="w-24 h-24 bg-blue-500"><\/div>
<div class="w-24 h-24 bg-green-300"><\/div>
<div class="w-24 h-24 bg-red-100"><\/div>`,

  borders: `<div class="w-24 h-24 border border-gray-400"><\/div>
<div class="w-24 h-24 border-2 border-blue-500"><\/div>
<div class="w-24 h-24 border-4 border-dashed border-red-500"><\/div>`,

  roundedCorners: `<div class="w-24 h-24 bg-purple-200 rounded"><\/div>
<div class="w-24 h-24 bg-purple-200 rounded-lg"><\/div>
<div class="w-24 h-24 bg-purple-200 rounded-full"><\/div>
<div class="w-24 h-24 bg-purple-200 rounded-t-xl"><\/div>`,

  // 2.1 Margin & Padding
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
  <div class="max-w-7xl mx-auto">
    <h1 class="text-4xl font-bold text-gray-800 border-b pb-4 mb-6">第一單元：基礎入門 (Basic Styling)</h1>
    <p class="mt-2 text-lg text-gray-600">
      在此單元中，我們將專注於 Tailwind 的基礎但最強大的功能。
    </p>
    <p class="mt-2 text-lg text-gray-600">
      您將會練習使用 utility classes 來控制文字樣式 (大小、顏色、粗細)、設定背景顏色、新增邊框，以及調整圓角——這些是構成所有網頁介面的基本元素。
    </p>

    <!-- 練習區域 -->
    <div class="mt-10 space-y-12">
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

      <h2 class="text-2xl font-bold text-gray-900 mt-12">1.2 背景、邊框與圓角 (Backgrounds, Borders & Rounded Corners)</h2>

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

      <h2 class="text-2xl font-bold text-gray-900 mt-12">第二單元：間距與佈局 (Spacing & Layout)</h2>

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

  </div>
</template>

<style scoped>
.hljs {
  height: 100%;
}
</style>