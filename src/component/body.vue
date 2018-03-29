<template>
	<div>
		<span class="body">{{body}}</span>
		<img src="../../img/IMG_4597.jpg" style="width: 100px;">
		<button @click="change">aaa</button>
	</div>
</template>
<script>
import router from '../utils/router'
// console.log(router())
export default {
	data() {
		return {
			body: `This is body`,
			r: 'a'
		}
	},
	methods: {
		change() {
			require(`bundle-loader!../route/${this.r}`)(function(View) {
				console.log(View)
				$("#container").empty().html('<div id="content"></div>');
				this.r = 't'
				View()
			}.bind(this))
			// require.ensure('./js/a.js',function(require) {
			// 	require('./js/chunk.js')
			// })
		}
	},
	created() {
		let win = window;
		let getHast = function(url) {
			url = url || win.location.href;
			var match = url.match(/#(.*)$/);
			return match ? match[1] : ''
		}
		let hash = getHast("http://localhost:8080#view/bbb").slice(1,4);
		console.log(hash)
	}
}
</script>
<style scoped>
	.body {
		color: red;
		font-size: 29px;
	}
</style>