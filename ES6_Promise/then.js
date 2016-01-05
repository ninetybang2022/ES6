/**
 * Promise.prototype.then()
 * 这个方法是定义在原型对象上，Promise.prototype上的，它的作用是Promise实例 添加状态改变时的回调函数。
 * 前面说过，then方法 第一个参数是Resolve状态回调函数，第二个参数是Reject状态的回调函数
 * then()方法 返回是一个新的Promise实例，不是原来那个promise实例。因此可以采用链式写法，即then方法后再调用另一个then方法
 * 在第一个then()中return之后那么第二个then()可以接到上一个then()返回的内容
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

readFile('./1.txt').then( val =>{
	return val;
}).then( value =>{
	console.log(value);
},err => {
	console.log(err);
});
