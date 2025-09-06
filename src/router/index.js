import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Unit1ParentView from '../views/Unit1View.vue';
import Unit2ParentView from '../views/Unit2View.vue'; // New Unit2 parent view
import Unit3ParentView from '../views/Unit3View.vue'; // New Unit3 parent view
import Unit4ParentView from '../views/Unit4View.vue'; // New Unit4 parent view
import Unit5ParentView from '../views/Unit5View.vue'; // New Unit5 parent view
import Unit6ParentView from '../views/Unit6View.vue'; // New Unit6 parent view

// Import sub-views
import TypographyView from '../views/unit1/TypographyView.vue';
import BackgroundsView from '../views/unit1/BackgroundsView.vue';
import SpacingView from '../views/unit2/SpacingView.vue';
import FlexboxView from '../views/unit2/FlexboxView.vue'; // New FlexboxView
import GridView from '../views/unit2/GridView.vue'; // New GridView
import ButtonView from '../views/unit3/ButtonView.vue'; // New ButtonView
import CardView from '../views/unit3/CardView.vue'; // New CardView
import BreakpointsView from '../views/unit4/BreakpointsView.vue'; // New BreakpointsView
import PseudoClassesView from '../views/unit5/PseudoClassesView.vue'; // New PseudoClassesView
import ApplyDirectiveView from '../views/unit6/ApplyDirectiveView.vue'; // New ApplyDirectiveView
import CustomizeConfigView from '../views/unit6/CustomizeConfigView.vue'; // New CustomizeConfigView

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
        component: FlexboxView
      },
      {
        path: 'grid',
        name: 'unit2-grid',
        component: GridView
      }
    ]
  },
  {
    path: '/unit3',
    name: 'unit3',
    component: Unit3ParentView,
    children: [
      {
        path: '',
        redirect: '/unit3/button'
      },
      {
        path: 'button',
        name: 'unit3-button',
        component: ButtonView
      },
      {
        path: 'card',
        name: 'unit3-card',
        component: CardView
      }
    ]
  },
  {
    path: '/unit4',
    name: 'unit4',
    component: Unit4ParentView,
    children: [
      {
        path: '',
        redirect: '/unit4/breakpoints'
      },
      {
        path: 'breakpoints',
        name: 'unit4-breakpoints',
        component: BreakpointsView
      }
    ]
  },
  {
    path: '/unit5',
    name: 'unit5',
    component: Unit5ParentView,
    children: [
      {
        path: '',
        redirect: '/unit5/pseudo-classes'
      },
      {
        path: 'pseudo-classes',
        name: 'unit5-pseudo-classes',
        component: PseudoClassesView
      }
    ]
  },
  {
    path: '/unit6',
    name: 'unit6',
    component: Unit6ParentView,
    children: [
      {
        path: '',
        redirect: '/unit6/apply-directive'
      },
      {
        path: 'apply-directive',
        name: 'unit6-apply-directive',
        component: ApplyDirectiveView
      },
      {
        path: 'customize-config',
        name: 'unit6-customize-config',
        component: CustomizeConfigView
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;