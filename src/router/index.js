import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

import unit1Routes from './modules/unit1';
import unit2Routes from './modules/unit2';
import unit3Routes from './modules/unit3';
import unit4Routes from './modules/unit4';
import unit5Routes from './modules/unit5';
import unit6Routes from './modules/unit6';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  unit1Routes,
  unit2Routes,
  unit3Routes,
  unit4Routes,
  unit5Routes,
  unit6Routes
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;