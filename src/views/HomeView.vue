<script setup>
import { Codemirror } from 'vue-codemirror';
import { html } from '@codemirror/lang-html';
import { EditorView } from '@codemirror/view';
import { useEditorStore } from '../stores/editor'; // Import the Pinia store

const editorStore = useEditorStore(); // Use the store

const extensions = [
  html(),
  EditorView.lineWrapping,
  EditorView.theme({
    '&': {
      fontSize: '0.875rem', // text-sm
      backgroundColor: '#f9fafb', // bg-gray-50
      color: '#1f2937', // text-gray-800
      height: '100%',
    },
    '.cm-content': {
      fontFamily: 'monospace',
    },
    '.cm-gutters': {
      backgroundColor: '#f9fafb', // bg-gray-50
      borderRight: '1px solid #d1d5db', // border-gray-300
    },
    '.cm-line': {
      paddingLeft: '1rem',
    },
    '.cm-scroller': {
      overflow: 'auto',
    }
  })
];
</script>

<template>
  <div class="max-w-7xl mx-auto">
    <h1 class="text-4xl font-bold text-gray-800 border-b pb-4 mb-6">Tailwind CSS 練習場</h1>

    <p class="mt-4 text-lg text-gray-600">
      歡迎來到 Tailwind CSS Playground！
      <br/>
      在這裡，我們將通過一系列的單元來學習與實踐 Tailwind 的核心功能。
    </p>

    <div class="mt-10">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">學習藍圖</h2>
      <div class="bg-gray-50 border border-gray-200 rounded-lg p-6">
        <ul class="space-y-4 list-disc list-inside text-gray-700">
          <li>
            <b>第一單元：基礎入門</b> - 學習文字、顏色、背景、邊框與圓角。
          </li>
          <li>
            <b>第二單元：間距與佈局</b> - 掌握 Margin, Padding, Flexbox 與 Grid。
          </li>
          <li>
            <b>第三單元：組件練習</b> - 實作按鈕和卡片等基本組件。
          </li>
          <li>
            <b>第四單元：響應式設計</b> - 讓你的網頁適應不同尺寸的螢幕。
          </li>
          <li>
            <b>第五單元：互動效果與狀態</b> - 學習 hover, focus 等偽類的使用。
          </li>
          <li>
            <b>第六單元：進階與客製化</b> - 使用 @apply 客製化樣式。
          </li>
        </ul>
      </div>
    </div>

    <!-- Live Preview Section -->
    <div class="mt-10">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">即時預覽</h2>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Preview -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Live Preview</label>
          <div
            class="w-full h-full p-4 border border-gray-200 rounded-lg bg-gray-50 flex items-center justify-center"
          >
            <div v-html="editorStore.userCode" class="w-full"></div>
          </div>
        </div>

         <!-- Code Editor -->
        <div class="h-full">
          <label for="code-editor" class="block text-sm font-medium text-gray-700 mb-2">HTML & Tailwind CSS</label>
          <codemirror
            id="code-editor"
            v-model="editorStore.userCode"
            placeholder="Enter your Tailwind CSS code here..."
            :style="{ height: '100%' }"
            :autofocus="true"
            :indent-with-tab="true"
            :tab-size="2"
            :extensions="extensions"
            class="w-full h-full border border-gray-300 rounded-lg overflow-hidden"
          />
        </div>
      </div>
    </div>

    <div class="mt-12 text-center text-gray-500">
      <p>---</p>
      <p class="mt-4">準備好後，請點擊左方的導覽列，從「第一單元」開始您的旅程。</p>
    </div>

  </div>
</template>