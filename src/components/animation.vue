<template>
	<div>
		<text>translate/translateX/translateY指定元素要移动到的位置。单位是长度或百分比，默认值是0.
rotate/rotateX/rotateYv0.16+ 指定元素将被旋转的角度。单位是度 角度度，默认值是0
scale/scaleX/scaleY按比例放大或缩小元素。单位是数字，默认值是1</text>
perspectivev0.16+ 观察者距离z=0平面的距离，在Android 4.1及以上有效。单位值数字，默认值为正无穷。
		<text>点击下面div</text>
		<div class="animation" ref="test" @click="animationMove(animationI)"></div>
	</div>
</template>
<script>
	// const animation = weex.requireModule('animation')
	const modal = weex.requireModule('modal')
	var that;
	export default {
		data() {
			return {
				animationI: 0,
			};
		},
		mounted() {
			that = this;
		},
		methods: {
			animationMove(a) {
				var testEl = that.$refs.test;
				console.log(a)
				if (a == 0) {
					that.$weexM.animation.transition(testEl, {
						styles: {
							color: '#FF0000',
							backgroundColor: 'blue',
							transform: 'translate(250px, 100px)',
							// width: '666px',
							transformOrigin: 'center center'
						},
						duration: 800, //ms
						timingFunction: 'ease',
						delay: 0, //ms
					}, function() {
						modal.toast({
							message: 'animation 完成'
						})
						that.animationI = 1;
					})
				} else {
					that.$weexM.animation.transition(testEl, {
						styles: {
							color: '#FF0000',
							backgroundColor: 'red',
							transform: 'translate(0, 0)',
							transformOrigin: 'center center'
						},
						duration: 800, //ms
						timingFunction: 'ease',
						delay: 0, //ms
					}, function() {
						modal.toast({
							message: 'animation 完成'
						})
						that.animationI = 0;
					})
				}

			}
		},
		computed: {},
		watch: {},
		components: {},
		computed: {},
		updated() {},
		created() {}
	};
</script>
<style>
	.animation {
		width: 100px;
		height: 100px;
		background: red;
	}
</style>
