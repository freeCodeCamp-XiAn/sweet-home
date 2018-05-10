import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/home/Index'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Index',
            component: () =>
                import ('@/views/home/Index')
        },
    ]
})
