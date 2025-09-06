<script setup>
import CodeShowcase from '../../components/CodeShowcase.vue';

const code = {
  basicCard: `<div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
  <img class="w-full" src="https://placehold.co/400x200/F3F4F6/1F2937?text=Card+Image" alt="Placeholder image">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">卡片標題</div>
    <p class="text-gray-700 text-base">
      這是一段卡片的描述文字，用來介紹卡片的內容。
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#tag1</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#tag2</span>
  </div>
</div>`,

  userProfileCard: `<div class="max-w-xs mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div class="md:flex">
    <div class="md:shrink-0">
      <img class="h-48 w-full object-cover md:h-full md:w-48" src="https://placehold.co/192x192/F3F4F6/1F2937?text=User" alt="User profile image">
    </div>
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">使用者簡介</div>
      <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">王小明</a>
      <p class="mt-2 text-gray-500">這是一位熱愛學習 Tailwind CSS 的使用者，致力於提升網頁開發技能。</p>
    </div>
  </div>
</div>`
};
</script>

<template>
  <div class="space-y-12">
    <h2 class="text-2xl font-bold text-gray-900">3.2 卡片 (Card)</h2>

    <!-- Section: Basic Card -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold text-gray-800 mb-4">基本卡片樣式</h3>
      <CodeShowcase :code-snippet="code.basicCard" />
    </div>

    <!-- Section: User Profile Card -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold text-gray-800 mb-4">使用者簡介卡片</h3>
      <CodeShowcase :code-snippet="code.userProfileCard" />
    </div>
  </div>
</template>

<style scoped>
.hljs {
  height: 100%;
}
</style>