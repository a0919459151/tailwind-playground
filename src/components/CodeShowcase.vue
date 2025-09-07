<script setup>
import { defineProps, ref } from 'vue';

defineProps({
  codeSnippet: {
    type: String,
    required: true,
  },
});

const isCopied = ref(false);

const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text).then(() => {
    isCopied.value = true;
    setTimeout(() => {
      isCopied.value = false;
    }, 2000);
  }).catch(err => {
    console.error('Failed to copy: ', err);
  });
};
</script>

<template>
  <div class="grid grid-cols-1 2xl:grid-cols-2 rounded-lg overflow-hidden shadow-md ring-1 ring-black ring-opacity-5 bg-gray-300">

    <!-- Preview Column -->
    <div class="p-4 mb-4">
      <h3 class="text-sm font-semibold text-gray-500 tracking-wider uppercase">
        Preview
      </h3>
      <div class="bg-slate-50 p-6 rounded-md border h-full">
        <div v-html="codeSnippet"></div>
      </div>
    </div>

    <!-- Code Column -->
    <div class="relative p-1 pt-4 mb-6">
      <button
        @click="copyToClipboard(codeSnippet)"
        class="absolute top-6 right-4 bg-gray-700 hover:bg-gray-600 text-white text-xs font-bold py-1 px-2 rounded-md transition-colors duration-200 z-10"
      >
        <span v-if="!isCopied">Copy</span>
        <span v-else>Copied!</span>
      </button>
      <highlightjs language="xml" :code="codeSnippet" class="h-full" />
    </div>
  </div>
</template>

<style scoped lang="postcss">
:deep(.hljs) {
  height: 100%;
  border-radius: 0.5rem;
}

:deep(pre) {
  margin: 1rem;
  overflow-x: hidden;
}
</style>