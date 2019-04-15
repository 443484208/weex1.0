<template>
	<div>
		<text v-for="(item,index) in dataArry" :key="index" class="message" @click="toUrl(item.path)">跳转{{item.name}}</text>

	</div>
</template>
<script>
	export default {
		data() {
			return {
				dataArry: [],
			};
		},
		mounted() {
			console.log(this.dataArry = this.$router.options.routes);
			

		},
		methods: {
			toUrl(data) {
				this.$router.push({
					path: data,
					force: true
				});
			}
		},
		computed: {},
		watch: {

		},
		components: {},
		computed: {},
		updated() {},
		created() {}
	};
</script>
<style>
	.message {
		text-align: center;
		padding: 0.1rem;
		color: red;

	}
</style>
