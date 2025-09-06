<script setup>
import CodeShowcase from '../../components/CodeShowcase.vue';

const code = {
  extendColors: `// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'gemini-blue': '#4285F4',
        'custom-green': '#10B981',
      },
    },
  },
  plugins: [],
};

<!-- 在你的模板中使用 -->
<div class="bg-gemini-blue text-white p-4 rounded">Gemini Blue</div>
<div class="bg-custom-green text-white p-4 rounded mt-2">Custom Green</div>`,

  extendFontSize: `// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontSize: {
        'xxl': '2.5rem', // 40px
        '3xl': '3rem',   // 48px
      },
    },
  },
  plugins: [],
};

<!-- 在你的模板中使用 -->
<p class="text-xxl font-bold">超大文字 (text-xxl)</p>
<p class="text-3xl font-bold">更大文字 (text-3xl)</p>`,

  addPlugin: `// tailwind.config.js
module.exports = {
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'), // 範例：引入表單插件
  ],
};

<!-- 在你的模板中使用 (需要安裝插件) -->
<input type="text" class="form-input" placeholder="表單輸入框">`
};
</script>

<template>
  <div class="space-y-12">
    <h2 class="text-2xl font-bold text-gray-900">6.2 修改 tailwind.config.js</h2>

    <!-- Section: Extend Colors -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold text-gray-800 mb-4">擴展顏色 (extend.colors)</h3>
      <CodeShowcase :code-snippet="code.extendColors" />
    </div>

    <!-- Section: Extend Font Size -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold text-gray-800 mb-4">擴展字體大小 (extend.fontSize)</h3>
      <CodeShowcase :code-snippet="code.extendFontSize" />
    </div>

    <!-- Section: Add Plugin -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold text-gray-800 mb-4">添加插件 (plugins)</h3>
      <CodeShowcase :code-snippet="code.addPlugin" />
    </div>

    <div class="mt-12 p-6 bg-blue-50 border-l-4 border-blue-400 text-blue-800 rounded-lg">
      <p class="font-bold mb-2">操作提示：</p>
      <p>要實際看到效果，您需要手動修改專案根目錄下的 `tailwind.config.js` 檔案，並添加對應的配置。</p>
      <p class="mt-2">例如，要添加 `gemini-blue` 顏色，您需要在 `tailwind.config.js` 的 `theme.extend.colors` 中加入 `'gemini-blue': '#4285F4',`。</p>
    </div>
  </div>
</template>

<style scoped>
.hljs {
  height: 100%;
}
</style>