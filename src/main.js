import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia' // Import createPinia

// Highlight.js
import 'highlight.js/styles/atom-one-dark.css'
import hljs from 'highlight.js/lib/core';
import xml from 'highlight.js/lib/languages/xml'; // XML for HTML
import hljsVuePlugin from "@highlightjs/vue-plugin";

hljs.registerLanguage('xml', xml);

const app = createApp(App); // Create app instance

app.use(router);
app.use(createPinia()); // Use Pinia
app.use(hljsVuePlugin);

app.mount('#app');