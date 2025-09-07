import Unit1ParentView from '../../views/Unit1View.vue';
import TypographyView from '../../views/unit1/TypographyView.vue';
import BackgroundsView from '../../views/unit1/BackgroundsView.vue';

const routes = {
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
};

export default routes;