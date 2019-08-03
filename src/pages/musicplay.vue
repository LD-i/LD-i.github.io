<template>
	<div class="play">
		<div class="header">
			<div class="title">
				<router-link to="/">
					<i class="iconfont icon-shouye left"></i>
				</router-link>
				<div class="music-info">
					<p>{{music.songinfo.title}}</p>
					<p class="author">{{music.songinfo.author}}</p>
				</div>
				<router-link to="/search">
					<i class="iconfont icon-sousuo right"></i>
				</router-link>
			</div>
		</div>
		<div class="song-info">
			<div class="song-info-img">
				<img :src="music.songinfo.pic_big"/>
				<LRC :songid="this.$route.params.songid" :durationTime="durationTime" :currentTime="currentTime"></LRC>
			</div>
			<div class="iconbox">
				<i class="iconfont icon-shoucang2 left"></i>
				<i class="box"></i>
				<i class="iconfont icon-xiazai right"></i>
			</div>
		</div>
		<div class="song">
			<audio ref="player" :src="music.bitrate.show_link" controls="controls" autoplay="autoplay"></audio>
		</div>
	</div>
</template>

<script>
	import Vue from "vue"
	import "../assets/font/iconfont.css"
	const LRC=Vue.component("lrc",(resolve)=>require(["../components/LRC"],resolve))
	export default{
		data(){
			return{
				music:{
					songinfo:{
						title:"",
						author:""
					},
					bitrate:{
						show_link:"",
					}
				},
				currentTime:0,
				durationTime:0
			}
		},
		mounted(){
			const httpurl=this.HOST+"/v1/restserver/ting?method=baidu.ting.song.play&songid="+this.$route.params.songid;
			this.$axios.get(httpurl)
			.then(res=>{
				this.music=res.data
			})
			.catch(error=>{
				console.log(error)
			})
			this.addEventListeners();
		},
		beforeDestroyed(){
			this.removeEventListeners();
		},
		components:{
			LRC
		},
		methods: {
			_currentTime(){
				 // currentTime是audio标签提供的获取当前播放时间的方法
				this.currentTime=this.$refs.player.currentTime
			},
			_durationTime(){
				 // duration是audio标签提供的获得歌曲播放整体时间的方法
				this.durationTime=this.$refs.player.duration
			},
			addEventListeners(){
				this.$refs.player.addEventListener('timeupdate',this._currentTime),
				this.$refs.player.addEventListener('canplay',this._durationTime)
			},
			removeEventListeners(){
				this.$refs.player.removeEventListener('timeupdate',this._currentTime)
				this.$refs.player.removeEventListener('canplay',this._durationTime)
			}
		}
	}
</script>

<style scoped>


.header{
	padding:15px;
}

.music-info{
	flex: 1;
	font-size: 20px;
}

.title{
	display: flex;
	text-align: center;
}

.left{
	font-size: 30px;
}

.ca{
  color: red;
}

.right{
	font-size: 30px;
}

.song-info{
	padding: 15px;
}

.song-info-img{
	text-align: center;
}

.song-info-img img{
	width: 50%;
	border-radius: 5px;
	box-shadow: 0 0 10px 0 rgba(50,50,50,.31);
}

.song-lrc{
	margin-top: 10px;
  min-height: 50px;
}

.iconbox{
	display: flex;
	margin-top: 30px;
}

.iconbox .box{
	flex: 1;
}

.song{
	width: 100%;
	text-align: center;
}

.song audio{
	width: 80%;
}

.active{
  color: #222;
}

.author{
  font-size: 12px;
  color: #999;
}
*{
	text-decoration: blink;
}
</style>

