import Vue from 'vue'
import VueRouter from 'vue-router'
import Explore from '../views/Explore.vue'
import Follow from '../views/Follow.vue'
import Home from '../views/Home.vue'
import Hot from '../views/Hot.vue'
import Login from '../views/Login.vue'
import Nav from '../views/Nav.vue'
import QuestionWaiting from '../views/QuestionWaiting.vue'
import Recommoned from '../views/Recommoned.vue'
import RoundTable from '../views/RoundTable.vue'
import Special from '../views/Special.vue'
import Favourite from '../views/Favourite.vue'
import Column from '../views/Column.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		component: Nav,
		children: [{
				path: '/',
				redirect: 'home'
			},
			{
				path: 'home',
				component: Home,
				children: [{
						path: '/',
						redirect: 'recommoned'
					},
					{
						path: 'recommoned',
						component: Recommoned
					},
					{
						path: 'follow',
						component: Follow
					},
					{
						path: 'hot',
						component: Hot
					}
				]
			},
			{
				path: 'explore',
				component: Explore
			},
			{
				path: 'special/all',
				component: Special
			},
			{
				path:'favourite',
				component:Favourite
			},
			
			{
				path: 'question/waiting',
				component: QuestionWaiting
			}
		]
	},
	{
		path: '/login',
		component: Login
	},
	{
		path:'/roundtable',
		component:RoundTable
	},
	{
		path:'/column',
		component:Column
	}
]

const router = new VueRouter({
	routes
})

export default router
