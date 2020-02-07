<template>
	<div>
		<div class="bar flex-around shadow">
			<svg viewBox="0 0 200 91" class="icon" width="64" height="30" aria-hidden="true" style="height: 30px; width: 64px;">
				<title></title>
				<g>
					<path
						d="M53.29 80.035l7.32.002 2.41 8.24 13.128-8.24h15.477v-67.98H53.29v67.978zm7.79-60.598h22.756v53.22h-8.73l-8.718 5.473-1.587-5.46-3.72-.012v-53.22zM46.818 43.162h-16.35c.545-8.467.687-16.12.687-22.955h15.987s.615-7.05-2.68-6.97H16.807c1.09-4.1 2.46-8.332 4.1-12.708 0 0-7.523 0-10.085 6.74-1.06 2.78-4.128 13.48-9.592 24.41 1.84-.2 7.927-.37 11.512-6.94.66-1.84.785-2.08 1.605-4.54h9.02c0 3.28-.374 20.9-.526 22.95H6.51c-3.67 0-4.863 7.38-4.863 7.38H22.14C20.765 66.11 13.385 79.24 0 89.62c6.403 1.828 12.784-.29 15.937-3.094 0 0 7.182-6.53 11.12-21.64L43.92 85.18s2.473-8.402-.388-12.496c-2.37-2.788-8.768-10.33-11.496-13.064l-4.57 3.627c1.363-4.368 2.183-8.61 2.46-12.71H49.19s-.027-7.38-2.372-7.38zm128.752-.502c6.51-8.013 14.054-18.302 14.054-18.302s-5.827-4.625-8.556-1.27c-1.874 2.548-11.51 15.063-11.51 15.063l6.012 4.51zm-46.903-18.462c-2.814-2.577-8.096.667-8.096.667s12.35 17.2 12.85 17.953l6.08-4.29s-8.02-11.752-10.83-14.33zM199.99 46.5c-6.18 0-40.908.292-40.953.292v-31.56c1.503 0 3.882-.124 7.14-.376 12.773-.753 21.914-1.25 27.427-1.504 0 0 3.817-8.496-.185-10.45-.96-.37-7.24 1.43-7.24 1.43s-51.63 5.153-72.61 5.64c.5 2.756 2.38 5.336 4.93 6.11 4.16 1.087 7.09.53 15.36.277 7.76-.5 13.65-.76 17.66-.76v31.19h-41.71s.88 6.97 7.97 7.14h33.73v22.16c0 4.364-3.498 6.87-7.65 6.6-4.4.034-8.15-.36-13.027-.566.623 1.24 1.977 4.496 6.035 6.824 3.087 1.502 5.054 2.053 8.13 2.053 9.237 0 14.27-5.4 14.027-14.16V53.93h38.235c3.026 0 2.72-7.432 2.72-7.432z"
						fill-rule="evenodd"
					></path>
				</g>
			</svg>
			<button class="bar_btn">
				<svg fill="#0084ff" viewBox="0 0 24 24" width="24" height="24">
					<path
						d="M18.453 7.992l-1.833-1.65.964-.978a1.223 1.223 0 0 1 1.73-.012l.005.006a1.24 1.24 0 0 1 .007 1.748l-.873.886zm-1.178 1.194l-5.578 5.66-1.935.697a.393.393 0 0 1-.504-.504l.697-1.935 5.488-5.567 1.832 1.65zM7.58 5.848l5.654.006-1.539 1.991-3.666.012A1.02 1.02 0 0 0 7 8.868v7.993c0 .558.46 1.01 1.029 1.01l7.941-.01c.568 0 1.03-.453 1.03-1.012v-4.061l2-1.442v6.002c0 1.397-1.2 2.501-2.62 2.501H7.574C6.153 19.85 5 18.717 5 17.32V8.35c0-1.397 1.16-2.502 2.58-2.502z"
					></path>
				</svg>
				写文章
			</button>
		</div>
		<div class="container">
			<div class="bac flex-center"><img src="../assets/image/column.png" /></div>

			<div class="text">
				<span class="title">随心写作，自由表达</span>
				<div class="box">
					<button class="article-btn">开始写文章</button>
					<span class="green-title">申请开通专栏〉</span>
				</div>
				<h4>专栏·发现</h4>
			</div>
			<div class="content">
				<div class="content-box flex-center" v-for="(item,index) in columns" :key="index">
					<div class="inline-box">
						<img :src="item.imageUrl" class="imageUrl" />
						<h4>{{item.title}}</h4>
						<span class="nomal_font">{{item.description.substring(0,20)}}...</span>
						<span class="nomal_font">{{item.followers}}关注｜{{item.articlesCount}}文章</span>
						<button class="col-btn">进入专栏</button>
					</div>
				
				</div>
				<button  class="chang" @click="loadMore()"> 
				<svg class="Zi Zi--Refresh Button-zi" fill="currentColor" viewBox="0 0 24 24" width="1.2em" height="1.2em"><path d="M20 12.878C20 17.358 16.411 21 12 21s-8-3.643-8-8.122c0-4.044 3.032-7.51 6.954-8.038.034-1.185.012-1.049.012-1.049-.013-.728.461-1.003 1.057-.615l3.311 2.158c.598.39.596 1.026 0 1.418l-3.31 2.181c-.598.393-1.08.12-1.079-.606 0 0 .006-.606-.003-1.157-2.689.51-4.675 2.9-4.675 5.708 0 3.21 2.572 5.822 5.733 5.822 3.163 0 5.733-2.612 5.733-5.822 0-.633.51-1.148 1.134-1.148.625 0 1.133.515 1.133 1.148" fill-rule="evenodd"></path></svg>
				换一换</button>
			</div>
		</div>
		<div class="big-box">
			<div class="point flex-center">
				<div class="bottom-box flex-around">
					<div class="line-box flex-around">
						<span class="title">在知乎创作</span>
					</div>
					<button class="chang">申请专栏</button>
				</div>
			</div>
		</div>
		
		<div class="end">
			<span>© 2020 知乎 · 知乎专栏 · 圆桌·发现 · 移动应用 · 使用机构帐号登录 · 联系我们 · 来知乎工作</span>
			<span>
				京 ICP 证 110745 号 · 京 ICP 备 13052560 号 - 1 ·
				<img src="https://pic3.zhimg.com/80/v2-d0289dc0a46fc5b15b3363ffa78cf6c7.png" />
				京公网安备 11010802010035 号 · 出版物经营许可证
			</span>
		</div>
	</div>
</template>

<script>
export default {
	name: 'columns',
	data() {
		return {
			columns: [],
			count: 8,
			currentPage: 2
		};
	},
	created() {
		this.axios({
			method: 'post',
			url: 'http://localhost:8080/api/column/page',
			params: {
				count: this.count,
				currentPage: this.currentPage
			}
		}).then(res => {
			console.log(res.data.data);
			this.columns = res.data.data;
		});
	},
	methods: {
		loadMore() {
			this.currentPage = this.currentPage + 1;
			this.axios({
				method: 'post',
				url: 'http://localhost:8080/api/column/page',
				params: {
					count: this.count,
					currentPage: this.currentPage
				}
			}).then(res => {
				console.log(res.data.data);
				this.columns = res.data.data;
			});
		}
	}
};
</script>

<style scoped>
.bottom-box{
	width: 100%;
	height: 50%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	/* background: #0000FF; */
}
.line-box{
	width: 30%;
	height: 50%;
	border-top: 1px solid #97ffd8;
	border-bottom: 1px solid #97ffd8;
	
}
.bar {
	background: #ffffff;
	height: 60px;
	position: sticky;
	top: 0;
	z-index: 5;
}
.bac {
	height: 470px;
	position: relative;
	z-index: 2;
	background: url(../assets/image/columnBacground.png);
	background-repeat: no-repeat;
}
.box {
	width: 100%;
	height: 30%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
}
.title {
	font-size: 22px;
	font-weight: 300;
}
.text {
	width: 100%;
	height: 260px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
}
.end {
	text-align: center;
	background-color: white;
	margin-bottom: 150px;
}
.article-btn {
	width: 120px;
	height: 40px;
	/* background: #ffffff; */
	border: 1px solid #444444;
	color: #444444;
	border-radius: 5px;
}
.green-title {
	color: #11a668;
	font-size: 14px;
}
.point {
	width: 100%;
	height: 400px;
	background-image: linear-gradient(white 14px, transparent 0), linear-gradient(90deg, black 1px, transparent 0);
	background-size: 10px 15px, 15px 15px;
	position: absolute;
	/* z-index: ; */
	opacity: 0.8;
}
.content{
	width: 100%;
	height: 700px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	align-items: center;
	
}
.content-box{
	width: 23%;
	height: 45%;
	border-radius: 3px;
	background: #FFFFFF;
	
}
.imageUrl{
		width: 80px;
		height: 80px;
		border-radius: 50%;
	}
	.inline-box{
		width: 90%;
		height: 80%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}
	.col-btn{
		width:100px;
		height: 30px;
		border:1px solid #11a668;
		border-radius: 5px;
		color: #11a668;
		background: #FFFFFF;
	}
	.chang{
		width: 120px;
		height: 40px;
		border:1px solid #444444;
		border-radius: 5px;
		color: #444444;
		font-size: 14px;
		/* background: white; */
	}
	.big-box{
		width: 100%;
		height: 400px;
	}
</style>
