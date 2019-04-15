<template>
  <div class="wrapper">
    
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
    }
  },
	mounted() {
		window.onresize = function() {
			// 浏览器窗口变化后需要做的事情
			document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px'
			// 
			// 
		}
		document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px'
	}
}
</script>

<style>
	*{
		padding: 0;
		margin: 0;
	}

  .greeting {
    text-align: center;
    margin-top: 70px;
    font-size: 50px;
    color: #41B883;
  }
  .message {
    margin: 30px;
    font-size: 32px;
    color: #727272;
  }
</style>
