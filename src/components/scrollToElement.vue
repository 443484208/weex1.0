<template>
	<div > 
	<scroller class="scroller">
		<div class='scrollToElement' :ref="'scrollToElement_'+item" v-for="(item,index) in scrollArry" :key="index">
			
			<text>{{item}}</text>
			
		</div>
		</scroller >
		<div  class='scrollToElement-fixed'>
		
		<div v-for="(item,index) in scrollArry" @click="scrollToElement(item)" :key="index">
			跳转到{{item}}
		</div>
			
		</div>

	</div>
</template>
<script>
	const dom = weex.requireModule('dom')
export default {
	data() {
		return {
			scrollArry:[0,1,2,3,4,5,6],
		};
	},
	mounted() {
		console.log(this.dataArry=this.$router.options.routes)
	},
	methods: {
		scrollToElement(data){
			const scrollToElementData='scrollToElement_'+data
			const el = this.$refs[scrollToElementData][0];
			console.log(el)
			dom.scrollToElement(el, {})
			// dom.scrollToElement(el, { offset: 0 })
		}
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
<style scoped>

	.scrollToElement{
		height: 5.5rem;
		width: 100%;
		border: 1px red solid;
	}
	.scrollToElement-fixed{
		position:fixed;
		width: 1.2rem;
		color: blue;
		background: red;
		right: 0;
		top: 30%;
	}
	
	  .scroller {
    width: 7rem;
    height: 700px;
    border-width: 3px;
    border-style: solid;
    border-color: rgb(162, 217, 192);
    margin-left: 25px;
  }
</style>