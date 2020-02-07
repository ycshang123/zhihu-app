<template>
	<div class="container">
		<div class="logo">
			<svg class="icon" fill="currentColor" viewBox="0 0 24 24" width="36" height="36">
				<path
					d="M7.667 3.667h11.466a1.2 1.2 0 0 1 1.2 1.2v13.066a2.4 2.4 0 0 1-2.4 2.4H6.467V4.867a1.2 1.2 0 0 1 1.2-1.2zM4.2 9.619h1.689v10.714H5.4a2.4 2.4 0 0 1-2.4-2.4V10.82a1.2 1.2 0 0 1 1.2-1.2zm5.178-2.38a.6.6 0 0 0-.6.6v.585a.6.6 0 0 0 .6.6h8.044a.6.6 0 0 0 .6-.6v-.586a.6.6 0 0 0-.6-.6H9.378zm0 3.57a.6.6 0 0 0-.6.6v.586a.6.6 0 0 0 .6.6h8.044a.6.6 0 0 0 .6-.6v-.585a.6.6 0 0 0-.6-.6H9.378zm0 3.572a.6.6 0 0 0-.6.6v.586a.6.6 0 0 0 .6.6h4.578a.6.6 0 0 0 .6-.6v-.586a.6.6 0 0 0-.6-.6H9.378z"
					fill-rule="evenodd"
				></path>
			</svg>
			<h2>最新专题</h2>
		</div>
		<div class="flex">
			<div class="table" v-for="(item, index) in specials" :key="index">
				<div class="cover"><img :src="item.banner" /></div>
				<div class="text">
					<div class="left">
						<h2>{{ item.title }}</h2>
						<span class="small_font">{{ item.viewCount }}浏览</span>
					</div>
					<div class="right"><button class="low_button blue_bts">关注专题</button></div>
				</div>
				<div class="intr">{{ item.introduction }}</div>
			</div>
		</div>
		<div class="flex-center">
			<router-link to="special/all"><button class="big_button gray_bts">查看更多专题</button></router-link>
		</div>
		<div class="logo">
			<svg class="icon" viewBox="0 0 24 24" width="36" height="36">
				<path
					d="M12 21.333a9.333 9.333 0 1 1 0-18.666 9.333 9.333 0 0 1 0 18.666zm-.66-11.287c.332.385.609.77.775 1.21.055-.054.665-.99.72-1.706.055-.385.126-1.616-.443-2.367-.443-.496-1.219-.77-1.884-.55a1.788 1.788 0 0 0-1.33 2.036c.887.276 1.607.771 2.161 1.377zm-1.33 1.541c.443-.055.941-.11 1.44 0 0-.055-.484-.936-1.108-1.486-.665-.496-1.33-.973-2.216-.771-.72.11-1.723.77-1.55 2.092.11.606.553 1.101 1.162 1.321.61-.605 1.44-1.046 2.272-1.156zm2.714.165c.056 0 1.164.055 1.828-.165.72-.275 1.412-.68 1.773-1.541.11-.276.23-1.248-.443-1.872-.72-.716-1.717-.716-2.438-.165.222.825.063 1.966-.11 2.532-.103.348-.333.88-.61 1.211zm-1.44.55c-.056 0-1.33.056-1.828.221-.72.275-1.447.668-1.773 1.541-.11.276-.21 1.26.443 1.872.665.661 1.718.661 2.438.11-.295-.811-.166-1.761.055-2.477.166-.495.388-.936.665-1.266zm5.041-.99c-.665.605-1.44.99-2.327 1.211-.443.055-.941.11-1.44 0 0 .055.554.991 1.108 1.431.665.496 1.385.771 2.216.771.72-.11 1.678-.692 1.551-2.092-.055-.605-.554-1.101-1.108-1.321zm-3.656 2.642a3.475 3.475 0 0 1-.776-1.156c-.055.055-.665.991-.72 1.707-.055.385-.101 1.506.499 2.312.443.496 1.218.77 1.883.55.887-.275 1.496-1.1 1.33-2.036a5.38 5.38 0 0 1-2.216-1.377z"
					fill-rule="evenodd"
				></path>
			</svg>
			<h2>圆桌讨论</h2>
		</div>
		<div class="flex">
			<div class="table" v-for="(item, index) in tables" :key="index">
				<div class="table-cover" ref="box">
					<img :src="item.banner" ref="img" />
					<div class="sub-title">{{ item.name }}</div>
					<div class="table-text">
						<span>越是前景光明；越要居安思危。打败你的不一定是你的敌人；而是自己的固步自封。无论企业、个人、还是国家都需要找到标杆，发现差距，才能...</span>
					</div>
					<div class="info">
						<div class="small_font">
							<span>该圆桌包含了{{ item.includeCount }}讨论内容</span>
						</div>
						<button class="low_button white_btn">关注圆桌</button>
					</div>
				</div>
				<div class="bottom">
					<div class="question">
						<p>就本科教育而言，美国大学和中国大学各自的优缺点是什么？</p>
						<p class="small_font">13个回答</p>
					</div>
					<div class="question">
						<p>造成当今社会中国医患关系如此紧张的原因有哪些？</p>
						<p class="small_font">41个回答</p>
					</div>
				</div>
			</div>
		</div>
		<div class="flex-center">
			<router-link to="roundtable"><button class="big_button gray_bts">查看更多圆桌</button></router-link>
		</div>
		<div class="logo">
			<svg class="icon"  viewBox="0 0 24 24" width="36" height="36">
				<path
					d="M5.515 19.64l.918-5.355-3.89-3.792c-.926-.902-.639-1.784.64-1.97L8.56 7.74l2.404-4.871c.572-1.16 1.5-1.16 2.072 0L15.44 7.74l5.377.782c1.28.186 1.566 1.068.64 1.97l-3.89 3.793.918 5.354c.219 1.274-.532 1.82-1.676 1.218L12 18.33l-4.808 2.528c-1.145.602-1.896.056-1.677-1.218z"
					fill-rule="evenodd"
				></path>
			</svg>
			<h2>热门收藏夹</h2>
		</div>
		<div class="flex">
			<div class="table flex-center" v-for="(item,index) in favourite" :key="index">
				<div class="inline-box">
					<div class="top">
						<div class="box-top flex-between">
							<h3>{{item.title}}</h3>
							<button class="low_button blue_bts">关注收藏夹</button>
						</div>
						<div class="box-bottom flex-around">
							<img :src ="item.creatorAvatar" class="avatar" />
							<span>{{item.creatorName}}</span>
							
							<span class="small_font" >创建</span>
							<span class="small_font">｜</span>
							<span class="small_font">{{item.followers}}人关注</span>
						</div>
					</div>
					<div class="middle">
						<div class="content">
							<h4>{{item.questionTitle}}</h4>
							<span>{{item.answerAuthorName}}:{{item.answerContent.substring(0,20)}}...</span>
							<div class="conntent-box">
								<div class="gray-box">回答</div>
								<span class="small_font">{{item.voteupCount}}赞同·</span>
								<span class="small_font">{{item.commentCount}}评论</span>
							</div>
						</div>
						<div class="content">
							<h4>{{item.questionTitle}}</h4>
							<span>{{item.answerAuthorName}}:{{item.answerContent.substring(0,20)}}...</span>
							<div class="conntent-box">
								<div class="gray-box">回答</div>
								<span class="small_font">{{item.voteupCount}}赞同·</span>
								<span class="small_font">{{item.commentCount}}评论</span>
							</div>
						</div>
				
					</div>
					<span class="middle-title">已收藏{{item.totalCount}}条内容〉</span>
				</div>
			</div>
		</div>
		
		<div class="flex-center">
			<router-link to="favourite"><button class="big_button gray_bts">查看更多收藏夹</button></router-link>
		</div>
		<div class="logo">
			<svg class="icon"  viewBox="0 0 24 24" width="36" height="36">
				<path
					d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm4.043-15.524a.745.745 0 0 0-1.053.017l-6.857 7.071 2.237 2.17 6.857-7.071a.743.743 0 0 0-.016-1.052l-1.168-1.135zm-9.028 9.476l-.348 1.381 1.37-.39 1.274-.36-1.973-1.916-.323 1.285z"
					fill-rule="evenodd"
				></path>
			</svg>
			<h2>专栏</h2>
		</div>
		<div class="columns-flex">
			<div class="little-box" v-for="(item,index) in columns" :key="index">
				<img :src="item.imageUrl" class="imageUrl" />
				<h4>{{item.title}}</h4>
				<span class="small_font">{{item.followers}}关注·{{item.articlesCount}}文章</span>
				<span>{{item.description.substring(0,10)}}...</span>
				<button class="low_button blue_bts">进入专栏</button>
			</div>
		</div>
		
		<div class="flex-center">
			<router-link to="column"><button class="big_button gray_bts">查看更多专栏</button></router-link>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			specials: [],
			tables: [],
			favourite:[],
			columns:[],
			dominant: '',
			secondary: ''
		};
	},
	created() {
		this.axios.get('http://localhost:8080/api/special').then(res => {
			this.specials = res.data.data;
		});
		this.axios.get('http://localhost:8080/api/table').then(res => {
			this.tables = res.data.data;
		});
		this.axios.get('http://localhost:8080/api/favourite').then(res =>{
			this.favourite = res.data.data;
		})
		this.axios.get('http://localhost:8080/api/column').then(res =>{
			this.columns = res.data.data;
		})
		this.$nextTick(() => {
			let box = this.$refs.box;
			let img = this.$refs.img;
			RGBaster.colors(img, {
				success: function(payload) {
					console.log('主色:' + payload.dominant + ',次色' + payload.secondary);
					this.dominant = payload.dominant;
					this.secondary = payload.secondary;
				}
			});
		});
	}
};
</script>

<style scoped>

.logo {
	height: 70px;
	display: flex;
	align-items: center;
	width: 100%;
}
.table {
	width: 45%;
	height: 400px;
	border-radius: 10px;
	background: #ffffff;
}
.content{
	width: 100%;
	height: 30%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
}
.top{
	width: 100%;
	height: 20%;
	border-bottom: 2px solid #c7baae;
	display: flex;
	flex-direction: column;
}
.box-top{
	width: 100%;
	height: 50%;
}
.box-bottom{
	width: 50%;
}
.inline-box{
	width: 90%;
	height: 90%;
}

.cover {
	width: 100%;
	height: 60%;
}
.cover img {
	width: 100%;
	height: 100%;
	border-radius: 5px;
}
.text {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-left: 20px;
}
.sub-title {
	color: #ffffff;
	font-size: 22px;
	position: absolute;
	top: 80px;
	left: 10px;
	z-index: 22;
	font-weight: 800;
}
.table-cover {
	width: 100%;
	height: 65%;
	position: relative;
	border-radius: 5px;
}
.table-cover img {
	width: 100%;
	height: 100%;
	border-radius: 5px;
}
.info {
	width: 95%;
	display: flex;
	position: absolute;
	height: 40px;
	justify-content: space-between;
	bottom: 20px;
	align-items: flex-end;
	left: 10px;
}
.table-text {
	width: 60%;
	position: absolute;
	top: 120px;
	font-size: 14px;
	color: #ffffff;
	left: 10px;
}
.bottom {
	width: 100%;
	height: 30%;
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-direction: column;
}
.question {
	width: 90%;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-direction: column;
	height: 12%;
}
.middle{
	height: 70%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
}
.gray-box{
	background:#f6f6f6;
	color:#9999b1 ;
	width: 30px;
	height: 20px;
	font-size: 12px;
	margin-right: 10px;
	}
	.conntent-box{
		width: 100%;
		height: 20%;
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}
	.little-box{
		width: 21%;
		height: 320px;
		border-radius: 5px;
		background: #FFFFFF;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}
	.columns-flex{
		display: flex;
		justify-content: space-around;
		align-content: space-around;
		margin: 10px;
	}
	.imageUrl{
		width: 80px;
		height: 80px;
		border-radius: 50%;
	}
</style>
