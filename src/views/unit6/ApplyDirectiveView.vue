<script setup>
const code = {
  applyExampleCode: `<!-- src/style.css -->
.btn-primary {
  @apply bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded;
}

<!-- 在你的 Vue 模板中使用 -->
<button class="btn-primary">使用 @apply 的按鈕</button>`

};
</script>

<template>
  <div class="space-y-12">

    <h2 class="text-2xl font-bold text-gray-900">6.1 使用 @apply</h2>

    <div class="mb-8">
      <h3 class="text-xl font-semibold text-gray-800 mb-4">基本 @apply 用法</h3>
      <div
        class="grid grid-cols-1 2xl:grid-cols-2  rounded-lg overflow-hidden shadow-md ring-1 ring-black ring-opacity-5 bg-gray-300">
        <div class="p-4 mb-4">
          <h3 class="text-sm font-semibold text-gray-500 tracking-wider uppercase">
            Preview
          </h3>
          <div class="bg-slate-50 p-6  rounded-md border h-full">
            <button class="btn-primary">使用 @apply 的按鈕</button>
          </div>
        </div>

        <div class="p-1 pt-4 mb-6">
          <highlightjs language="xml" :code="code.applyExampleCode" class="h-full rounded-lg overflow-hidden" />
        </div>
      </div>
    </div>

    <div class="mt-12 p-6 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 rounded-lg">
      <p class="font-bold mb-2">重要提示：</p>
      <p>要讓 `@apply` 生效，您需要將其放置在 Tailwind CSS 能夠處理的 CSS 檔案中，例如 `src/style.css` 或 Vue 元件中帶有 `lang="postcss"` 的
        `&lt;style&gt;` 區塊。</p>
    </div>
  </div>
</template>

<style scoped ">
:deep(.hljs) {
  height: 100%;
  border-radius: 0.5rem;
}

:deep(pre) {
  margin: 1rem;
  overflow-x: hidden;
}
</style>