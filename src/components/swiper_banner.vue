<template>
	 <div class="banner">
		 <swiper :options="swiperOption">
		   <!-- slides -->
		   <swiper-slide>
		 		<img src="../assets/img/b1.jpg"/>
		 	</swiper-slide>
		   <swiper-slide>
		 		<img src="../assets/img/b2.jpg"/>
		 	</swiper-slide>
		   <swiper-slide>
		 		<img src="../assets/img/b3.jpg"/>
		 	</swiper-slide>
		   <!-- Optional controls -->
		   <div class="swiper-pagination"  slot="pagination"></div>
		 </swiper>
	 </div>
</template>

<script>
	import 'swiper/dist/css/swiper.css'
	import { swiper, swiperSlide } from 'vue-awesome-swiper'

	export default{
		data(){
			return{
				swiperOption:{
					pagination: {
						el: '.swiper-pagination',
					},
					autoplay:true,
				}
			}
		},
		components:{
			swiper,
			swiperSlide
		}
	}
</script>

<style scoped>
	.banner{
		padding: 10px;
	}
</style>
