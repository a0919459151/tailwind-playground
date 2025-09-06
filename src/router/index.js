import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Unit1ParentView from '../views/Unit1View.vue';
import Unit2ParentView from '../views/Unit2View.vue'; // New Unit2 parent view

// Import sub-views
import TypographyView from '../views/TypographyView.vue';
import BackgroundsView from '../views/BackgroundsView.vue';
import SpacingView from '../views/SpacingView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/unit1',
    name: 'unit1',
    component: Unit1ParentView,
    children: [
      {
        path: '',
        redirect: '/unit1/typography'
      },
      {
        path: 'typography',
        name: 'unit1-typography',
        component: TypographyView
      },
      {
        path: 'backgrounds',
        name: 'unit1-backgrounds',
        component: BackgroundsView
      }
      // SpacingView moved to Unit2
    ]
  },
  {
    path: '/unit2',
    name: 'unit2',
    component: Unit2ParentView,
    children: [
      {
        path: '',
        redirect: '/unit2/spacing'
      },
      {
        path: 'spacing',
        name: 'unit2-spacing',
        component: SpacingView
      },
      {
        path: 'flexbox',
        name: 'unit2-flexbox',
        component: null // Placeholder for future FlexboxView
      },
      {
        path: 'grid',
        name: 'unit2-grid',
        component: null // Placeholder for future GridView
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;