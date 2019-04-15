import Vue from 'vue'
/*global Vue*/
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import animation from '@/components/animation'
import scrollToElement from '@/components/scrollToElement'
import stream from '@/components/stream'
console.log(animation)
Vue.use(Router)
const router = new Router({
	routes: [
		{
			path: '/',
			name: 'HelloWorld',
			component: HelloWorld,
			meta: {
				titile: '首页'
			},

		},
		{
			path: '/animation',
			name: 'animation',
			component: animation,
			meta: {
				titile: 'animation'
			},
		},
		{
			path: '/scrollToElement',
			name: 'scrollToElement',
			component: scrollToElement,
			meta: {
				titile: 'scrollToElement'
			},
		},
		{
			path: '/stream',
			name: 'stream',
			component: stream,
			meta: {
				titile: 'stream'
			},
		},
	]
})


//当路由开始跳转时
router.beforeEach((to, from, next) => {
	if (to.meta.title) {
		document.title = to.meta.title;
	}
	if (to.matched.length === 0) { //如果未匹配到路由
		next('/'); //如果上级也未匹配到路由则跳转登录页面，如果上级能匹配到则转上级路由
	} else {
		next(); //如果匹配到正确跳转
	}
});
router.afterEach(() => {
	// console.log('跳转结束')
})

export {
	router
}
