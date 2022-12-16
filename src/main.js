import { createApp, defineAsyncComponent } from 'vue'
import App from './App.vue'
import TheHeader from './components/TheHeader.vue'
import './theme.css'
// import './assets/main.css'

// App -> AppNews  -> AppNewsList

const app = createApp(App)
app.component('async-component', defineAsyncComponent(() => {
	return import('./components/AppAsyncComponent.vue')
}))
app.component('the-header', TheHeader)
app.mount('#app')
