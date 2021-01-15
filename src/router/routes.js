const routes = [{
        path: '/',
        redirect: "/index"
    },
    {
        path: '/index',
        name: 'index',
        component: () => import('../views/index.vue')

    },
    {
        path: '/privacPolicy',
        name: 'privacPolicy',
        component: () => import('../views/privacPolicy.vue')

    },
    {
        path: '/userServiceAgreement',
        name: 'userServiceAgreement',
        component: () => import('../views/userServiceAgreement.vue')

    },
    {
        path: '/serviceAgreement',
        name: 'serviceAgreement',
        component: () => import('../views/serviceAgreement.vue')

    }
]
export default routes