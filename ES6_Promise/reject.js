/**
 * Promise.reject()
 * Promise.reject(reason) 方法也会返回一个新的Promise实例，该实例 的状态 为reject
 * promise.reject方法的参数reason会被  传递给实例 的回调函数
 */
var p = Promise.reject('出错啦');
p.then(null,function(s){
	console.log(s);
})
//这里会输出出错啦  他也是返回一个promise对象