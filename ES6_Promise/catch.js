/**
 * Promise.prototype.catch()
 * 方法是.then(null,rejection)的别名。用于指定发生错误的回调函数。
 */
var fs = require('fs');
var readFile = (path) => 
{
	return new Promise((resolve,reject)=>{
		fs.readFile(path,(err,val)=>
		{
			if(err)
			{
				reject(err);
			}
			resolve(val);
		});	
	});
}

// readFile('./asdf.txt').then( value=>{
// 	console.log(value);
// }).catch(err=>{
// 	console.log(err);
// });

/**
 * 上面的代码中，readFile返回一个promise对象，如果该对象变为resolved则调用then  如果异步操作失败
 * 状态会变为reject会调用catch方法 指定的回调函数处理这个错误
 */
var promise = new Promise((resolve,reject)=>{
	throw new Error('这是一个错误');
});
promise.catch((error)=>{
	console.log(error);
})

/**
 * catch可以直接接收到throw new Error 抛出的错误 上面是手动throw new Error
 */

var promise = new Promise((resolve,reject)=>{
	resolve('ok');
	throw new Error('这是一个错误');
});
promise.then(val=>{
	console.log(val);
}).catch((error)=>{
	console.log(error);
})

/**
 * 上面如果已经是resolve了那么下面的throw new Error将不会触发
 */


var promise = new Promise((resolve,reject)=>{
	resolve('ok');
	throw new Error('这是一个错误');
});
promise.then(val=>{
	val += '123123123';
	return val;
}).then(val=>{
	console.log(val);

}).catch((error)=>{
	console.log(error);
})


/**
 * 一般来说，不要在then()定义第二个回调函数，最好使用catch()方法 来接收错误
 * 因为catch是有冒泡的性质  会一直向后传递，直到捕获错误为止 。
 * 也就是说不要这么操作
 * then(function(){},function(){})
 * 而是这么操作
 * then(function(){}).catch(function(){});
 */