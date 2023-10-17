import { createApp } from 'vue'
import App from './App.vue'
import myGlobalComponent from './components/myGlobalComponent.vue';
const app = createApp(App)
app.component('my-global-component',myGlobalComponent )
app.mount('#app')
