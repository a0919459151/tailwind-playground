<template>
  <div class="max-w-7xl mx-auto">
    
    <h1 class="text-4xl font-bold text-gray-800 border-b pb-4 mb-12">第三單元：組件練習 (Component Practice)</h1>

    <router-view />

  </div>
</template>

<style scoped lang="postcss">
/* Styles for sub-navigation */
.router-link-exact-active {
  @apply bg-blue-100 text-blue-700 font-semibold;
}
</style>