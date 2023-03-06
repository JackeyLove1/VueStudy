import Vue from 'vue'
import Router from 'vue-router'

// 增加这一行, 作用是引入 SayHi 这个component
import SayHi from '@/components/SayHi'

Vue.use(Router)
export default new Router({
    routes: [

        // 增加下面几行, 表示定义了  /#/say_hi 这个url
        {
            path: '/say_hi',
            name: 'SayHi',
            component: SayHi
        },
    ]
})