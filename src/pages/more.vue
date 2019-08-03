<template>
	<div class="more-list">
		<div class="wrapper">
			<h3>
				{{this.$route.params.title}}
			</h3>
			<VuePullRefresh :on-refresh="onRefresh">
			<router-link to="/musicplay" tag="div" class="info url log" v-for="(item,index) in morelist" :key="index">
				<div class="poster" >
					<img :src="item.pic_big" :alt="item.title"/>
				</div>
				<div class="text-wrap">
					<div class="title">{{item.title}}</div>
					<div class="author">{{item.artist_name}}</div>
				</div>
			</router-link>
			</VuePullRefresh>
		</div>
	</div>
</template>

<script>
	import VuePullRefresh from 'vue-pull-refresh'
	
	export default{
		name:"more",
		data(){
			return{
				morelist:[],
				offset:0
			}
		},
		components: {
			VuePullRefresh
		},
		mounted(){
			const morelistUrl=this.HOST+"/v1/restserver/ting?method=baidu.ting.billboard.billList&type="+this.$route.params.musictype+"&size=12&offset=0";
			this.$axios.get(morelistUrl)
			.then(res=>{
				console.log(res.data)
				this.morelist=res.data.song_list
				this.offset=this.offset+12
			})
			.catch(error=>{
				console.log(error)
			})
		},
		methods:{
			onRefresh:function(){
				var that=this;
				const morelistUrl=this.HOST+"/v1/restserver/ting?method=baidu.ting.billboard.billList&type="+this.$route.params.musictype+"&size=12&offset="+this.offset;
				return new Promise(function(resolve,reject){
					setTimeout(()=>{
						that.$axios.get(morelistUrl)
						.then(res=>{
							console.log(res.data);
							that.offset>=res.data.billboard.billboard_songnum-12?console.log("没有数据了"):that.offset+=12,
							that.morelist=res.data.song_list
						})
						.catch(error=>{
							console.log(error)
						})
					})
				})
			}
		}
	}
</script>

<style scoped="scoped">
	.wrapper {
    padding-top: 13px;
    text-align: center;
    margin-bottom: 10px;
    background: #fff;
    clear: both;
    overflow: hidden;
}

h3{
  font-size: 22px;
  text-align: left;
  margin-left: 17px;
  margin-bottom: 5px;
}

.wrapper .info {
    width: 42%;
    float: left;
    text-align: center;
    padding-left: 17px;
    display: block;
    text-align: left;
    margin-bottom: 10px;
    position: relative;
}
.author{
	font-size: 10px;
    color:#999999;
}
</style>
