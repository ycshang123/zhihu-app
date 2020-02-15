<template>
	<div>
		<div class="tab flex-around">
			<div class="left_tab flex-around ">
				<div class="tab-box" v-for="(title, index) in tabTitle" @click="change(index)" :class="{ active: cur == index }" :key="index">{{ title }}</div>
			</div>
			<div class="right_tab">
				<button class="radiusSmall-btn flex-center">
					展开
					<svg class="Zi Zi--ArrowDown HotListNav-expandButtonIcon" width="10" height="10" fill="currentColor" viewBox="0 0 24 24">
						<path
							d="M12 13L8.285 9.218a.758.758 0 0 0-1.064 0 .738.738 0 0 0 0 1.052l4.249 4.512a.758.758 0 0 0 1.064 0l4.246-4.512a.738.738 0 0 0 0-1.052.757.757 0 0 0-1.063 0L12.002 13z"
							fill-rule="evenodd"
						></path>
					</svg>
				</button>
			</div>
		</div>
		<!-- 切换的内容 -->
		<div>
			<div v-for="(content, index) in tabContent" v-show="cur == index" :key="index">
				<div class="box flex-center" v-for="(item, index1) in content" :key="index1">
					<div class="inline-box">
						<div class="left">
							<h3 class="orange-title" v-if="index1 < 3">{{ index1 + 1 }}</h3>
							<h3 class="gray-title" v-else>{{ index1 + 1 }}</h3>
						</div>
						<div class="right">
							<div class="content" v-if="!item.children[0].thumbnail">
								<h3>{{ item.target.title }}</h3>
								<p>{{ item.target.excerpt }}</p>
								<div class="bottom-box">
									<div class="item">
										<svg fill="#9fadc7" viewBox="0 0 24 24" width="18" height="18">
											<path
												d="M14.553 20.78c.862-.651 1.39-1.792 1.583-3.421.298-2.511-.656-4.904-2.863-7.179.209 2.291.209 3.73 0 4.314-.41 1.143-1.123 1.983-1.91 2.03-1.35.079-2.305-.512-2.863-1.774-.676 1.25-.782 2.556-.318 3.915.31.906.94 1.684 1.89 2.333C7.144 20.131 5 17.336 5 14.022c0-2.144.898-4.072 2.325-5.4.062 2.072.682 3.598 2.13 4.822-.67-1.112-.734-2.11-.734-3.517 0-3.253 2.067-6.007 4.913-6.927a7.35 7.35 0 0 0 2.157 4.918C17.722 9.214 19 11.463 19 14.022c0 3.073-1.844 5.7-4.447 6.758z"
												fill-rule="evenodd"
											></path>
										</svg>
										<span class="middle_font" v-if="index1==1" >置顶</span>
										<span class="middle_font" v-else>{{ item.detail_text }}</span>
									</div>
									<div class="item">
										<svg fill="#9fadc7" viewBox="0 0 24 24" width="1.2em" height="1.2em">
											<path
												d="M2.931 7.89c-1.067.24-1.275 1.669-.318 2.207l5.277 2.908 8.168-4.776c.25-.127.477.198.273.39L9.05 14.66l.927 5.953c.18 1.084 1.593 1.376 2.182.456l9.644-15.242c.584-.892-.212-2.029-1.234-1.796L2.93 7.89z"
												fill-rule="evenodd"
											></path>
										</svg>
										<span class="middle_font">分享</span>
									</div>
								</div>
							</div>
							<div class="content1" v-else>
								<div class="left-content">
									<h3>{{ item.target.title }}</h3>
									<span>{{ item.target.excerpt.substring(0,20)}}</span>
									<div class="bottom-box">
										<div class="item">
											<svg fill="#9fadc7" viewBox="0 0 24 24" width="18" height="18">
												<path
													d="M14.553 20.78c.862-.651 1.39-1.792 1.583-3.421.298-2.511-.656-4.904-2.863-7.179.209 2.291.209 3.73 0 4.314-.41 1.143-1.123 1.983-1.91 2.03-1.35.079-2.305-.512-2.863-1.774-.676 1.25-.782 2.556-.318 3.915.31.906.94 1.684 1.89 2.333C7.144 20.131 5 17.336 5 14.022c0-2.144.898-4.072 2.325-5.4.062 2.072.682 3.598 2.13 4.822-.67-1.112-.734-2.11-.734-3.517 0-3.253 2.067-6.007 4.913-6.927a7.35 7.35 0 0 0 2.157 4.918C17.722 9.214 19 11.463 19 14.022c0 3.073-1.844 5.7-4.447 6.758z"
													fill-rule="evenodd"
												></path>
											</svg>
											<span class="middle_font" v-if="index1+1==1" >置顶</span>
											<span class="middle_font" v-else>{{ item.detail_text}}</span>
										</div>
										<div class="item">
											<svg fill="#9fadc7" viewBox="0 0 24 24" width="1.2em" height="1.2em">
												<path
													d="M2.931 7.89c-1.067.24-1.275 1.669-.318 2.207l5.277 2.908 8.168-4.776c.25-.127.477.198.273.39L9.05 14.66l.927 5.953c.18 1.084 1.593 1.376 2.182.456l9.644-15.242c.584-.892-.212-2.029-1.234-1.796L2.93 7.89z"
													fill-rule="evenodd"
												></path>
											</svg>
											<span class="middle_font">分享</span>
										</div>
									</div>
								</div>
								<div class="rignt-img">
									<img :src="item.children[0].thumbnail">
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="bottom flex-center">
				<span class="nomal_font ">ᅳ没有更多内容ᅳ</span>
			</div>
			
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			tabTitle: ['全站', '科学', '数码', '体育', '时尚', '影视'],
			category: ['total', 'science', 'digital', 'sport', 'fashion', 'film'],
			tabContent: [[], [], [], [], [], []],
			cur: 0
		};
	},
	created() {
		this.axios.get('/api/hot-lists/total').then(res => {
			this.tabContent.splice(0, 0, res.data.data.data);
		});
	},
	methods: {
		change(index) {
			this.cur = index;
			//取出对应的参数数组的值
			let param = this.category[index];
			//发起对应请求
			this.axios.get('/api/hot-lists/' + param).then(res => {
				this.tabContent.splice(index, 0, res.data.data.data);
			});
			if (param == 'total') {
				this.$router.push('/home/hot');
			} else {
				this.$router.push('/home/hot?list=' + param);
			}
		}
	}
};
</script>

<style scoped>
.tab {
	height: 70px;
	border-bottom: 1px solid #f0f2f7;
	display: flex;
	align-items: center;
}
.inline-box {
	width: 95%;
	height: 85%;
	display: flex;
	justify-content: space-around;
	align-items: center;
}
.gray-title {
	color: #999999;
}
.orange-title {
	color: #ff961e;
}
.left_tab {
	width: 70%;
}
.right_tab {
	width: 10%;
}
.tab-box {
	width: 60px;
	height: 30px;
	background: #f6f6f6;
	color: #646464;
	font-size: 14px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
}
.active {
	width: 60px;
	height: 30px;
	background-color: #e6f3ff;
	color: #0c89ff;
	font-size: 14px;
	display: flex;
	align-items: center;
	justify-content: center;
}
.box {
	width: 100%;
	height: 140px;
	border-bottom: 1px solid #f0f2f7;
	background: #ffffff;
}
.left {
	width: 10%;
}
.right {
	width: 90%;
	height: 100%;
}
.content {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: flex-start;
}
.bottom-box {
	width: 100%;
	height: 20%;
	display: flex;
	align-items: center;
	justify-content: flex-start;
}
.item {
	width: 40%;
	display: flex;
	align-items: center;
}
.content1{
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-around;
}
.left-content{
	width: 62%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: flex-start;
}
.rignt-img{
	width: 35%;
	height: 100%;
}
.rignt-img img{
	width: 100%;
	height: 100%;
	border-radius: 5px;
}
.bottom{
	height: 60px;
	background: #f6f6f6;
}
</style>
