import Unit4ParentView from '../../views/Unit4View.vue';
import BreakpointsView from '../../views/unit4/BreakpointsView.vue';

const routes = {
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
};

export default routes;