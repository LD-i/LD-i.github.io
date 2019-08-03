<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
	*{
		list-style: none;
		margin: 0px;
		padding: 0px;
	}
	body{
		background: gainsboro;
	}
	img{
		max-width: 100%;
	}
	a{
		color: #000000;
	}
	.active{
		color: red !important;
	}
</style>
