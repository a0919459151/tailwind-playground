import Unit6ParentView from '../../views/Unit6View.vue';
import ApplyDirectiveView from '../../views/unit6/ApplyDirectiveView.vue';

const routes = {
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
    }
  ]
};

export default routes;