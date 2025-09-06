<template>
  <div class="flex min-h-screen bg-white text-gray-800">
    <!-- Sidebar -->
    <aside class="w-64 bg-gray-50 p-6 flex flex-col justify-between border-r border-gray-200">
      <div>
        <router-link to="/" class="text-2xl font-bold text-gray-900 mb-8 block hover:text-[#007FFF] transition-colors" exact-active-class="">
          Tailwind CSS
        </router-link>
        <nav class="flex flex-col gap-2">
          
          <router-link to="/unit1" class="flex items-center gap-3 px-4 py-2 rounded-full text-gray-600 hover:bg-gray-100 transition-colors">
            <span class="material-symbols-outlined">looks_one</span>
            第一單元
          </router-link>
          <!-- 後續單元連結將會加在這裡 -->
        </nav>
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
