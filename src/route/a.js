/*
* @Author: folgerfan
* @Date:   2018-03-29 11:20:12
* @Last Modified by:   folgerfan
* @Last Modified time: 2018-03-29 14:15:14
*/
// import Vue from 'vue'
import A from '../component/a.vue'
module.exports = function() {
	new Vue({
        el:'#content',
        template:'<A/>',
        components:{
            A
        }
    })	
}
