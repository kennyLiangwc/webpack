/*
* @Author: KennyLiangwc
* @Date:   2018-03-27 15:02:28
* @Last Modified time: 2018-03-28 11:16:48
*/
// console.log(6666666)
import Vue from 'vue'
// console.log('Vue',Vue);
import Hearder from './component/header.vue'
import Body from './component/body'
import css from '../css/style.css'


new Vue({
	el: "#header",
	render(create) {
		return create(Hearder)
	}
})
new Vue({
	el: "#body",
	render(create) {
		return create(Body)
	}
})