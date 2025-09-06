<template>
  <div class="grid grid-cols-1 2xl:grid-cols-2  rounded-lg overflow-hidden shadow-md ring-1 ring-black ring-opacity-5 bg-gray-300">

    <div class="p-4 mb-4">
      <h3 class="text-sm font-semibold text-gray-500 tracking-wider uppercase">
        Preview
      </h3>

      <div class="bg-slate-50 p-6  rounded-md border h-full">
        <div v-html="codeSnippet"></div>
      </div>
    </div>

    <div class="p-1 pt-4 mb-6">
      <highlightjs language="xml" :code="codeSnippet" class="h-full" />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  codeSnippet: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
:deep(.hljs) {
  height: 100%;
  border-radius: 0.5rem;
}

:deep(pre) {
  margin: 1rem;
  overflow-x: hidden;
}
</style>