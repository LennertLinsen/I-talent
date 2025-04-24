import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import ReflectionView from '../views/ReflectionView.vue'
import InnovationRouteView from '../views/InnovationRoute.vue'
import ProjectWeekView from '../views/ProjectWeek.vue'
import BestSeminareView from '../views/BestSeminare.vue'

const routes = [
    { path: '/', component: HomeView },
    { path: '/projects', component: ProjectsView },
    { path: '/reflection', component: ReflectionView },
    { path: '/innovationroute', component: InnovationRouteView },
    { path: '/projectweek', component: ProjectWeekView },
    { path: '/thevaluehub', component: BestSeminareView },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router