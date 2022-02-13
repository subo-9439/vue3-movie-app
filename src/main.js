import { createApp } from 'vue'
import App from './App.vue'
//import router from './routes/index.js' 폴더이름만 명시해도 index.js파일을 알아서 임포트해줄 수 있다.
import store from './store'
import router from './routes'
import $loadImage from './plugins/loadImage'
import loadImage from './plugins/loadImage'

createApp(App)
.use(store) //$store
.use(router) // $route, $router
.use(loadImage)
.mount('#app')