import { createApp } from "vue";
import App from "./App.vue";
import './style.css';
import router from './router'; // Importeer de router

const app = createApp(App);

app.use(router); // Voeg de router toe
app.mount('#app');
