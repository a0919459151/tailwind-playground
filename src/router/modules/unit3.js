import Unit3ParentView from '../../views/Unit3View.vue';
import ButtonView from '../../views/unit3/ButtonView.vue';
import CardView from '../../views/unit3/CardView.vue';

const routes = {
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
};

export default routes;