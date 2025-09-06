<template>
  <nav class="flex flex-col gap-2">
    <div v-for="item in itemsWithState" :key="item.name">
      <!-- Parent Item -->
      <div
        class="flex items-center gap-3 px-4 py-2 rounded-full text-gray-600 hover:bg-gray-100 transition-colors cursor-pointer"
        @click="toggleExpand(item)"
      >
        <span v-if="item.icon" class="material-symbols-outlined">{{ item.icon }}</span>
        <span>{{ item.name }}</span>
        <span v-if="item.children" class="material-symbols-outlined ml-auto transition-transform"
          :class="{ 'rotate-90': item.expanded }">chevron_right</span>
      </div>

      <!-- Children Items -->
      <div v-if="item.children && item.expanded" class="ml-6 mt-2 flex flex-col gap-1">
        <router-link
          v-for="child in item.children"
          :key="child.path"
          :to="child.path"
          class="flex items-center gap-3 px-4 py-2 rounded-full text-gray-600 hover:bg-gray-100 transition-colors"
        >
          {{ child.name }}
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});

// Add expanded state to each item
const itemsWithState = ref(props.items.map(item => ({
  ...item,
  expanded: false,
})));

const toggleExpand = (item) => {
  item.expanded = !item.expanded;
};
</script>

<style scoped>
/* Add specific styles for SidebarNav if needed */
</style>