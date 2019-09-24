// import AUTH from '../services/auth'
// let beforeEnter = (to, from, next) => {
//     next()
//     // AUTH.currentPath = to.path
//     // let userID = parseInt(localStorage.getItem('accout_id'))
//     // let token = localStorage.getItem('usertoken')
// }

// var devRoutes = []
// let app = require('router/app.js')
// devRoutes = devRoutes.concat(app.default.routes)
// for (let x = 0; x < devRoutes.length; x++) {
//     devRoutes[x]['beforeEnter'] = beforeEnter
// }

// let routes = [
//     {
//         path: '/login',
//         name: 'login',
//         component: resolve => require(['modules/Login.vue']),
//         beforeEnter: beforeEnter
//     }
// ]
// routes = routes.concat(devRoutes)
// export default {
//     routes: routes
// }

//import AUTH from 'services/auth'
let beforeEnter = (to, from, next) => {
    //AUTH.currentPath = to.path
    next()
}
var devRoutes = []
let app = require('router/app.js')

devRoutes = devRoutes.concat(app.default.routes)
for (var i = 0; i < devRoutes.length; i++) {
    devRoutes[i]['beforeEnter'] = beforeEnter
}



export default {
    routes: [{
        path: '/',
        name: 'home',
        component: resolve => require(['modules/Login.vue'], resolve),
        meta: {
            tokenRequired: false
        }
    }]
}
