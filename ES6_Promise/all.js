/**
 * promise.all方法 用于将多个promise实例，包装成一个promise实例
 */
// var p1 = new Promise((resolve,reject)=>{

// })
// var Promise.all([p1,p2,p3]);
/**
 * 上面的代码中，Promise.all方法接受一个数组作为参数，p1,p2,p3都是promise对象的实例，如果不是，就会先调用promise.resolve方法，
 * 将参数转为promise实例，再进一步处理，promise.all方法 的参数可以不是数组，但是必须具有Iterator接口
 * 且返回的每个成员都是promise实例
 * p的状态由p1 p2 p3决定，分为两种情况
 *
 * 1、只有p1 p2 p3的状态都变成fufilled p的状态才会变成fulfilled，此时p1 p2 p3
 * 		的返回值组成一个数组，传递给p的回调函数
 * 
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

var promises = ['./1.txt','./2.txt'].map((filename)=>{
	return readFile(filename);
});
console.log(promises);

Promise.all(promises).then((texts)=>{
	console.log(texts);
}).catch((errors)=>{
	console.log(errors);
})

/**
 * 上面的代码中，2个promise实例数组，只有这两个promise实例的状态都成为fulfilled或者其中一个变为reject,
 * 才会调用promise.all方法 后面的回调函数  
 * 注意：只有当promises这个数组中操作的两个文件都返回上他们要返回的数据，那么才会调用Promise.all这方法 
 * 只要有一个有异常那么就会调用catch这个函数
 */