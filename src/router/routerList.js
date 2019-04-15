/*global Vue*/
import HelloWorld from '@/components/HelloWorld'
import animation from '@/components/animation'
import scrollToElement from '@/components/scrollToElement'
import stream from '@/components/stream'
const routes = [{
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
export default routes;