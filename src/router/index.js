import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import ReflectionView from '../views/ReflectionView.vue'
import InnovationRouteView from '../views/InnovationRoute.vue'
import ProjectWeekView from '../views/ProjectWeek.vue'
import BestSeminareView from '../views/BestSeminare.vue'

const routes = [
    { path: '/I-talent/', component: HomeView },
    { path: '/I-talent/projects', component: ProjectsView },
    { path: '/I-talent/reflection', component: ReflectionView },
    { path: '/I-talent/innovationroute', component: InnovationRouteView },
    { path: '/I-talent/projectweek', component: ProjectWeekView },
    { path: '/I-talent/thevaluehub', component: BestSeminareView },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router