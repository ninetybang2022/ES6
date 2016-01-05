/**
 * done方法 promise对象的回调链。不管以then方法或catch方法结尾，要是最后一个方法抛出
 * 错误，都有可能无法捕捉到，因为promise内部的错误不会冒泡到全局，因此可以使用done方法
 * 总是处于回调链的最后
 */
var fs = require('fs');
var readFile = (filename) => 
{
	return new Promise((resolve,reject)=>{
		fs.readFile(filename,(err,val)=>{
			if(err)
			{
				reject(err);
			}
			resolve(val);
		});
	});
}
/**
 * 将这个函数添加到Promise原型链上这样，在操作promise的最后
 * 都添加上这个那么就不会遗漏可能出现的错误和异常
 * @param  {[type]}   onFulfilled [description]
 * @param  {[type]}   onRejected  [description]
 * @return {Function}             [description]
 */
Promise.prototype.done = function(onFulfilled,onRejected){
	this.then(onFulfilled,onRejected)
	.catch(function(reason){
		setTimeout(function(){
			throw reason;	
		},0);
	})
}

readFile('./1a.txt')
	.then( val => {
		val += 100000;
		return val;
	}).then(val => {
		console.log(val);
	}).done();