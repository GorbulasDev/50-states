import { createRouter, createWebHistory } from 'vue-router'

// Add components to be used by the router.
import StateList from '@/components/StateList'
import AboutSite from '@/components/AboutSite'
import StateMap from '@/components/StateMap'
import NotFound from '@/components/NotFound'
import StatesVisited from '@/components/StatesVisited'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'StateList',
            component: StateList
        },
        {
            path: '/about',
            name: 'AboutSite',
            component: AboutSite
        },
        {
            path: '/map/:state',
            name: 'StateMap',
            component: StateMap
        },
        {
            path: '/visitedstates',
            name: 'StatesVisited',
            component: StatesVisited
        },
        {
            // Any other route, not defined.
            // This has to be last.
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: NotFound
        }
    ]
})
