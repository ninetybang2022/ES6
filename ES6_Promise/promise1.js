/**
 * ES6中的promise
 * Promise对象有以下两个特点
 * 1、对象的状态不受外界影响，promise对象代表一个异步操作，有三种状态 pending  进行中
 *    Resolved已完成 又称Fulfilled 和 Rejected已失败
 * 2、一旦状态改变，就不会再变，任何时候都可以得到这个结果，Promise对象的状态改变，只有两种可能， 从pending到Resolved和pending到
 * 	  Rejected只要这两种情况发生。
 * 	  如果这两种情况只要发生一种那么，就不会再改变。这就算改变已经发生了，你再对Promise对象添加回调函数，也会立即得到这个结果。
 * 	  与Event不同，事件的特点是，如果你错过了它，再去监听，是得不到结果。
 */

/**
 * 基本用法
 */
/**
 * Promise构造函数接受一个函数作为参数，该函数的两个参数分别为resolve和reject。它们是两个函数。由js引擎提供不用部署
 * 1、resolve函数的作用是，将promise对象的状态从 未完成 变为 成功  即从 pending变为resolve  在异步操作成功调用，并将异步操作的结果
 * 	  作为参数传递出去;
 * 2、reject函数的作用是，将Promise对象的状态从 未完成 变为 失败 即从pending变为reject。在异步操作失败时调用，并将异步操作报出的错误
 * 	  作为参数传递出去
 *
 * Promise实例生成以后，可以用then方法 分别指定Resolved状态和Reject状态的回调函数
 * promise.then(function(value){
 * 	//执行成功
 * },function(value){
 * 	//执行失败
 * })
 *
 * then方法 可以接受两个回调函数，第一个回调函数是Promise对象的状态变为Resolved时调用，第二个回调函数是Promise对象的状态变为Reject
 * 时调用，其中第二个函数是可选，不一定提供，这两个函数都接受promise对象付出的值作为参数。
 * 
 */
// var fs = require('fs');
// var promise = new Promise(function(resolve,reject){
// })
var fs = require('fs')
// function timeout(ms)
// {
// 	return new Promise((resolve,reject)=>
// 	{
// 		setTimeout(resolve,ms,'done');
// 	});
// }

// timeout(100).then((value)=>{
// 	console.log(value);
// })
function readFiles(path)
{
	return new Promise((resolve,reject)=>
	{
		fs.readFile(path,(err,value)=>{
			if(err)
			{
				reject(err);
			}
			resolve(value);
		});
	});
}
readFiles('./1.adftxt').then((value)=>{
	console.log(value.toString('utf-8'));
},(err)=>{
	console.log(err);
})
/**
 * 上面的代码使用了fs.readFile读取一个文件 再使用了promise进行了返回
 * 那么这样外部就可以使用then来将他使用异步操作
 */

/**
 * 上面的代码解释：
 * timeout返回一个Promise实例，表示一段时间后才会发生的结果，过了指定的时间 
 * Promise实例的状态变为Resolved就会触发then方法绑定的回调 
 */
