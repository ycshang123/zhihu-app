<template>
	<div>
		<div class="title flex-center">
			<div class="title-content">
				<svg class="icon" viewBox="0 0 24 24" width="32" height="32">
					<path
						d="M5.515 19.64l.918-5.355-3.89-3.792c-.926-.902-.639-1.784.64-1.97L8.56 7.74l2.404-4.871c.572-1.16 1.5-1.16 2.072 0L15.44 7.74l5.377.782c1.28.186 1.566 1.068.64 1.97l-3.89 3.793.918 5.354c.219 1.274-.532 1.82-1.676 1.218L12 18.33l-4.808 2.528c-1.145.602-1.896.056-1.677-1.218z"
						fill-rule="evenodd"
					></path>
				</svg>
				<h2>热门收藏夹</h2>
			</div>
		</div>
		<div class="container">
			<div class="box " v-for="(item, index) in favourite" :key="index">
				<div class="left">
					<h4>{{ item.questionTitle }}</h4>
					<div class="info flex-around ">
						<img :src="item.creatorAvatar" class="avatar" />
						<span>{{ item.creatorName }}</span>
						<span class="small_font">创建</span>
					</div>
					<div class="content-bottom flex-around">
						<button class="low_button blue_bts">关注收藏夹</button>
						<span class="nomal_font">{{ item.followers }}人关注</span>
					</div>
				</div>
				<div class="right">
					<div class="content">
						<h4>{{ item.questionTitle }}</h4>
						<span>{{ item.answerAuthorName }}:{{ item.answerContent.substring(0, 80) }}...</span>
						<div class="conntent-box">
							<div class="gray-box">回答</div>
							<span class="small_font">{{ item.voteupCount }}赞同·</span>
							<span class="small_font">{{ item.commentCount }}评论</span>
						</div>
					</div>

					<span class="middle-title">已收藏{{item.totalCount}}条内容〉</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			favourite: []
		};
	},
	created() {
		this.axios.get('http://localhost:8080/api/favourite/all').then(res => {
			this.favourite = res.data.data;
		});
	}
};
</script>

<style scoped>
.title {
	width: 100%;
	height: 120px;
	background: #ffffff;
}
.gray-box {
	background: #f6f6f6;
	color: #9999b1;
	width: 30px;
	height: 20px;
	font-size: 12px;
	margin-right: 10px;
}
.conntent-box {
	width: 100%;
	height: 20%;
	display: flex;
	align-items: center;
	justify-content: flex-start;
}
.title-content {
	width: 80%;
	height: 100%;
	display: flex;
	align-items: center;
}
.box {
	width: 100%;
	background: #ffffff;
	height: 180px;
	margin: 20px;
	display: flex;
	align-items: center;
	justify-content: space-around;
}
.left {
	width: 30%;
	height: 80%;
	border-right: 2px solid #ebebeb;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
}
.right {
	width: 65%;
	height: 80%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
}
.info {
	width: 40%;
	height: 30%;
	display: flex;
}
.content-bottom {
	width: 60%;
	height: 30%;
}
.content {
	width: 100%;
	height: 70%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: flex-start;
}
</style>
