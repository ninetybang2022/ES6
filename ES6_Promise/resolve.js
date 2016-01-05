/**
 * Promise.resolve方法
 * 有时候要将一个现有对象promise对象转为promise对象
 * var jsPromise = Promise.resolve($.ajax());
 * 上面的代码将jquery生成的deferred对象，转为一个新的Promise对象
 */

// Promise.resolve('foo');
//相当于
// new Promise(resolve=>resolve('foo'));
// 
/**
 * 如果promise.resolve方法的参数，不是具有then方法的对象，又称thenable对象 则返回一个新的promise对象
 * 且它的状态为resolve
 */
var p = Promise.resolve('hello');

p.then((s)=>{
	console.log(s);
})

/**
 * 上面代码生成一个Promise对象实例p  由于字符串Hello不属于异步操作  判断方法是它不是具有then方法的对象
 * 返回promise实例的状态从一生成就是resolve，所以回调函数会立即执行，promise.resolve方法的参数，会同时传给
 * 回调函数
 * promise.resolve方法允许调用时不带参数，这样可以方便的得到一个promise对象 
 */