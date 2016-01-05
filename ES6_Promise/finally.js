/**
 * finally()方法用于指定不管Promise对象最后状态如何。都会执行的操作。它与done方法最大的区别
 * 它接受一个普通的回调函数作为参数，该函数不管怎么样都必须执行。
 */

server.listen(0).then(function(){
	///
}).finally(server.stop); //不管怎么样这里finally都会被执行


/**
 * [finally description]
 * @param  {Function} callback [description]
 * @return {[type]}            [description]
 */
Promise.prototype.finally = function(callback){
	let P = this.constructor;
	return this.then(
		value => P.resolve(callback()).then(()=>value),
		reason=> P.resolve(callback()).then(()=>{throw reason})
	);
};