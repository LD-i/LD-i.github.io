<template>
	<div class="Navigation">
		<ul>
			<li>
				<router-link to="/home">
					<img src="../assets/logo-ea5.png"/>
				</router-link>
			</li>
			<li>
				<router-link to="/artists">
					歌手
				</router-link>
			</li>
			<li>
				<router-link to="/listcate">
					榜单
				</router-link>
			</li>
			<li>
				<router-link to="/uncenter">
					我的
				</router-link>
			</li>
			<li>
				<router-link to="/search">
					搜索
				</router-link>
			</li>
		</ul>
		<router-view/>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		}
	}
</script>

<style scoped>
	.Navigation{
		background: ghostwhite;
		width: 100%;
		height: 50px;
	}
	img{
		width: 30px;
		height: 30px;
		margin: 10px;
		vertical-align: middle;
	}
	li{
		display: inline-block;
		margin-left: 15px;
	}
	a{
		text-decoration: blink;
	}
</style>
