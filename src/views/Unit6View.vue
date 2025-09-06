<template>
  <div class="max-w-7xl mx-auto">
    
    <h1 class="text-4xl font-bold text-gray-800 border-b pb-4 mb-12">第六單元：進階與客製化 (Advanced & Customization)</h1>

    <router-view />

  </div>
</template>


<style scoped lang="postcss">
/* Styles for sub-navigation */
.router-link-exact-active {
  @apply bg-blue-100 text-blue-700 font-semibold;
}
</style>