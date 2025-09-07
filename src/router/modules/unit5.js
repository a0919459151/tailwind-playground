import Unit5ParentView from '../../views/Unit5View.vue';
import PseudoClassesView from '../../views/unit5/PseudoClassesView.vue';

const routes = {
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
};

export default routes;