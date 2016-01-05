/**
 * 注意：如果在promise没有使用catch捕获异步
 * 那么没有任何输出。
 * 
 */


var promise = new Promise((resolve,reject)=>{
	resolve('ok');
	setTimeout(function() { throw new Error('test') }, 0)
});

promise.then((value)=>{
	console.log(value);
});

process.on('unhandleRejection',(err,p)=>{
	
})
/**
 * 上面的代码中，Prommise指定在下一轮 事件循环 再抛出错误，结果由于没有指定使用try catch
 * 语句，就冒泡到最外层，因为此时，Promise的函数体已经运行结束，所以这个错误是在Promise函数体外抛出
 * 但是node.js有一个unhandledRejection事件 ，专门监听没有被捕获的reject
 *
 * 注意：promise 中的 catch() 也是返回promise对象，所以还可以在catch()再次链式调用 then()方法
 */
