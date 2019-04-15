<template>
	<div>
		<text>stream 提交 </text>
		
	</div>
</template>
<script>
export default {
	data() {
		return {
		};
	},
	mounted() {
		this.$http({
			method: 'GET',
			url: 'http://jsfiddle.net/echo/jsonp/?callback=anything&result=content_in_response',
			type: 'jsonp'
		}, function(ret) {
			console.log('ret=',ret)
		}, function(response) {
			console.log('get jsonp in progress:' + response.length);
		});
	},
	methods: {
		
	},
  computed: {
  },
	watch: {
	},
	components: {},
	computed: {
	},
  updated (){},
  created() {}
};
</script>
<style>
	
</style>

