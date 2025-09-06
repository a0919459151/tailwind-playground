import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Unit1View from '../views/Unit1View.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/unit1',
    name: 'unit1',
    component: Unit1View
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
