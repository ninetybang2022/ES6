/**
 * Promise.race方法同样是将多个promise实例，包装为一个Promise实例
 * var p = Promise.race([p1,p2]);
 * 上面的代码中，只要p1 p2之吸一个实例 率先改变状态，p的状态就跟着改变。
 * 那么率先改变的promise实例的返回值，就传递给p的回调函数。
 * 
 */
/**
 * Promise.race方法的参数与Promise.all方法一样。如果不是promise的实例，就会先调用promise.resolve方法，将参数传为promise实例
 * 再进一步处理
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

var promises = ['./1.txt','./bb2.txt'].map((filename)=>{
	return readFile(filename);
});

Promise.race(promises).then((val)=>{
	console.log(val);
}).catch((err)=>{
	console.log(err);
});

/**
 * 上面的代码中，只要有一个状态为resolve那么就不会继续向后面走直接返回这个结果给then()中接收
 * 如果有错误那么catch会接收  他的结果是一个不是all一样多个
 */