import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'

createApp(App).use(router).mount('#app')

// tailwind.config.cjs
export default {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: '#38bdf8', // sky-400
                accent: '#a78bfa', // violet-400
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}