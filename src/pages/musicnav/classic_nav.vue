<template>
	<div class="">
		<musiclist :url="url"/>
	</div>
</template>

<script>
	import musiclist from "@/components/muselist"
	export default{
		data(){
			return{
				url:"/v1/restserver/ting?method=baidu.ting.billboard.billList&type=22&size=5&offset=0"
			}
		},
		components:{
			musiclist
		}
	}
</script>

<style>
</style>
