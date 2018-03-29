/*
* @Author: folgerfan
* @Date:   2018-03-29 11:21:47
* @Last Modified by:   folgerfan
* @Last Modified time: 2018-03-29 14:16:34
*/
import T from '../component/t.vue'

// import Vue from 'vue'
module.exports = function() {
	new Vue({
		el: '#content',
		template: '<T />',
		components: {
			T
		}
	})	
}
