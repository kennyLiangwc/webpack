/*
* @Author: KennyLiangwc
* @Date:   2018-03-27 15:02:28
* @Last Modified time: 2018-03-29 14:14:51
*/
// console.log(6666666)
import Vue from 'vue'
// console.log('Vue',Vue);
import Hearder from './component/header.vue'
import Body from './component/body'
import css from '../css/style.css'

// require.ensure('./js/a.js',function(require) {
// 	require('./js/chunk.js')
// })
// require.ensure()


window.Vue = Vue;

new Vue({
	el: "#body",
	render(create) {
		return create(Body)
	}
})

new Vue({
	el: "#header",
	render(create) {
		return create(Hearder)
	}
})