<script setup>
import SidebarNav from './components/SidebarNav.vue';

const navItems = [
  {
    name: '第一單元',
    icon: 'looks_one',
    path: '/unit1/typography',
    children: [
      { name: '1.1 文字與顏色', path: '/unit1/typography' },
      { name: '1.2 背景、邊框與圓角', path: '/unit1/backgrounds' },
    ],
  },
  {
    name: '第二單元',
    icon: 'looks_two',
    path: '/unit2/spacing',
    children: [
      { name: '2.1 間距與佈局', path: '/unit2/spacing' },
      { name: '2.2 Flexbox', path: '/unit2/flexbox' },
      { name: '2.3 Grid', path: '/unit2/grid' },
    ],
  },
  {
    name: '第三單元',
    icon: 'looks_3',
    path: '/unit3/button',
    children: [
      { name: '3.1 按鈕', path: '/unit3/button' },
      { name: '3.2 卡片', path: '/unit3/card' },
    ],
  },
  {
    name: '第四單元',
    icon: 'looks_4',
    path: '/unit4/breakpoints',
    children: [
      { name: '4.1 斷點練習', path: '/unit4/breakpoints' },
    ],
  },
  {
    name: '第五單元',
    icon: 'looks_5',
    path: '/unit5/pseudo-classes',
    children: [
      { name: '5.1 偽類', path: '/unit5/pseudo-classes' },
    ],
  },
  {
    name: '第六單元',
    icon: 'looks_6',
    path: '/unit6/apply-directive',
    children: [
      { name: '6.1 使用 @apply', path: '/unit6/apply-directive' },
      { name: '6.2 修改 tailwind.config.js', path: '/unit6/customize-config' },
    ],
  },
];
</script>

<template>
  <div class="flex min-h-screen bg-white text-gray-800">
    <!-- Sidebar -->
    <aside class="w-64 bg-gray-50 p-6 flex flex-col justify-between border-r border-gray-200">
      <div>
        <router-link to="/" class="text-2xl font-bold text-gray-900 mb-8 block hover:text-[#007FFF] transition-colors" exact-active-class="">
          Tailwind CSS
        </router-link>
        
        <SidebarNav :items="navItems" />

      </div>
      <div class="text-xs text-gray-400">
        <p>Created by Gemini & Stitch</p>
      </div>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 p-8 overflow-auto">
      <router-view />
    </main>
  </div>
</template>

<style>
/* Scoped styles can be added here if needed */
.material-symbols-outlined {
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 24
}
</style>