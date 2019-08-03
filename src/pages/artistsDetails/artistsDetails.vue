<template>
	<div class="">
		<Title :name="this.$route.params.name" :avatar="this.$route.params.avatar"/>
		<List :ting_uid="this.$route.params.ting_uid"/>
	</div>
</template>

<script>
	import Title from "../../components/titlelist/title"
	import List from "../../components/titlelist/list"
	export default{
		data(){
			return{
				
			}
		},
		components: {
			Title,
			List
		},
	}
</script>

<style>
</style>
