/*
* @Author: folgerfan
* @Date:   2018-03-29 14:29:38
* @Last Modified by:   folgerfan
* @Last Modified time: 2018-03-29 14:56:43
*/
let win = window;
let getHash = function(url) {
	url = url || win.location.href;
	let match = url.match(/\//);
	return match ? match [0] : ''
}
export default getHash