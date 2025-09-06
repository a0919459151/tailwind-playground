import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

// Highlight.js
import 'highlight.js/styles/atom-one-dark.css'
import hljs from 'highlight.js/lib/core';
import xml from 'highlight.js/lib/languages/xml'; // XML for HTML
import hljsVuePlugin from "@highlightjs/vue-plugin";

hljs.registerLanguage('xml', xml);

createApp(App)
  .use(router)
  .use(hljsVuePlugin)
  .mount('#app')
