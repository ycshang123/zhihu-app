<template>
	<div>
		<div class="header">
			<div class="left">
				<img src="../assets/image/blueFont.png" class="padding-left" />
				<div>
					<input type="text" placeholder="搜索你感兴趣的内容" class="input_text" />
					<button class="small_btn explore"><img src="../assets/image/explore.png" class="img_explore" /></button>
				</div>

				<span class="nav-font">首页</span>
				<span class="nav-font">发现</span>
				<span class="nav-font">消息</span>
			</div>
			<!-- <img src="../assets/image/blueFont.png" class="padding-left">
			<div>
			<input type="text" placeholder="搜索你感兴趣的内容" class="input_text">	
			<button class="small_btn explore">
				<img src="../assets/image/explore.png" class="img_explore">
			</button>
			</div>
			
			<span class="nav-font">首页</span>
			<span class="nav-font">发现</span>
			<span class="nav-font" >消息</span> -->
			<div class="right">
				<button class="nomal_button explore">提问</button>
				<span class="nav-font">去登录</span>
			</div>
			<!-- <button class="nomal_button explore">提问</button>
			<span class="nav-font">去登录</span> -->
		</div>
		<div class="container">
			<div class="tip">
				<h4>圆桌</h4>
				<h5 style="color: #3294ff;">举办圆桌</h5>
			</div>
			<div class="content">
				<div class="box" v-for="(item, index) in tables" :key="index">
					<div class="block">
						<img :src="item.banner" class="cover" />
						<div class="name">
						<div class="sub-title">
							{{item.name}}
						</div></div>
					</div>
					<!-- <img :src="item.banner" class="cover" />
					<span class="name">{{item.name}}</span> -->
					<span class="small_font">该圆桌被浏览{{item.visitsCount}}次</span>
					</div>
				
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			tables: []
		};
	},
	created() {
		this.axios.get('http://localhost:8080/api/table/all').then(res => {
			this.tables = res.data.data;
		});
	}
};
</script>

<style scoped>
.header {
	width: 100%;
	height: 40px;
	background: #0664c2;
	display: flex;
	align-items: center;
	justify-content: space-around;
	margin-bottom: 10px;
}
.input_text {
	width: 300px;
	height: 25px;
	border-radius: 3px;
}
.img_explore {
	width: 15px;
	height: 15px;
}
.left {
	width: 50%;
	display: flex;
	justify-content: space-around;
	align-items: center;
}
.right {
	display: flex;
	width: 12%;
	justify-content: space-around;
	align-items: center;
}
.tip {
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 50px;
	padding-left: 10px;
	padding-right: 10px;
	margin-bottom: 5px;
	background: #ffffff;
}
.content {
	display: flex;
	align-items: center;
	justify-content: space-around;
	flex-wrap: wrap;
	background: #ffffff;
}
.box {
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	width: 22%;
	height: 220px;
	padding-top: 10px;
}
.cover {
	width: 100%;
	height: 100%;
	border-radius: 10px;
	z-index: -1;
}
.name{
	width: 100%;
	height: 100%;
	position: absolute;
	z-index: 20;
	bottom: 0;
	color: #FFFFFF;
	font-size: 500;
	border-radius:10px;
	background-color: rgba(40, 44, 53,0.2);
}
.sub-title{
	color: #FFFFFF;
	font-size: 500;
	position: absolute;
	z-index: 22;
	left: 2px;
	bottom: 10px;
}
.block{
	width: 85%;
	height: 88%;
	position: relative;
}


</style>
