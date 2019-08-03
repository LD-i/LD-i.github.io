import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Home from '@/pages/home'
import Artists from '@/pages/artists'
import Listcate from '@/pages/listcate'
import Uncenter from '@/pages/uncenter'
import Search from '@/pages/search'
import Hot from '@/pages/musicnav/hot_nav'
import News from '@/pages/musicnav/news_nav'
import Classic from '@/pages/musicnav/classic_nav'
import More from '@/pages/more'
import MusicPlay from '@/pages/musicplay'
import artistsDetails from '@/pages/artistsDetails/artistsDetails'
Vue.use(Router)

export default new Router({
	name:"active",
	routes:[
		{
			path: '/',
			name: 'Index',
			component: Index,
			redirect:"/home",
			children:[
				{
					path: 'home',
					name: 'home',
					redirect:"/home/hot",
					component: Home,
					children:[
						{
							path:'hot',
							name:'hot',
							component:Hot
						},
						{
							path:'news',
							name:'news',
							component:News
						},
						{
							path:'classic',
							name:'classic',
							component:Classic
						}
					]
				},
				{
					path: '/artists',
					name: 'artists',
					component: Artists,
				},
				{
					path: '/listcate',
					name: 'listcate',
					component: Listcate,
				},
				{
					path: '/uncenter',
					name: 'uncenter',
					component: Uncenter,
				},
				{
					path: '/search',
					name: 'search',
					component: Search,
				},
				{
					path: '/more',
					name: 'more',
					component: More,
				},
				{
					path:'artistsDetails',
					name:'ArtistsDetails',
					component:artistsDetails
				}
			]
		},
		{
			path:'/musicplay',
			name:'musicplay',
			component:MusicPlay
		}
	]
})
	