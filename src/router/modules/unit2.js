import Unit2ParentView from '../../views/Unit2View.vue';
import SpacingView from '../../views/unit2/SpacingView.vue';
import FlexboxView from '../../views/unit2/FlexboxView.vue';
import GridView from '../../views/unit2/GridView.vue';

const routes = {
  path: '/unit2',
  name: 'unit2',
  component: Unit2ParentView,
  children: [
    {
      path: '',
      name: 'unit2-redirect',
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
};

export default routes;