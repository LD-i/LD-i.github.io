<template>
	<div class="home">
		<Recommend title="今日推荐" type="1"/>
		<newsong/>
		<swiper/>
		<musicnav/>
		<keep-alive>
			<router-view/>
		</keep-alive>
		<Recommend title="网络歌曲" type="25"/>
	</div>
</template>

<script>
	import Recommend from "@/components/Today-Recommendation"
	import newsong from "@/components/new_song"
	import swiper from "@/components/swiper_banner"
	import musicnav from "./musicnav/music_nav"
	export default{
		name:"home",
		data(){
			return{
			}
		},
		components:{
			Recommend,
			newsong,
			swiper,
			musicnav
		}
	}
</script>

<style>
</style>
